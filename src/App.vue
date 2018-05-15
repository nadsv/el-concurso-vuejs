<template>
  <v-app>
    <v-toolbar
      absolute
      color="teal lighten-3"
      dark
    >
      <v-toolbar-title>
        <router-link to="/" class="router-link">
          <v-icon left>filter_vintage</v-icon>
          КОНКУРСЫ
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <router-link to="/" class="router-link">
          Новый конкурс
        </router-link>
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
    },
    methods: {
    }
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
