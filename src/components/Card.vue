<script>
export default {
  props: {
    card: Object,
    key: Number,
    img: Array
  }
}
</script>
<template lang="">
    <div class="cardContainer">
        <div class="card">
          <div class="image" v-for="(image, index) in img">
            <img :src="image.image_url" alt="">
          </div>
          <div class="name">
            {{ card.name }}
          </div>
          <div class="type">
            {{ card.type }}
          </div>
        </div>
    </div>
</template>
<style lang="scss">
      .card{
        margin: 0 auto;
        text-align: center;
        background-color: orange;
        padding-bottom: 50px;
        margin-bottom: 20px;
        margin-right: 20px;
        font-weight: bold;
        .name {
          color: white;
          margin-bottom: 20px;
          margin-top: 20px;
        }
        img {
          width: 100%;
        }

      }
</style>