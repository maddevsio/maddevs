<template>
  <section class="ebook-learn-card">
    <img
      v-if="icon"
      width="54"
      height="54"
      :data-src="require(`@/assets/img/Ebook/${icon}`)"
      alt="Icon"
      class="media_lazy"
    >
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  name: 'EbookLearnCard',
  props: {
    icon: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: 'Card title',
    },

    description: {
      type: String,
      default: 'Card description',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.ebook-learn-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #1D1D1F;
  border-radius: 4px;
  padding: 24px;

  img {
    width: 54px;
    height: 54px;
    margin-bottom: 27px;
  }

  h4 {
    @include font('Inter', 21px, 600);
    line-height: 24px;
    letter-spacing: -1px;
    color: #fff;
    margin-bottom: 21px;
  }

  p {
    @include font('Inter', 16px, 400);
    line-height: 24px;
    letter-spacing: -0.4px;;
    color: #CFCFD0;
  }
}
</style>
