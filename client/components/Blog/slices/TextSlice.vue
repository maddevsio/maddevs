<template>
  <div class='post-part single'>
    <prismic-rich-text class="textslice" :field="slice.primary.text"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';
  @import '../../../assets/styles/get-vw';

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
