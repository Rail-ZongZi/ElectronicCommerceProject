import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('@/views/Product')
      },
      {
        path: 'detail/:id',
        name: 'Detail',
        component: () => import('@/views/Detail')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register'),
    meta: {
      title: '注册'
    }
  }
]

export default routes
