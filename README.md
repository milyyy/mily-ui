## mily-ui
![avatar](https://github.com/milyyy/mily-ui/master/public/favicon.png)
### 安装(Install)
npm install mily-ui -S

### 速览(Quick Start)
```js
import Vue from 'vue'

// 全局引入(global use)
import MilyUI from 'mily-ui'
import 'mily-ui/lib/mily-ui.css'

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
- [x] button
- [ ] input
- [ ] loading
- [ ] message
- [ ] table
- [ ] time-picker
- [ ] infinite-scroll   

### 补充


