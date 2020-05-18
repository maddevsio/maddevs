<template>
  <section id="open-source" class="open-source">
    <div class="container">
      <div>
        <h3 class="open-source__section-title section-title">
          Our code - available in open source - is used by many other companies.
        </h3>
        <h4 class="open-source__sub-title sub-title">
          70+ of Mad Devs' pet projects have been shared with the community via GitHub.
        </h4>
      </div>
      <div class="open-source__projects"></div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'OpenSource'
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.open-source {
  padding: 99px 0 205px;
  margin-top: 120px;
  background: $bgcolor--grey-light;

  &__section-title {
    margin-bottom: 31px;
    position: relative;
  }

  &__sub-title {
    color: $text-color--grey;
    &::after {
      content: url('../../assets/img/Projects/svg/github.svg');
      position: relative;
      right: 10px;
      top: 25px;
    }
  }
}

</style>
