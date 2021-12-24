<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <img src="/images/header/icon.png" alt="icon" class="header__image">
        <h1 class="header__title">moun</h1>
      </div>
      <div class="header__user">
        <font-awesome-icon :icon="['far', 'user']" class="header__user-icon" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300&display=swap');
.header {
  // top: -webkit-sticky;
  top: 0;
  @include max-width();
  height: $header-height;
  background-color: #202020;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  margin: 0 40px;
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__image {
  width: 36px;
}

.header__title {
  font-size: 2.2rem;
  padding-left: 4px;
  margin: 0;
  color: white;
  font-family: 'Heebo', sans-serif;
}

.header__user-icon {
  color: white;
  font-size: 28px;
}
</style>
