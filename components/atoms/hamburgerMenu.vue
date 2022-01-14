<template>
  <div class="menu">
    <button
      class="hamburger"
      @click="$store.commit('menu/toggleMenu')"
    >
      <span
        class="hamburger__line"
        :class="{ open: $store.state.menu.active }"
      >
        <span class="hamburger__name">
          メニューを開閉する
        </span>
      </span>
    </button>
    <nav
      class="menu__nav"
      :class="{ open: $store.state.menu.active }"
    >
      <ul class="menu__list">
        <!-- logout -->
        <template v-if="!loggedIn">
          <li class="menu__item">
            <button class="menu__link" @click="userLogin ()">
              ログイン
            </button>
          </li>
          <!-- <li class="menu__item">
            <a href="#" class="menu__link">
              mounとは
            </a>
          </li> -->
        </template>
        <!-- login -->
        <template v-else>
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
  computed: {
    loggedIn () {
      return !!this.$auth.strategy.token.get()
    }
  },
  methods: {
    async userLogin () {
      await this.$auth.login()
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
  position: relative;
}

.menu__nav {
  background-color: #203744;
  background-image: url("./static/images/hamburger/background.JPG");
  position: fixed;
  // z-index: -100;
  display: flex;
  animation: closeNav 0.5s forwards;
  // display: none;
  justify-content: center;
  text-align: center;
  height: 100%;
  top: $responsive-header-height;
  left: 0;
  width: 100%;
  transition: all .5s;
  // transition-property: all;
  // opacity: 0;
}

.menu__nav.open {
  // opacity: 0.8;
  // display: flex;
  animation: openNav 0.5s forwards;
}

@keyframes openNav {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
}

@keyframes closeNav {
  0% {
    opacity: 0.8;
  }
  99% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2000px);
  }
}

.menu__list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu__item {
  list-style: none;
}

.menu__link {
  text-decoration: none;
  color: white;
  display: block;
  padding: 12px 12px;
  font-size: 1.3rem;
}

.hamburger {
  position: relative;
  width: $menu-size;
  height: $menu-size;
}

.hamburger__line,
.hamburger__line::after,
.hamburger__line::before {
  display: block;
  background-color: white;
  width: $menu-size;
  height: $menu-line-height;
  transition: all .3s;
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
  transform: translateY(-50%) rotate(45deg);
}

.hamburger__line.open::after {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
}

.hamburger__name {
  display: block;
  width: 1px;
  height: 1px;
  visibility: hidden;
  overflow: hidden;
  white-space: nowrap;
}
</style>
