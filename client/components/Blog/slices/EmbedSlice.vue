<template>
  <div class="embed">
    <prismic-embed :field="slice.items[0].embed" target="_blank"/>
    <div class="embed__image-wrapper">
      <div class="embed__image" :style="{backgroundImage: `url(${slice.items[0].embed.thumbnail_url})`}" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      default: null
    }
  },
  name: 'embed-slice'
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';
  .embed {
    display: flex;
    margin: 25px 0;
    border: 1px solid $border-color--silver;

    /deep/ > div {
      display: flex;
      padding: 24px 0 24px 24px;

      a {
        text-decoration: none;
      }

      img {
        display: none;
      }

      h1 {
        margin-bottom: 6px;
        font-size: 21px;
        font-family: 'Poppins-Bold', sans-serif;
        font-weight: 600;
        color: $text-color--black-cases;
      }

      h1,
      p {
        letter-spacing: -0.02em;
        line-height: 129%;
      }

      p {
        font-size: 13px;
        font-family: 'Poppins-Regular', sans-serif;
        color: $text-color--grey-pale;
      }
    }

    &__image {
      width: 100%;
      background-size: contain;
      background-position: right;
      background-repeat: no-repeat;

      &-wrapper {
        width: 33%;
        padding: 24px !important;
      }
    }
  }
</style>
