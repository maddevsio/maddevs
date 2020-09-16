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
      color: $text-color--white;
    }

    /deep/ h1,
    /deep/ li {
      font-family: 'Hoves-Regular';
    }

    /deep/ h1 {
      margin-top: 60px;
      font-size: 1.9em;
      font-weight: normal;
    }

    /deep/ h2,
    /deep/ h3, 
    /deep/ h4,
    /deep/ h5,
    /deep/ h6 {
      margin-top: 40px;
      margin-bottom: 30px;
    }

    /deep/ strong,
    /deep/ p {
      font-family: 'Hoves-Bold';
    }

    /deep/ p,
    /deep/ li {
      font-size: 18px;
      line-height: 129%;
      letter-spacing: -0.02em;
    }


    /deep/ p {
      margin: 25px 0;
      font-family: 'Hoves-Regular', sans-serif;
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
      font-family: 'Hoves-Regular', sans-serif;
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
      color: $text-color--white;
      font-family: 'Hoves-Regular', sans-serif;
    }
  }
</style>
