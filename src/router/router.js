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
        path: 'index',
        name: 'Index',
        component: () => import('@/views/Index')
      },
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
  }
]

export default routes
