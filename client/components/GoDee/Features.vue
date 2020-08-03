<template>
  <section id="features" class="features">
    <div class="container-godee">
      <div class="features__container">
        <h2 class="features__main-title">Features</h2>
        <div class="features__content-wrapper">
          <ul class="features__features-text-list">
            <li class="features__features-text-item">
              <div class="features__text-title">Online Time-Tables & Live <br> Location Tracking</div>
              <p class="features__text-description">To make the GoDee app easy to use, we created a system <br> that tracks bus location in real time. So every user is able to <br> book a seat while their bus is approaching them.</p>
            </li>
            <li class="features__features-text-item">
              <div class="features__text-title">GPS</div>
              <p class="features__text-description">We use GPS data for bus tracking, and we have developed <br> an algorithm for bus travel/arrival time prediction, which <br> uses geocoding service and also calculates time <br> concerning traffic jams and their severity. The predictor <br> functionality calculates estimated arrival time for a bus on <br> this or that route. It helps our passengers check if the <br> requested bus arrives on time, taking into account <br> traffic jams.</p>
            </li>
            <li class="features__features-text-item">
              <div class="features__text-title">Referral</div>
              <div class="features__text-description">Inside the GoDee application, users can share referrals and <br> get free rides as bonuses. After receiving a referral code <br> from a referrer, the user can input the code from the <br> booking confirmation as a promo code and enjoy one free <br> ride. Meanwhile, referrers themselves receive a reward with <br> "X" number of free rides.</div>
            </li>
            <li class="features__features-text-item features__features-text-item-payment">
              <div class="features__text-title">Payment method</div>
              <p class="features__text-description">As cashless payments are becoming more and more <br> popular in Vietnam, we have integrated Stripe service into <br> GoDee, enabling the passengers to pay with credit cards <br> easily and quickly. We have also developed an API for <br> flawless third-party service integration. Visa/Mastercard, <br> AmEx, MoMo and JCB are integrated into the GoDee user <br> app to facilitate cashless payments. We have also provided <br> a personal balance, which can be replenished via the <br> above-mentioned payment systems.</p>
              <div class="features__text-sub-title">Online Payment Service Integration</div>
              <p class="features__text-description">Visa/Mastercard, AmEx, MoMo and JCB are integrated into <br> the GoDee user app to facilitate cashless payments.</p>
            </li>
            <li class="features__features-text-item">
              <div class="features__text-title">The best possible routes</div>
              <div class="features__text-description">Depending on passengers’ requests, the system allows <br> drivers to build the best possible routes automatically. If <br> there are no orders from passengers, drivers will skip the <br> empty bus and stop along the way.</div>
            </li>
          </ul>
          <ul class="features__features-images-list">
            <li class="features__image-wrapper" v-for="(image, i) in images" :key="i">
              <img :src="require(`@/assets/img/GoDee/svg/${image.name}.svg`)" alt="Features" :class="`features__${image.name}`">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      images: [
        {
          name: 'live-location-tracker'
        },
        {
          name: 'time-tables'
        },
        {
          name: 'referral'
        },
        {
          name: 'payment-methods'
        },
        {
          name: 'possible-routes'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .features {
    &__content-wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__main-title,
    &__text-title,
    &__text-sub-title {
      font-family: 'Hoves-Bold';
    }

    &__main-title {
      margin-bottom: get-vw(34px);
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
      text-align: center;
    }

    &__features-images-list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__features-text-item {
      margin-bottom: get-vw(70px);
    }

    &__features-text-item-payment {
      margin-bottom: get-vw(146px); 
    }

    &__text-title {
      margin-bottom: get-vw(20px);
      font-size: get-vw(50px);
      letter-spacing: get-vw(-2px);
    }

    &__text-sub-title,
    &__text-description {
      letter-spacing: get-vw(-1px);
      color: $text-color--grey-dark;
    }

    &__text-sub-title {
      margin-top: get-vw(30px);
      margin-bottom: get-vw(5px);
      font-size: get-vw(32px);
    }

    &__text-description {
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular';
    }

    &__image-wrapper {
      margin-bottom: get-vw(106px);
    }

    &__live-location-tracker {
      width: get-vw(491px);
      height: get-vw(355px);
    }

    &__time-tables {
      width: get-vw(540px);
      height: get-vw(393px);
    }

    &__referral {
      width: get-vw(541px);
      height: get-vw(303px);
    }

    &__payment-methods,
    &__possible-routes {
      width: get-vw(542px);
    }

    &__payment-methods {
      height: get-vw(376px);
    }

    &__possible-routes {
      height: get-vw(506px);
    }
  }
</style>
