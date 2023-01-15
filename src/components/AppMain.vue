<script>
import Card from './Card.vue'
import { store } from '../store.js'
import axios from 'axios'
export default {
    components: {
    Card
  },
  data(){
        return {
            store
        }
    },
    created(){
      this.GetCards();
    },
    methods: {
      GetCards(){
        axios.get(store.url).then((response) => {
          console.log(response.data.data)
          store.CardList = response.data.data
        })
      }
    }
}
</script>
<template lang="">
    <div>
    <div class="maincont">
        <Card v-for="(card, index) in store.CardList" :card="card" :key="index" :img="card.card_images" />
    </div>
    </div>
</template>
<style lang="scss">
      .maincont {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
        justify-content: space-between;
        background-color: white;
        padding: 30px;
        .cardContainer{
            background-color: white;
            width: 20%;
        }
     }
</style>