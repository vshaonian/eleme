<template>
  <div id="app">
    <router-view name="Header"></router-view>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods" activeClass="active">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" activeClass="active">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" activeClass="active">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
