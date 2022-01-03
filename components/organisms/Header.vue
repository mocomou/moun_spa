<template>
  <header class="header">
    <div class="header__inner-left">
      <NuxtLink to="/" class="header__logo" tag="div">
        <img src="/images/header/icon.png" alt="icon" class="header__image">
        <h1 class="header__title">
          moun
        </h1>
      </NuxtLink>
      <div class="header__inner-right">
        <NuxtLink to="/create">
          <div class="header__user">
            <font-awesome-icon :icon="['far', 'user']" class="header__user-icon" />
          </div>
        </NuxtLink>
        <NuxtLink to="#">
          <div class="header__menu">
            <font-awesome-icon :icon="['fas', 'bars']" class="header__menu-icon" />
          </div>
        </NuxtLink>
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
  // transition: all .2s;
  // display: none;
}
.header__inner-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  margin: 0 20px;
}

.header__inner-right {
  display: flex;
}

.header__logo {
  display: flex;
  align-items: center;
  list-style: none;
}

.header__image {
  width: 18px;
}

.header__title {
  font-size: 1.6rem;
  padding-left: 4px;
  margin: 0;
  color: white;
  font-family: 'Heebo', sans-serif;
}

.header__user-icon {
  color: white;
  font-size: 18px;
}
.header__menu-icon {
  color: white;
  font-size:16px;
  margin-left: 12px;
}

@media all and (min-width: 1024px) {
  .header__logo:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .header__image {
    width: 36px;
  }

  .header__title {
    font-size: 2.2rem;
  }

  .header__user-icon {
  color: white;
  font-size: 28px;
}

  .header__user-icon:hover {
  opacity: 0.8;
}

  .header__menu-icon {
    display: none;
  }
}

</style>
