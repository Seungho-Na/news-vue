<template>
  <div>
    <ul class="news-list">
      <li
        v-for="item in listItems.items"
        class="news-contents"
      >
        <p class="news-title">
          <a :href="item.originallink">
            {{ item.title }}
          </a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: [
        { originallink: "/", title: "1" },
        { originallink: "/", title: "1" },
        { originallink: "/", title: "1" },
      ],
    };
  },
  created() {
    const name = this.$route.name;
    console.log(name);
    if (name === "frontend") {
      this.$store.dispatch("FETCH_FRONTEND");
    } else if (name === "kbo") {
      this.$store.dispatch("FETCH_KBO");
    } else if (name === "nba") {
      this.$store.dispatch("FETCH_NBA");
    } else if (name === "lol") {
      this.$store.dispatch("FETCH_LoL");
    } else if (name === "coin") {
      this.$store.dispatch("FETCH_COIN");
    }
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === "frontend") {
        return this.$store.state.frontend;
      } else if (name === "kbo") {
        return this.$store.state.kbo;
      } else if (name === "nba") {
        return this.$store.state.nba;
      } else if (name === "lol") {
        return this.$store.state.lol;
      } else if (name === "coin") {
        return this.$store.state.coin;
      }
    },
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.news-contents {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  list-style: none;
}
.news-title {
  margin: 0;
  font-size: 1.7rem;
}
.link-text {
  color: #828282;
}
</style>
