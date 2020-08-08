<template>
	<div>
		test
	</div>
</template>

<script>
import api from '@/api/api'

export default {
	data() {
		return {}
	},
	watch: {},
	created() {
		this.load()
	},
	methods: {
		load() {
			api.test({id: '123'}).then(res => {
				console.log(res)
			}).catch(e => {
				console.log(e)
			})
		}
	},
	components: {},
}
</script>

<style>
</style>
