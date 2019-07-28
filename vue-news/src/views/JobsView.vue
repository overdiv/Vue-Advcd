<template>
	<ol>
		<li v-for="item in this.$store.state.jobs" v-bind:key="item.id">
			<a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
			<div>
				<a v-bind:href="item.url" class="user-link" target="_blank">{{ item.domain }}</a> | 
				<small>{{ item.time_ago }}</small>
			</div>
		</li>
	</ol>
</template>

<script>
export default {
	created() {
		this.$store.dispatch('FETCH_JOBS')
	}
}
</script>

