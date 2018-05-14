<template>
  <v-app>
    <v-toolbar
      absolute
      color="teal lighten-3"
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques"
    >
      <v-toolbar-title>КОНКУРСЫ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>Название нового конкурса</v-toolbar-title>
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

