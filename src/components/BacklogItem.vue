<template>
  <div class="backlog-item">
    <md-card :class="game.completion">
      <md-card-media>
        <img :src="game.image" alt="Cover">
      </md-card-media>

      <md-card-content>
        <h1>{{game.name}}</h1>
        <h3>{{game.developer}}</h3>
        <p>{{game.description}}</p>
        <md-button class="md-raised" v-if="game.completion === 'complete'"><a href="http://youtube.com/insidific">Watch</a></md-button>
      </md-card-content>     
    </md-card>
  </div>
</template>

<script>
import json from '../assets/games.json'
export default {
  name: "BacklogItem",
  props: ['game']
};
</script>

<style scoped lang="scss">
.backlog-item {
  padding-top: 10px;
  padding-bottom: 10px;
  .md-card {
    overflow: auto;
    color: #ffffff;
    .md-card-media {
      float: left;
      width: 20%;
      padding: 10px;
      height: 100%;
    }
    .md-card-content {
      float: right;
      text-align: left;
      width: 80%;
    }
    .md-button {
      float: right;
      background-color: #ffffff;
    }
  }
  .incomplete {
    background-color: #EA9999;
  }
  .complete {
    background-color: #B6D7A8;
  }
}
</style>
