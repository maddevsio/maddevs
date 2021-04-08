<template>
  <div class="post-part single">
    <PrismicRichText
      :class="className"
      :field="slice.primary.text"
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
    if (this.$props.slice.primary.text[0] && this.$props.slice.primary.text[0].type === 'heading1') {
      this.className = this.$props.slice.primary.text[0].text.toLowerCase().replace(/\s/g, '-')
    }
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
    color: $text-color--black-cases;
  }

  /deep/ h1,
  /deep/ li {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  /deep/ strong {
    font-family: 'Inter-Bold', sans-serif;
    font-weight: 700;
  }

  /deep/ p,
  /deep/ li {
    font-size: 17px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }

  /deep/ p {
    margin: 12px 0;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  /deep/ pre {
    padding: 20px;
    overflow: auto;
    background: $bgcolor--grey-light;
    border-radius: 2px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
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
