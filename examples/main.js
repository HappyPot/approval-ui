import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import approval from './../packages/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import "./registerServiceWorker";

// 导入组件库
// 注册组件库
Vue.use(iView);
Vue.use(approval)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");