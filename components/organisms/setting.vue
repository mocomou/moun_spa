<template>
  <div class="setting">
    <div class="setting__profile-wrap">
      <div class="setting__image">
        <img :src="preview" alt="user_icon" class="setting__preview-icon">
        <div class="setting__user-icon-wrap" />
        <label>
          <font-awesome-icon :icon="['fas', 'camera']" class="setting__select-user-icon" />
          <input class="setting__user-icon" type="file" @change="fileUpload( $event )">
        </label>
      </div>
      <input
        v-model="user_name"
        class="setting__user-name"
        placeholder="`${user_name}`"
      >
    </div>
    <div class="setting__btn">
      <div class="update-btn">
        <AtomsButton
          class="primary button"
          character="更新"
          @click="update(), $store.commit('setting/openComponent')"
        />
      </div>
      <div class="cancel-btn">
        <AtomsButton
          class="primary button"
          character="キャンセル"
          @click="cancel(), $store.commit('setting/openComponent')"
        />
      </div>
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
  //   show: {
  //     type: Boolean,
  //     require: true,
  //     default: true
  //   }
  },
  data () {
    return {
      preview: this.icon,
      user_icon: null,
      user_name: this.name
      // showComponent: this.show
    }
  },
  methods: {
    fileUpload (event) {
      this.user_icon = event.target.files[0]
      this.preview = window.URL.createObjectURL(this.user_icon)
    },
    update () {
      const url = `/api/v1/users/${this.name}`
      const formData = new FormData()
      if (this.user_icon) {
        formData.append('user_icon', this.user_icon)
      }
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
          // this.showComponent = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    cancel () {
      this.$emit('close')
    }
  }
})
</script>

<style scoped lang="scss">
.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 20px;
}

.setting__profile-wrap {
  display: flex;
  align-items: center;
}

.setting__image {
  position: relative;
  height: 100px;
  width: 100px;
}

.setting__preview-icon {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 100vh;
  position: absolute;
}

.setting__user-icon-wrap {
  background-color: #e0e0e0;
  position: absolute;
  opacity: 0.5;
  border-radius: 100vh;
  height: 50%;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.setting__select-user-icon {
  color: #333;
  font-size: 1.4rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.setting__select-user-icon:hover {
  opacity: 0.8;
}

.setting__user-icon {
  display: none
}

.setting__user-name {
  margin-left: 20px;
  padding: 0px 20px;
  font-size: 1.5rem;
  font-weight: bold;
  outline: none;
  height: 56px;
  border: solid 2px #f0f0f0;
  border-radius: 4px;
}

.setting__btn {
  display: flex;
}

.update__btn {
  @include div-pc-btn();
}

.button {
  @include pc-btn();
}

.cancel__btn {
  @include div-pc-btn();
}

@media all and (max-width: 1023px) {
  .setting {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 0px;
  }

  .setting__btn {
    display: flex;
    flex-direction: row;
  }
}
</style>
