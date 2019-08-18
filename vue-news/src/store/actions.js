import {
	fetchNewsList,
	fetchJobsList,
	fetchAskList,
	fetchList,
	fetchUserInfo,
	fetchCommentItem,
} from '@/api'

export default {
	FETCH_NEWS({ commit }) {
		return fetchNewsList()
			.then(({ data }) => {
				console.log('news', data)
				commit('SET_NEWS', data);
				return data;
			})
			.catch(err => {
				console.log(err)
			});
	},
	FETCH_JOBS({ commit }) {
		return fetchJobsList()
			.then(({ data	}) => {
				console.log('jobs', data)
				commit('SET_JOBS', data);
			})
			.catch(err => {
				console.log(err)
			});
	},
	FETCH_ASK({ commit }) {
		return fetchAskList()
			.then(({ data }) => {
				console.log('ask', data)
				commit('SET_ASK', data);
			})
			.catch(err => {
				console.log(err)
			});
	},
	FETCH_USER({ commit }, name) {
		return fetchUserInfo(name)
			.then(({ data }) => {
				commit('SET_USER', data);
			})
			.catch(err => {
				console.log(err)
			});
	},
	FETCH_ITEM({ commit }, id) {
		return fetchCommentItem(id)
			.then(({ data }) => {
				commit('SET_ITEM', data);
			})
			.catch(err => {
				console.log(err)
			});
	},
	FETCH_LIST({ commit }, pageName) {
		return fetchList(pageName)
			.then(({ data }) => {
				commit('SET_LIST', data);
				return data;
			})
			.catch(err => {
				console.log(err)
			});
	},
}