const $axios = require('./axios')

//test
exports.test = function () {
	return $axios.get('/api/test')
}