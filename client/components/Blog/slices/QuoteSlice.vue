<template>
  <div class='post-part single'>
    <blockquote class="block-quotation" v-html="$prismic.asHtml(slice.primary.quote)"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'quote-slice'
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';

  .block-quotation {
    display: inline-block;
    font-style: italic;
    font-size: 17px;
    line-height: 28px;
    margin: 0 0 48px;
    font-family: 'Inter-Regular', sans-serif;
    color: $text-color--black-cases;
    border-left: 2px solid $border-color--red;
    padding-left: 35px;

    /deep/ p {
      margin-bottom: 28px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .block-citation {
    display: inline-block;
    font-style: italic;
    border-left: solid #B4B4B4 4px;
  }
</style>
