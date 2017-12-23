import {
  fetchNewsList
} from '~/api'

export default {
  async FETCH_NEWS_LIST_DATA ({ commit }) {
    await fetchNewsList()
      .then((res) => {
        commit('FETCH_NEWS_LIST_DATA', res.data.data)
      })
  }
}
