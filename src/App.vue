<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav/>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    SideNav
  },
  data () {
    return {
      //
    }
  }
}
</script>
