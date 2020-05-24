import MTest from './src/test';

MTest.install = function(Vue) {
  Vue.component(MTest.name, MTest)
}

export default MTest;