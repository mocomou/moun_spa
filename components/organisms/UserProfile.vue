<template>
  <div class="userProfile">
    <div class="userProfile__wrap">
      <AtomsIcon
        :icon="icon"
        class="userProfile__icon"
      />
      <h2
        class="userProfile__name"
      >
        {{ name }}
      </h2>
    </div>
    <div class="setting-btn">
      <AtomsButton
        class="primary button"
        character="編集"
        @click="setting()"
      />
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped lang="scss">
.userProfile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 20px;
}

.userProfile__wrap {
  display: flex;
  align-items: center;
}
.userProfile__icon {
  height: 100px;
  width: 100px;
}
.userProfile__name {
  padding-left: 30px;
}

.setting__btn {
  @include div-pc-btn();
}

.button {
  @include pc-btn();
}
</style>
