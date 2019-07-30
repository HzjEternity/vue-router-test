<template>
    <header class="header">
      <div class="txt">您好！欢迎您登录本系统</div>
      <div class="operate">
        <Button type="text" @click="logout">退出</Button>
      </div>
    </header>
</template>

<script>
  import {Button} from 'element-ui'
  export default {
    name: 'Header',
    components: {Button},
    methods: {
      logout () {
        this.$router.replace('/login')
      }
    }
  }
</script>

<style lang="less" scoped>
  .header{
    height: 70px;
    margin-left: 250px;
    background: #fff;
    .txt{
      padding-left: 50px;
      line-height: 70px;
      float: left;
    }
    .operate{
      float: right;
      line-height: 70px;
      padding-right: 50px ;
    }
  }
</style>
