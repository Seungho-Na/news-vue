import axios from "axios";

function fetchDailyPress() {
  // return axios.get("/api/search", { params });
}
function fetchFrontEndNews() {
  return axios.get("/api/search/frontend");
}
function fetchKBONews() {
  return axios.get("/api/search/kbo");
}
function fetchNBANews() {
  return axios.get("/api/search/nba");
}
function fetchLoLNews() {
  return axios.get("/api/search/lol");
}
function fetchCoinNews() {
  return axios.get("/api/search/coin");
}

export {
  fetchDailyPress,
  fetchFrontEndNews,
  fetchKBONews,
  fetchNBANews,
  fetchLoLNews,
  fetchCoinNews,
};
