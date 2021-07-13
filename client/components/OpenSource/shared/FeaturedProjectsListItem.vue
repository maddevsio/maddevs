<template>
  <li class="featured-projects-list__item">
    <a
      :href="link"
      target="_blank"
      class="featured-projects-list__item-link"
    >
      <div class="featured-projects-list__item-info">
        <img
          :data-src="$getMediaFromS3(`/images/OpenSource/svg/${logo.name}.svg`)"
          class="media_lazy"
          width="62"
          height="62"
          :alt="logo.alt"
        >
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <UIArrowButton class="featured-projects-list__item-button" />
    </a>
  </li>
</template>

<script>
import UIArrowButton from '@/components/shared/UIArrowButton'

export default {
  name: 'FeaturedProjectsListItem',
  components: {
    UIArrowButton,
  },

  props: {
    logo: {
      type: Object,
      default: () => ({}),
    },

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
  &:hover {
    .featured-projects-list__item-button {
      background-color: $border-color--white;
      color: $text-color--black-oil;
    }
  }
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
}
</style>
