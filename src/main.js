// The Vue build version to load with the `import` command
import Vue from 'vue'

import test from './components/test.vue'

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
	render: h=> h(test),
})
