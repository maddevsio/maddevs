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
    /deep/ h1,
    /deep/ p {
      color: $text-color--white;
      font-family: 'Hoves-Bold';
    }

    /deep/ p {
      margin: get-vw(15px) 0;
      font-size: 1.2vw;
      font-family: 'Hoves-Regular', sans-serif;
      line-height: 129%;
      letter-spacing: -0.02em;

      a {
        font-family: 'Hoves-Regular', sans-serif;
        text-decoration: underline;
        color: $text-color--white;
      }
    }

    /deep/ pre {
      padding: 20px;
      overflow: auto;
      background: $bgcolor--white;
      border-radius: 2px;
      font-family: 'Hoves-Regular', sans-serif;
    }
  }
</style>
