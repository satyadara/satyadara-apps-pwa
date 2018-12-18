<template>
  <v-container fluid grid-list-md fill-height>
    <v-layout row wrap>
      <v-flex xs6 v-for="it in item" :key="item">
        <v-card @click="goTo(it.route)">
          <v-card-title class="headline" v-text="it.title"></v-card-title>
          <v-card-text v-text="it.desc"></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "GamesDashboard",
    data: () => ({
      item: [
        {
          title: "Truth Or Dare",
          desc: "Play game truth or dare with your friend!",
          route: "/truth-or-dare"
        }
      ]
    }),
    methods: {
      goTo(dest) {
        this.$router.push(dest)
      }
    }
  }
</script>

<style scoped>

</style>
