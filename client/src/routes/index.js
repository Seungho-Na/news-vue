import Vue from "vue";
import VueRouter from "vue-router";
import FrontEndNews from "@/views/FrontEndNews";
import KBONews from "@/views/KBONews";
import NBANews from "@/views/NBANews";
import LoLNews from "@/views/LoLNews";
import CoinNews from "@/views/CoinNews";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/frontend" },
    {
      path: "/frontend",
      name: "frontend",
      component: FrontEndNews,
    },
    { path: "/kbo", name: "kbo", component: KBONews },
    { path: "/nba", name: "nba", component: NBANews },
    { path: "/lol", name: "lol", component: LoLNews },
    { path: "/coin", name: "coin", component: CoinNews },
    // { path: "/user/:id", component: UserView },
    // { path: "/item/:id", component: ItemView },
  ],
});
