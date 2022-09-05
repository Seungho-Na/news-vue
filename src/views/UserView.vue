<template>
  <user-profile :info="userInfo">
    <div slot="username">{{ userInfo.id }}</div>
    <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
    <span slot="karma">{{ userInfo.karma }}</span>
  </user-profile>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    // payload, 뒤에 인자는 객체로 넘어감 여러개인 경우 객체로 넣어서 ㄱ
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>
