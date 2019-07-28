<template>
	<div>
		<ul>
			<li>
				name: <router-link v-bind:to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
			</li>
			<li>points: {{ fetchedItem.points }}</li>
			<li>created: {{ fetchedItem.time_ago }}</li>
			<li>
				<strong>{{ fetchedItem.title }}</strong>
			</li>
		</ul>
		<div class="content-comment" v-html="fetchedItem.content"></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'fetchedItem'
		])
	},
	created() {
		const userId = this.$route.params.id;
		this.$store.dispatch('FETCH_ITEM', userId)
	},
}
</script>

<style>
.content-comment {
	padding:5px 24px;
	background:#fafafa;
	border-top:1px solid #dfdfdf;
	border-bottom:1px solid #dfdfdf;
}
</style>
