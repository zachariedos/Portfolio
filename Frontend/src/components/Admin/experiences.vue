<template>
  <div class="bodypage">
    <h1>Experiences</h1>
    <div id="experiences">
      <div
        v-for="(experience, index) in experiences"
        class="card"
        v-bind:id="`experience${index}`"
      >
        <div class="container">
          {{ experience.companyName }}<br />
          {{ experience.description }}<br />
          {{ experience.fromto }}<br />
        </div>
        <div class="btn">
          <img class="moove" @click="goUp($event)" src="../../img/top.png" />
          <img
            class="moove"
            @click="goDown($event)"
            src="../../img/bottom.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scooped></style>
<script>
import axios from "axios";
export default {
  name: "Experiences",
  props: {
    msg: String,
  },
  data() {
    return {
      experiences: "",
      clickedExperience: "",
    };
  },
  methods: {
    async showExperiences() {
      axios
        .get("http://localhost:3000/")
        .then((resp) => {
          if (resp.data) {
            this.experiences = resp.data;
            console.log(this.experiences);
          }
          console.log("ok");
        })
        .catch(() => {
          console.log("erreur serveur");
        });
    },
    goUp(event) {
      this.clickedExperience = event.target.parentNode.parentNode.id.replace(
        "experience",
        ""
      );
      const currentelem = document.getElementById(
        `experience${this.clickedExperience}`
      );
      const beforeelem = document.getElementById(
        `experience${this.clickedExperience - 1}`
      );
      if (beforeelem != null) {
        currentelem.after(beforeelem);
        const transfereid = [currentelem.id, beforeelem.id];
        currentelem.id = transfereid[1];
        beforeelem.id = transfereid[0];
      }
    },
    goDown(event) {
      this.clickedExperience = event.target.parentNode.parentNode.id.replace(
        "experience",
        ""
      );
      const currentelem = document.getElementById(
        `experience${this.clickedExperience}`
      );
      const afterelem = document.getElementById(
        `experience${parseFloat(this.clickedExperience) + 1}`
      );
      if (afterelem != null) {
        currentelem.before(afterelem);
        const transfereid = [currentelem.id, afterelem.id];
        currentelem.id = transfereid[1];
        afterelem.id = transfereid[0];
      }
    },
  },
  mounted() {
    this.showExperiences();
  },
};
</script>
<style>
img.moove {
  width: 40px;
  filter: grayscale(1) invert(1);
}
img.moove:hover {
  cursor: pointer;
}
div.bodypage {
  padding: 20px;
}
.card {
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 20px;
  width: 33%;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.473);
}

/* Add some padding inside the card container */
.container {
  flex: 80%;
  padding: 2px 16px;
}
.experiences {
  justify-content: center;
}
</style>
