import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { initMetrika } from '@/metrika'
import QuizPage from '@/page/QuizPage'
import './index.css'

const routes = [
	{ path: '/:id', component: QuizPage },
]

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
	routes,
	mode: 'history',
})

if (process.env.NODE_ENV === 'production') {
	initMetrika()
}

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')

