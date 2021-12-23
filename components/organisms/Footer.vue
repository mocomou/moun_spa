<template>
  <footer class="footer">
    <ul class="footer__list">
      <li>
        <a>プライバシー</a>
      </li>
      <li>
        <a>利用規約</a>
      </li>
      <li>
        <a>お問い合わせ</a>
      </li>
    </ul>
    <small class="footer__copy-right">©️ 2022 moun</small>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.footer {
  @include max-width();
  color: $base-title-color;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0;
  height: $footer-height;
}

.footer__list {
  margin-right: 40px;
  padding: 0;
  font-size: 0.5rem;
  display: flex;
  gap: 24px;
  list-style: none;
}

.footer__copy-right {
    margin-right: 40px;
    font-size: 0.5rem;
    padding-bottom: 8px;
}
</style>
