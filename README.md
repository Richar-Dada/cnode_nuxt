# y

> a cnode mobile application with nuxt

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

## 开发记录
- 首页数据展示完成


## 坑
- dispatch和commit的区别在于dispatch是异步的，需要使用async await等类似方法来处理才能获得数据

## 注意点
- asyncData和fetch的区别是，fetch是用于**页码组件**，获取数据填充store树的，asyncData是用于小组件获取数据的