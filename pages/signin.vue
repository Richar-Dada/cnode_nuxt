<template>
  <p>登陆中...</p>  
</template>

<script>
  export default {
    name: 'signin',
    created () {
      this.$store.dispatch('SET_USER_TOKEN', 'ace151f2-9174-4365-9ebd-de926c03e83c')
    },
    mounted () {
      setTimeout(() => {
        location.href = '/'
      }, 2000)
    }
  }
</script>

<style>
</style>