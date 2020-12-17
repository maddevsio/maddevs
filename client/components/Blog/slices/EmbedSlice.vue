<template>
  <div class="embed">
    <prismic-embed :field="slice.items[0].embed"/>
    <div class="embed__image" :style="{backgroundImage: `url(${slice.items[0].embed.thumbnail_url})`}" />
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
    border: 1px solid $border-color--grey;

    /deep/ div {
      display: flex;
      padding: 10px;

      a {
        text-decoration: none;
      }

      img {
        display: none;
      }

      h1 {
        margin-bottom: 10px;
        font-size: 18px;
        font-family: 'Poppins-Bold', sans-serif;
        font-weight: 700;
        color: $text-color--white;
      }

      h1,
      p {
        letter-spacing: -0.02em;
        line-height: 129%;
      }

      p {
        font-size: 16px;
        font-family: 'Poppins-Regular', sans-serif;
        color: $text-color--grey;
      }
    }

    &__image {
      width: 100%;
      padding: 0 !important;
      background-size: contain;
      background-position: right;
      background-repeat: no-repeat;
    }
  }
</style>
