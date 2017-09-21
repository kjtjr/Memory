import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'

Vue.use(Vuex, VueLodash, lodash)

const state = {
  numbers : _.shuffle([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]),
  score : 0,
  wrong : 0,
  cardOne : 0,
  cardTwo : 0,
  endTurn: false
  
}

export default new Vuex.Store ({
  strict: true,//Turn off prior to production//
  state,
  mutations,
  getters,
  actions
})