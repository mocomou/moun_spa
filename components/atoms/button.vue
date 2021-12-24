<template>
  <button class="btn">
    <span>post</span>
  </button>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.btn {
  color: $base-font-color;
  border: 2px solid $base-font-color;
  background-color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.7rem 0.9rem;
  margin: 10px 0;
  width: $btn-width;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.3s;
}

.btn:hover {
  background-color: $base-font-color;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}
</style>
