<template>
  <v-container fluid>
    <v-layout class="mb-3" v-for="contestant in contestants" :key="contestant.id">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ contestant.name }}</h3>
            <div>{{ contestant.depart }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" @click="open">
            <font-awesome-icon icon="arrow-alt-circle-right" pull="left" />
            Открыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  data () {
    return {
      contestants: [
        {
          id: 1,
          name: 'Солодилова Елена Ивановна',
          depart: 'Правовой отдел'
        },
        {
          id: 2,
          name: 'Свежинцева Надежда Анатольевна',
          depart: 'Отдел информатизации'
        },
        {
          id: 3,
          name: 'Иванов Иван Васильевич',
          depart: 'Отдел информатизации'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    open () {
      this.$router.push('/work')
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
