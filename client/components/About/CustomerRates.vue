<template>
  <section id="customer-rates" class="customer-rates">
    <div class="container">
      <h2 class="customer-rates__title title">
        Fantastic customer rates:
      </h2>
      <div class="customer-rates__top-row row">
        <div class="customer-rates__rates-block customer-rates__rates-block--top-row">
          <p class="customer-rates__number customer-rates__number--top-row">92%</p>
          <p class="customer-rates__description customer-rates__description--top-row">recommend us to others.</p>
        </div>
        <div class="customer-rates__rates-block customer-rates__rates-block--top-row">
          <p class="customer-rates__number customer-rates__number--top-row">87%</p>
          <p class="customer-rates__description customer-rates__description--top-row">stay with us for more than 2 years</p>
        </div>
        <div class="customer-rates__rates-block customer-rates__rates-block--top-row">
          <p class="customer-rates__number customer-rates__number--top-row">98%</p>
          <p class="customer-rates__description customer-rates__description--top-row">are satisfied with our pricing.</p>
        </div>
      </div>
      <h3 class="customer-rates__title-md title-md">Mad Devs' key metrics:</h3>
      <div class="customer-rates__bottom-row row">
        <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
          <p class="customer-rates__number customer-rates__number--bottom-row">10M+</p>
          <p class="customer-rates__description customer-rates__description--bottom-row">US dollars raised by 5 customer startups in 2019.</p>
        </div>
        <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
          <p class="customer-rates__number customer-rates__number--bottom-row">75%</p>
          <p class="customer-rates__description customer-rates__description--bottom-row">of customers are now paying 50% less for IT infrastructure.</p>
        </div>
        <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
          <p class="customer-rates__number customer-rates__number--bottom-row">30+</p>
          <p class="customer-rates__description customer-rates__description--bottom-row">tech bloggers and conference speakers in our team.</p>
        </div>
        <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
          <p class="customer-rates__number customer-rates__number--bottom-row">50+</p>
          <p class="customer-rates__description customer-rates__description--bottom-row">projects delivered to customers by our team.</p>
        </div>
        <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
          <p class="customer-rates__number customer-rates__number--bottom-row">100+</p>
          <p class="customer-rates__description customer-rates__description--bottom-row">staff members work for Mad Devs.</p>
        </div>
        <div class="customer-rates__rates-block customer-rates__rates-block--bottom-row">
          <p class="customer-rates__number customer-rates__number--bottom-row">70+</p>
          <p class="customer-rates__description customer-rates__description--bottom-row">open-source projects on GitHub.</p>
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
    background-color: $bgcolor--white-darken;

    &__title {
      text-align: center;
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
  }
</style>
