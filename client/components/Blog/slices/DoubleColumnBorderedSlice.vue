<template>
  <div class="post-section-bordered">
    <div class="post-section-bordered__inner row">
      <div
        class="column_left col-12 col-lg-9"
        v-html="$prismic.asHtml(slice.primary.left_column)"
      />
      <div class="column_right col-12 col-lg-3">
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
@import '../../../assets/styles/vars';

.post-section-bordered {
  border: 1px solid $border-color--silver;
  margin-bottom: 48px;
  margin-top: 24px;
  padding: 44px 24px 24px;

  &__inner {
    align-items: center;

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

    /deep/ img {
      max-width: 100%;
      height: auto;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .post-section-bordered {
    .column_left {
      order: 2;
    }

    .column_right {
      order: 1;
      margin-bottom: 16px;
    }
  }
}
</style>
