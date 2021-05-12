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
      if (type === 'heading2') {
        return this.createAnchorTag('h2', text)
      }
      if (type === 'heading3') {
        return this.createAnchorTag('h3', text)
      }
      if (type === 'heading4') {
        return this.createAnchorTag('h4', text)
      }
      if (type === 'heading5') {
        return this.createAnchorTag('h5', text)
      }
      if (type === 'heading6') {
        return this.createAnchorTag('h6', text)
      }
      return null
    },

    createAnchorID(text) {
      if (!text || typeof text !== 'string') return null
      const formattedText = text.trim().toLowerCase().replace(/\s+/g, '-')
      return formattedText
    },

    createAnchorTag(tag, text) {
      return `
        <div id="${this.createAnchorID(text)}" class="anchor_title">
          <${tag} class="anchor_title-h">${text}</${tag}>
          <div class="anchor_copy-link">
            <img src="${require('@/assets/img/common/anchor.svg')}" alt="Anchor" />
            <button data-id="${this.createAnchorID(text)}" class="copy-link">Copy link</button>
          </div>
        </div>
      `
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

/deep/ .anchor_title {
  position: relative;

  .anchor_copy-link {
    img {
      width: 16px;
      height: 16px;
      display: none;
      position: absolute;
      left: -36px;
      top: 50%;
      transform: translateY(-50%);
      padding: 12px;
      cursor: pointer;
    }

    button {
      display: none;
      position: absolute;
      left: -102px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #F4F4F4;
      padding: 4px 8px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 0;
      line-height: 18px;
      color: #101113;
      cursor: pointer;
      transition: all 0.1s ease;
      @include font('Inter', 12px, 400);

      &:hover {
        box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.2);
      }

      &:active {
        box-shadow: 1px 1px 6px 0px rgba(34, 60, 80, 0.2);
        transform: translateY(-48%) translateX(1px);
      }
    }

    &:hover {
      button {
        display: block;
      }
    }
  }

  &:hover {
    .anchor_copy-link img {
      display: block;
    }
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
