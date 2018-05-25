import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
      state.contestants = payload
    }
  },
  actions: {
    loadContestants ({commit}) {
      const contestants = [{
        id: '1',
        name: 'Солодилова Елена Ивановна',
        depart: 'Правовой отдел',
        works: [
          {id: 1, link: 'http://localhost:8080/static/works/1/1.jpg', counter: 12, check: false},
          {id: 2, link: 'http://localhost:8080/static/works/1/2.jpg', counter: 45, check: true},
          {id: 3, link: 'http://localhost:8080/static/works/1/3.jpg', counter: 2, check: false}
        ]
      },
      {
        id: '2',
        name: 'Свежинцева Надежда Анатольевна',
        depart: 'Отдел информатизации',
        works: [
          {id: 1, link: 'http://localhost:8080/static/works/2/1.jpg', counter: 1, check: false},
          {id: 2, link: 'http://localhost:8080/static/works/2/2.jpg', counter: 2, check: false}
        ]
      },
      {
        id: '3',
        name: 'Горпинченко Марина Федоровна',
        depart: 'Отдел обеспечения инвалидов техническими средствами реабилитации',
        works: [
          {id: 1, link: 'http://localhost:8080/static/works/3/1.jpg', counter: 5, check: true}
        ]
      }]
      commit('setContestants', contestants)
    },
    loadContestant ({commit}) {
      const contestant = {
        id: 1,
        name: 'Солодилова Елена Ивановна',
        depart: 'Правовой отдел',
        works: [
          {id: 1, link: 'http://localhost:8080/static/works/1/1.jpg', counter: 12, check: false},
          {id: 2, link: 'http://localhost:8080/static/works/1/2.jpg', counter: 45, check: false},
          {id: 3, link: 'http://localhost:8080/static/works/1/3.jpg', counter: 2, check: false}
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
      return (id) => {
        return state.contestants.find((contestant) => {
          return contestant.id === id
        })
      }
    }
  }
})
