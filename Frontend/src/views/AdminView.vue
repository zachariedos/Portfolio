<template>
  <div class="sidebar">
    <div class="sidebarcontent">
      <div>
        <a @click="currentPage = 'Experiences'" href="#">Experiences</a>
      </div>
      <div><a @click="currentPage = 'Portfolio'" href="#">Portfolio</a></div>
    </div>
  </div>

  <div class="body-text">
    <Experiences v-if="currentPage == 'Experiences'"></Experiences>
    <Portfolio v-if="currentPage == 'Portfolio'"></Portfolio>
  </div>
</template>
<script>
import Experiences from "@/components/Admin/experiences.vue";
import Portfolio from "@/components/Admin/portfolio.vue";

export default {
  name: "AdminView",
  components: {
    Experiences,
    Portfolio,
  },
  data: function () {
    return {
      currentPage: "Experiences",
    };
  },
};
</script>
<style scooped>
.sidebar {
  width: 150px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.334);
  box-shadow: 5px 0px 15px 5px rgba(0, 0, 0, 0.25);
}

.sidebar div {
  padding-top: 20px;
  font-size: 24px;
  display: block;
}

.body-text {
  margin-left: 150px;
  font-size: 18px;
}

/* The navigation menu links */
.sidebar a {
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
