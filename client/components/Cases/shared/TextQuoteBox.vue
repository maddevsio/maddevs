<template>
  <div class="case_quote-wrap">
    <blockquote class="case_blockquote-box m-auto">
      <slot />
    </blockquote>
    <p
      v-if="author"
      class="case_quote-author"
    >
      {{ author }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextQuoteBox',
  props: {
    author: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_blockquote-box,
  &_quote-author {
    padding-left: 35px;
  }

  &_blockquote-box {
    border-left: 2px solid $border-color--red;
    @include italic-text($text-color--quote-box, 17px, 166%, -0.035em);

    &_text-modificator {
      color: $text-color--red;
    }
  }

  &_quote-author {
    @include italic-text($text-color--grey-opacity-40-percent, 16px, 166%, -0.035em);
  }

  @media screen and (max-width: 768px) {
    &_blockquote-box,
    &_quote-author {
      padding-left: 24px;
    }

    &_blockquote-box {
      @include italic-text($text-color--quote-box, 17px, 153%, -0.035em);
    }
  }
}
</style>
