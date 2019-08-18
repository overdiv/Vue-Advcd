<template>
<div>
	<UserProfile v-bind:info="userInfo">
		<template slot="username">{{userInfo.id}}</template>
		<template slot="time">{{'joined: ' + userInfo.created}}</template>
		<div class="karma" slot="karma">{{'karma: ' + userInfo.karma}}</div>
	</UserProfile>
</div>
</template>

<script>
import UserProfile from '@/components/UserProfile'
export default {
	computed: {
		userInfo() {
			return this.$store.state.user;
		},
	},
	created() {
		const userName = this.$route.params.id;
		this.$store.dispatch('FETCH_USER', userName);
	},
	components: {
		UserProfile,
	}
}
</script>

<style>

</style>
