<template>
  <section class="container">
    <mobile-tear-sheet>
      <mu-list>
        <mu-sub-header class="index-sub-header">
          <ul class="index-title">
            <li class="index-title-item"><a href="/all">首页</a></li>
            <li class="index-title-item"><a href="/good">精华</a></li>
            <li class="index-title-item"><a href="/share">分享</a></li>
            <li class="index-title-item"><a href="/ask">问答</a></li>
            <li class="index-title-item"><a href="/job">招聘</a></li>
            <li class="index-title-item"><a href="/dev">测试</a></li>
          </ul>
        </mu-sub-header>
        <mu-list-item title="这个周末一起吃饭么?" v-for="news in newsList" :key="news.id">
          <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
          </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
        <mu-divider inset/>
      </mu-list>
    </mobile-tear-sheet>
  </section>
</template>

<script>

export default {
  name: 'index',
  head () {
    return {
      title: 'Cnode'
    }
  },
  fetch ({ store, params }) {
    console.log(params)
    return store.dispatch('FETCH_NEWS_LIST_DATA', params.id)
  },
  data () {
    return {
      newsList: this.$store.getters.getNewsList
    }
  },
  created () {
    // console.log(this.$store)
  }
}
</script>

<style scoped>
  .index-sub-header{
    padding-left: 0;
  }
  .index-title{
    background-color: #f6f6f6;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin-top: 0;
  }
  .index-title-item{
    flex: 1;
    list-style-type:none
  }
  .index-title-item a{
    color: #80bd01;
  }
</style>
