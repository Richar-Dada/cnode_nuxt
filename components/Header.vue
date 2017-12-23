<template>
  <div>
    <mu-appbar class="title">
      <mu-icon-button icon="menu" slot="left" @click="toggle()"/>
      <img src="~/assets/img/cnodejs_light.svg" class="logo" alt="">
      <mu-flat-button label="expand_more" slot="right"/>
    </mu-appbar>
    <mu-drawer :open="open" :docked="false" @close="toggle()" class="drawer">
      <mu-list @itemClick="toggle()">
        <a href="/">
          <mu-list-item title="首页"/>
        </a>
        <a href="/getstart">
          <mu-list-item title="新手入门"/>
        </a>
        <a href="/api">
          <mu-list-item title="API"/>
        </a>
        <a href="/about">
          <mu-list-item title="关于"/>
        </a>
        <a href="/signin">
          <mu-list-item title="登录"/>
        </a>
      </mu-list>
    </mu-drawer>  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        open: false
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
      }
    }
  }
</script>

<style scoped>
  .title{
    background-color: #444;
    color: #ccc;
  }
  .drawer{
    width: 
  }
  .logo{
    width: 100px;
  }
</style>