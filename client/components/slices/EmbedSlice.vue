<template>
  <div
    v-if="slice.items && slice.items.length"
    :class="slice.items[0].embed.type"
    class="embed"
  >
    <PrismicEmbed
      :field="embedFieldData"
      :class="`embed__${slice.items[0].embed.type}`"
      target="_blank"
    />
    <template v-if="slice.items[0].embed.type === 'link'">
      <div class="embed__image-wrapper">
        <img
          width="150"
          height="126"
          class="embed__image img_lazy"
          :data-src="slice.items[0].embed.thumbnail_url"
        >
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
      default: () => ({}),
    },
  },

  data() {
    return {
      embedFieldData: {},
    }
  },

  created() {
    const { items } = this.slice
    if (!(items && items.length)) return

    const {
      embed: {
        url,
        title: rawTitle,
        html: rawHtml,
        type: embedType,
      },
      embed_title: embedTitle,
      embed_description: embedDescription,
    } = items[0]

    if (rawHtml) {
      const matchDescription = rawHtml.match('<p>(.*?)</p>')
      const description = matchDescription ? matchDescription[1] || '' : ''

      const html = `
        <div data-type="website">
          <a href="${url}" target="_blank">
            <div class="embed__title">${embedTitle || rawTitle.split(' | ')[0]}</div>
            <p>${embedDescription || description}</p>
          </a>
        </div>
      `

      this.embedFieldData = {
        ...this.slice.embed,
        html,
      }
    }

    if (embedType === 'video') {
      const html = rawHtml
        .replace(/height="[0-9]*"/, 'height="500"')
        .replace(/width="[0-9]*"/, 'width="100%"')

      this.embedFieldData = {
        ...this.slice.embed,
        html,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
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

  /deep/ div {
    a {
      text-decoration: none;
    }
    h1,
    p {
      letter-spacing: -0.02em;
      line-height: 129%;
    }
    p {
      @include font('Inter', 13px, 400);
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
    @include font('Poppins', 21px, 700);
    margin-top: 0;
    margin-bottom: 6px;
    color: $text-color--black-oil;
    line-height: 27.34px;
  }

  &__image {
    width: 100%;
    height: 100%;
    min-width: 136px;
    min-height: 60px;
    object-fit: cover;

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
