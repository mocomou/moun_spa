<template>
  <li class="card">
    <AtomsImage
      original-image="/images/header/moon.jpg"
      webp-image="/images/header/moon.webp"
      class="card__image"
    />
    <h3 class="card__title">
      {{ post.title }}
    </h3>
    <div class="card__detail">
      <div class="card__inner">
        <span class="card__icon" />
        <!--
        {{ post.icon }}
        -->
        <NuxtLink
          :to="`/users/${post.user_name}`"
          class="card__link"
        >
          <span class="card__user-name">@{{ post.user_name }}</span>
        </NuxtLink>
      </div>
      <span class="card__date">{{ post.created_at }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
$card-width: 300px;
$card-height: 300px;

.card {
  border: 1px solid gray;
  border-radius: 2px;
  // padding: 8px;
  width: $card-width;
  height: $card-height;
}

.card__image {
  width: $card-width;
  height: calc(#{$card-height} / 3 * 2);
}

.card__title {
  margin: 16px 32px;
}

.card__detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px;
}

.card__inner {
  display: flex;
  align-items: center;
}

.card__icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 100vh;
  background-color: gray;
  margin-right: 4px;
}

.card__link {
  text-decoration: none;
  color: $base-font-color;
}

.card__user-name {
  font-weight: bold;
}

.card__date {
  font-size: 0.7rem;
}
</style>
