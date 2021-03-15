<template>
  <div class="contribution-widget">
    <img
      width="20"
      height="18"
      :data-src="require(`@/assets/img/Home/svg/caseIcons/${maddevsLogo}.svg`)"
      class="contribution-widget__img img_lazy"
      alt="Mad Devs logo"
    >
    <span class="contribution-widget__content" :class="`contribution-widget__content_${projectName}`">
      contribution: {{contribution}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'ContributionWidget',
  props: {
    projectName: {
      type: String,
      required: true
    },
    contribution: {
      type: String,
      default: ''
    },
    maddevsLogo: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.contribution-widget {
  display: flex;
  align-items: self-start;
  position: relative;
  z-index: 1;
  color: $text-color--grey;
  font-family: 'Poppins-Regular', sans-serif;
  margin-top: 26px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 24px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 14px;
  }

  @media screen and (max-width: 650px) {
    font-size: 12px;
    line-height: 21px;
  }

  @media screen and (max-width: 608px) {
    font-size: 14px;
    line-height: 20px;
  }

  &__img {
    width: 20px;
    height: 18px;
    margin-top: 2px;
  }

  &__content {
    margin-left: 8px;

    &_godee,
    &_nambafood {
      color: $text-color--black;
    }

    &_guardrails,
    &_sjmc {
      color: $text-color--white-darken;
    }
  }
}
</style>
