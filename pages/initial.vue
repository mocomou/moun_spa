<template>
  <div class="setting">
    <h2 class="setting-explanation">
      プロフィール画像とユーザー名を登録してください
    </h2>
    <img :src="preview" alt="user_icon" class="setting__preview-icon">
    <label class="setting__user-icon-wrap">プロフィール画像を選択
      <input class="setting__user-icon" type="file" @change="fileUpload( $event )">
    </label>
    <input
      v-model="user_name"
      class="setting__user-name"
      placeholder="ユーザー名"
    >
    <div class="update-btn">
      <AtomsButton
        class="primary button"
        character="登録"
        @click="create()"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      preview: this.user_icon,
      user_icon: 'static/images/userDefault/icon.png',
      user_name: ''
    }
  },
  methods: {
    fileUpload (event) {
      this.user_icon = event.target.files[0]
      this.preview = window.URL.createObjectURL(this.user_icon)
    }
  }
}
</script>

<style scoped lang="scss">
.setting {
  width: 420px;
  margin: 30px auto;
  padding: 30px 40px;
  // border: solid 1px #eaeaea;
  box-shadow: 0 0 4px 4px #f0f0f0;
}

.setting-explanation {
  // font-weight: normal;
  font-size: 1.2rem;
}

.setting__user-icon {
  display: none;
}

.setting__user-name {
  display: inline-block;
  border: solid 1px #cacaca;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 30px auto;
  font-size: 1.6rem;
  font-weight: bold;
  outline: none;
}

.setting__user-icon-wrap{
  display: flex;
  justify-content: center;
}

.setting__user-icon-wrap:hover {
  color: $hover-color;
}
.setting__preview-icon {
  display: block;
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 100vh;
  margin: 30px auto 12px auto;
}
.update__btn {
  @include div-pc-btn();
}

.button {
  width: 340px;
  margin: 12px auto;
}
</style>
