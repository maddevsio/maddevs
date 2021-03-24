<template>
  <nuxt-link :to="link" class="navigation-item">{{ title }}</nuxt-link>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    link: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.navigation-item {
  margin-right: 48px;
  border-bottom: 1px solid rgba(236, 28, 36, 0.5);
  color: $text-color--grey-light;
  font-size: 19px;
  line-height: 24px;
  font-family: 'Poppins-Regular', sans-serif;
  letter-spacing: -0.04em;
  text-decoration: none;
  transition: 0.3s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border-bottom: 1px solid rgba(236, 28, 36, 1);
  }

  @media screen and (max-width: 1090px) {
    margin-right: 15px;
  }

  @media only screen and (max-width: 970px) {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.03em;
    background-position-y: 4px;
  }

  @media screen and (max-width: 690px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 25px;
    max-width: fit-content;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
