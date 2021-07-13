<template>
  <div>
    <div
      v-for="item in slice.items"
      :key="item.text_title"
      class="vacancy-text-slice"
    >
      <h2
        v-if="item.text_title"
        class="vacancy-text-slice__title"
      >
        <span
          class="vacancy-text-slice__icon"
          v-html="item.text_icon || '☑️'"
        />
        {{ item.text_title }}
      </h2>
      <PrismicRichText
        :field="item.text_content"
        :html-serializer="htmlSerializer"
        class="vacancy-text-slice__content"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VacancyText',

  props: {
    slice: {
      type: Object,
      required: true,
    },

    htmlSerializer: {
      type: Function,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
.vacancy-text-slice {
  &__icon {
    font-size: 27px;
  }
}
</style>
