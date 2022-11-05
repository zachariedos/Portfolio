<template>
  <nav @eventname="updateparent()">
    <p>{{ this.navKey }}</p>
    <router-link to="/">Expérience</router-link> |
    <router-link to="/portfolio">Portfolio</router-link> |
    <router-link v-if="this.toCheck" to="/admin">Administration</router-link> |
    <router-link v-if="!this.toCheck" to="/connexion">Connexion</router-link>
  </nav>
  <button @click="console.log(this.$route.params)">dad</button>
  <router-view />
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      navKey: 0,
    };
  },
  methods: {
    updateparent() {
      console.log("ça marche putain");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, 0.633);
}
body {
  background: rgb(35, 39, 46);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
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
