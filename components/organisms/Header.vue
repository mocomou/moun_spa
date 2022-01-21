<template>
  <header class="header">
    <div class="header__container">
      <div class="header__inner-left">
        <NuxtLink to="/" class="header__logo" tag="div">
          <img src="/images/header/icon.png" alt="icon" class="header__image">
          <h1 class="header__title">
            moun
          </h1>
        </NuxtLink>
      </div>
      <div class="header__inner-right">
        <NuxtLink
          to="/create"
          class="header__link"
        >
          <template v-if="loggedIn">
            <AtomsIcon
              v-if="userIcon"
              :icon="userIcon"
              class="header__icon"
            />
            <font-awesome-icon
              v-else
              :icon="['fas', 'user']"
            />
          </template>
        </NuxtLink>
        <AtomsHamburgerMenu
          class="header__menu"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    userIcon () {
      return this.$store.state.user.userIcon
    },
    loggedIn () {
      return this.$store.state.user.loggedIn
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300&display=swap');
.header {
  // top: -webkit-sticky;
  width: 100%;
  top: 0;
  height: $responsive-header-height;
  background-color: #202020;
  // transition: all .2s;
}

.header__container {
  display: flex;
  justify-content: space-between;
  @include max-width();
}

.header__inner-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $responsive-header-height;
}

.header__inner-right {
  display: flex;
  align-items: center;
}

.header__link {
  height: 36px;
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

.header__icon {
  width: 36px;
  height: 36px;
}
.header__menu {
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

  .header__user-icon:hover {
  opacity: 0.8;
  }

  .header__menu {
    display: none;
  }

}

</style>
