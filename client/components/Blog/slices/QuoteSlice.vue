<template>
  <div class='post-part single'>
    <blockquote class="block-quotation">
      {{ $prismic.asText(slice.primary.quote) }}
    </blockquote>
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
    font-size: 24px;
    margin: 0;
    font-family: 'Poppins-Regular', sans-serif;
    color: $text-color--white;

    &:before {
      content: "« ";
    }

    &:after {
      content: " »";
    }
  }

  .block-citation {
    display: inline-block;
    font-style: italic;
    border-left: solid #B4B4B4 4px;
  }
</style>
