<template>
  <div class="table-of-contents">
    <div class="table-of-contents__title">
      Table of contents
    </div>
    <div
      v-if="anchors && anchors.length"
      class="table-of-contents__links"
    >
      <NuxtLink
        v-for="anchor in anchors"
        :key="anchor.lable"
        :to="anchor.link"
        class="table-of-contents__links-link"
      >
        {{ anchor.lable }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    console.log(this.slice)
  },

  computed: {
    anchors() {
      if (this.slice.items && this.slice.items.length) {
        return this.slice.items.map(item => ({
          lable: item.lable[0].text,
          link: item.link.url,
        }))
      }
      return []
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';
@import '../../../assets/styles/cases/mixins';

.table-of-contents {
  padding: 23px 24px;
  background-color: $bgcolor--silver;

  &__title {
    @include title($text-color--black-oil, 21px, -0.04em);
    margin-bottom: 20px;
    @include font('Inter', 21px, 400);
  }

  &__list {
    padding-left: 20px;
    margin: 0;

    &-item {
      @include font('Inter', 16px, 400);
      padding: 7px 0 12px;

      a {
        text-decoration: none;
        color: $text-color--black-oil;

        &:hover {
          text-decoration: underline;
        }

        &:visited {
          color: inherit;
        }
      }
    }
  }
}
</style>
