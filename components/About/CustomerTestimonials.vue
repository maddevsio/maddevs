<template>
  <section id="customer-testimonials" class="customer-testimonials">
    <div class="container">
      <h1 class="customer-testimonials__main-title main-title">
        <span>Customer</span> Testimonials
      </h1>
      <div class="customer-testimonials___content-wrap">
        <div class="customer-testimonials__widget-wrap">
          <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script> <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="5" data-expandifr="true" data-height="auto" data-clutchcompany-id="258762"></div>
        </div>
        <div class="customer-testimonials__testimonials-list">
          <div class="customer-testimonials__testimonials-item">
            <div class="customer-testimonials__testimonials-text paragraph">
              Being a small team without a project manager we have <br> never regretted of the collaboration with Mad Devs. <br> The team shared the product ownership and <br> responsibility for its development.
            </div>
            <div class="customer-testimonials__customer-info">
              <div class="customer-testimonials__profile">
                <img src="../../assets/img/Home/png/customers/atif.png" class="customer-testimonials__customer-image" alt="Atif Mahmud">
                <p class="customer-testimonials__customer-name">
                  Atif Mahmud, <br> The UK
                </p>
              </div>
              <div class="customer-testimonials__project">
                <img src="../../assets/img/Home/svg/customerTestimonials/teacherly.svg" class="customer-testimonials__project-image" alt="Teacherly">
              </div>
            </div>
          </div>
          <div class="customer-testimonials__testimonials-item">
            <div class="customer-testimonials__testimonials-text paragraph">
              We would never had a better deal on the labour market <br> on our own. Buying from Mad Devs was our best way of <br> finding a top-notch DevOps engineer.
            </div>
            <div class="customer-testimonials__customer-info">
              <div class="customer-testimonials__profile">
                <img src="../../assets/img/Home/png/customers/daniel.png" class="customer-testimonials__customer-image" alt="Daniel Vartanov">
                <p class="customer-testimonials__customer-name">
                  Daniel Vartanov, <br> The UK
                </p>
              </div>
              <div class="customer-testimonials__project">
                <img src="../../assets/img/Home/svg/customerTestimonials/veeqo.svg" class="customer-testimonials__project-image" alt="Veeqo">
              </div>
            </div>
          </div>
          <div class="customer-testimonials__testimonials-item">
            <div class="customer-testimonials__testimonials-text paragraph">
              I am very happy with Mad Devs services so far. <br> Looking forward to a long and fruitful partnership.
            </div>
            <div class="customer-testimonials__customer-info">
              <div class="customer-testimonials__profile">
                <img src="../../assets/img/Home/png/customers/stefan.png" class="customer-testimonials__customer-image" alt="Stefan Streichsbier">
                <p class="customer-testimonials__customer-name">
                  Stefan Streichsbier, <br> Singapore
                </p>
              </div>
              <div class="customer-testimonials__project">
                <img src="../../assets/img/Home/svg/customerTestimonials/guardrails.svg" class="customer-testimonials__project-image" alt="Guardrails">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomerTestimonials'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .clutch-widget {
    iframe {
      width: 300px !important;
      height: 300px !important;
    }
  }

  .customer-testimonials {
    background-color: $bgcolor--grey-light;

    &__main-title {
      span {
        color: $text-color--grey-light;
        text-shadow: $text-shadow--black;
      }
    }

    &__testimonials-list {
      display: grid;
      grid-row-gap: 49px;
    }

     &__testimonials-item {
      max-width: 445px;
     }

    &__customer-info {
      padding-top: 15px;
      padding-bottom: 60px;
    }

    &__customer-info,
    &__profile {
      display: flex;
      align-items: center;
    }

    &__customer-image {
      padding-right: 14px;
      border-radius: 100%;
    }

    &__customer-name {
      color: $text-color--grey;
      font-family: 'Hoves-Regular';
      font-size: 16px;
    }
  }
</style>
