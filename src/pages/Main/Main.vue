<template>
  <div class="wrap">
    <Header/>
    <NavMenu/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import NavMenu from './components/NavMenu'
  export default {
    name: 'Main',
    components: {Header, NavMenu},
    beforeRouteEnter (to, from, next) {
      if (!JSON.parse(localStorage.getItem('user'))) {
        next({path: '/login'})
      } else {
        next()
      }
    }
  }
</script>

<style lang="less" scoped>
.wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #f3f3f3;
  .content{
    min-height: 700px;
    margin: 15px 0 0 265px;
    background: #fff;
  }
}
</style>
