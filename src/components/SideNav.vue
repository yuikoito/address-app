<template>
  <v-layout wrap style="height: 200px;">

    <v-container>
      <v-layout justify-center>
        <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://pbs.twimg.com/profile_images/1267130660860223489/AS1PLP_-_400x400.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Waniko Wani</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: '連絡先一覧', icon: 'list' }
      ]
    }
  }
}
</script>