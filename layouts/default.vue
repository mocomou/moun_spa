<template>
  <div>
    <OrganismsHeader />
    <div class="container">
      <aside class="container__aside">
        <OrganismsSideBar />
      </aside>
      <main class="container__main">
        <Nuxt />
      </main>
    </div>
    <footer>
      <OrganismsFooter />
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~/assets/style/normalize.scss';
.container {
  margin: 0;
  display: flex;
  height: 100vh;
}

.container__aside {
  background-color: #eaeaea;
}

.container__main {
  flex-basis: 85%;
}
</style>
