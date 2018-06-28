import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const PATH_STATIC = 'http://localhost:8080/static'

export default new Vuex.Store({
  state: {
    contestants: [],
    contestant: {},
    works: []
  },
  mutations: {
    setContestants (state, payload) {
      state.contestants = payload
    },
    setContestant (state, payload) {
      state.contestant = payload
    },
    setWorks (state, payload) {
      state.works = payload
    },
    setCounter (state, payload) {
      let works = [ ...state.works ]
      works[payload.id].counter += payload.inc
      works[payload.id].check = !works[payload.id].check
      Vue.set(state.works, payload.id, works[payload.id])
      console.log(state.works)
      // this.state.contestant.name = this.state.contestant.name + 1
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
      commit('setContestant', {})
      let contestant = state.contestants.find((item) => {
        return item.id === id
      })
      commit('setContestant', contestant)
      axios.get('/get-works.php?id=' + id).then(res => {
        let works = []
        for (const id in res.data) {
          works.push(res.data[id])
        }
        commit('setWorks', works)
      }).catch(error => console.log(error))
    },

    saveCounter ({commit, state}, payload) {
      axios.post('/update-likes.php', {work_id: payload.work_id, inc: payload.inc})
      .then(res => {
        const counter = {id: payload.id, inc: payload.inc}
        commit('setCounter', counter)
      }).catch(error => console.log(error))
    }
  },

  getters: {
    contestants (state) {
      return state.contestants
    },
    contestant (state) {
      return state.contestant
    },
    works (state) {
      return state.works
    }
  }
})
