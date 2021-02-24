import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import QuizPage from '@/page/QuizPage'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
	{
		path: '/:id',
		component: QuizPage,
	},
]

const router = new VueRouter({
	routes,
	mode: 'history',
})

function initMetrika () {
	(function (m, e, t, r, i, k, a) {
		m[i] = m[i] || function () {(m[i].a = m[i].a || []).push(arguments)}
		m[i].l = 1 * new Date()
		k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
	})
		// eslint-disable-next-line no-unexpected-multiline
		(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')
	window.ym(72568744, 'init', {
		webvisor: true,
	})
}

if (process.env.NODE_ENV === 'production') {
	initMetrika()
}

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
