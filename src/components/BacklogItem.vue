<template>
<div>
      <md-card>
        <md-card-header>
          <div class="md-title">{{game.name}}</div>
        </md-card-header>

        <md-card-content>
          {{game.description}}
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
