import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'
import FoodView from '@/views/FoodView.vue'
import FoodCommentsView from '@/views/FoodCommentsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/comidas',
    name:'Comidas',
    component:FoodsView
  },
  {
    path:'/comidas/:id',
    component:FoodView,
    children:[
      {
        path:'comentarios',
        component:FoodCommentsView
      }
    ]
  },
  {
    path:'*',
    component:NotFoundView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
