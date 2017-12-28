<template>
  <p>登陆中...</p>  
</template>

<script>
  export default {
    name: 'signin',
    created () {},
    mounted () {
      sessionStorage.setItem('token', 'ace151f2-9174-4365-9ebd-de926c03e83c')
      setTimeout(() => {
        location.href = '/'
      }, 2000)
    }
  }
</script>

<style>
</style>