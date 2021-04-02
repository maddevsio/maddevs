<template>
  <div
    v-if="slice.items.length"
    :class="slice.items[0].embed.type"
    class="embed"
  >
    <prismic-embed
      :field="slice.items[0].embed"
      :class="`embed__${slice.items[0].embed.type}`"
      target="_blank"
    />
    <template v-if="slice.items[0].embed.type === 'link'">
      <div class="embed__image-wrapper">
        <div
          :style="{ backgroundImage: `url(${slice.items[0].embed.thumbnail_url})` }"
          class="embed__image"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'EmbedSlice',
  props: {
    slice: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      sliceData: {
        items: [],
      },
    }
  },

  created() {
    this.sliceData = this.slice
    if (!this.sliceData.items.length) return

    if (this.sliceData.items[0].embed.html) {
      this.sliceData.items[0].embed.html = this.sliceData.items[0].embed.html
        .replace('<h1>', '<div class="embed__title">')
        .replace('</h1>', '</div>')
        .replace(/<img[^>]*>/g, '')
        .replace(/<a href="http[^"]*"/, match => `${match} target="_blank"`)
        /**
         * replaces text inside <div class="embed__title"></div> tag
         * split removes the " | Mad Devs Pagename" prefix
         */
        .replace(/(?<=<div class="embed__title">).*?(?=<\/div>)/, match => this.sliceData.items[0].embed_title || match.split(' | ')[0])
        // replaces text inside <p></p> tag (description)
        .replace(/(?<=<p>).*?(?=<\/p>)/, match => this.sliceData.items[0].embed_description || match)
    }

    if (this.sliceData.items[0].embed.type === 'video') {
      this.sliceData.items[0].embed.html = this.sliceData.items[0].embed.html
        .replace(/height="[0-9]*"/, 'height="500"')
        .replace(/width="[0-9]*"/, 'width="100%"')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';
.embed {
  /deep/ iframe {
    max-width: 100%;
  }

  &.link {
    display: flex;
    justify-content: space-between;
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
    width: 100%;
    display: flex;
    align-items: center;
    padding: 24px 0 24px 24px;
  }

  /deep/ &__title {
    margin-top: 0;
    margin-bottom: 6px;
    font-size: 21px;
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 600;
    color: $text-color--black-cases;
    line-height: 27.34px;
  }

  &__image {
    width: 100%;
    height: 100%;
    min-width: 136px;
    min-height: 60px;
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
