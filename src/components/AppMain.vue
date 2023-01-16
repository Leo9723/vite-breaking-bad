<script>
import Card from './Card.vue'
import { store } from '../store.js'
import axios from 'axios'
import AppSearch from './AppSearch.vue'
export default {
    components: {
    Card,
    AppSearch
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
      GetCards(word){
        let newUrl = store.url;
        if(word != undefined) {

          newUrl += `?type=${word}`

        }
          store.loading = false
        axios.get(newUrl).then((response) => {
          console.log(response.data.data)
          store.CardList = response.data.data
          store.loading = true
          console.log(store.CardList.length)
        })
      }
    }
}
</script>
<template lang="">
  <div class="search">
    <AppSearch @search="GetCards"></AppSearch>
  </div>
  <div class="results">
    Sono stati trovati {{ store.CardList.length }} risultati
  </div>
    <div class="all">
      <div class="maincont" v-if="store.loading">
          <Card v-for="(card, index) in store.CardList" :card="card" :key="index" :img="card.card_images" />
      </div>
      <div v-else>
          <div class="row">
              <div>
                  <i class="loading-icon fas fa-circle-notch"></i>
                  <div class="loading-text">
                      CARICAMENTO IN CORSO...
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>
<style lang="scss">
.results {
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
}
.all {
  margin-top: 30px;
}
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
     .row {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            text-align: center;
            .loading-text{
                font-weight: bold;
                font-size: x-large;
            }
            .loading-icon{
           animation: rotella 150s infinite;
           font-size: 100px;
           margin-bottom: 50px;
             }
              @keyframes rotella {
                0% {transform: rotate(100turn);}
                }
        }
     }
</style>