<template>
  <div class="wrap">
    <OrganismsHeader
      class="header"
    />
    <div class="inner">
      <aside class="inner__aside">
        <OrganismsSideBar />
      </aside>
      <main class="inner__main">
        <Nuxt />
      </main>
    </div>
    <OrganismsFooter
      class="footer"
    />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~/assets/style/normalize.scss';
@import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');
.wrap {
  position: relative;
  min-height: 100vh;
}
.inner {
  margin: 0;
  display: flex;
  @include base-font();
}

.inner__aside {
  background-color: #eaeaea;
  // position: sticky;
  width: 170px;
  min-height: 100vh;
  @include base-font();
}

.inner__main {
  flex-basis: 85%;
  margin-top: $header-height;
  margin-bottom: $footer-height;
  @include base-font();
}

.header {
  position: fixed;
  z-index: 100;
}

.footer {
  position: absolute;
  bottom: 0;
  @include base-font();
}

@media all and (max-width: 1023px) {
  .inner__aside {
    display: none;
  }
}
</style>
