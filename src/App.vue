<template>
  <div id="app">
    <a href="https://insidific.com"><img class="logo" alt="Vue logo" src="./assets/Insidific_logo.jpg"></a>
    <Backlog :backLog="backLogJson"/>
    <Footer />
  </div>
</template>

<script>
import Backlog from "./components/Backlog.vue";
import Footer from "./components/Footer.vue";
import json from "./assets/games.json";
export default {
  name: "app",
  components: {
    Backlog,
    Footer
  },
  data(){
    return{
        backLogJson: json
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1200px;
  margin: auto;
  .logo {
    padding: 50px;
    width: 250px;
  }  
}


</style>
