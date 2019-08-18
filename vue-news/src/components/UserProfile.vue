<template>
	<div class="user-profile">
		<div class="name">
				<slot name="username"></slot>
		</div>
		<div class="time">
				<!-- created: {{ info.created }} -->
				<slot name="time"></slot>
		</div>
		<slot name="karma"></slot>
		<slot name="points"></slot>
	</div>
</template>

<script>
export default {
	props: {
		info: Object
	},
	// computed: {
	// 	userInfo() {
	// 		return this.$store.state.user;
	// 	}
	// },
}
</script>

<style lang="scss" scoped>
.user-profile{
	padding:5px 24px;
	
	& > div {
		line-height: 20px;
	}
	.time{
		font-size: 12px;
	}
	.karma{
		color:cornflowerblue;
	}
	.points{
		color:darkgreen;
	}
}
</style>
