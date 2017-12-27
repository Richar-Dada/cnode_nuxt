<template>
  <mu-card class="article">
    <mu-card-header :title="article.author.loginname" subTitle="sub title">
      <mu-avatar :src="article.author.avatar_url" slot="avatar"/>
    </mu-card-header>
    <mu-divider/>
    <mu-card-title :title="article.title" :subTitle="'发布于' + article.create_at.slice(0, 10) + '   ' + article.visit_count + '次阅读'"/>
    <mu-card-text>
      <div v-html="article.content"></div>
    </mu-card-text>
  </mu-card>
</template>

<script>
  import { fetchArticle } from './../../api/index'

  export default {
    async asyncData ({ params }) {
      const res = await fetchArticle(params.id)
      return { article: res.data.data }
    }
  }
</script>

<style>
  .article img {
    max-width: 100%;
    height: auto;
  }
</style>