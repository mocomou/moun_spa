<template>
  <button @click="click">
    {{ character }}
  </button>
</template>

<script>
export default {
  props: {
    character: {
      type: String,
      required: true,
      default: 'ボタン'
    }
  },
  methods: {
    click () {
      console.log('foobar')
    }
  }
}
</script>

<style lang="scss">
.primary {
  color: white;
  background-color: $base-font-color;
  border: none;
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
  // background-color: black;
  // color: $base-font-color;
  // border: 2px solid $base-font-color;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.4s;
}

.secondary {
  color: white;
  border: none;
  // border: 2px solid $secondary-font-color;
  background-color: $secondary-font-color;
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
  // background-color: $secondary-font-color;
  // color: white;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s;
}
</style>
