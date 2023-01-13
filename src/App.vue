<script>
import axios from 'axios'
import Card from './components/Card.vue'
import AppMain from './components/AppMain.vue'
/* import { store } from '../store.js' */
export default {
  components: {
    Card
  },
  data(){
        return {
            CardList: []
        }
    },
    created(){
      this.GetCards();
    },
    methods: {
      GetCards(){
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php").then((response) => {
          console.log(response.data.data)
          this.CardList = response.data.data
        })
      }
    },
}
</script>
<template lang="">
  <div>
<!--     <store.CardList />
    <AppMain></AppMain> -->
    <Card v-for="(card, index) in CardList" :card="card" />
  </div>
</template>
<style lang="">
  
</style>