<template>
  <div class="post-section-bordered">
    <div class="post-section-bordered__inner">
      <div
        class="post-section-bordered__column post-section-bordered__column--left"
        v-html="$prismic.asHtml(slice.primary.left_column)"
      />
      <div class="post-section-bordered__column post-section-bordered__column--right">
        <PrismicImage :field="slice.primary.right_column" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoubleColumnBorderedSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.post-section-bordered {
  border: 1px solid $border-color--silver;
  margin-bottom: 48px;
  margin-top: 24px;
  padding: 44px 24px 24px;

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    & > div {
      margin-top: 0;
    }
    /deep/ h5 {
      font-size: 21px;
      line-height: 28px;
      margin-bottom: 6px;
    }
    /deep/ p {
      font-size: 13px;
      line-height: 22px;
      margin-bottom: 6px;
      color: $text-color--grey-pale;
    }
    @media screen and (min-width: 992px) and (max-width: 1200px) {
      grid-template-columns: 3fr 1fr;
    }
  }

  &__column {
    &--left {
      @media only screen and (max-width: 1024px) {
        order: 2;
      }
    }
    &--right {
      @media only screen and (max-width: 1024px) {
        order: 1;
      }
    }
  }
}

</style>
