<template>
	<ul class="list-view">
		<li v-for="item in fetchedList" v-bind:key="item.id">
			
			<div class="points">
				{{item.points || 0}}
			</div>
			<div class="content">
				<template v-if="item.domain">
					<a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
				</template>
				<template v-else>
					<router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
				</template>
				<div>
					<router-link v-if="item.user" class="user-link" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
					<a v-else v-bind:href="item.url" class="user-link" target="_blank">{{ item.domain }}</a>
					| 
					<small>{{ item.time_ago }}</small>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		listItems(){
			return this.$store.state.list;
			// const name = this.$route.name;
			// if (name === 'news') {
			// 	return this.$store.state.news
			// } else if (name === 'ask') {
			// 	return this.$store.state.ask
			// } else if (name === 'jobs') {
			// 	return this.$store.state.jobs
			// }
		},
		...mapGetters([
			'fetchedList',
		])
	},
}
</script>

<style lang="scss" scoped>
ul,ol{
	margin:0;
	padding:0;
}
li{

}
a{
  color:rgb(15, 37, 160);
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
}
.list-view{
	li{
		display:table;
		width:100%;
		overflow: hidden;
		text-align: left;
		border-bottom: 1px solid #ddd;
		margin:0;
		padding:10px 24px 10px 0;
		box-sizing: border-box;
	}
}
.user-link{
  text-decoration: none;
  font-size: 12px;
  color:rgb(150, 138, 30)
}
.points{
	display:table-cell;
	width:20px;
	padding-left: 24px;
	text-align: center;
	vertical-align: middle;
	font-size:13px;
	color:rgb(28, 160, 57);
}
.content{
	padding-left: 24px;
	display:table-cell;
}
</style>
