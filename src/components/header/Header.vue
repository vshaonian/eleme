<template>
  <div class="header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'v-header',
    data () {
      return {
        msg: 'i am header'
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
