<template>
	<div>
		<!-- <ul>
			<li>
				name: <router-link v-bind:to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
			</li>
			<li>points: {{ fetchedItem.points }}</li>
			<li>created: {{ fetchedItem.time_ago }}</li>				
		</ul> -->
		<UserProfile :info="fetchedItem">
			<router-link slot="username" v-bind:to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
			<template slot="time">{{'posted: ' + fetchedItem.time_ago}}</template>
			<div class="points" slot="points">{{'points: ' + fetchedItem.points}}</div>
		</UserProfile>
		<strong class="tit-ask-info">{{ fetchedItem.title }}</strong>
		<div class="content-comment" v-html="fetchedItem.content"></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '@/components/UserProfile'
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
	components: {
		UserProfile
	}
}
</script>

<style>
.content-comment {
	padding:5px 24px;
	background:#fafafa;
	border-top:1px solid #dfdfdf;
	border-bottom:1px solid #dfdfdf;
}
.tit-ask-info{
	display:block;
	padding:0 24px 10px;
}
</style>
