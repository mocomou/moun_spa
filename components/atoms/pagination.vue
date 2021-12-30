<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="totalPages"
      circle
      @click="getPage()"
    />
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      page: ''
    }
  }
  // methods: {
  //   getPage () {
  //     const params = {
  //       url: '/api/v1/posts',
  //       page_number: this.page
  //     }
  //     this.$axios.get(params)
  //       .then((res) => {
  //         console.log(res)
  //       })
  //   }
  // }
}
</script>

<style scoped lang="scss">
</style>
