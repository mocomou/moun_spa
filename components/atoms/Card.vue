<template>
  <li class="card">
    <AtomsImage
      original-image="/images/card/card_image.jpg"
      webp-image="/images/card/card_image.webp"
    />
    <h3 class="card__title">
      {{post.title}}
    </h3>
    <div class="card__detail">
      <div class="card__user">
        <span class="card__icon">
          <!-- {{post.icon}} -->
        </span>
        <NuxtLink
          :to="`/users/${post.user_name}`"
          class="card__link"
        >
          <span class="card__user-name">
            {{post.user_name}}
          </span>
        </NuxtLink>
      </div>
      <span class="card__created-at">
        {{ $dateFns.format(new Date(post.created_at), 'yyyy/MM/dd') }}
      </span>
    </div>
  </li>

</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
$card-width: 320px;
$card-height: 274px;

.card {
  box-shadow:0px 0px 5px #808080;
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  width: $card-width;
  height: $card-height;
}

.card__title {
  margin: 12px 16px 8px 16px;
  font-weight: bold;
  font-size: 1.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  color: #333;
}

.card__detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 12px;
}

.card__user {
  display: flex;
  align-items: center;
}

.card__user-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 4px;
}
.card__user-name:hover {
  color:$hover-color;
}

.card__created-at {
  font-size: 0.9rem;
}
</style>
