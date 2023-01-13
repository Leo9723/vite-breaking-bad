import { reactive } from 'vue'

export const store = reactive({
    Url: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    CardList: []
})