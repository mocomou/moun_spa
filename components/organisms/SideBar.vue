<template>
  <nav class="sidebar">
    <ul class="sidebar__list">
      <!-- logout -->
      <li class="sidebar__item"><NuxtLink to="/login" class="sidebar__link">ログイン</NuxtLink></li>
      <li class="sidebar__item"><a href="#" class="sidebar__link">mounとは</a></li>
      <!-- login -->
      <li class="sidebar__item"><a href="#" class="sidebar__link">タイムライン</a></li>
      <li class="sidebar__item"><a href="#" class="sidebar__link">フォロー</a></li>
      <li class="sidebar__item"><a href="#" class="sidebar__link">いいね</a></li>
      <li class="sidebar__item"><a href="#" class="sidebar__link">新着</a></li>
      <li class="sidebar__item"><NuxtLink to="/logout" class="sidebar__link">ログアウト</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.sidebar {
  position: relative;
  list-style-type: none;
  margin: 40px;
  width: 100px ;
  top: $header-height;
}

.sidebar__list {
  position: fixed;
  padding: 0;
  list-style: none;
}

.sidebar__item {
  padding-bottom: 20px;
}

.sidebar__link {
  text-decoration: none;
  color: $base-font-color;
}

.sidebar__link:hover {
  color: $hover-color;
}
</style>
