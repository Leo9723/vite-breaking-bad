<script>
export default {
  props: {
    card: Object
  }
}
</script>
<template lang="">
    <div class="cardContainer">
        <div class="card">
          {{ card.name }}
        </div>
    </div>
</template>
<style lang="scss">

</style>