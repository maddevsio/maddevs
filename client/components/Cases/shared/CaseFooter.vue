<template>
  <section class="case_footer container_full">
    <slot name="icon" />
    <h2
      :class="`case_title-${className}`"
      class="case_title case_title_h2"
    >
      <slot />
    </h2>
    <NuxtLink
      :to="link"
      class="case_next-project-button"
    >
      Read next project
    </NuxtLink>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    link: {
      type: String,
      default: '',
    },

    className: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.case {
  &_footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 85px;
    padding-bottom: 115px;
    position: relative;
    background-color: $bgcolor--white-transparent;

    &::before {
      content: '';
      width: calc(100% - 198px);
      height: 2px;
      position: absolute;
      top: 0;
      background-color: $border-color--grey-cases;
    }
  }

  &_title {
    text-align: center;
  }

  &_next-project-button {
    padding: 11px 28px;
    background-color: $bgcolor--black;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    @include default-text($text-color--white-primary, 17px, 166%, -0.035em, normal);
  }

  // --------- NambaFood footer styles --------- //
  &_logotype-namba-food {
    width: 200px;
    height: 63px;
    display: block;
    margin-bottom: 33px;
  }

  &_title-namba-food {
    margin-bottom: 51px;
  }

  &_mobile-break-namba-food {
    display: none;

    @media screen and (max-width: 520px) {
      display: block;
    }
  }

  // --------- SJMC footer styles --------- //
  &_logotype-sjmc {
    width: 253px;
    height: 113px;
    display: block;
    margin-bottom: 35px;
  }

  &_title-sjmc {
    margin-bottom: 25px;
  }

  &_mobile-break-sjmc {
    display: none;

    @media screen and (max-width: 420px) {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    &_footer {
      padding-top: 70px;
      padding-bottom: 100px;

      &::before {
        width: calc(100% - 99px);
      }
    }

    &_title-namba-food {
      margin-bottom: 41px;
    }

    &_next-project-button {
      @include default-text($text-color--white-primary, 16px, 150%, -0.02em, normal);
    }

    &_logotype-namba-food {
      width: 160px;
      height: 60px;
      margin-bottom: 25px;
    }

    &_logotype-sjmc {
      width: 212px;
      height: 94px;
      margin-bottom: 25px;
    }
  }
}
</style>
