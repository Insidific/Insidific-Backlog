<template>
    <footer>
      <a href="http://twitch.tv/insidific"><i class="fab fa-twitch"></i></a>
      <a href="http://twitter.com/insidific"><i class="fab fa-twitter"></i></a>
      <a href="http://youtube.com/insidific"><i class="fab fa-youtube"></i></a>
      <a href="http://linkedin.com/in/insidific"><i class="fab fa-linkedin"></i></a>
      <a href="http://github.com/insidific"><i class="fab fa-github"></i></a>
      <a href="http://facebook.com/insidific"><i class="fab fa-facebook-f"></i></a>
      <a href="http://instagram.com/insidific"><i class="fab fa-instagram"></i></a>
    </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
footer {
    padding: 10px;
    text-align: center;
    a {
        color: inherit;
        i {
        padding: 15px;
        font-size: 30px;
        }
    }
}
</style>
