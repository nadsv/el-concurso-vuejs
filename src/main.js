import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import 'vuetify/dist/vuetify.min.css'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

fontawesome.library.add(brands, faSpinner)

Vue.use(VueResource)

Vue.use(Vuetify)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    this.$store.dispatch('loadContestants')
  }
})
