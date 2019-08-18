import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import AskView from '../views/AskView'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
import CreateListView from '../views/CreateListView'

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
			// component: NewsView
			component: CreateListView('NewsView'),
		},
		{
			path: '/ask',
			name: 'ask',
			component: CreateListView('AskView'),
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: CreateListView('JobsView')
		},
		{
			path: '/user/:id',
			component: UserView
		},
		{
			path: '/item/:id',
			component: ItemView
		},

	]
});
