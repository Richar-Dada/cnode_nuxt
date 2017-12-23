import {
  fetchNewsList
} from '~/api'

export default {
  async FETCH_NEWS_LIST_DATA ({ commit }, query) {
    await fetchNewsList(query)
      .then((res) => {
        commit('FETCH_NEWS_LIST_DATA', res.data.data)
      })
  }
}
