<template>
  <div class="header">
    <h1>{{ msg }}</h1>
    <h2>我真的是路由过来的</h2>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: '我是路由过来的'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
