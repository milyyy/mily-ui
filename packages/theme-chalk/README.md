## mily-theme-chalk

Chinese:  
便于按需加载，组件样式分离,
借助`babel-plugin-component`插件就可实现按需引入，采用多入口(entry)配置。  
使用`extract-text-webpack-plugin`将样式进行抽离，实现按模块入口chunk打包到对应的.css文件。
全局引用时则使用单个入口，抽离所有css到一个css文件。

English:  
Easy to load on demand, component style separation,
With the help of the `babel-plugin-component` plugin, it can be introduced on demand, using a multi-entry (entry) configuration.
Use `extract-text-webpack-plugin` to extract the styles and implement the package into the corresponding .css file according to the module entrance chunk.
For global referencing, a single entry is used to extract all css into one css file.

### Installation / 安装
```
npm i mily-theme-chalk -S
```  

### Usage / 使用方法
use sass import
```
@import 'mily-theme-chalk';
```  

or use webpack

```
import 'mily-theme-chalk';
```

or 
```
<link rel="stylesheet" href="path/to/node_modules/mily-theme-chalk/lib/index.css">
```  

### Import on demand
```
import 'element-theme-chalk/lib/button.css';
import 'element-theme-chalk/lib/select.css';
```