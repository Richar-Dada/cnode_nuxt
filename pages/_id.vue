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
        <div v-for="(news, index) in newsList" :key="news.id">
          <mu-list-item :title="news.title" class="index-list-item">
            <mu-avatar :src="news.author.avatar_url" slot="leftAvatar"/>
            <span slot="describe">
              <span style="color: rgba(0, 0, 0, .87)">{{ news.author.loginname }} -</span> {{ news.create_at.slice(0, 10) }}
            </span>
          </mu-list-item>
          <mu-divider v-if="index != newsList.length - 1" inset/>
        </div>
      </mu-list>
    </mobile-tear-sheet>
    <mu-pagination :total="total" :current="current" @pageChange="handleClick">
    </mu-pagination>
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
      newsList: this.$store.getters.getNewsList,
      total: 500,
      current: 1
    }
  },
  methods: {
    handleClick (newIndex) {

    }
  },
  created () {
    // console.log(this.newsList)
  }
}
</script>

<style scoped>
  .container{
    padding-bottom: 20px;
  }
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
  .index-list-item{
    text-align: left;
    line-height: 20px;
  }
</style>
