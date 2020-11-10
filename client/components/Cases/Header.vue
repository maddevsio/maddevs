<template>
  <section class="case_header">
    <div class="case_logotype"></div>
    <h1 class="case_title">Namba Food: Top 1 Delivery Service in Central Asia</h1>
    <button type="button" class="case_more__button">Read our case studies ↓</button>
  </section>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/cases/header";
@import "../../assets/styles/cases/mixins";

.case {
  &_header {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &_title {
    @include title_h1($text-color--white);
  }
}
</style>
