<template>
  <section class="case-studies">
    <div class="container">
      <h2 class="case-studies__main-title main-title">
        Case
        <span>Studies</span>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseStudies'
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.case-studies {
  &__main-title {
    padding-bottom: 41px;
    display: inline-block;
    color: $text-color--red;

    span {
      color: $text-color--black;
      text-shadow: -1px 0 $text-color--red, 0 1px $text-color--red,
        1px 0 $text-color--red, 0 -1px $text-color--red;
    }
  }

  @media only screen and (max-width: 520px) {
    .case-studies {
      &__main-title {
        padding-bottom: 31px;
      }
    }
  }
}
</style>
