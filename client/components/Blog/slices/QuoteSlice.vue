<template>
  <div class="post-part single">
    <blockquote
      v-if="slice.primary.quotation_design === 'border'"
      class="block-quotation"
      v-html="$prismic.asHtml(slice.primary.quote)"
    />
    <text-quote v-if="slice.primary.quotation_design === 'brackets'" class="post-quote">
      {{ $prismic.asText(slice.primary.quote) }}
    </text-quote>
    <div
      v-if="slice.primary.portrait_author.url || authorName"
      :class="`p-${slice.primary.quotation_design}`"
      class="author"
    >
      <div v-if="slice.primary.portrait_author.url" class="author__image">
        <prismic-image :field="slice.primary.portrait_author.mobile" />
      </div>
      <div v-if="authorName" class="author__name">{{ authorName }}</div>
    </div>
  </div>
</template>

<script>
import TextQuote from '@/components/Cases/shared/TextQuote'

export default {
  name: 'QuoteSlice',
  components: {
    TextQuote,
  },

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  computed: {
    authorName() {
      return this.$prismic.asText(this.slice.primary.name_of_the_author)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/_vars';

.block-quotation {
  display: inline-block;
  font-style: italic;
  font-size: 17px;
  line-height: 28px;
  margin: 24px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
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
  border-left: solid #b4b4b4 4px;
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
    font-family: 'Inter', sans-serif;
    font-weight: 400;
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
