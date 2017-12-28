export default {
  FETCH_NEWS_LIST_DATA: (state, list) => {
    state.newsList = list
  },
  SET_USER_TOKEN: (state, token) => {
    state.token = token
  }
}
