// The Vue build version to load with the `import` command
import Vue from 'vue'
import Vuex from 'vuex'

import '@babel/polyfill'
import './assets/style/reset.css'

import store from './store'
import router from './router'

Vue.use(Vuex)

// Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
// 	viewdesign.LoadingBar.start()
// 	next()
// })

// router.afterEach(route => {
// 	viewdesign.LoadingBar.finish()
// })

new Vue({
	el: '#app',
	router,
	store: new Vuex.Store(store),
	// render: h=> h(test),
})
