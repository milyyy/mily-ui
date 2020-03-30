## mily-ui

### 安装(Install)
npm install mily-ui -S

### 速览(Quick Start)
```js
import Vue from 'vue'

// 全局引入(global use)
import MilyUI from 'mily-ui'
Vue.use(MilyUI);

// 局部引入(part use)
import {
  Select,
  Button
  // ...
} from 'mily-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```   


### 未完成/Todo

- [ ] alert
- [ ] button
- [ ] input
- [ ] loading
- [ ] message
- [ ] table
- [ ] time-picker
- [ ] infinite-scroll   

### 补充


### 参考资料/reference
element:  https://github.com/ElemeFE/element  
vue-cli构建: https://cli.vuejs.org/zh/guide/cli-service.html#vue-cli-service-build  
webpack打包： https://webpack.js.org/configuration/externals/  
eslint自动修复: https://dev.to/sophiabrandt/format-and-fix-all-files-with-prettier-and-eslint-recursively-1gld  
JSX相关: https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag  
 

