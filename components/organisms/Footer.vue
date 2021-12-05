<template>
  <footer>
    <ul class="footer">
      <div class="footer__container">
        <li><a class="footer__item">プライバシー</a></li>
        <li><a class="footer__item">利用規約</a></li>
        <li><a class="footer__item">お問い合わせ</a></li>
      </div>
    </ul>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
ul {
  position: relative;
  color: $base-font-color;
  background-color: black;
  height: 60px;
  width: 100%;
  max-width: 984px;
  margin: 0 auto;
}

.footer__container {
  position: absolute;
  right: 50px;
  padding: 20px 0;
}

li {
  display: inline;
}

.footer__item {
  font-size: 15px;
  padding-left: 20px;
}
</style>
