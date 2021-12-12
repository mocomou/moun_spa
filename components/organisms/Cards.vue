<template>
  <div class="cards">
    <ul class="cards__container">
      <AtomsCard
        v-for="post in posts"
        :key="post"
        :post="post"
      />
    </ul>
  </div>
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
.cards__container {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 40px 40px;
  gap: 40px 40px;
  padding: 0 auto;
  margin: 0;
}
</style>
