<template>
  <div class="embed" :class="slice.items[0].embed.type">
    <prismic-embed :field="slice.items[0].embed" target="_blank" :class="`embed__${slice.items[0].embed.type}`"/>
    <template v-if="slice.items[0].embed.type === 'link'">
      <div class="embed__image-wrapper">
        <div class="embed__image" :style="{backgroundImage: `url(${slice.items[0].embed.thumbnail_url})`}" />
      </div>
    </template>
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
  name: 'embed-slice',
  created() {
    this.slice.items[0].embed.html = this.slice.items[0].embed.html
      .replace('<h1>', '<div class="embed__title">')
      .replace('</h1>', '</div>')
      .replace(/<a href="http[^"]*"/, match => `${match} target="_blank"`)
    ;

    if (this.slice.items[0].embed.type === 'video') {
      this.slice.items[0].embed.html = this.slice.items[0].embed.html.replace(/height="[0-9]*"/, 'height="500"').replace(/width="[0-9]*"/, 'width="100%"');
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';
  .embed {

    /deep/ iframe {
      max-width: 100%;
    }

    &.link {
      display: flex;
      margin: 25px 0;
      border: 1px solid $border-color--silver;
    }

    /deep/ > div {
      a {
        text-decoration: none;
      }

      img {
        display: none;
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

    &__link {
      display: flex;
      padding: 24px 0 24px 24px;
    }

    /deep/ &__title {
      margin-top: 0;
      margin-bottom: 6px;
      font-size: 21px;
      font-family: 'Poppins-Bold', sans-serif;
      font-weight: 600;
      color: $text-color--black-cases;
    }

    &__image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      &-wrapper {
        width: 33%;
        padding: 24px !important;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .embed {
      &.link {
        flex-wrap: wrap;
      }

      &__link {
        order: 2;
        width: 100%;
        padding-right: 24px;
      }
      &__image {
        height: 40vw;

        &-wrapper {
          order: 1;
          width: 100%;
        }
      }
    }
  }
</style>
