<script>
export default {
    methods: {
        search(){
            this.$emit('search', this.type)
        }
    }
}
</script>
<template lang="">
    <div class="search-container">
        <input type="text" name="" id="" placeholder="inserisci valore" v-model="type" @keyup.enter="search">
    </div>
</template>
<style lang="">
    
</style>