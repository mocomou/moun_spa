<template>
  <ul class="cards">
    <AtomsCard
      v-for="post in posts"
      :key="post"
      :post="post"
    />
  </ul>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.cards {
  list-style: none;
}
</style>
