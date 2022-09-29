import {
  fetchFrontEndNews,
  fetchKBONews,
  fetchNBANews,
  fetchLoLNews,
  fetchCoinNews,
} from "../api/index.js";

export default {
  FETCH_FRONTEND({ commit }) {
    fetchFrontEndNews()
      .then(({ data }) => {
        commit("SET_FRONTEND", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_KBO({ commit }) {
    fetchKBONews()
      .then(({ data }) => {
        commit("SET_KBO", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_NBA({ commit }) {
    fetchNBANews()
      .then(({ data }) => {
        commit("SET_NBA", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_LoL({ commit }) {
    fetchLoLNews()
      .then(({ data }) => {
        commit("SET_LoL", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_COIN({ commit }) {
    fetchCoinNews()
      .then(({ data }) => {
        commit("SET_COIN", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
