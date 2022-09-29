import Vue from "vue";
import App from "./App";
import { router } from "./routes/index.js";
import { store } from "./store/index.js"


new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
