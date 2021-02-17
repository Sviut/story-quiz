import Vue from 'vue'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'
import VueYandexMetrika from 'vue-y-metrika'

Vue.config.productionTip = false

Vue.use(VueSocialSharing)

Vue.use(VueYandexMetrika, {
	id: 72568744,
	env: process.env.NODE_ENV,
})

new Vue({
	render: h => h(App),
}).$mount('#app')
