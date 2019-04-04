import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "@/assets/styles/border.css";
import "@/assets/styles/reset.css";
import "@/assets/styles/iconfont.css";
import "@/assets/js/flexible.js";

Vue.config.productionTip = false;
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
