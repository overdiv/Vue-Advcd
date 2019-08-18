import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView from '../views/AskView'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
import CreateListView from '../views/CreateListView'
import bus from '@/utils/bus'
import { store } from '@/store'

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/news'
		},
		{
			path: '/news',
			name: 'news',
			// component: CreateListView('NewsView'),
			component: NewsView,
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						console.log('fetched')
						// bus.$emit('end:spinner');
						next();
					})
					.catch(err => {
						console.log(err);
					});
			}
		},
		{
			path: '/ask',
			name: 'ask',
			component: AskView,
			beforeEnter: (to, from, next) => {
				console.log(to, from, next);
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						console.log('fetched')
						// bus.$emit('end:spinner');
						next();
					})
					.catch(err => {
						console.log(err);
					});
			}
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobsView,
			beforeEnter: (to, from, next) => {
				console.log(to, from, next);
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						console.log('fetched')
						// bus.$emit('end:spinner');
						next();
					})
					.catch(err => {
						console.log(err);
					});
			}
		},
		{
			path: '/user/:id',
			component: UserView,
			beforeEnter: (to, from, next) => {
				console.log(to, from, next);
				bus.$emit('start:spinner');
				store.dispatch('FETCH_USER', to.params.id)
					.then(() => {
						console.log('fetched')
						next();
					})
					.catch(err => {
						console.log(err);
					});
			}
		},
		{
			path: '/item/:id',
			component: ItemView,
			
		},

	]
});
