// 全局安装
import Test from "../packages/test";
import Alert from "../packages/alert";

const components = [ 
  Test,
  Alert
];

const install  = function (Vue) {
  // 如果安装则无需重复安装
  // if (install.installed) return
  // 遍历，以组件内定义的name属性值注册组件
  components.map(component => Vue.component(component.name, component))
  // components.map(component => Vue.use(component)) 
  // install.installed = true
} 

// 检测到 Vue 才执行
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/**
 * 全局安装使用default
 * 按需加载则不要default
 * 
*/
export {
  install,
  Test,
  Alert
}