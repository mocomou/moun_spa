<template>
  <ul class="cards">
    <AtomsCard
      v-for="item in posts"
      :key="item"
      :post="item"
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
