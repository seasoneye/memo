<template>
	<div>
		<img src="@/assets/images/404.png" @click="testRouter"/>
	</div>
</template>

<script>

export default {
	data() {
		return {
		}
	},
	watch: {},
	methods: {
		testRouter() {
			this.$router.push({ name: 'test' })
		}
	},
	components: {},
}
</script>

<style>
</style>
