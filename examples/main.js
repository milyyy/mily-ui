import Vue from "vue"
import router from "./router"
import store from "./store"
import App from "./App.vue"

// 全局引入
import milyUI from "./../packages"
Vue.use(milyUI)

// 按需引入
// import {Test} from "./../packages/test"
// import {Alert} from "./../packages/alert"
// Vue.use(Test)
// Vue.use(Alert)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')