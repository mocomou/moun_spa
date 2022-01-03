<template>
  <div class="menu">
    <!--
    <button
      class="header__menu"
      @click="active=!active"
    >
      <font-awesome-icon :icon="['fas', 'bars']" class="header__menu-hamburger"/>
    </button>
    -->
    <button
      class="hamburger"
      @click="active=!active"
    >
      <span
        class="hamburger__line"
        :class="{ open: active }"
      >
        <span class="hamburger__name">
          メニューを開閉する
        </span>
      </span>
    </button>
    <!-- <button
      class="header__menu"
    >
      <font-awesome-icon :icon="['fas', 'times']" class="header__menu-cross" />
    </button> -->
    <!--
    <nav v-show="active" class="menu__nav">
    -->
    <nav
      class="menu__nav"
      :class="{ open: active }"
     >
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
.menu {
  position: relative;
}

.header__menu {
  color: white;
}

.menu__nav {
  background-color: #404040;
  position: fixed;
  top: $header-height;
  // top: -100px;
  left: 0;
  width: 100%;
  transition: all 1s;
  opacity: 0;
}

.menu__nav.open {
  top: $header-height;
  opacity: 1;
}

.menu__item {
  list-style: none;
}

.menu__link {
  display: block;
  color: white;
  text-decoration: none;
  padding: 8px 8px 8px 40px;
}

$menuSize: 16px;
$menuLineHeight: 2px;

.hamburger {
  position: relative;
  width: $menuSize;
  height: $menuSize;
}

.hamburger__line,
.hamburger__line::after,
.hamburger__line::before {
  display: block;
  background-color: white;
  width: $menuSize;
  height: $menuLineHeight;
  transition: all .5s;
}

.hamburger__line::after,
.hamburger__line::before {
  position: absolute;
  content: '';
}

.hamburger__line::before {
  top: 0;
}

.hamburger__line::after {
  bottom: 0;
}

.hamburger__line.open {
  background-color: transparent;
}

.hamburger__line.open::before {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

.hamburger__line.open::after {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.hamburger__name {
  display: block;
  width: 0px;
  height: 0px;
  visibility: hidden;
}
</style>
