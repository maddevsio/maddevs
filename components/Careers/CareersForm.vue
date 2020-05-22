<template>
  <section id="careers" class="careers">
    <div class="container">
      <div class="careers__wrapper">
        <img
          class="careers__background-logo"
          src="@/assets/img/Careers/svg/careers_logo.svg"
          alt="Careers Background Image"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CareersForm',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.careers {
  padding: 63px 102px 102px 92px;
  background: $bgcolor--grey-light;

  &__wrapper {
    position: relative;
  }

  &__background-logo {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
