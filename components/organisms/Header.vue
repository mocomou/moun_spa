<template>
  <header class="header">
    <AtomsImage
      original-image="/images/header/moon.jpg"
      webp-image="/images/header/moon.webp"
    />
    <h1 class="header__title">
      moun
    </h1>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
.header {
  position: relative;
  @include max-width();
}

.header__title {
  position: absolute;
  bottom: 30px;
  left: 40px;
  font-size: 4rem;
  margin: 0;
  text-align: center;
  color: $base-font-color;
  font-family: 'Ubuntu', sans-serif;
}
</style>
