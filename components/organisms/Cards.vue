<template>
  <ul class="cards">
    <li
      v-for="post in posts"
      :key="post.id"
      class="cards__item"
    >
      <AtomsCard
        :post="post"
      />
    </li>
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
$card-width: 320px;
$card-height: 274px;
$card-gap: 40px;

.cards{
  width: 1040px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  grid-gap: $card-gap;
  gap: $card-gap;
}

.cards__item {
  box-shadow:0px 0px 5px #808080;
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  overflow: hidden;
  width: $card-width;
  height: $card-height;
}

.cards__item:last-child {
  margin-right: auto;
}
</style>
