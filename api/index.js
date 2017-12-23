import axios from 'axios'

export function fetchNewsList (tab = 'all', page = '1') {
  return axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}`)
}
