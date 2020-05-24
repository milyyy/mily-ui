import mTest from './src/mTest';

mTest.install = Vue => {
  Vue.component(mTest.name, mTest)
}

export default mTest