import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    frontend: [],
    kbo: [],
    nba: [],
    lol: [],
    coin: [],
  },
  // getters: {
  //   fetchedAsk(state) {
  //     return state.ask;
  //   },
  //   fetchedItem(state) {
  //     return state.item;
  //   },
  // },
  mutations,
  // 비동기처리는 actions에서
  actions,
});
