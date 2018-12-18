<template>
  <v-container fluid grid-list-md fill-height>
    <v-layout justify-center row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title v-text="result"></v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-btn dark block outline @click="randomTruth" >TRUTH</v-btn>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <v-btn dark block outline @click="randomDare">DARE</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    name: "TruthOrDare",
    data() {
      return {
        result: "Result",
        truths: [],
        dares: []
      }
    },
    created() {
      axios.get('/static/data/truth-or-dare-datas.json')
        .then(data => {
          this.truths = data.data.truths;
          this.dares = data.data.dares;
        })
    },
    methods: {
      randomTruth() {
        if (this.truths.length !== 0) {
          this.result = this.truths[Math.floor(Math.random() * this.truths.length - 1)]
        }
      },
      randomDare() {
        if (this.dares.length !== 0) {
          this.result = this.dares[Math.floor(Math.random() * this.dares.length - 1)]
        }
      }
    }
  }
</script>

<style scoped>

</style>
