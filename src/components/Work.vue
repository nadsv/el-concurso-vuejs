<template>
  <v-container fluid>
    <h2>Солодилова Елена Ивановна</h2>
    <p>Правовой отдел</p>
    <v-layout class="mb-3" v-for="work in works" :key="work.id">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media :src="work.link" height="200px" @click.native.stop="open(work.link)">
          </v-card-media>
          <v-card-actions>
            <v-btn flat :color=" work.check ? 'orange' : 'grey' " @click.prevent="check(work)">
              <font-awesome-icon icon="thumbs-up" pull="left" />
              <span class="counter">{{work.counter}}</span> Мне нравится
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" fullscreen>
      <v-card>
        <v-card-media :src="imageLink" height="calc(100vh - 55px)" contain></v-card-media>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal lighten-3" flat="flat" @click.native="dialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter {
  padding-right: 10px;
}
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  data () {
    return {
      dialog: false,
      imageLink: '',
      works: [
        {id: 1, link: 'http://localhost:8080/static/works/1/1.jpg', counter: 12, check: false},
        {id: 2, link: 'http://localhost:8080/static/works/1/2.jpg', counter: 45, check: false},
        {id: 3, link: 'http://localhost:8080/static/works/1/3.jpg', counter: 2, check: false}
      ]
    }
  },
  methods: {
    open (link) {
      this.imageLink = link
      this.dialog = true
    },
    check (work) {
      work.check = !work.check
      work.counter = work.counter + (work.check ? 1 : -1)
      this.$store.commit('increment')
    }
  },
  components: {
    FontAwesomeIcon /*,
    'app-work-view': WorkView */
  }
}
</script>
