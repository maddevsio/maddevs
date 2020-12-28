<template>
  <section class="case_footer container_full">
    <div class="case_logotype nambafood"></div>
    <h2 class="case_title case_title_h2">
      <slot></slot>
    </h2>
    <a href="/case-studies/namba-food" class="case_next-project-button">Read next project</a>
  </section>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/cases/mixins";

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

  &_logotype {
    @include nambafood-footer;
    width: 115px;
    height: 103px;
    margin-bottom: 41px;
  }

  &_title {
    margin-bottom: 51px;
    text-align: center;
  }

  &_next-project-button {
    padding: 11px 28px;
    background-color: $bgcolor--black;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    @include default_text($text-color--white-primary, 17px, 166%, -0.035em, normal);
  }

  /deep/ &_mobile-screen-break {
    display: none;
  }

  @media screen and (max-width: 768px) {
    &_footer {
      padding-top: 70px;
      padding-bottom: 100px;

      &::before {
        width: calc(100% - 99px);
      }
    }

    &_logotype {
      @include nambafood-footer;
      width: 91px;
      height: 81px;
      margin-bottom: 31px;
    }

    &_title {
      margin-bottom: 41px;
    }

    &_next-project-button {
      @include default_text($text-color--white-primary, 16px, 150%, -0.02em, normal);
    }
  }

  @media screen and (max-width: 420px) {
    /deep/ &_mobile-screen-break {
      display: block;
    }
  }
}
</style>
