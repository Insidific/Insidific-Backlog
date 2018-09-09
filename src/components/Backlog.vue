<template>
<div class="backlog">
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
.backlog {
  padding-left: 25px;
  padding-right: 25px;
}
</style>
