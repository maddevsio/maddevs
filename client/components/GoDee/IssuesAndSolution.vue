<template>
  <section id="issues-and-solution" class="issues-and-solution">
    <div class="issues-and-solutio__head-content">
      <h2 class="issues-and-solution__main-title">Issues and Solution</h2>
      <img src="@/assets/img/GoDee/png/issues-and-solution-bg.png" class="issues-and-solution__background-image" alt="Background">
    </div>
    <div class="container">
      <div class="issues-and-solution__transportation">
        <div class="issues-and-solution__transportation-content-wrapper">
          <div class="issues-and-solutio__left-text-content">
            <div class="issues-and-solution__description-item">
              <div class="issues-and-solution__description-title issues-and-solution__description-title--transportation">Transportation</div>
              <p class="issues-and-solution__description-paragraph">Transportation has become an issue due to Vietnam's rapid <br> urbanization of 35.92%. With slow, unairconditioned, <br> overcrowded public transport, people living in the suburbs <br> were left with only two other alternatives: motorbikes and <br> taxis.</p>
            </div>
            <div class="issues-and-solution__description-item">
              <div class="issues-and-solution__description-title issues-and-solution__description-title--motorbike">Motorbike</div>
              <p class="issues-and-solution__description-paragraph issues-and-solution__description-paragraph--motorbike">Motorbikes are fast and affordable but not always <br> convenient to 'white collars' going to the office in suits, <br> especially on rainy days.</p>
              <div class="issues-and-solution__description-icons-group">
                <div v-for="(icon, i) in icons" :key="i" class="issues-and-solution__icon-item">
                  <img :src="require(`@/assets/img/GoDee/svg/${icon.iconName}.svg`)" :class="`issues-and-solution__icon-${icon.iconName}`" :alt="icon.iconDesignation">
                  <p class="issues-and-solution__icon-designation">{{ icon.iconDesignation }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="issues-and-solution__image-wrapper">
            <img src="../../assets/img/GoDee/svg/women.svg" class="issues-and-solution__women-image" alt="Women">
          </div>
        </div>
        <div class="issues-and-solution__empty-white-block"></div>
      </div>
      <div class="issues-and-solution__taxi">
        <div class="issues-and-solution__taxi-content-wrapper">
          <div class="issues-and-solution__taxi-title">
            <div class="issues-and-solution__taxi-main-title">Taxi</div>
            <div class="issues-and-solution__taxi-description">Taxis are safer and more comfortable but less accessible <br> as they cost much higher.</div>
          </div>
          <div class="issues-and-solution__price-group">
            <div class="issues-and-solution__price-item">
              <div class="issues-and-solution__price-value">0.51 USD</div>
              <div class="issues-and-solution__price-description">The basic fee</div>
            </div>
            <div class="issues-and-solution__price-item">
              <div class="issues-and-solution__price-value">0.56 USD</div>
              <div class="issues-and-solution__price-description">The kilometer price</div>
            </div>
            <div class="issues-and-solution__price-item">
              <div class="issues-and-solution__price-value">~10 km (<img src="" alt="">)</div>
              <div class="issues-and-solution__price-description">Average kilometers per trip</div>
            </div>
            <div class="issues-and-solution__price-item">
              <div class="issues-and-solution__price-value">~25 days</div>
              <div class="issues-and-solution__price-description">a month</div>
            </div>
          </div>
          <div class="issues-and-solution__result-item">
            <span>=</span> 300 USD a month
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IssuesAndSolution',
  data() {
    return {
      icons: [
        {
          iconName: 'rain',
          iconDesignation: 'Rain'
        },
        {
          iconName: 'exhaust-fumes',
          iconDesignation: 'Exhaust fumes'
        },
        {
          iconName: 'dirt',
          iconDesignation: 'Dirt'
        }
      ]
    };
  }
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
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
    }

    &__background-image {
      width: get-vw(1680px);
      height: get-vw(387px);
    }

    &__main-title,
    &__description-title,
    &__taxi-main-title,
    &__price-value,
    &__result-item {
      font-family: 'Hoves-Bold';
    }

    &__transportation {
      position: relative;
    }

    &__transportation-content-wrapper {
      display: flex;
      margin-left: get-vw(102px);
    }

    &__description-item {
      position: relative;

      &:first-child {
        margin: get-vw(97px) 0;

        &::before {
          content: '';
          width: get-vw(150px);
          height: get-vw(150px);
          position: absolute;
          top: get-vw(65px);
          left: get-vw(-153px);
          background: url('../../assets/img/GoDee/svg/godee-bus.svg') no-repeat;
          background-size: get-vw(150px);
        }
      }

      &:last-child {
        &::before {
          content: '';
          width: get-vw(46px);
          height: get-vw(46px);
          position: absolute;
          top: get-vw(140px);
          left: get-vw(-102px);
          background: url('../../assets/img/GoDee/svg/route-dot.svg') no-repeat;
          background-size: get-vw(46px);
        }
      }
    }

    &__description-title {
      margin-bottom: get-vw(16px);

      &--transportation {
        font-size: get-vw(50px);
        letter-spacing: get-vw(-2px);
      }

      &--motorbike {
        font-size: get-vw(32px);
        letter-spacing: get-vw(-1px);
      }
    }

    &__description-paragraph {
      color: $text-color--grey-dark;

      &--motorbike {
        margin-bottom: get-vw(36px);
      }
    }

    &__description-paragraph,
    &__icon-designation,
    &__taxi-description {
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular';
      letter-spacing: get-vw(-1px);
    }

    &__description-icons-group {
      display: flex;
      align-items: center;
    }

    &__icon-item {
      height: get-vw(150px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-right: get-vw(115px);
    }

    &__icon-rain {
      width: get-vw(88px);
      height: get-vw(88px);
      margin-top: get-vw(8px);
    }

    &__icon-exhaust-fumes {
      width: get-vw(120px);
      height: get-vw(120px);
    }

    &__icon-dirt {
      width: get-vw(94px);
      height: get-vw(94px);
      margin-top: get-vw(11px);
    }

    &__icon-designation {
      width: max-content;
      text-align: center;
    }

    &__image-wrapper {
      margin-top: get-vw(33px);
      margin-left: get-vw(-36px);
    }

    &__women-image {
      width: get-vw(701px);
      height: get-vw(755px);
    }

    &__empty-white-block,
    &__taxi {
      width: 100%;
      height: get-vw(421px);
      border-radius: get-vw(15px);
      box-shadow: 0 get-vw(10px) get-vw(25px) rgba(0, 0, 0, 0.15);
      background-color: $bgcolor--white;
      z-index: -1;
    }

    &__empty-white-block {
      position: absolute;
      bottom: 5px;
    }

    &__taxi {
      position: relative;
      margin-top: get-vw(40px);
    }

    &__taxi-content-wrapper {
      padding: get-vw(30px) get-vw(45px) get-vw(44px) get-vw(102px);
    }

    &__taxi-main-title {
      margin-bottom: get-vw(15px);
      font-size: get-vw(32px);
      letter-spacing: get-vw(-1px);
    }

    &__taxi-description {
      margin-bottom: get-vw(34px);
      color: $text-color--grey-dark;
    }

    &__price-group {
      display: flex;
      justify-content: space-between;
      border-bottom: get-vw(3px) solid $border-color--grey-godee-case;
    }

    &__price-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__price-value {
      margin-bottom: get-vw(10px);
      font-size: get-vw(44px);
      letter-spacing: get-vw(-1px);
    }

    &__price-description {
      margin-bottom: get-vw(25px);
      font-size: get-vw(28px);
      font-family: 'Hoves-Regular';
      letter-spacing: get-vw(-0.8px);
      color: $text-color--grey;
    }

    &__result-item {
      display: flex;
      align-items: center;
      margin-top: get-vw(7px);
      font-size: get-vw(50px);
      letter-spacing: get-vw(-2px);

      span {
        display: block;
        margin-top: get-vw(-8px);
        margin-right: get-vw(15px);
        font-size: get-vw(90px);
        letter-spacing: get-vw(-3px);
        color: $text-color--grey;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .issues-and-solution {
      &__description-item {
        &:first-child {
          &::before {
            left: get-vw(-130px);
          }
        }

        &:last-child {
          &::before {
            left: get-vw(-80px);
          }
        }
      }

      &__transportation-content-wrapper {
        justify-content: space-between;
      }

      &__image-wrapper {
        margin-left: 0;
        margin-right: get-vw(-77px);
      }
    }
  }
</style>
