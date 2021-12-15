<template>
  <nav class="sideBar">
    <!-- logout -->
    <li class="sideBarList"><NuxtLink to="/login" class="sideBarLink">ログイン</NuxtLink></li>
    <li class="sideBarList"><a href="#" class="sideBarLink">mounとは</a></li>
    <!-- login -->
    <li class="sideBarList"><a href="#" class="sideBarLink">タイムライン</a></li>
    <li class="sideBarList"><a href="#" class="sideBarLink">フォロー</a></li>
    <li class="sideBarList"><a href="#" class="sideBarLink">いいね</a></li>
    <li class="sideBarList"><a href="#" class="sideBarLink">新着</a></li>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.sideBar {
  position: sticky;
  top: 100px;
  left: 0;
  // flex-basis: 173px;
  list-style-type: none;
  margin: 40px;
}

.sideBarList {
  padding-bottom: 20px;
}

.sideBarLink {
  text-decoration: none;
  color: $base-font-color;
}

.sideBarLink:hover {
  color: $hover-color;
}
</style>
