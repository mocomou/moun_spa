<template>
  <div class="menu">
    <button
      class="header__menu"
      @click="active=!active"
    >
      <font-awesome-icon :icon="['fas', 'bars']" class="header__menu-hamburger"/>
    </button>
    <!-- <button
      class="header__menu"
    >
      <font-awesome-icon :icon="['fas', 'times']" class="header__menu-cross" />
    </button> -->
    <nav v-show="active" class="menu__nav">
      <ul class="menu__list">
        <!-- logout -->
        <template v-if="!loggedIn">
          <li class="menu__item">
            <NuxtLink to="/login" class="menu__link">
              ログイン
            </NuxtLink>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">
              mounとは
            </a>
          </li>
        </template>
        <!-- login -->
        <template v-else>
          <li class="menu__item">
            <a href="#" class="menu__link">
              タイムライン
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">
              フォロー
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">
              いいね
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">
              新着
            </a>
          </li>
          <li class="menu__item">
            <NuxtLink to="/logout" class="menu__link">
              ログアウト
            </NuxtLink>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  }
}
</script>

<style scoped lang="scss">
.header__menu {
  color: white;
}

.menu__nav {
  background-color: #404040;
}

.menu__item {
  list-style: none;
}

.menu__link {
  color: white;
  text-decoration: none;
}
</style>
