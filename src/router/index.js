import Vue from 'vue'
import Router from 'vue-router'

const Sign = () => import('../components/Sign.vue')
const test = () => import('../components/test.vue')

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', name: '登录', component: Sign },
		{ path: '/test', name: 'test', component: test },
	]
})