import Login from '../pages/Login/Login'
import Main from '../pages/Main/Main'
import Home from '../pages/Main/pages/Home/Home'
import ShowList from '../pages/Main/pages/ShowList/ShowList'
// const children =
export default [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    redirect: '/main/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'showlist',
        name: 'showlist',
        component: ShowList
      }
    ]
  }
]
