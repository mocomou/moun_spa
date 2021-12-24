<template>
  <button class="btn">
    Post
  </button>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.btn {
  color: white;
  font-weight: bold;
  background-color: #f8b500;
  font-size: 0.8rem;
  padding: 0.7rem 0.9rem;
  margin: 10px 0;
  box-sizing: content-box;
  width: $btn-width;
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 4px #cc9600;
}

.btn:hover {
  cursor: pointer;
  opacity: 0.9;
}

.btn:active {
  box-shadow: none;
  transform: translateY(4px);
}
</style>
