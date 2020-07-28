<template>
  <section id="issues-and-solution" class="issues-and-solution">
    <div class="container">
      <h2 class="issues-and-solution__main-title">Issues and Solution</h2>
    </div>
    <img src="@/assets/img/GoDee/png/issues-and-solution-bg.png" class="issues-and-solution__background-image" alt="Background">
  </section>
</template>

<script>
export default {
  name: 'IssuesAndSolution'
};
</script>

<style lang="scss">
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .issues-and-solution {
    position: relative;
    margin-bottom: get-vw(78px);

    &__main-title {
      margin-top: get-vw(173px);
      margin-bottom: get-vw(55px);
      text-align: center;
      font-size: get-vw(90px);
      font-family: 'Hoves-Bold';
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
    }

    &__background-image {
      width: get-vw(1680px);
      height: get-vw(387px);
    }
  }
</style>
