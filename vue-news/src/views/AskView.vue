<template>
	<ol>
		<li v-for="item in fetchedAsk" v-bind:key="item.id">
			<router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
			<div>
				<router-link class="user-link" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link> | 
				<small>{{ item.time_ago }}</small>
			</div>
		</li>
	</ol>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
	computed: {
		// ask() {
		// 	return this.$store.state;
		// }
		// ...mapState({
		// 	ask: state => state.ask
		// })
		...mapGetters([
			'fetchedAsk'
		])
	},
	created() {
		this.$store.dispatch('FETCH_ASK')
	},
	
}
</script>

<style>

</style>
