<template>
  <div class="setting">
    <input id="file" type="file" @change="fileUpload( $event )">
    <img :src="user_icon" alt="user_icon" class="user_icon">
    <input
      v-model="user_name"
      class="setting__user-name"
      placeholder="`${user_name}`"
    >
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
      user_icon: this.icon,
      user_name: this.name
    }
  },
  methods: {
    fileUpload (event) {
      const userIcon = event.target.files[0]
      this.user_icon = window.URL.createObjectURL(userIcon)
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
.setting__user-name {
  font-size: 1.8rem;
  background-color: #fafafa;
  outline: none;
}

.setting__user-icon {
  height: 100px;
  width: 100px;
}

.user_icon {
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
