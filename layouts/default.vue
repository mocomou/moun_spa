<template>
  <div class="wrap">
    <OrganismsHeader
      class="header"
    />
    <div class="container">
      <aside class="container__aside">
        <OrganismsSideBar />
      </aside>
      <main class="container__main">
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
.wrap {
  position: relative;
  min-height: 100vh;
}

.header {
  position: fixed;
  z-index: 100;
}

.container {
  margin: 0;
  display: flex;
}

.container__aside {
  background-color: #eaeaea;
  // position: sticky;
  width: 170px;
  min-height: 100vh;
}

.container__main {
  flex-basis: 85%;
  margin-top: $header-height;
  margin-bottom: $footer-height;
}

.footer {
  position: absolute;
  bottom: 0;
}
</style>
