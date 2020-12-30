<template>
  <div class="table-of-contents">
    <div class="table-of-contents__title">Table of contents</div>
    <ol class="table-of-contents__list">
      <li class="table-of-contents__list-item" v-for="link in content" :key="link.spans[0].data.url">
        <a :href="link.spans[0].data.url" @click.prevent="scrollToSection">
          {{link.text}}
        </a>
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
      required: true
    }
  },
  created() {
    this.content.forEach((link => link.spans[0].data.url = link.spans[0].data.url.replace('https://', '')));
  },
  methods: {
    scrollToSection(e) {
      const id = e.target.getAttribute('href').replace('#', '');
      const element = document.getElementById(id);
      if (element !== null) {
        window.scrollTo({
          top: element.offsetTop + 180,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/vars";
  @import '../../assets/styles/cases/mixins';

  .table-of-contents {
    padding: 23px 24px;
    background-color: $bgcolor--silver;

    &__title {
      @include title($text-color--black-cases, 21px, -0.04em);
      margin-bottom: 20px;
      font-family: 'Inter-Regular', sans-serif;
    }

    &__list {
      padding-left: 20px;
      margin: 0;

      &-item {
        padding: 7px 0 12px;
        font-family: 'Inter-Regular', sans-serif;

        a {
          text-decoration: none;

          &:visited {
            color: inherit;
          }
        }
      }
    }
  }
</style>
