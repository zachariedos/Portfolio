<template>
  <h1></h1>
  <div id="title">
    <img src="../img/profile.jpg" alt="Profile picture" class="profile" />
    <h1>Expérience</h1>
    <h1 class="colored">professionnelle</h1>
    <div class="scroll">scroll</div>
  </div>
  <div id="content">
    <div v-for="experience in experiences" class="step">
      <h2>{{ experience.companyName }}</h2>
      <h3>{{ experience.fromto }}</h3>
      <p>
        {{ experience.description }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createNoise2D } from "simplex-noise";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      experiences: "",
      experiencesnb: "",
    };
  },
  methods: {
    async showExperiences() {
      console.log("async showExperiences: ");
      axios
        .get("http://localhost:3000/")
        .then((resp) => {
          if (resp.data) {
            this.experiences = resp.data;
            this.experiencesnb = Object.keys(this.experiences).length;
            setTimeout(() => {
              this.showmustGoOn();
            }, 0.001);
          }
        })
        .catch(() => console.log("erreur serveur"));
    },
    showmustGoOn() {
      const content = document.querySelector("#content");
      console.log(this.experiencesnb);
      const nbexperiences = this.experiencesnb;
      gsap.registerPlugin(ScrollTrigger);

      const noise2D = createNoise2D();

      // Create circles, step circles and lines
      for (let i = 0; i < (nbexperiences + 1) * 250; i++) {
        // Define it's a step every 250 circles (500px)
        const step = i % 250 === 0 && i !== 0;
        const div = document.createElement("div");

        if (step) {
          div.classList.add("step-circle");
        } else {
          div.classList.add("circle");
        }

        // Create noise coefficients
        const c1 = noise2D(i * 0.003, i * 0.0033);
        const c2 = noise2D(i * 0.002, i * 0.001);

        const style = !step
          ? {
              transform: `translate(${c2 * 50}px) rotate(${
                c2 * 300
              }deg) scale(${3 + c1 * 3}, ${3 + c2 * 2})`,
              boxShadow: `0 0 0 .5px hsla(${Math.floor(
                i * 0.3
              )}, 70%, 70%, .1)`,
            }
          : {
              transform: `translate(${c2 * 50}px)`,
              border: `solid 5px hsla(${Math.floor(i * 0.3)}, 70%, 70%, 1)`,
            };
        Object.assign(div.style, style);
        content.appendChild(div);

        if (step) {
          const div = document.createElement("div");
          div.classList.add("line");
          const style = {
            background: `linear-gradient(90deg, hsla(${Math.floor(
              i * 0.3
            )}, 70%, 70%, 1) 0%, rgb(35, 39, 46) 100%)`,
          };
          Object.assign(div.style, style);
          content.appendChild(div);
        }
      }

      // Create circles animations
      const Circles = document.querySelectorAll(".circle");
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          start: "top top",
          end: "bottom center",
        },
      });
      Circles.forEach((c) => {
        tl.from(c, {
          opacity: 0,
        });
      });

      // Create Step circles animations
      const StepCircles = document.querySelectorAll(".step-circle");
      StepCircles.forEach((step_circle) => {
        gsap.from(step_circle, {
          scrollTrigger: {
            trigger: step_circle,
            start: "top center",
            toggleActions: "restart none none reverse",
          },
          scale: 0,
          ease: "back",
        });
      });

      // Create Line animations
      const Lines = document.querySelectorAll(".line");
      Lines.forEach((line) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: "top center",
            toggleActions: "restart none none reverse",
          },
          width: 0,
        });
      });

      // Create Steps animations
      const Steps = document.querySelectorAll(".step");
      Steps.forEach((step) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top center",
            toggleActions: "restart none none reverse",
          },
          opacity: 0,
        });
      });
    },
  },
  mounted() {
    this.showExperiences();
  },
};

//------------------------------------------------------------------------------------------------
</script>

<style scooped>
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(26, 29, 35);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
* {
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.633);
}
body {
  position: relative;
}

p {
  font-size: 14px;
  margin: 10px 0;
}

#content {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 50px;
  line-height: 1em;
}

h2 {
  letter-spacing: -1px;
}

h3 {
  opacity: 0.65;
  font-weight: 500;
}
body {
  background: rgb(35, 39, 46);
  color: white;
}

.profile {
  clip-path: circle(40%);
  height: 50%;
  margin-bottom: 10px;
}

.colored {
  background: rgb(255, 0, 0);
  background: linear-gradient(
    60deg,
    hsla(0, 70%, 70%, 1) 0%,
    hsla(60, 70%, 70%, 1) 20%,
    hsla(120, 70%, 70%, 1) 40%,
    hsla(180, 70%, 70%, 1) 60%,
    hsla(240, 70%, 70%, 1) 80%,
    hsla(300, 70%, 70%, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.circle,
.step-circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: -13px 0 0 50px;
}

.step-circle {
  background-color: rgb(35, 39, 46);
  position: relative;
  z-index: 10;
  margin-top: -25px;
}

.line {
  width: 100%;
  height: 2px;
  margin: -2px;
  transform: translateY(-12px);
}

.step {
  width: calc(100% - 160px);
  left: 140px;
  position: absolute;
  padding-top: 10px;
  text-align: left;
}

.step:nth-child(1) {
  top: 500px;
}
.step:nth-child(2) {
  top: 1000px;
}
.step:nth-child(3) {
  top: 1500px;
}
.step:nth-child(4) {
  top: 2000px;
}
.step:nth-child(5) {
  top: 2500px;
}

#title {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.scroll {
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 50px;
  letter-spacing: 2px;
  position: relative;
}

.scroll:after {
  content: "";
  position: absolute;
  width: 2px;
  height: 50px;
  background: white;
  border-radius: 4px;
  left: 50%;
  top: calc(100% + 10px);
}
</style>