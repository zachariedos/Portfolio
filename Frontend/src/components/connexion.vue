<template>
  <div id="title">
    <h1>Connexion</h1>
  </div>
  <form @submit.prevent="myLoginFunction">
    <input type="text" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>
<script>
import axios from "axios";
import App from "@/App.vue";
export default {
  name: "Connexion",
  props: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    App,
  },
  methods: {
    myLoginFunction() {
      this.$router.push({ path: "/", params: "test" });
      // App.data().$set(App.navKey, 2);
      // console.log(App.data().navKey);
      // await axios
      //   .post("http://localhost:3000/auth/login", {
      //     email: this.email,
      //     password: this.password,
      //   })
      //   .then(function (response) {
      //     axios.defaults.headers.common[
      //       "Authorization"
      //     ] = `Bearer ${response.data.token}`;
      //   })
      //   .catch(function () {
      //     console.log("Mot de passe ou Email incorrect");
      //   });
      // if (axios.defaults.headers.common["Authorization"]) {
      //   this.$router.push("/");
      // }
    },
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
}
body {
  position: relative;
}
</style>
