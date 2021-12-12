<template>
  <header class="header">
    <div class="header__logo">
      <img src="/images/header/icon.png" alt="icon" class="header__icon">
      <h1 class="header__title">moun</h1>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
.header {
  @include max-width();
  height: 80px;
  background-color: black;
  display: flex;
  align-items: center;
}

.header__logo {
  display: flex;
  align-items: center;
  margin-left: 40px;
}

.header__icon {
  width: 50px;
}

.header__title {
  font-size: 3rem;
  padding-left: 4px;
  margin: 0;
  color: $base-font-color;
  font-family: 'Ubuntu', sans-serif;
}
</style>
