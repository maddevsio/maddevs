<template>
  <section id="customer-rates" class="customer-rates">
    <div class="container">
      <h2 class="customer-rates__title title">
        <span>Fantastic</span> <br> customer rates:
        <img src="@/assets/img/Home/svg/CustomerRates/satisfaction-icon.svg" alt="Satisfaction" class="customer-rates__title-icon">
      </h2>
      <div class="customer-rates__top-row row">
        <div class="col-xl-4 col-sm-4">
          <div class="customer-rates__rates-block customer-rates__rates-block--top-row">
            <p class="customer-rates__number customer-rates__number--top-row">92%</p>
            <p class="customer-rates__description customer-rates__description--top-row">recommend us to <br class="customer-rates__line-break"> others.</p>
          </div>
        </div>
        <div class="col-xl-4 col-sm-4">
          <div class="customer-rates__rates-block customer-rates__rates-block--top-row">
            <p class="customer-rates__number customer-rates__number--top-row">87%</p>
            <p class="customer-rates__description customer-rates__description--top-row">stay with us for <br class="customer-rates__line-break"> more than 2 years</p>
          </div>
        </div>
        <div class="col-xl-4 col-sm-4">
          <div class="customer-rates__rates-block customer-rates__rates-block--top-row">
            <p class="customer-rates__number customer-rates__number--top-row">98%</p>
            <p class="customer-rates__description customer-rates__description--top-row">are satisfied with <br class="customer-rates__line-break"> our pricing.</p>
          </div>
        </div>
      </div>
      <h3 class="customer-rates__section-sub-title title-md">Mad Devs' key metrics:</h3>
      <div class="customer-rates__bottom-row row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
          <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
            <p class="customer-rates__number customer-rates__number--bottom-row">10M+</p>
            <p class="customer-rates__description customer-rates__description--bottom-row">US dollars raised by 5 customer startups in 2019.</p>
          </div>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
          <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
            <p class="customer-rates__number customer-rates__number--bottom-row">75%</p>
            <p class="customer-rates__description customer-rates__description--bottom-row">of customers are now paying 50% less for IT infrastructure.</p>
          </div>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
          <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
            <p class="customer-rates__number customer-rates__number--bottom-row">30+</p>
            <p class="customer-rates__description customer-rates__description--bottom-row">tech bloggers and conference speakers in our team.</p>
          </div>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
          <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
            <p class="customer-rates__number customer-rates__number--bottom-row">50+</p>
            <p class="customer-rates__description customer-rates__description--bottom-row">projects delivered to customers by our team.</p>
          </div>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
          <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
            <p class="customer-rates__number customer-rates__number--bottom-row">100+</p>
            <p class="customer-rates__description customer-rates__description--bottom-row">staff members work for Mad Devs.</p>
          </div>
        </div>
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
          <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
            <p class="customer-rates__number customer-rates__number--bottom-row">70+</p>
            <p class="customer-rates__description customer-rates__description--bottom-row">open-source projects on GitHub.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'CustomerRates'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .customer-rates {
    padding-top: 86px;
    padding-bottom: 92px;
    background-color: $bgcolor--white-darken;

    &__title {
      position: relative;
      margin-bottom: 20px;
      text-align: center;

      br {
        display: none;
      }
    }

    &__title-icon {
      width: 200px;
      margin-left: -268px;
      margin-bottom: -19px;
    }

    &__top-row {
      margin-bottom: 102px;
    }

    &__section-sub-title {
      margin-bottom: 15px;
    }

    &__section-sub-title,
    &__rates-block {
      text-align: center;
    }

    &__rates-block {
      background-color: $bgcolor--white;

      &--top-row {
        padding-top: 28px;
        padding-bottom: 40px;
      }

      &--bottom-row {  
        height: 128px;    
        padding: 24px 20px;
      }
    }

    &__number {
      font-family: 'Hoves-Bold';

      &--top-row {
        font-size: 102px;
        color: $text-color--black-lighter;
      }

      &--bottom-row {
        font-size: 44px;
        color: $text-color--red;
        letter-spacing: -1.4px;
      }
    }

    &__description {
      font-family: 'Poppins-Regular';
      color: $text-color--black-lighter;
      letter-spacing: -0.02em;

      &--top-row {
        font-size: 16px;
      }

      &--bottom-row {
        font-size: 14px;   
      }
    }

    &__line-break {
      display: none;
    }
  }

  @media only screen and (max-width: 1180px) {
    .customer-rates {
      &__line-break {
        display: block;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .customer-rates {
      padding-top: 51px;
      padding-bottom: 76px;

      &__rates-block {
        &--top-row {
          padding: 25px 0;
        }

        &--bottom-row {
          padding: 20px 20px 10px;
        }
      }

      &__title {
        margin-bottom: 13px;
        text-align: center;
      }

      &__title-icon {
        width: 95px;
        margin-left: -156px;
        margin-bottom: -9px;
      }

      &__number {
        &--top-row {
          font-size: 50px;
        }

        &--bottom-row {
          font-size: 38px;
          letter-spacing: -1.45px;
        }
      }

      &__description {
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    .customer-rates {
      &__title {
        margin-left: -50px;
        line-height: 40px;

        span {
          margin-right: -61px;
        }

        br {
          display: block;
        }
      }

      &__rates-block {
        &--bottom-row {
          padding-bottom: 30px;
        }
      }
    }
  }

  @media only screen and (max-width: 570px) {
    .customer-rates {
      &__top-row {
        margin-bottom: 91px;
      }

      &__rates-block {
        &--bottom-row {
          padding-bottom: 10px;
        }
      }
    }
  }

  @media only screen and (max-width: 360px) {
    .customer-rates {
      &__rates-block {
        &--bottom-row {
          padding-bottom: 30px;
        }
      }
    }
  }
</style>
