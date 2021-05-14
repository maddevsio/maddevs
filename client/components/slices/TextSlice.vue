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
@import '@/assets/styles/_vars.scss';

.textslice {
  word-break: break-word;
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
</style>
