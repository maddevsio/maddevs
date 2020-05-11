<template>
  <section id="why-us" class="why-us">
    <div class="container">
      <div class="why-us__title-wrap">
        <h2 class="why-us__main-title">Why us?</h2>
      </div>
      <div class="why-us__statistics-wrap">
        <div class="why-us__customer-rates">
          <div class="why-us__sub-title">Fantastic customer <br> satisfaction rates:</div>
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
          <div class="why-us__sub-title">Mad Devs' key <br> metrics:</div>
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
    padding-bottom: 212px;
    background-color: $bgcolor--white;

    &__main-title {
      padding-bottom: 120px;
      font-size: 340px;
      font-family: 'Hoves-Bold';
      color: $text-color--grey-light;
      line-height: 200px;
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
      padding-bottom: 90px;
      border-bottom: 1px solid $border-color--grey-dark-transparent;
    }

    &__metrics-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 57px;
      grid-row-gap: 63px;
    }

    &__rates-item {
      &:nth-child(1),
      &:nth-child(2) {
        padding-right: 104px;
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
    }

    &__metric-number,
    &__rates-number {
      font-family: 'Hoves-Bold';
      color: $text-color--red;
    }

    &__metric-number {
      font-size: 50px;
    }

    &__rates-number {
      display: flex;
      font-size: 130px;

      span {
        display: block;
        margin-top: 5px;
        font-size: 70px;
      }
    }

    &__item_description {
      a {
        color: $text-color--black;
      }
    }
  }

  @media only screen and (max-width: 1520px) {
    .why-us {
      &__metrics-list {
        grid-column-gap: 40px;
      }

      &__rates-item {
        &:nth-child(1),
        &:nth-child(2) {
          padding-right: 88px;
        }
      }

      &__main-title {
        font-size: 320px;
      }

      &__sub-title {
        font-size: 48px;
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .why-us {
      &__metrics-list {
        grid-column-gap: 20px;
      }

      &__rates-item {
        &:nth-child(1),
        &:nth-child(2) {
          padding-right: 68px;
        }
      }

      &__main-title {
        font-size: 285px;
        line-height: 170px;
      }

      &__sub-title {
        font-size: 45px;
      }
    }
  }

  @media only screen and (max-width: 1360px) {
    .why-us {
      &__metrics-list {
        grid-template-columns: repeat(3, 220px);
      }

      &__metric-item {
        br {
          display: none;
        }
      }

      &__rates-number {
        font-size: 100px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .why-us {
      &__metrics-list {
        grid-template-columns: repeat(3, 207px);
      }

      &__main-title {
        font-size: 250px;
        line-height: 145px;
      }

      &__sub-title,
      &__metric-number {
        font-size: 40px;
      }

      &__rates-number {
        font-size: 90px;

        span {
          font-size: 60px;
        }
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .why-us {
      &__metrics-list {
        grid-template-columns: repeat(3, 170px);
      }

      &__main-title {
        font-size: 235px;
        line-height: 135px;
      }

      &__rates-item {
        &:nth-child(1) {
          padding-right: 53px;
        }

        &:nth-child(2) {
          padding-right: 56px;
        }

        &:nth-child(3) {
          padding-right: 14px;
        }
      }

      &__sub-title,
      &__metric-number {
        font-size: 38px;
      }

      &__rates-number {
        font-size: 80px;

        span {
          font-size: 50px;
        }
      }

      &__item_description {
        font-size: 17px;
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .why-us {
      &__main-title {
        font-size: 205px;
        line-height: 117px;
      }

      &__sub-title {
        font-size: 37px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .why-us {
      padding-bottom: 140px;

      &__main-title {
        font-size: 170px;
        line-height: 105px;
      }

      &__customer-rates,
      &__rates-list,
      &__mad-devs_metrics {
        flex-direction: column;
      }

      &__rates-list {
        padding-bottom: 0;
        border-bottom: 0;
      }

      &__metrics-list {
        grid-template-columns: repeat(2, 170px);
        grid-column-gap: 50px;
      }

      &__sub-title {
        padding-bottom: 32px;
      }

      &__rates-item {
        display: flex;

        p {
          max-width: 165px;
          padding-top: 25px;
          padding-left: 18px;

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

      &__metric-item {
        &:nth-child(2) {
          grid-column-start: 2;
          grid-row-start: 1;
        }

        &:nth-child(3) {
          grid-row-start: 1;
        }

        &:nth-child(6) {
          grid-column-start: 1;
          grid-row-start: 3;
        }
      }
    }
  }

  @media only screen and (max-width: 820px) {
    .why-us {
      &__main-title {
        font-size: 155px;
        line-height: 95px;
      }
    }
  }

  @media only screen and (max-width: 740px) {
    .why-us {
      &__main-title {
        font-size: 125px;
        line-height: 80px;
      }
    }
  }

  @media only screen and (max-width: 620px) {
    .why-us {
      &__main-title {
        font-size: 115px;
        line-height: 72px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .why-us {
      padding-bottom: 84px;

      &__main-title {
        padding-bottom: 94px;
        font-size: 91px;
        line-height: 54px;
      }

      &__sub-title {
        font-size: 39px;
      }

      &__mad-devs_metrics {
        padding-top: 61px;
      }

      &__rates-item {
        p {
          padding-top: 15px;
        }
      }

      &__rates-number {
        font-size: 57px;

        span {
          font-size: 41px;
        }
      }

      &__metric-number {
        font-size: 28px;
      }
    }
  }

  @media only screen and (max-width: 420px) {
    .why-us {
      &__main-title {
        font-size: 83px;
        line-height: 51px;
      }

      &__metrics-list {
        grid-template-columns: repeat(2, 150px);
        grid-column-gap: 40px;
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .why-us {
      &__main-title {
        font-size: 79px;
        line-height: 48px;
      }

      &__metrics-list {
        grid-template-columns: repeat(2, 140px);
        grid-column-gap: 30px;
      }
    }
  }

  @media only screen and (max-width: 350px) {
    .why-us {

      &__main-title {
        font-size: 70px;
        line-height: 43px;
      }

      &__sub-title {
        font-size: 35px;
      }
    }
  }

</style>
