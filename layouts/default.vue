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
  // @include max-width-body();
  margin: 0;
  display: flex;
}

.container__aside {
  flex-basis: 22%;
}

.container__main {
  flex-basis: 74%;
  justify-content: flex-end;
}

</style>
