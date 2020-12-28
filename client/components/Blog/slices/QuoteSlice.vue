<template>
  <div class='post-part single'>
      <blockquote
        class="block-quotation"
        v-html="$prismic.asHtml(slice.primary.quote)"
        v-if="slice.primary.quotation_design === 'border'"/>
      <text-quote
        class="post-quote"
        v-if="slice.primary.quotation_design === 'brackets'">
        {{ $prismic.asText(slice.primary.quote) }}
      </text-quote>
      <div
        class="author"
        :class="`p-${slice.primary.quotation_design}`">
        <div class="author__image" v-if="slice.primary.portrait_author.url">
          <prismic-image :field="slice.primary.portrait_author.mobile"/>
        </div>
        <div class="author__name" v-if="authorName">{{authorName}}</div>
      </div>
  </div>
</template>

<script>
import TextQuote from '@/components/Cases/TextQuote';
export default {
  components: {
    TextQuote
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  name: 'quote-slice',
  computed: {
    authorName: function(){
      return this.$prismic.asText(this.slice.primary.name_of_the_author);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/_vars';

  .block-quotation {
    display: inline-block;
    font-style: italic;
    font-size: 17px;
    line-height: 28px;
    margin: 0 0 24px;
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

  .author {
    display: flex;
    align-items: center;
    margin-bottom: 48px;

    &.p {
      &-border {
        padding-left: 37px;
      }

      &-brackets {
        padding-left: 62px;
        margin-top: -26px;
      }
    }

    &__image {
      margin-right: 8px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }

    &__name {
      font-family: 'Inter-Regular', sans-serif;
      color: $text-color--grey-team-list;
      font-style: italic;
      font-size: 16px;
      line-height: 166%;
      letter-spacing: -0.035em;
    }
  }

  /deep/ .post-quote {
    margin-left: 0;
    margin-right: 0;
  }
</style>
