<template>
  <section id="issues-and-solution" class="issues-and-solution">
    <div class="issues-and-solutio__head-content">
      <h2 class="issues-and-solution__main-title">Issues and Solution</h2>
      <img src="@/assets/img/GoDee/png/issues-and-solution-bg.png" class="issues-and-solution__background-image" alt="Background">
    </div>
    <div class="container">
      <div class="issues-and-solution__transportation">
        <div class="issues-and-solution__content-wrapper">
          <div class="issues-and-solutio__left-text-content">
            <div class="issues-and-solution__description-item">
              <div class="issues-and-solution__description-title"></div>
              <p class="issues-and-solution__description-paragraph"></p>
            </div>
            <div class="issues-and-solution__description-item">
              <div class="issues-and-solution__description-title"></div>
              <p class="issues-and-solution__description-paragraph"></p>
              <div class="issues-and-solution__description-icons-group">
                <div class="issues-and-solution__icon-item">
                  <img src="" alt="">
                  <p class="issues-and-solution__icon-designation"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="issues-and-solutio__image-wrapper">
            <img src="#" alt="">
          </div>
        </div>
        <div class="issues-and-solution__empty-white-block"></div>
      </div>
    </div>
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
