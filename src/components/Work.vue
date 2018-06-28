<template>
  <v-container fluid>
    <h2>{{ contestant.name }}</h2>
    <p>{{ contestant.depart }}</p>
    <v-layout class="mb-3" v-for="(work, index) in works" :key="work.id">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media :src="work.link" height="200px" @click.native.stop="open(work.link)" style="cursor: pointer">
          </v-card-media>
          <v-card-actions>
            <v-btn flat :color=" work.check ? 'orange' : 'grey' " @click.prevent="check(index)">
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
          <v-btn color="green lighten-2" flat="flat" @click.native="dialog = false">Закрыть</v-btn>
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
  props: ['id'],
  data () {
    return {
      dialog: false,
      imageLink: ''
    }
  },
  computed: {
    contestant () {
      return this.$store.getters.contestant
    },
    works () {
      return this.$store.getters.works
    }
  },
  methods: {
    open (link) {
      this.imageLink = link
      this.dialog = true
    },
    check (index) {
      const work = this.works[index]
      const counterInfo = {
        work_id: work._id.$id,
        id: index,
        inc: !work.check ? 1 : -1
      }
      this.$store.dispatch('saveCounter', counterInfo)
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
