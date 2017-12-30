<template>
  <div class="publish content">
    <div class="title">
      <p>发布话题</p>
    </div>
    <mu-divider/>
    <div class="title">
    标题：<mu-auto-complete hintText="" full-width @input="handleInput" @change="handlechange" />
    </div>
    <mu-select-field v-model="tab" :labelFocusClass="['label-foucs']" label="选择板块：">
      <mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
    </mu-select-field>
    <div class="quill-editor" 
      v-model="content"
      v-quill:myQuillEditor="editorOption">
    </div>
    <mu-flat-button label="提交" class="demo-flat-button" backgroundColor="#a4c639" color="#FFF" @click="publish"/>
  </div>
</template>

<script>
  import { createTopic } from '../api/index'

  export default {
    name: 'publish',
    data () {
      return {
        tab: '',
        list: ['分享', '问答', '招聘', '客户端测试'],
        title: '',
        content: '',
        editorOption: {}
      }
    },
    methods: {
      handlechange (val) {
        console.log(`you choose ${val}`)
      },
      handleInput (val) {
        this.title = val
      },
      async publish () {
        if (!this.content) return
        let postData = {
          accesstoken: sessionStorage.getItem('token'),
          title: this.title,
          tab: 'dev',
          content: this.content
        }
        console.log(this.content)
        let res = await createTopic(postData)
        console.log(res)
        if (res.status === 200) {
          alert('发布成功')
          location.href = '/'
        }
      }
    }
  }
</script>

<style>
  .publish {
    padding: 0 20px 0 30px;
  }
  .title{
    margin-top: 20px;
  }
  .quill-editor{
    min-height: 400px;
  }
  .demo-flat-button{
    margin: 20px 0;
  }
</style>