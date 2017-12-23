<template>
  <section class="container">
    <mobile-tear-sheet>
      <mu-list>
        <mu-sub-header class="index-sub-header">
          <ul class="index-title">
            <li class="index-title-item" @click="goto('all')">首页</li>
            <li class="index-title-item" @click="goto('good')">精华</li>
            <li class="index-title-item" @click="goto('share')">分享</li>
            <li class="index-title-item" @click="goto('ask')">问答</li>
            <li class="index-title-item" @click="goto('job')">招聘</li>
            <li class="index-title-item" @click="goto('dev')">测试</li>
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
  fetch ({ query, store, params }) {
    this.tab = query.tab
    this.page = query.page
    return store.dispatch('FETCH_NEWS_LIST_DATA', query)
  },
  data () {
    return {
      newsList: this.$store.getters.getNewsList,
      tab: 'all',
      page: 1,
      total: 500,
      current: 1
    }
  },
  methods: {
    goto (tab) {
      location.href = `/?tab=${tab}&page=${this.page}`
    },
    handleClick (newIndex) {
      location.href = `/?tab=${this.tab}&page=${newIndex}`
    }
  },
  created () {
    // console.log(this.$store)
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
    list-style-type:none;
    color: #80bd01;
    cursor: pointer;
  }
  .index-title-item{
    color: #80bd01;
  }
  .index-list-item{
    text-align: left;
    line-height: 20px;
  }
</style>
