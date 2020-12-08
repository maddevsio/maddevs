<template>
  <div class='post-part single'>
    <prismic-rich-text class="textslice" :class="className" :field="slice.primary.text"/>
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
  name: 'text-slice',
  data() {
    return {
      className: ''
    };
  },
  mounted() {
    if (this.$props.slice.primary.text[0].type === 'heading1') {
      this.className = this.$props.slice.primary.text[0].text.toLowerCase().replace(/\s/g , '-');
    }
  }
};
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
      font-family: 'Inter-Regular', sans-serif;
    }

    /deep/ h1 {
      margin: 72px 0 48px;
      font-size: 1.9em;
      font-weight: normal;
    }

    /deep/ h2 {
      font-size: 42px;
      line-height: 54px;
    }

    /deep/ h5 {
      font-size: 21px;
      line-height: 28px;
    }

    /deep/ h2,
    /deep/ h3,
    /deep/ h4,
    /deep/ h5,
    /deep/ h6 {
      margin-top: 40px;
      margin-bottom: 30px;
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
      margin: 25px 0;
      font-family: 'Inter-Regular', sans-serif;
    }

    /deep/ em {
        display: block;
        padding: 5px 12px;
        border-left: 3px solid $border-color--white;
    }

    /deep/ pre {
      padding: 20px;
      overflow: auto;
      background: $bgcolor--grey-light;
      border-radius: 2px;
      font-family: 'Inter-Regular', sans-serif;
      line-height: 24px;
    }

    /deep/ ol {
      margin: 35px 0;
    }

    /deep/ li {
      margin-bottom: 20px;
    }

    /deep/ a {
      text-decoration: underline;
      color: $text-color--black-cases;
      font-family: 'Inter-Regular', sans-serif;
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
