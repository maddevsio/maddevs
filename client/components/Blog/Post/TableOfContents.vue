<template>
  <div class="table-of-contents">
    <div class="table-of-contents__title">
      Contents:
    </div>
    <div
      v-if="anchors && anchors.length"
      class="table-of-contents__links"
    >
      <NuxtLink
        v-for="(anchor, i) in anchors"
        :key="anchor.lable"
        :to="anchor.link"
        class="table-of-contents__links-link"
      >
        {{ i + 1 }}. {{ anchor.lable }}
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

  computed: {
    anchors() {
      if (this.slice.items && this.slice.items.length) {
        return this.slice.items.map(item => ({
          lable: item.lable[0].text,
          link: this.createAnchorID(item.lable[0].text),
        }))
      }
      return []
    },
  },

  methods: {
    createAnchorID(text) {
      if (!text || typeof text !== 'string') return null
      const formattedText = `#${text.trim().toLowerCase().replace(/\s+/g, '-')}`
      return formattedText
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';
@import '../../../assets/styles/cases/mixins';

.table-of-contents {
  width: 100%;
  max-width: 200px;

  &__title {
    color: #101113;
    line-height: 130%;
    margin-bottom: 18px;
    font-weight: bold;
  }

  &__links {
    display: flex;
    flex-direction: column;

    &-link {
      width: 100%;
      display: block;
      text-decoration: none;
      font-size: 14px;
      line-height: 130%;
      letter-spacing: -0.1px;
      color: #101113;
      margin-bottom: 6px;
      padding: 10px 8px;
      border-radius: 8px;

      &.nuxt-link-active {
        background-color: rgba(247, 199, 68, 0.2);
      }
    }
  }
}
</style>
