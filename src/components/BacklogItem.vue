<template>
<div class="backlog-item">
      <md-card>
        <md-card-media>
          <img :src="game.image" alt="Cover">
        </md-card-media>

        <md-card-content>
          <h1>{{game.name}}</h1>
          <p>{{game.description}}</p>
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.backlog-item {
  padding-top: 10px;
  padding-bottom: 10px;
  .md-card {
    overflow: auto;
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
    .md-card-actions {
      float: right;
    }
  }
}
</style>
