import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const PATH_STATIC = 'http://localhost:8080/static'

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

    loadContestant ({commit, state}, id) {
      let contestant = state.contestants.find((item) => {
        return item.id === id
      })
      axios.get('/get-works.php?id=' + id).then(res => {
        const works = res.data
        contestant['works'] = works
        console.log(contestant)
        commit('setContestant', contestant)
      }).catch(error => console.log(error))
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
