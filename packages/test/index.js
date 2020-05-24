import mTest from './src/test';

mTest.install = Vue => {
  Vue.component(mTest.name, mTest)
}

export default mTest