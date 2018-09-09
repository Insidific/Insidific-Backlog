<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/Insidific_logo.png">
    <Backlog items="[{ message: 'Foo' },{ message: 'Bar' }]"/>
  </div>
</template>

<script>
import Backlog from "./components/Backlog.vue";

export default {
  name: "app",
  components: {
    Backlog
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
