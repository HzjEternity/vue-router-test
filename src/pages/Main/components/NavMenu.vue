<template>
 <div class="menu">
   <div class="logo" @click="routerTo('/home')">自定义颜色</div>
   <Menu default-active="2"
         @open="handleOpen"
         @close="handleClose"
         background-color="#545c64"
         text-color="#fff"
         style="border:none">
     <Submenu index="1">
       <template slot="title">
         <i class="el-icon-location"></i>
         <span>导航一</span>
       </template>
       <MenuItem index="1-1">选项1</MenuItem>
       <MenuItem index="1-2">选项2</MenuItem>
     </Submenu>

     <Submenu index="2">
       <template slot="title">
         <i class="el-icon-menu"></i>
         <span>导航二</span>
       </template>
       <MenuItem index="2-1">选项1</MenuItem>
       <MenuItem index="2-2">选项2</MenuItem>
     </Submenu>

     <MenuItem index="3">
       <i class="el-icon-document"></i>
       <span slot="title" @click="routerTo('/showlist')">展示列表</span>
     </MenuItem>

     <MenuItem index="4">
       <i class="el-icon-setting"></i>
       <span slot="title">导航四</span>
     </MenuItem>
   </Menu>
 </div>
</template>

<script>
  import { Submenu, Row, Col } from 'element-ui'

  export default {
    name: 'NavMenu',
    components: { Submenu, Row, Col },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      routerTo (tag) {
        this.$router.push(`/main${tag}`)
      }
    }
  }
</script>

<style lang="less" scoped>
  .menu {
    width: 250px;
    background: #545c64;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    .logo {
      height: 70px;
      line-height: 70px;
      color: #fff;
      &:hover{
        cursor:pointer;
      }
    }
  }
</style>
