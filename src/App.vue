<script>
import axios from 'axios'
import AppMain from './components/AppMain.vue'
/* import { store } from '../store.js' */
export default {
  data(){
        return {
            /* store, */
        }
    },
    created(){
      this.GetCards();
    },
    methods: {
      GetCards(){
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php").then((response) => {
          console.log(response.data.results)
        })
      }
    },
}
</script>
<template lang="">
  <div>
<!--     <store.CardList />
    <AppMain></AppMain> -->
  </div>
</template>
<style lang="">
  
</style>