import { createRouter, createWebHistory } from 'vue-router'


const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart =() => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/detail')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home,
    meta: {
      title:'home',
      keepAlive: true
    }
  },
  {
    path:'/category',
    component: Category,
  },
  {
    path:'/profile',
    component: Profile,
  },
  {
    path:'/cart',
    component: Cart,
  },
  {
    path:'/detail/:iid',
    component: Detail,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
