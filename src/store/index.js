import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const PATH_STATIC = 'http://localhost:8080/static'

export default new Vuex.Store({
  state: {
    count: 0,
    contestants: [],
    contestant: {}
  },
  mutations: {
    setContestants (state, payload) {
      state.contestants = payload
    },
    setContestant (state, payload) {
      state.contestant = payload
    }
  },
  actions: {
    loadContestants ({commit}) {
      axios.get('/get-contestants.php').then(res => {
        const contestants = res.data
        commit('setContestants', contestants)
      }).catch(error => console.log(error))
    },
    loadContestant ({commit}) {
      const contestant = {
        id: 1,
        name: 'Солодилова Елена Ивановна',
        depart: 'Правовой отдел',
        works: [
          {id: 1, link: PATH_STATIC + '/works/1/1.jpg', counter: 12, check: false},
          {id: 2, link: PATH_STATIC + '/works/1/2.jpg', counter: 45, check: false},
          {id: 3, link: PATH_STATIC + '/works/1/3.jpg', counter: 2, check: false}
        ]
      }
      commit('setContestants', contestant)
    }
  },
  getters: {
    contestants (state) {
      return state.contestants
    },
    contestant (state) {
      return state.contestant
    }
  }
})
