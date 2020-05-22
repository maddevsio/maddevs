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

  .container {
    position: relative;
  }

  &__background-logo {
    position: absolute;
    bottom: 0;
    right: 0;
    height: auto;
  }
}

@media only screen and (max-width: 1024px) {
  .careers {
    &__background-logo {
      height: 250px;
      bottom: 10px;
    }
  }
}

@media only screen and (max-width: 870px) {
  .careers {
    &__background-logo {
      height: 220px;
      bottom: 20px;
      right: -70px;
    }
  }
}

@media only screen and (max-width: 670px) {
  .careers {
    &__background-logo {
      height: 180px;
      bottom: 28px;
    }
  }
}

@media only screen and (max-width: 455px) {
  .careers {
    &__background-logo {
      height: 108px;
      bottom: 42px;
    }
  }
}
</style>
