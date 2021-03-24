<template>
  <section class="case_footer container_full">
    <slot name="icon"></slot>
    <h2 :class="`case_title-${className}`" class="case_title case_title_h2">
      <slot></slot>
    </h2>
    <a :href="link" class="case_next-project-button">Read next project</a>
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
@import '../../assets/styles/cases/mixins';

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

  &_title-sjmc-case,
  &_title-godee-case {
    margin-bottom: 51px;
  }

  &_title-namba-food-case {
    margin-bottom: 25px;
  }

  &_next-project-button {
    padding: 11px 28px;
    background-color: $bgcolor--black;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    @include default_text($text-color--white-primary, 17px, 166%, -0.035em, normal);
  }

  @media screen and (max-width: 768px) {
    &_footer {
      padding-top: 70px;
      padding-bottom: 100px;

      &::before {
        width: calc(100% - 99px);
      }
    }

    &_title-sjmc-case,
    &_title-godee-case {
      margin-bottom: 41px;
    }

    &_next-project-button {
      @include default_text($text-color--white-primary, 16px, 150%, -0.02em, normal);
    }
  }
}
</style>
