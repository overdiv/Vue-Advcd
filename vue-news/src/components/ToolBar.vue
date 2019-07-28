<template>
	<div class="header">
		<router-link to="/news">News</router-link>
		<router-link to="/ask">Ask</router-link>
		<router-link to="/jobs">Jobs</router-link>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
	position: fixed;
	z-index: 9998;
	display: flex;
	top:0;
	left:0;
	right:0;
	height:50px;
	background:rgb(4, 67, 92);
	padding: 15px 24px;
	border-bottom: 1px solid #ccc;
	box-sizing: border-box;

	a {
		color: #7cdfc1;
		margin-right: 12px;	
		text-decoration: none;
	}

	.router-link-active {
		color: rgb(255, 255, 255);
		text-decoration: underline;
	}
}
</style>
