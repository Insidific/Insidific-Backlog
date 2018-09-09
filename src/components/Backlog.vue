<template>
<div class="backlog">
  <div v-for="(game, gameKey) in backLog" :key="gameKey">
    <BacklogItem :game="game" />
  </div>
</div>
</template>

<script>
import BacklogItem from "./BacklogItem.vue";
export default {
  name: "Backlog",
  components: {
    BacklogItem
  },
  props: ['backLog']
};
</script>

<style scoped lang="scss">
.backlog {
  padding-left: 25px;
  padding-right: 25px;
}
</style>
