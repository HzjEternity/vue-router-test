import Vue from 'vue'
import App from './App'
import router from './router/index'
import {Form, FormItem, Menu, MenuItem, MenuItemGroup, Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'

Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('MenuItemGroup', MenuItemGroup)
Vue.component('Button', Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
