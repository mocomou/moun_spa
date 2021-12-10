<template>
  <div>
    <picture>
      <source :srcset="webpImage" type="image/webp">
      <img :src="originalImage" alt="" class="image">
    </picture>
  </div>
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
  height: 100%;
}
</style>
