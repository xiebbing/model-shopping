import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/Home/home.vue')
const Category = () => import('views/Category/category.vue')
const Cart = () => import('views/Cart/cart.vue')
const Profile = () => import('views/Profile/profile.vue')
const Detail = () => import('views/detail/detail.vue')
 

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
		{path:'',redirect:'/home'},
		{path:'/home',component:Home},
		{path:'/category',component:Category},
		{path:'/cart',component:Cart},
		{path:'/detail/:iid',component:Detail},
		{path:'/profile',component: Profile}
  ]
})
