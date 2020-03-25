import MButton from './src/main';

MButton.install = function(Vue) {
  Vue.component(MButton.name, MButton);
};

export default MButton