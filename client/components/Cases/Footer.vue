<template>
  <section class="case_footer container_full">
    <div class="case_logotype nambafood"></div>
    <h2 class="case_title case_title_h2">
      <slot></slot>
    </h2>
    <button type="button" class="case_next-project-button">Read next project</button>
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
    background-color: $bgcolor--white-transparent;
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
    @include default_text($text-color--white-primary, 17px, 166%, -0.035em, normal);
  }

  @media screen and (max-width: 768px) {
    &_footer {
      padding-top: 70px;
      padding-bottom: 100px;
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
}
</style>
