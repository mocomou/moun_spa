<template>
  <div class="setting">
    <div class="setting__profile-wrap">
      <img :src="preview" alt="user_icon" class="setting__preview-icon">
      <div class="setting__user-icon-wrap" />
      <label>
        <font-awesome-icon :icon="['fas', 'camera']" class="setting__select-user-icon" />
        <input class="setting__user-icon" type="file" @change="fileUpload( $event )">
      </label>
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
  justify-content: space-between;
  margin: 24px 20px;

}

.setting__user-name {
  // padding-left: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  outline: none;
  position: relative;
  top: 20px;
  left: 30px;
}

.setting__profile-btn-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.setting__icon-wrap {
  display: block;
}

.setting__preview-icon {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 100vh;
  position: absolute;
}

.setting__user-icon-wrap {
  background-color: #e0e0e0;
  position: relative;
  top: 24px;
  left: 5px;
  opacity: 0.5;
  border-radius: 50px 50px;
  height: 50px;
  width: 50px;
  margin-left: 20px;
}

.setting__select-user-icon {
  color: #333;
  font-size: 1.4rem;
  position: relative;
  top: 38px;
  left: -31px;
}

.setting__select-user-icon:hover {
  opacity: 0.8;
}

.setting__user-icon {
  display: none
}

.setting__profile-wrap {
  display: flex;
}

.update__btn {
  @include div-pc-btn();
}

.button {
  @include pc-btn();
}
</style>
