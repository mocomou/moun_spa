<template>
  <picture>
    <source :srcset="webpImage" type="image/webp">
    <img :src="originalImage" alt="" class="image">
  </picture>
</template>

<script>
export default {
  props: {
    originalImage: {
      type: String,
      required: true
    },
    webpImage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.image {
  object-fit: cover;
  width: 100%;
  border-radius: 6px 6px 0 0;
}
</style>
