import axios from 'axios'

export function fetchNewsList (query) {
  let tab = query.tab || 'all'
  let page = query.page || 1
  return axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}`)
}

export function fetchArticle (id) {
  console.log(id)
  return axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
}
