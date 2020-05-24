import Vue from "vue"
import router from "./router"
import store from "./store"
import App from "./App.vue"

import milyUI from "./../packages"

Vue.use(milyUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')