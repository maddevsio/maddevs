<template>
  <div class="post-part single">
    <PrismicRichText
      :class="className"
      :field="slice.primary.text"
      :html-serializer="htmlSerializer"
      class="textslice"
    />
  </div>
</template>

<script>
export default {
  name: 'TextSlice',
  props: {
    slice: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      className: '',
    }
  },

  mounted() {
    if (this.slice.primary.text[0] && this.slice.primary.text[0].type === 'heading1') {
      this.className = this.slice.primary.text[0].text.toLowerCase().replace(/\s/g, '-')
    }
  },

  methods: {
    htmlSerializer(type, element, content, children) {
      const text = children.join('')
      if (type === 'heading1') {
        return `<h1 id="${this.createAnchorID(text)}">${text}</h1>`
      }
      if (type === 'heading2') {
        return `<h2 id="${this.createAnchorID(text)}">${text}</h2>`
      }
      if (type === 'heading3') {
        return `<h3 id="${this.createAnchorID(text)}">${text}</h3>`
      }
      if (type === 'heading4') {
        return `<h4 id="${this.createAnchorID(text)}">${text}</h4>`
      }
      if (type === 'heading5') {
        return `<h5 id="${this.createAnchorID(text)}">${text}</h5>`
      }
      if (type === 'heading6') {
        return `<h6 id="${this.createAnchorID(text)}">${text}</h6>`
      }
      return null
    },

    createAnchorID(text) {
      if (!text || typeof text !== 'string') return null
      const formattedText = text.trim().toLowerCase().replace(/\s+/g, '-')
      return formattedText
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';

.textslice {
  /deep/ strong,
  /deep/ p,
  /deep/ h1,
  /deep/ li {
    color: $text-color--black-oil;
  }

  /deep/ h1,
  /deep/ li {
    @include font('Inter', 16px, 400);
  }

  /deep/ strong {
    @include font('Inter', 16px, 700);
  }

  /deep/ p,
  /deep/ li {
    font-size: 17px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }

  /deep/ p {
    @include font('Inter', 16px, 400);
    margin: 12px 0;
  }

  /deep/ pre {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    font-weight: 400;
    padding: 20px;
    overflow: auto;
    background: $bgcolor--grey-light;
    border-radius: 2px;
    line-height: 24px;
  }

  /deep/ ol {
    margin: 35px 0;
  }

  /deep/ li {
    margin-bottom: 8px;
  }

  /deep/ a {
    text-decoration: underline;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }

  /deep/ img {
    max-width: 100%;
    height: auto;
  }
}

@media only screen and (max-width: 1024px) {
  .textslice {
    /deep/ h2 {
      font-size: 26px;
      line-height: 33px;
    }

    /deep/ h5 {
      font-size: 20px;
      line-height: 27px;
    }

    /deep/ p {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
