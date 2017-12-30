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
- 发布帖子


## 坑
- dispatch和commit的区别在于dispatch是异步的，需要使用async await等类似方法来处理才能获得数据

## 注意点
- asyncData和fetch的区别是，fetch是用于**页码组件**，获取数据填充store树的，asyncData是用于小组件获取数据的
- 门户网站文章列表那些数据不需要放到store里面，门户性的网站功能比较简单，不需要引入vuex

## 回顾
- cnode社区主要功能是文章展示和回复，涉及到的技术-数据获取和数据提交（文章列表展示，文章展示，回复文章，发布文章），其他交互甚少。作为熟悉框架api项目很合适，想进阶还需要更加复杂的功能
- 此项目借用cnode社区的API，因此搭建项目时不需要使用express的template，使用starter即可
- 这次使用的是vue-quill-editor，它好像不支持md语法，应该选择md语法的富文本编辑器