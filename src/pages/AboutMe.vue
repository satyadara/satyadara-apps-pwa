<template>
  <v-container fluid grid-list-md>
    <v-layout justify-center row wrap>
      <v-flex xs12
              justify-center
              layout
              text-xs-center>
        <v-avatar size="125">
          <v-img src="https://avatars2.githubusercontent.com/u/23491803?s=460&v=4"/>
        </v-avatar>
      </v-flex>
      <v-flex xs12 justify-center text-xs-center>
        Satya Syahputra
        <br/>
        Ilmu pengetahuan hanya akan berhenti bila kita menyerah!
      </v-flex>
      <v-flex xs4 justify-center text-xs-center>
        <v-btn fab icon color="red lighten-3" class="white--text" href="https://www.instagram.com/putra_is_son/"
               target="_blank">
          <v-icon>fab fa-instagram</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs4 justify-center text-xs-center>
        <v-btn fab icon color="cyan darker-1" class="white--text"
               href="https://www.linkedin.com/in/satya-syahputra-087480155/" target="_blank">
          <v-icon>fab fa-linkedin</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs4 justify-center text-xs-center>
        <v-btn fab icon color="indigo" class="white--text" href="https://www.facebook.com/iMortred" target="_blank">
          <v-icon>fa-facebook</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "AboutMe"
  }
</script>

<style scoped>

</style>
