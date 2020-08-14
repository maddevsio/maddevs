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
  @import '../../assets/styles/get-vw';

  .why-us {
    padding-bottom: get-vw(167px);
    background-color: $bgcolor--white;

    &__title-wrap {
      position: relative;
    }

    &__main-title {
      margin-left: get-vw(-40px);
      padding-bottom: get-vw(120px);
      font-size: get-vw(340px);
      font-family: 'Hoves-Bold', sans-serif;
      color: $text-color--grey-light;
      line-height: get-vw(200px);
      letter-spacing: get-vw(-3px);
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
      bottom: get-vw(-30px);
      margin-bottom: get-vw(40px);
    }

    &__rates-list {
      padding-bottom: get-vw(142px);
      align-items: baseline;
    }

    &__metrics-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: get-vw(365px);
      grid-row-gap: get-vw(60px);
      margin-top: get-vw(36px);
    }

    &__rates-item {
        padding-right: get-vw(40px);
        padding-top: get-vw(34px);
    }

    &__metric-item {
      &:nth-child(3) {
        div {
          min-width: max-content;
        }
      }
    }

    &__sub-title {
      font-size: get-vw(90px);
      font-family: 'Hoves-Bold', sans-serif;
      color: $text-color--black;
      line-height: 104%;
      letter-spacing: get-vw(-3px);
    }

    &__metric-number,
    &__rates-number {
      font-family: 'Hoves-Bold', sans-serif;
      color: $text-color--red;
    }

    &__metric-number {
      font-size: get-vw(90px);
      line-height: 104%;
      letter-spacing: get-vw(-3px);
    }

    &__rates-number {
      display: flex;
      letter-spacing: get-vw(-8px);
      font-size: get-vw(165px);
      line-height: 100%;

      span {
        display: block;
        margin-top: get-vw(5px);
        font-size: get-vw(70px);
        line-height: 92%;
        letter-spacing: get-vw(-2px);
        margin-left: get-vw(12px);
      }
    }

    &__item_description {
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
        grid-column-gap: get-vw(300px);
      }
    }
  }

  @media only screen and (max-width: 1680px) {
    .why-us {
      &__metrics-list {
        grid-column-gap: get-vw(260px);
      }
    }
  }

  @media only screen and (max-width: 720px) {
    .why-us {
      &__rates-list {
        flex-direction: column;
      }

      &__rates-number {
        display: flex;
        font-size: 14vw;
      }

      &__metric-number {
        font-size: 10vw;
      }

      &__metrics-list {
        grid-template-columns: repeat(2, 1fr);
      }

      &__statistics-wrap {
        margin-top: get-vw(28px, 720);
      }

      &__rates-item {
        display: flex;

        p {
          max-width: get-vw(165px, 720);
          padding-left: get-vw(20px, 720);

          br {
            display: none;
          }
        }
      }

      &__customer-rates-sub-title {
        padding-bottom: get-vw(14px, 720);
      }

      &__metrics-list {
        grid-column-gap: get-vw(90px, 720);
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .why-us {
      &__main-title {
        padding-bottom: get-vw(80px, 440);
        text-align: center;
        font-size: get-vw(90px, 440);
        margin-left: 0;
      }

      &__customer-rates-sub-title {
        padding-bottom: get-vw(14px, 440);
      }

      &__rates-list {
        padding-bottom: 69px;

        .why-us__item_description {
          line-height: 129%;
          letter-spacing: -1px;
          padding-top: 0;
            max-width: 50%;
            padding-left: 6vw;

        }
      }

      &__customer-rates-sub-title,
      &__mad-devs_metrics-sub-title {
        font-size: get-vw(41px, 440);
      }

      &__mad-devs_metrics-sub-title {
        padding-bottom: 7vw;
      }

      &__rates-number {
        font-size: 17vw;
        line-height: 92%;
        letter-spacing: -2px;

        span {
          font-size: get-vw(41px, 440);
          line-height: 99%;
          letter-spacing: -1px;
        }
      }

      &__rates-item {
        padding-right: 0;
        padding-top: 6vw;

        p {
          line-height: 129%;
          letter-spacing: -1px;
          padding-top: 0;
        }
      }

      &__metric-number {
        font-size: 10.5vw;
        line-height: 99%;
        letter-spacing: -1px;
      }
    }
  }
</style>
