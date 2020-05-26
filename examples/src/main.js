import Vue from "vue"
import App from "./App.vue"

// 全局引入
// import milyUI from "../../src/main"
// Vue.use(milyUI)

// 按需引入
import { Test,Alert }  from "../../src/main"
Vue.use(Test)
Vue.use(Alert)
console.log('com:',Test);



Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')