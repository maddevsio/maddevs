<template>
  <li
    class="boilerplates-list__item"
    :class="[
      fullWidth ? 'boilerplates-list__item--full-width' : null,
      bottomPadding ? 'boilerplates-list__item--bottom-padding' : null,
    ]"
  >
    <NuxtLink
      :to="link"
      class="boilerplates-list__item-link"
    >
      <div class="boilerplates-list__item-info">
        <h3
          v-html="title"
        />
        <p
          v-html="description"
        />
        <UIArrowButton color="black" />
      </div>
      <img
        class="boilerplates-list__item-logo"
        :src="$getMediaFromS3(`/images/OpenSource/svg/${logo.name}.svg`)"
        :alt="logo.alt"
        :width="logo.width"
        :height="logo.height"
      >
    </NuxtLink>
  </li>
</template>

<script>
import UIArrowButton from '@/components/shared/UIArrowButton.vue'

export default {
  name: 'BoilerplatesListItem',
  components: {
    UIArrowButton,
  },

  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },

    bottomPadding: {
      type: Boolean,
      default: false,
    },

    logo: {
      type: Object,
      default: () => ({
        marginTop: 45,
        marginBottom: 0,
      }),
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

.boilerplates-list__item {
  background-color: $bgcolor--silver;
  border-radius: 4px;
  &--full-width {
    grid-column: auto/span 2;
  }
  &--bottom-padding {
    padding-bottom: 104px;
  }
  &:hover {
    /deep/ .ui-arrow-button {
      background-color: $text-color--black-oil;
      color: $text-color--white-primary;
    }
  }
  &-link {
    padding: 90px 112px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 100%;
    color: $text-color--black-oil;
    word-break: break-word;
  }
  &-info {
    h3 {
      font-size: 56px;
      line-height: 60px;
      letter-spacing: -0.013em;
    }
    p {
      margin-top: 31px;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.013em;
      max-width: 814px;
    }
    /deep/ .ui-arrow-button {
      margin: 40px auto 0;
    }
  }
  &-logo {
    margin-top: 45px;
    display: block;
    line-height: 1;
    max-width: 100%;
    width: auto;
    height: auto;
  }
}
</style>
