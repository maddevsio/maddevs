<template>
  <section
    class="title-desc"
    :class="textColor === 'black' ? 'title-desc--black-text' : 'title-desc--white-text'"
  >
    <h2 v-html="title" />
    <p
      v-if="description"
      v-html="description"
    />
  </section>
</template>

<script>
export default {
  name: 'TitleDesc',
  props: {
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    textColor: {
      type: String,
      default: 'black',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.title-desc {
  display: block;
  max-width: 1028px;
  margin: 0 auto;
  text-align: center;
  &--white-text {
    color: $text-color--white-primary;
  }
  &--black-text {
    color: $text-color--black-oil;
  }
  h2 {
    font-size: 80px;
    font-weight: 700;
    line-height: 67px;
    letter-spacing: -0.013em;
  }
  p {
    margin-top: 50px;
    font-size: 32px;
    font-weight: 600;
    line-height: 44px;
    letter-spacing: -0.013em;
  }

  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 60px;
      line-height: 60px;
    }
    p {
      margin-top: 29px;
      font-size: 24px;
      line-height: 35px;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 40px;
      line-height: 40px;
    }
    p {
      margin-top: 21px;
      font-size: 21px;
      line-height: 30px;
    }
  }

  @media screen and (max-width: 485px) {
    /deep/ p br {
      display: none;
    }
  }
}
</style>
