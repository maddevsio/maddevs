<template>
  <section id="why-us" class="why-us">
    <div class="container">
      <div class="why-us__title-wrap">
        <h2 class="why-us__main-title">Why us?</h2>
      </div>
      <div class="why-us__statistics-wrap">
        <div class="why-us__customer-rates">
          <div class="why-us__sub-title why-us__customer-rates-sub-title">Fantastic customer <br> satisfaction rates:</div>
          <div class="why-us__rates-list">
            <div class="why-us__rates-item">
              <div class="why-us__rates-number">
                92<span>%</span>
              </div>
              <p class="why-us__item_description paragraph">
                recommend us <br> to others.
              </p>
            </div>
            <div class="why-us__rates-item">
              <div class="why-us__rates-number">
                87<span>%</span>
              </div>
              <p class="why-us__item_description paragraph">
                stay with us for <br> more than 2 years.
              </p>
            </div>
            <div class="why-us__rates-item">
              <div class="why-us__rates-number">
                98<span>%</span>
              </div>
              <p class="why-us__item_description paragraph">
                are satisfied with our <br> pricing.
              </p>
            </div>
          </div>
        </div>
        <div class="why-us__mad-devs_metrics">
          <div class="why-us__sub-title why-us__mad-devs_metrics-sub-title">Mad Devs' key <br> metrics:</div>
          <div class="why-us__metrics-list">
            <div class="why-us__metric-item">
              <div class="why-us__metric-number">
                50+
              </div>
              <p class="why-us__item_description paragraph">
                projects delivered to <br> customers by our team.
              </p>
            </div>
            <div class="why-us__metric-item">
              <div class="why-us__metric-number">
                100+
              </div>
              <p class="why-us__item_description paragraph">
                staff members <br> work for Mad Devs.
              </p>
            </div>
            <div class="why-us__metric-item">
              <div class="why-us__metric-number">
                10+ million
              </div>
              <p class="why-us__item_description paragraph">
                US dollars raised by <br> 5 customer startups in 2019.
              </p>
            </div>
            <div class="why-us__metric-item">
              <div class="why-us__metric-number">
                75%
              </div>
              <p class="why-us__item_description paragraph">
                of customers are now paying <br> 50% less for IT infrastructure.
              </p>
            </div>
            <div class="why-us__metric-item">
              <div class="why-us__metric-number">
                70+
              </div>
              <p class="why-us__item_description paragraph">
                open-source projects <br> on <a href="https://github.com/maddevsio" target="blank">GitHub.</a>
              </p>
            </div>
            <div class="why-us__metric-item">
              <div class="why-us__metric-number">
                30+
              </div>
              <p class="why-us__item_description paragraph">
                tech bloggers and conference <br> speakers on our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CustomerTestimonialMobileSlider from '@/components/About/CustomerTestimonialMobileSlider';

export default {
  name: 'CustomerTestimonials',
  components: {
    CustomerTestimonialMobileSlider
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .why-us {
    padding-bottom: 167px;
    background-color: $bgcolor--white;

    &__main-title {
      margin-left: -40px;
      padding-bottom: 120px;
      font-size: 340px;
      font-family: 'Hoves-Bold';
      color: $text-color--grey-light;
      line-height: 200px;
      letter-spacing: -3px;
    }

    &__customer-rates,
    &__rates-list,
    &__mad-devs_metrics {
      display: flex;
      justify-content: space-between;
    }

    &__mad-devs_metrics {
      padding-top: 96px;
    }

    &__rates-list {
      padding-bottom: 74px;
      border-bottom: 1px solid $border-color--grey-dark-transparent;
    }

    &__metrics-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 44px;
      grid-row-gap: 60px;
    }

    &__rates-item {
      &:nth-child(1),
      &:nth-child(2) {
        padding-right: 80px;
      }

      &:nth-child(3) {
        padding-right: 43px;
      }
    }

    &__metric-item {
      &:nth-child(3) {
        div {
          min-width: max-content;
        }
      }
    }

    &__sub-title {
      font-size: 50px;
      font-family: 'Hoves-Bold';
      color: $text-color--black;
      letter-spacing: -2px;
    }

    &__metric-number,
    &__rates-number {
      font-family: 'Hoves-Bold';
      color: $text-color--red;
    }

    &__metric-number {
      font-size: 50px;
      letter-spacing: -2px;
    }

    &__rates-number {
      display: flex;
      font-size: 130px;
      letter-spacing: -5px;

      span {
        display: block;
        margin-top: 5px;
        font-size: 70px;
      }
    }

    &__item_description {
      font-size: 18px;
      letter-spacing: -0.03em;
      a {
        color: $text-color--black;
      }
    }
  }

  @media only screen and (max-width: 1525px) {
    .why-us {
      &__main-title {
        font-size: 313px;
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .why-us {
      &__rates-item {
        &:nth-child(1),
        &:nth-child(2) {
          padding-right: 79px;
        }
      }

      &__rates-number {
        font-size: 128px;
      }

      &__sub-title {
        br {
          display: none;
        }
      }

      &__metrics-list {
        grid-column-gap: 40px;
      }

      &__customer-rates-sub-title {
        max-width: 265px;
      }

      &__mad-devs_metrics-sub-title {
        max-width: 365px;
      }

      &__mad-devs_metrics {
        padding-top: 86px;
      }

      &__rates-list {
        padding-bottom: 92px;
      }
    }
  }

  @media only screen and (max-width: 1420px) {
    .why-us {
      &__main-title {
        font-size: 269px;
        letter-spacing: -2px;
        line-height: 170px;
      }
    }
  }


  @media only screen and (max-width: 1340px) {
    .why-us {
      &__mad-devs_metrics-sub-title {
        max-width: 280px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .why-us {
      padding-bottom: 123px;

      &__metrics-list {
        grid-column-gap: 50px;
      }

      &__metric-item {
        &:nth-child(3n) {
          margin-left: -25px;
        }
      }

      &__rates-item {
        &:nth-child(1),
        &:nth-child(2) {
          padding-right: 60px;
        }
      }
    }
  }

  @media only screen and (max-width: 1235px) {
    .why-us {
      padding-bottom: 130px;

      &__main-title {
        margin-left: 0;
        padding-bottom: 60px;
        font-size: 235px;
        letter-spacing: -1px;
        line-height: 140px;
      }

      &__rates-list {
        border-bottom: 0;
      }

      &__customer-rates,
      &__mad-devs_metrics {
        flex-direction: column;
      }

      &__sub-title {
        max-width: initial;
        font-size: 47px;
      }

      &__customer-rates-sub-title {
        padding-bottom: 20px;
      }

      &__mad-devs_metrics-sub-title {
        padding-bottom: 25px;
      }

      &__mad-devs_metrics {
        padding-top: 30px;
      }
    }
  }

  @media only screen and (max-width: 1140px) {
    .why-us {
      &__main-title {
        font-size: 205px;
        line-height: 120px;
      }
    }
  }

  @media only screen and (max-width: 1020px) {
    .why-us {
      &__main-title {
        font-size: 160px;
        line-height: 100px;
      }
    }
  }

  @media only screen and (max-width: 830px) {
    .why-us {
      padding-bottom: 120px;

      &__main-title {
        margin-left: -20px;
        padding-bottom: 40px;
      }

      &__rates-number {
        font-size: 93px;
        letter-spacing: -0.03em;
      }

      &__metrics-list {
        grid-template-columns: repeat(2, 1fr);
      }

      &__metric-item {
        &:nth-child(3n) {
          margin-left: 0;
        }

        &:nth-child(3) {
          grid-row-start: 3;
        }
      }

      &__mad-devs_metrics {
        padding-top: 0;
      }

      &__rates-list {
        padding-bottom: 80px;
      }
    }
  }

  @media only screen and (max-width: 760px) {
    .why-us {

      &__main-title {
        font-size: 140px;
        line-height: 80px;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    .why-us {
      &__rates-list {
        flex-direction: column;
      }

      &__rates-item {
        display: flex;

        p {
          max-width: 165px;
          padding-top: 16px;
          padding-left: 20px;

          br {
            display: none;
          }
        }

        &:first-child {
          p {
            max-width: 120px;
          }
        }
      }

      &__customer-rates-sub-title {
        padding-bottom: 14px;
      }
    }
  }

  @media only screen and (max-width: 690px) {
    .why-us {
      &__main-title {
        font-size: 120px;
        line-height: 70px;
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .why-us {
      &__main-title {
        font-size: 110px;
        line-height: 65px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .why-us {
      padding-bottom: 105px;

      &__metric-number {
        font-size: 41px;
      }

      &__metrics-list {
        grid-row-gap: 47px;
      }

      &__item_description {
        width: max-content;
      }
    }
  }

  @media only screen and (max-width: 560px) {
    .why-us {
      &__main-title {
        padding-bottom: 25px;
        font-size: 90px;
        line-height: 55px;
      }

      &__item_description {
        width: initial;
      }
    }
  }

  @media only screen and (max-width: 420px) {
    .why-us {
      &__main-title {
        padding-bottom: 50px;
      }

      &__item_description {
        font-size: 17px;
      }

      &__rates-list {
        padding-bottom: 76px;
      }

      &__rates-number {
        font-size: 56px;
        letter-spacing: -2px;

        span {
          display: block;
          margin-top: 2px;
          font-size: 40px;
        }
      }

      &__sub-title {
        font-size: 41px;
      }

      &__metrics-list {
        grid-row-gap: 28px;
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .why-us {
      padding-bottom: 60px;

      &__main-title {
        margin-left: -15px;
        padding-bottom: 40px;
        font-size: 76px;
        line-height: 47px;
      }

      &__customer-rates-sub-title {
        padding-bottom: 20px;
      }

      &__rates-list {
        padding-bottom: 47px;
      }

      &__metric-number {
        font-size: 28px;
        letter-spacing: -1px;
      }
    }
  }
</style>
