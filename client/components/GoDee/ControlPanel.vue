<template>
  <section id="control-panel" class="control-panel">
    <div class="container-godee">
      <div class="control-panel__container">
        <h2 class="control-panel__main-title">Control Panel</h2>
        <div class="control-panel__automation-section">
          <h3 class="control-panel__sub-title">Automation</h3>
          <p class="control-panel__description">GoDee's rapid growth from early stages required an easy to scale business processes <br> and an automated route management. Although, in theory, everything can be done <br> with an army of sales representatives and route operators, GoDee wanted to automate <br> routine operations to have an ability to expand to other cities and countries.</p>
          <p class="control-panel__description-bold">
            One manager and customer support representative <br>
            <span class="control-panel__description">can manage more than</span>
          </p>
        </div>
        <div class="control-panel__statistics">
          <div class="control-panel__count-item">
            <div class="control-panel__count">~2500</div>
            <p class="control-panel__description-bold control-panel__description-bold--black">Trip requests per month</p>
          </div>
          <div class="control-panel__count-item">
            <div class="control-panel__count">~4500</div>
            <p class="control-panel__description-bold control-panel__description-bold--black">Passengers per month</p>
          </div>
        </div>
      </div>
      <img src="@/assets/img/GoDee/svg/control-panel-route-line.svg" alt="Control panel route line" class="control-panel__route-line">
    </div>
  </section>
</template>

<script>
export default {
  name: 'ControlPanel'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .control-panel {
    position: relative;
    margin-bottom: get-vw(143px);
    text-align: center;

    &__main-title,
    &__sub-title,
    &__description-bold,
    &__count {
      font-family: 'Hoves-Bold';
    }

    &__main-title,
    &__description-bold,
    &__count {
      color: $accent-orange-text-color;
    }


    &__main-title {
      margin-bottom: get-vw(50px);
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
    }

    &__sub-title {
      margin-bottom: get-vw(24px);
      font-size: get-vw(50px);
      letter-spacing: get-vw(-2px);
    }

    &__description,
    &__description-bold,
    &__count {
      letter-spacing: get-vw(-1px);
    }

    &__description {
      margin-bottom: get-vw(40px);
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular';
      color: $text-color--grey-dark;
    }

    &__description-bold {
      font-size: get-vw(32px);

      &--black,
      span {
        color: $text-color--black;
      }
    }

    &__statistics,
    &__count-item {
      display: flex;
    }

    &__statistics {
      justify-content: center;
      margin-top: get-vw(40px);
    }

    &__count-item {
      flex-direction: column;
      align-items: center;

      &:last-child {
        margin-left: get-vw(91px);
      }
    }

    &__count {
      font-size: get-vw(128px);
    }

    &__route-line {
      width: get-vw(1357px);
      height: get-vw(4662px);
      position: absolute;
      top: -103px;
      right: 105px;
    }
  }
</style>
