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

    htmlSerializer: {
      type: Function,
      default: () => null,
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
