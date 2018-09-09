<template>
<div>
  <div v-for="data in myJson">
    <div v-for="game in data">
      <BacklogItem :game="game" />
    </div>
  </div>
</div>
</template>

<script>
import BacklogItem from "./BacklogItem.vue";
import json from '../assets/games.json'
export default {
  name: "Backlog",
  components: {
    BacklogItem
  },
  data(){
      return{
          myJson: json
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
