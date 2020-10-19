<template>
  <section id="customer-rates" class="customer-rates">
    <div class="container">
      <div class="customer-rates__main-title-wrapper">
        <h2 class="customer-rates__main-title">
          <span>Fantastic</span> <br> customer rates:
        </h2>
        <div class="customer-rates__title-icon" />
      </div>
      <div class="customer-rates__top-row row">
        <div class="col-xl-4 col-md-4">
          <div class="customer-rates__rates-block customer-rates__rates-block-top-row">
            <p class="customer-rates__number-item customer-rates__number-item-top-row">92%</p>
            <p class="customer-rates__description customer-rates__description-top-row">recommend us <br class="customer-rates__line-break"> to others.</p>
          </div>
        </div>
        <div class="col-xl-4 col-md-4">
          <div class="customer-rates__rates-block customer-rates__rates-block-top-row">
            <p class="customer-rates__number-item customer-rates__number-item-top-row">87%</p>
            <p class="customer-rates__description customer-rates__description-top-row">stay with us for <br class="customer-rates__line-break"> more than 2 years</p>
          </div>
        </div>
        <div class="col-xl-4 col-md-4">
          <div class="customer-rates__rates-block customer-rates__rates-block-top-row">
            <p class="customer-rates__number-item customer-rates__number-item-top-row">98%</p>
            <p class="customer-rates__description customer-rates__description-top-row">are satisfied with <br class="customer-rates__line-break"> our pricing.</p>
          </div>
        </div>
      </div>
      <h3 class="customer-rates__section-sub-title">Mad Devs' key metrics:</h3>
      <div class="customer-rates__bottom-row row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-6" v-for="(contentItem, i) in bottomTextContent" :key="i">
          <div class="customer-rates__rates-block customer-rates__rates-block-bottom-row">
            <p class="customer-rates__number-item customer-rates__number-item-bottom-row">{{ contentItem.number }}</p>
            <p class="customer-rates__description customer-rates__description-bottom-row">{{ contentItem.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'CustomerRates',
  data() {
    return {
      bottomTextContent: [
        {
          number: '10M+',
          description: 'US dollars raised by 5 customer startups in 2019.'
        },
        {
          number: '75%',
          description: 'of customers are now paying 50% less for IT infrastructure.'
        },
        {
          number: '30+',
          description: 'tech bloggers and conference speakers in our team.'
        },
        {
          number: '50+',
          description: 'projects delivered to customers by our team.'
        },
        {
          number: '100+',
          description: 'staff members work for Mad Devs.'
        },
        {
          number: '70+',
          description: 'open-source projects on GitHub.'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/_customerRatesIcons';

  .customer-rates {
    padding: 100px 0;
    background-color: $bgcolor--white-darken;
    font-feature-settings: normal;

    &__main-title-wrapper {
      display: flex;
      justify-content: center;
    }

    &__main-title,
    &__section-sub-title,
    &__number-item {
      font-family: 'Poppins-Bold', sans-serif;
    }

    &__main-title,
    &__section-sub-title {
      letter-spacing: -1px;
    }

    &__main-title,
    &__section-sub-title,
    &__rates-block {
      text-align: center;
    }

    &__main-title,
    &__section-sub-title,
    &__description {
      color: $text-color--black-lighter;
    }

    &__main-title {
      margin-bottom: 36px;
      font-size: 62px;
      line-height: 74px;

      br {
        display: none;
      }
    }

    &__top-row {
      margin-bottom: 102px;
    }

    &__section-sub-title {
      margin-bottom: 22px;
      font-size: 40px;
      line-height: 48px;
    }

    &__rates-block {
      background-color: $bgcolor--white;
    }

    &__rates-block-top-row {
      padding-top: 28px;
      padding-bottom: 40px;
    }

    &__rates-block-bottom-row {
      height: 128px;
      padding: 27px 20px;
    }

    &__number-item-top-row {
      margin-bottom: 11px;
      font-size: 102px;
      line-height: 107px;
      color: $text-color--black-lighter;
    }

    &__number-item-bottom-row {
      margin-top: 3px;
      margin-bottom: 10px;
      font-size: 44px;
      line-height: 46px;
      letter-spacing: -1.4px;
      color: $text-color--red;
    }

    &__description {
      font-family: 'Poppins-Regular', sans-serif;
      letter-spacing: -0.02em;
    }

    &__description-top-row {
      font-size: 16px;
      line-height: 24px;
    }

    &__description-bottom-row {
      font-size: 14px;
      line-height: 22px;
    }

    &__title-icon {
      width: 220px;
      height: 105px;
      display: block;
      margin-top: -23px;
      margin-left: -262px;
      z-index: 1;
      @include title-icon;
    }

    &__line-break {
      display: none;
    }
  }

  @media only screen and (max-width: 1366px) {
    .customer-rates {
      &__rates-block-bottom-row {
        padding-left: 10px;
        padding-right: 10px;
      }

      &__description-bottom-row {
        font-size: 13px;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .customer-rates {
      &__main-title {
        margin-bottom: 55px;

        br {
          display: block;
        }
      }

      &__title-icon {
        width: 184px;
        margin-top: 50px;
        margin-left: -262px;
      }
      
      &__top-row {
        margin-bottom: 68px;
      }

      &__rates-block-bottom-row {
        height: 110px;
      }

      &__number-item-top-row {
        margin-bottom: 0;
        font-size: 80px;
      }

      &__line-break {
        display: block;
      }
    }
  }

  @media only screen and (max-width: 860px) {
    .customer-rates {
      padding: 67px 0;

      &__main-title {
        font-size: 35px;
        line-height: 43px;
        margin-bottom: 40px;
      }

      &__title-icon {
        width: 140px;
        margin-top: 10px;
        margin-left: -170px;
      }

      &__section-sub-title {
        font-size: 30px;
        line-height: 36px;
        margin-bottom: 19px;
      }

      &__rates-block {
        height: 103px;
        padding: 20px 4px;
      }

      &__number-item-top-row {
        font-size: 56px;
        line-height: 66px;
      }

      &__description {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .customer-rates {
      &__main-title {
        margin-bottom: 32px;
      }

      &__title-icon {
        width: 90px;
        margin-left: -123px;
      }

      &__top-row {
        margin-bottom: 74px;
      }

      &__number-item-top-row {
        font-size: 50px;
        line-height: 60px;
      }

      &__number-item-bottom-row {
        font-size: 38px;
        line-height: 39px;
        margin-top: 10px;
      }

      &__description-top-row {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

  @media only screen and (max-width: 540px) {
    .customer-rates {
      padding: 45px 0;

      &__title-icon {
        margin: 15px 55px 0 -145px;
      }

      &__section-sub-title {
        margin-bottom: 11px;
        line-height: 43px;
      }

      &__number-item-top-row {
        line-height: 66px;
      }

      &__number-item-bottom-row {
        margin-top: 8px;
        margin-bottom: 5px;
      }
    }
  }

  @media only screen and (max-width: 340px) {
    .customer-rates {
      &__description-bottom-row {
        font-size: 11px;
        line-height: 17px;
      }

      &__number-item-top-row {
        line-height: 63px;
      }
    }
  }
</style>
