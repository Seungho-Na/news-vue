<template>
  <div class="header">
    <router-link to="/frontend">Front end</router-link> &nbsp;|&nbsp;
    <router-link to="/kbo">KBO</router-link> &nbsp;|&nbsp;
    <router-link to="/nba">NBA</router-link> &nbsp;|&nbsp;
    <router-link to="/lol">LoL</router-link> &nbsp;|&nbsp;
    <router-link to="/coin">Coin</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: #35295e;
}
.header a {
  color: white;
}
</style>
