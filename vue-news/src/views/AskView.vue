<template>
	<ListItem></ListItem>
</template>

<script>
import ListItem from '@/components/ListItem'
import bus from '@/utils/bus'
import ListMixin from '@/mixins/ListMixin'

export default {
	components: {
		ListItem
	},
	mixins: [ListMixin]

	// created() {
	// 	bus.$emit('start:spinner');
	// 	setTimeout(() => {
	// 		this.$store.dispatch('FETCH_ASK')
	// 		.then(() => {
	// 			console.log('fetched')
	// 			bus.$emit('end:spinner');
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// 		bus.$emit('end:spinner');	
	// 	}, 3000);
	// }
}
</script>
