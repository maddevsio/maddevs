<template>
  <section class="case_header">
    <div class="case_logotype nambafood"></div>
    <h1 class="case_title">Namba Food: <br> Top 1 Delivery Service <br> in Central Asia</h1>
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
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("../../assets/img/Cases/nambafood/nambafood.gif");;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: red;
  }

  &_logotype {
    @include nambafood;
    width: 127px;
    height: 114px;
    margin-bottom: 54px;
  }

  &_title {
    @include title($text-color--white, 51.88px, -2px);
    text-align: center;
  }

  &_more__button {
    position: absolute;
    bottom: 0;
    max-width: 1104px;
    height: 55px;
    width: 100%;
    background-color: $bgcolor--pink;
    border: 0;
    cursor: pointer;

    @include default_text($text-color--white, 18px, 30px, -0.035em);
  }
}
</style>
