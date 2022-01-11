<template>
  <div class="setting">
    <input v-model="user_name" class="setting__user-name">
    <input id="file" type="file" @change="fileUpload( $event )">
    <div class="update-btn">
      <AtomsButton
        class="primary button"
        character="update"
        @click="update()"
      />
    </div>
  </div>
</template>

<script>
export default ({
  // props: {
  //   user: {
  //     type: Object,
  //     require: true,
  //     default: () => {}
  //   }
  // },
  data () {
    return {
      user_name: 'aaa',
      user_icon: null
    }
  },
  methods: {
    fileUpload (event) {
      this.user_icon = event.target.files[0]
    },
    update () {
      const params = 'aaabbb'
      const url = `/api/v1/users/${params}`
      const formData = new FormData()
      formData.append('user_icon', this.user_icon)
      formData.append('user_name', this.user_name)
      this.$axios.patch(url,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          // this.$router.push(`/users/${res.data.user.user_name}`)
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
</script>

<style scoped lang="scss">
.setting__user-name {
  border: solid 2px gray;
}

.setting__user-icon {
  height: 100px;
  width: 100px;
}

.update__btn {
  @include div-pc-btn();
}

.button {
  @include pc-btn();
}
</style>
