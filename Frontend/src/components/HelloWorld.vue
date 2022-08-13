<template>
  <div class="hello">
    <h1></h1>
    <button @click="showExperience()">Rechercher</button>
    <input
      type="text"
      id="entreprise"
      placeholder="entreprise"
      v-model="entrprise"
    />
    <div v-if="experience">
      <p>{{ experience }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      joke: "",
      entreprise: "",
    };
  },
  methods: {
    async showExperience() {
      axios
        .get("http://localhost:3000/randomexperience", {
          params: {
            companyName: entreprise.value,
          },
        })
        .then((resp) => {
          console.log(resp.data);
        })
        .catch(() => console.log("test"));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
