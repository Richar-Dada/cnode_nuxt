import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default () => {
  return new Vuex.Store({
    state: {
      newsList: '12'
    },
    actions,
    mutations,
    getters
  })
}
