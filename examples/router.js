import Vue from "vue";
import Router from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import( /* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});