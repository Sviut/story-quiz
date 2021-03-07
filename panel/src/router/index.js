import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterPage from '@/views/RegisterPage'
import LoginPage from '@/views/LoginPage'

Vue.use(VueRouter)

const routes = [
	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Home,
	// },
	{
		path: '/registration',
		name: 'Register',
		component: RegisterPage,
	},
	{
		path: '/login',
		name: 'Login',
		component: LoginPage,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
