// 全局安装
import mTest from "./test";
import mAlert from "./alert";

const components = [ 
  mTest,
  mAlert
];

const install  = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  install.installed = true
  // 遍历安装每一个
  components.map(component => Vue.component(component.name, component))
  // 或 components.map(component => Vue.use(component)) 
} 

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ...components
}