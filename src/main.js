// 全局安装
import Test from "../packages/test";
import Alert from "../packages/alert";

const components = [ 
  Test,
  Alert
];

const install  = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历安装每一个
  components.map(component => Vue.component(component.name, component))
  install.installed = true
  // 或 components.map(component => Vue.use(component)) 
} 

// 检测到 Vue 才执行
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}