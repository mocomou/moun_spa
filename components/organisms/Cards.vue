<template>
  <ul class="cards">
    <div class="cards__container">
      <AtomsCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
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
.cards{
  // margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.cards__container {
  // list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  grid-gap: 40px 40px;
  gap: 40px 40px;
  // ここでそれっぽくしてるだけ
  // padding: 40px 80px;
}
</style>
