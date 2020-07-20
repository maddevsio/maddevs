<template>
  <section id="why-us" class="why-us">
    <div class="container">
      <div class="why-us__title-wrap">
        <h2 class="why-us__main-title">Why us?</h2>
        <div class="why-us__sub-title why-us__customer-rates-sub-title title">Impressive customer satisfaction rates</div>
      </div>
      <div class="why-us__statistics-wrap">
        <div class="why-us__customer-rates">
          <div class="why-us__rates-list">
            <div class="why-us__rates-item">
              <div class="why-us__rates-number">
                92<span>%</span>
              </div>
              <p class="why-us__item_description paragraph">
                recommend us to others.
              </p>
            </div>
            <div class="why-us__rates-item">
              <div class="why-us__rates-number">
                87<span>%</span>
              </div>
              <p class="why-us__item_description paragraph">
                stay with us for more than 2 <br> years.
              </p>
            </div>
            <div class="why-us__rates-item">
              <div class="why-us__rates-number">
                98<span>%</span>
              </div>
              <p class="why-us__item_description paragraph">
                are satisfied with our pricing.
              </p>
            </div>
          </div>
        </div>
        <div class="why-us__mad-devs_metrics">
          <div class="why-us__sub-title why-us__mad-devs_metrics-sub-title">Mad Devs' key metrics:</div>
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
                staff members work <br> for Mad Devs.
              </p>
            </div>
            <div class="why-us__metric-item">
              <div class="why-us__metric-number">
                10M+
              </div>
              <p class="why-us__item_description paragraph">
                US dollars raised by 5 customer <br> startups in 2019.
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
                tech bloggers and conference <br> speakers in our team.
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

    &__title-wrap {
      position: relative;
    }

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

    &__customer-rates,
    &__mad-devs_metrics {
      flex-direction: column;
    }

    &__customer-rates-sub-title {
      position: absolute;
      bottom: -30px;
    }

    &__rates-list {
      padding-bottom: 142px;
      align-items: baseline;
    }

    &__metrics-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 365px;
      grid-row-gap: 60px;
      margin-top: 36px;
    }

    &__rates-item {
      &:nth-child(1),
      &:nth-child(2) {
        padding-right: 190px;
        padding-top: 34px;
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
      font-size: 90px;
      font-family: 'Hoves-Bold';
      color: $text-color--black;
      line-height: 104%;
      letter-spacing: -3px;
    }

    &__metric-number,
    &__rates-number {
      font-family: 'Hoves-Bold';
      color: $text-color--red;
    }

    &__metric-number {
      font-size: 90px;
      line-height: 104%;
      letter-spacing: -3px;
    }

    &__rates-number {
      display: flex;
      letter-spacing: -8px;
      font-size: 165px;
      line-height: 100%;

      span {
        display: block;
        margin-top: 5px;
        font-size: 70px;
        line-height: 92%;
        letter-spacing: -2px;
        margin-left: 12px;
      }
    }

    &__item_description {
      font-size: 21px;
      line-height: 129%;
      letter-spacing: -0.02em;

      a {
        color: $text-color--black;
      }
    }
  }

  @media only screen and (max-width: 1780px) {
    .why-us {
      &__metrics-list {
        grid-column-gap: 300px;
      }
    }
  }

  @media only screen and (max-width: 1680px) {
    .why-us {
      &__metrics-list {
        grid-column-gap: 260px;
      }
    }
  }

  @media only screen and (max-width: 1525px) {
    .why-us {
      &__main-title {
        font-size: 313px;
      }

      &__metrics-list {
        grid-column-gap: 205px;
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

      &__sub-title {
        br {
          display: none;
        }
      }

      &__metrics-list {
        grid-column-gap: 165px;
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
      &__metrics-list {
        grid-column-gap: 125px;
      }
    }
  }

  @media only screen and (max-width: 1290px) {
    .why-us {
      &__metrics-list {
        grid-column-gap: 105px;
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .why-us {
      padding-bottom: 123px;

      &__metrics-list {
        grid-column-gap: 115px;
      }

      &__rates-list {
        padding-bottom: 82px;
      }

      &__item_description {
        font-size: 18px;
        line-height: 139%;
        letter-spacing: -0.03em;
      }

      &__rates-item {
        &:nth-child(1),
        &:nth-child(2) {
          padding-right: 60px;
        }
      }

      &__sub-title {
        font-size: 70px;
        line-height: 100%;
        letter-spacing: -2px;
        max-width: 90%;
      }

      &__metric-number {
        font-size: 70px;
        line-height: 92%;
        letter-spacing: -2px;
      }
    }
  }

  @media only screen and (max-width: 1235px) {
    .why-us {
      &__main-title {
        padding-bottom: 103px;
        font-size: 235px;
        letter-spacing: -1px;
        line-height: 140px;
      }

      &__rates-list {
        border-bottom: 0;
      }

      &__mad-devs_metrics-sub-title {
        padding-bottom: 25px;
      }

      &__metrics-list {
        grid-column-gap: 90px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .why-us {
      &__metrics-list {
        grid-column-gap: 60px;
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

  @media only screen and (max-width: 1024px) {
    .why-us {
      &__main-title {
        font-size: calc(91px + (195 - 91) * ((100vw - 320px) / (1024 - 320)));
        line-height: 67%;
        margin-left: 0;
        padding-bottom: 57px;
      }

      &__rates-list {
        padding-bottom: 119px;
      }

      &__sub-title {
        font-size: 63px;
        line-height: 110%;
        letter-spacing: -2px;
        max-width: 100%;
        margin-bottom: -37px;
      }

      &__mad-devs_metrics-sub-title {
        padding-bottom: 85px;
      }

      &__item_description {
        font-size: 16px;
        line-height: 119%;

        br {
          display: none;
        }
      }

      &__metrics-list {
        grid-column-gap: 30px;
        margin-top: 0;
        grid-row-gap: 41px;
      }

      &__rates-item {
        padding-top: 76px;
      }

      &__rates-number {
        letter-spacing: -5px;
        font-size: 128px;

        span {
          margin-left: 7px;
        }
      }
    }
  }

  @media only screen and (max-width: 870px) {
    .why-us {
      &__main-title {
        font-size: calc(91px + (195 - 91) * ((100vw - 320px) / (1024 - 320)));
        margin-left: -18px;
      }

      &__rates-list {
        padding-bottom: 100px;
      }

      &__sub-title {
        font-size: 47px;
        margin-bottom: -17px;
      }

      &__mad-devs_metrics-sub-title {
        padding-bottom: 0;
        margin-bottom: 23px;
      }

      &__item_description {
        font-size: 16px;
        line-height: 119%;
      }

      &__metrics-list {
        grid-column-gap: 285px;
        margin-top: 0;
        grid-row-gap: 41px;
        grid-template-columns: repeat(2, 1fr);
      }

      &__rates-item {
        padding-top: 65px;
      }

      &__rates-number {
        font-size: 93px;
        letter-spacing: -0.03em;
      }

      &__metric-item {
        &:nth-of-type(3) {
          grid-row: 3;
        }
      }
    }
  }

  @media only screen and (max-width: 760px) {
    .why-us {
      &__main-title {
        font-size: 140px;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    .why-us {
      &__rates-list {
        flex-direction: column;
      }

      &__statistics-wrap {
        margin-top: 28px;
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

        &:last-child {
          padding: 34px 60px 0 0;
        }
      }

      &__customer-rates-sub-title {
        padding-bottom: 14px;
      }

      &__metrics-list {
        grid-column-gap: 90px;
      }
    }
  }

  @media only screen and (max-width: 690px) {
    .why-us {
      &__main-title {
        font-size: 120px;
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .why-us {
      &__main-title {
        font-size: 110px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .why-us {
      padding-bottom: 105px;

      &__rates-number {
        span {
          margin-left: 5px;
        }
      }

      &__metric-number {
        font-size: 56px;
        line-height: 101%;
        letter-spacing: -2px;
      }

      &__metrics-list {
        grid-row-gap: 47px;
        grid-column-gap: 63px;
        grid-row-gap: 34px;
      }

      &__item_description {
        max-width: 85%;
      }
    }
  }

  @media only screen and (max-width: 560px) {
    .why-us {
      &__main-title {
        padding-bottom: 63px;
        font-size: 98px;
      }

      &__item_description {
        width: initial;
      }
    }
  }

  @media only screen and (max-width: 537px) {
    .why-us {
      &__main-title {
        padding-bottom: 155px;
      }
    }
  }

  @media only screen and (max-width: 510px) {
    .why-us {
      &__main-title {
        padding-bottom: 200px;
        font-size: 90px;
      }
    }
  }

  @media only screen and (max-width: 482px) {
    .why-us {
      &__main-title {
        padding-bottom: 205px;
        font-size: 90px;
        margin-left: -25px;
      }

      &__rates-item {
        &#{&} {
          padding-right: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 473px) {
    .why-us {
      &__main-title {
        font-size: 85px;
      }
    }
  }

  @media only screen and (max-width: 450px) {
    .why-us {
      &__main-title {
        font-size: 82px;
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .why-us {
      &__main-title {
        padding-bottom: 80px;
        text-align: center;
        font-size: 90px;
        margin-left: 0;
      }

      &__rates-list {
        padding-bottom: 69px;
      }

      &__customer-rates-sub-title,
      &__mad-devs_metrics-sub-title {
        font-size: 41px;
      }

      &__rates-number {
        font-size: 70px;
        line-height: 92%;
        letter-spacing: -2px;

        span {
          font-size: 41px;
          line-height: 99%;
          letter-spacing: -1px;
        }
      }

      &__rates-item {
        p {
          font-size: 17px;
          line-height: 129%;
          letter-spacing: -1px;
          padding-top: 0;
        }
      }

      &__metric-number {
        font-size: 41px;
        line-height: 99%;
        letter-spacing: -1px;
      }
      
      &__item_description {
        font-size: 17px;
        line-height: 129%;
        letter-spacing: -1px;
        padding-top: 0;
      }
    }
  }


  @media only screen and (max-width: 420px) {
    .why-us {
      padding-bottom: 77px;

      &__metrics-list {
        grid-row-gap: 30px;
        grid-column-gap: 25px;
      }
    }
  }

  @media only screen and (max-width: 389px) {
    .why-us {
      &__main-title {
        font-size: 86px;
      }
    }
  }

  @media only screen and (max-width: 376px) {
    .why-us {
      &__main-title {
        font-size: 82px;
        padding-bottom: 135px;
      }
    }
  }

  @media only screen and (max-width: 357px) {
    .why-us {
      &__main-title {
        font-size: 79px;
      }
    }
  }

  @media only screen and (max-width: 352px) {
    .why-us {
      &__main-title {
        font-size: 77px;
        padding-bottom: 176px;
      }

      &__metrics-list {
        grid-column-gap: 0;
      }
    }
  }

  @media only screen and (max-width: 337px) {
    .why-us {
      &__main-title {
        font-size: 72px;
      }
    }
  }
</style>
