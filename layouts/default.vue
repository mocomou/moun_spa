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
}

.container__aside {
  flex-basis: 15%;
}

.container__main {
  flex-basis: 83%;
}

</style>
