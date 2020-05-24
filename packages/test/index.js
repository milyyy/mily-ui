import test from './src/test';

test.install = Vue => {
  Vue.component(test.name, test)
}

export default test