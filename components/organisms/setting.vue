<template>
  <div class="setting">
    <div class="setting__profile-btn-wrap">
      <div class="setting__profile-wrap">
        <img :src="preview" alt="user_icon" class="setting__preview-icon">
        <input
        v-model="user_name"
        class="setting__user-name"
        placeholder="`${user_name}`"
        >
      </div>
      <div class="update-btn">
        <AtomsButton
          class="primary button"
          character="update"
          @click="update()"
        />
      </div>
    </div>
    <input class="setting__user-icon" type="file" @change="fileUpload( $event )">
  </div>
</template>

<script>
export default ({
  props: {
    icon: {
      type: String,
      require: true,
      default: ''
    },
    name: {
      type: String,
      require: true,
      default: ''
    }
  },
  data () {
    return {
      preview: this.icon,
      user_icon: null,
      user_name: this.name
    }
  },
  methods: {
    fileUpload (event) {
      this.user_icon = event.target.files[0]
      this.preview = window.URL.createObjectURL(this.user_icon)
    },
    update () {
      const url = `/api/v1/users/${this.user_name}`
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
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
</script>

<style scoped lang="scss">
.setting {
  display: flex;
  flex-direction: column;
  margin: 24px 20px;

}

.setting__profile-wrap {
  display: flex;
}

.setting__user-name {
  padding-left: 20px;
  font-size: 1.6rem;
  font-weight: bold;
  outline: none;
}

.setting__profile-btn-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.setting__preview-icon {
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
