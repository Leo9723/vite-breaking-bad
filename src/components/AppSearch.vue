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
<!--         <input type="text" name="" id="" placeholder="inserisci valore" v-model="type" @keyup.enter="search">
 -->        <select name="" id="" v-model="type" @change="search">
            <option value="Normal Monster">Normal Monster</option>
            <option value="Effect Monster">Effect Monster</option>
            <option value="Synchro Monster">Synchro Monster</option>
            <option value="Fusion Monster">Fusion Monster</option>
            <option value="Spell Card">Spell Card</option>
            <option value="Trap Card">Trap Card</option>
        </select>
    </div>
</template>
<style lang="scss">
    select {
        background-color: white;
        border: 2px solid black;
        border-radius: 10px;
        padding: 10px 20px;
        margin-top: 30px;
        margin-left: 200px;
        option {
            background-color: white;
        }
    }
</style>