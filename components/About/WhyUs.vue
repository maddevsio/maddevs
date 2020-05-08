<template>
  <section id="why-us" class="why-us">
    <div class="container">
      <div class="why-us__title-wrap">
        <h2 class="why-us__main-title">Why us?</h2>
      </div>
      <div class="why-us__statistics-wrap">
        <div class="why-us__customer-rates">
          <div class="why-us__rates-title">Fantastic customer satisfaction rates:</div>
          <div class="why-us__rates-list">
            <div class="why-us__rates-item" v-for="(rate, i) in customerRates" :key="i">
              <div class="why-us__rates-number">
                {{ rate.number }}<span>%</span>
              </div>
              <p class="why-us__rates-item_description paragraph">
                {{ rate.description }}
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
  },
  data() {
    return {
      customerRates: [
        {
          number: '92',
          description: 'recommend us to others.'
        },
        {
          number: '87',
          description: 'stay with us for more than 2 years.'
        },
        {
          number: '98',
          description: 'are satisfied with our pricing.'
        }
      ],
      metrics: ['50+', '100+', '10+ million', '75%', '70+', '30+']
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .why-us {
    background-color: $bgcolor--white;

    &__main-title {
      padding-bottom: 120px;
      font-size: 340px;
      font-family: 'Hoves-Bold';
      color: $text-color--grey-light;
      line-height: 200px;
    }

    &__customer-rates,
    &__rates-list {
      display: flex;
    }

    &__customer-rates {
      justify-content: space-around;
    }

    &__rates-item {
      &:first-child {
        p {
          max-width: 120px;
        }
      }
    }

    &__rates-title {
      max-width: 475px;
      font-size: 50px;
      font-family: 'Hoves-Bold';
      color: $text-color--black;
    }

    &__rates-number {
      display: flex;
      font-size: 130px;
      font-family: 'Hoves-Bold';
      color: $text-color--red;

      span {
        display: block;
        margin-top: 5px;
        font-size: 70px;
      }
    }

    &__rates-item_description {
      max-width: 150px;
      color: $text-color--black;
    }
  }
</style>
