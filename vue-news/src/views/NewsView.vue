<template>
	<ol>
		<li v-for="item in this.$store.state.news" v-bind:key="item.id">
			<a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
			<div>
				<router-link class="user-link" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link> | 
				<small>{{ item.time_ago }}</small>
			</div>
		</li>
	</ol>
</template>

<script>
export default {
	created() {
		this.$store.dispatch('FETCH_NEWS')
	},
}
</script>

<style lang="scss" scoped>

</style>
