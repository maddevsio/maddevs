<template>
  <div class="table-of-contents">
    <div class="table-of-contents__title">
      Table of contents
    </div>
    <ol class="table-of-contents__list">
      <li
        v-for="(link, index) in content"
        :key="index"
        class="table-of-contents__list-item"
      >
        <template v-if="link.type === 'list-item'">
          <a
            data-testid="test-link-table"
            :href="link.spans.length ? link.spans[0].data.url : null"
            @click.prevent="scrollToSection"
          >
            {{ link.text }}
          </a>
        </template>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    content: {
      type: Array,
      required: true,
    },
  },

  created() {
    this.content.forEach(link => {
      if (link.spans.length) {
        // eslint-disable-next-line
        link.spans[0].data.url = link.spans[0].data.url.replace('https://', '');
      }
    })
  },

  methods: {
    scrollToSection(e) {
      const id = e.target.getAttribute('href') ? e.target.getAttribute('href').replace('#', '') : null
      const element = document.getElementById(id)
      if (element !== null) {
        window.scrollTo({
          top: element.offsetTop + 180,
          behavior: 'smooth',
        })
      }
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
