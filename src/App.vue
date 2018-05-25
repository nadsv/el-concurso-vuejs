<template>
  <v-app>
    <v-toolbar
      absolute
      color="green lighten-1"
      dark
    >
      <v-toolbar-title>
        <router-link to="/" class="router-link">
          <font-awesome-icon icon="image" size="lg"/>
          КОНКУРС
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link to="/" class="router-link">
          Мое лучшее фото
        </router-link>
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  data () {
    return {
      // name: 'FAExample'
    }
  },
  methods: {
  }/* ,
   components: {
    FontAwesomeIcon
  } */
}
</script>

<style scoped>
main {
  margin-top: 80px;
}
.router-link {
  text-decoration: none;
  color: white;
}
</style>
