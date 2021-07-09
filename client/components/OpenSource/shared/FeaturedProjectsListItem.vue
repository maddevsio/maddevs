<template>
  <li class="featured-projects-list__item">
    <NuxtLink
      :to="link"
      class="featured-projects-list__item-link"
    >
      <div class="featured-projects-list__item-info">
        <img
          :src="$getMediaFromS3(`/images/OpenSource/svg/${name}.svg`)"
          width="62"
          height="62"
          :alt="name"
        >
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <button>button</button>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'FeaturedProjectsListItem',
  props: {
    name: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.featured-projects-list__item {
  position: relative;
  display: block;
  border-radius: 4px;
  background-color: $bgcolor--black-pale;
  &-link {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 67px 60px 45px;
  }
  &-info {
    h3 {
      margin-top: 27px;
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.013em;
      color: $text-color--white-primary;
    }
    p {
      margin-top: 21px;
      font-size: 17px;
      line-height: 25px;
      letter-spacing: -0.013em;
      color: $text-color--silver;
    }
  }
  button {
    margin-top: 50px;
  }
}
</style>
