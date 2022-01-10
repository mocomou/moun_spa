<template>
  <div class="setting">
    <input v-model="user_name" class="setting__user-name">
    <input id="file" ref="user_icon" type="file" @change="fileUpload()">
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
  data () {
    return {
      user_name: '',
      user_icon: ''
    }
  },
  methods: {
    fileUpload () {
      this.user_icon = this.$refs.user_icon.files[0]
    },
    update () {
      const params = 12
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
          this.$router.push(`/users/${res.data.user.user_name}`)
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
