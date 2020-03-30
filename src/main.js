import Button from '../packages/button/index';
// import "../packages/theme-chalk/src/styles/index";
const components = [
  Button
];

const install = function (Vue, opts = {}) {
  console.log('vue', Vue);

  // 组件注册 install components
  components.forEach(component => {
    console.log(component);

    Vue.component(component.name, component);
  });

  // 定义尺寸 define size
  Vue.prototype.$mliy = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }

  // 全局使用的组件 global components
  // Vue.prototype.$loading = Loading.service;

};

// 如果传了window,则给window添加Vue
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 局部引用
export default {
  version: '1.0.0',
  install,
  Button
}
