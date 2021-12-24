<template>
  <button>
    {{ character }}
  </button>
</template>

<script>
export default {
  props: {
    character: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss">
.primary {
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

.primary:hover {
  background-color: $base-font-color;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.secondary {
  color: $secondary-font-color;
  border: 2px solid $secondary-font-color;
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

.secondary:hover {
  background-color: $secondary-font-color;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}
</style>
