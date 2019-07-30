<template>
  <section id="wrap">
    <div class="main">
      <div class="top">
        <div class="active">登录</div>
        <div>注册</div>
      </div>
     <Form>
       <FormItem>
         <Input class="item" placeholder="账户："/>
       </FormItem>
       <FormItem>
         <Input class="item" placeholder="密码："/>
       </FormItem>
       <FormItem>
         <Checkbox class="check-box" v-model="remember">记住我吗？</Checkbox>
         <span class="notice">忘记密码了？</span>
       </FormItem>
       <FormItem class="bottom">
         <Button type="primary" @click="login">登录</Button>
       </FormItem>
     </Form>
    </div>
  </section>
</template>

<script>
  import {Form, Input, FormItem, Checkbox, Button} from 'element-ui'
  export default {
    name: 'Login',
    components: { Form, Input, FormItem, Checkbox, Button },
    data () {
      return {
        remember: false
      }
    },
    methods: {
      login () {
        const obj = {name: 'jack', age: 18}
        localStorage.setItem('user', JSON.stringify(obj))
        this.$router.replace('/')
      }
    }
  }
</script>

<style lang="less" >
  #wrap{
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(to bottom right, #673AB7 50%, #6231b9 50%);
    .main{
      background: rgba(41, 5, 105, 0.43);
      width: 450px;
      height: 400px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      .top{
        width: 100%;
        div{
          width: 50%;
          float: left;
          height: 60px;
          line-height: 60px;
          color: #fff;
          &.active{
            background-color: #fff;
            color: #000;
          }
        }
      }
      form {
        width: 80%;
        padding: 0 10%;
        margin-top: 100px;
        .item{
          border-radius: 0;
          input {
            background: transparent;
            color: #fff;
            border-bottom: 2px dashed #fff;
            border-radius: 0;
            &:focus{
              border-bottom: 2px solid #fff;
            }
          }
        }
        .el-input__inner {
          border: none;
        }
        .check-box{
          float: left;
          color: #fff;
        }
        .notice {
          float: left;
          color: #fff;
          &:hover {
            color: #409EFF;
          }
        }
        .bottom {
          margin-top: 30px;
          height: 50px;
          button {
            width: 100%;
            float: right;
            font-size: 16px;
            background-color: #890aff ;
            border:blueviolet ;
            &:hover{
              background-color:blueviolet;
              box-shadow: 1px 1px 5px #000000a1;
            }
          }
        }
      }
    }
  }
</style>
