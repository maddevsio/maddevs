<template>
  <section id="customer-testimonials" class="customer-testimonials">
    <div class="container">
      <h1 class="customer-testimonials__main-title main-title">
        <span>Customer</span> Testimonials
      </h1>
      <div class="customer-testimonials__content-wrap">
        <div class="customer-testimonials__widget-wrap">
          <client-only>
            <div
              ref="clutch"
              class="clutch-widget"
              data-url="https://widget.clutch.co"
              data-widget-type="4"
              data-expandifr="true"
              data-height="auto"
              data-clutchcompany-id="258762">
            </div>
          </client-only>
        </div>
        <div class="customer-testimonials__testimonials-list">
          <div class="customer-testimonials__testimonials-item" v-for="(testimonial, i) in testimonials" :key="i">
            <div class="customer-testimonials__testimonials-text paragraph">
              {{ testimonial.testimonialText }}
            </div>
            <div class="customer-testimonials__customer-info">
              <div class="customer-testimonials__profile">
                <img :src="require(`@/assets/img/Home/png/customers/${testimonial.customerImageName}.png`)" class="customer-testimonials__customer-image" :alt="testimonial.customerName">
                <p class="customer-testimonials__customer-name">
                  {{ testimonial.customerName }} <br> {{ testimonial.customerCountry }}
                </p>
              </div>
              <div class="customer-testimonials__project">
                <img :src="require(`@/assets/img/Home/svg/customerTestimonials/${testimonial.customerProject}.svg`)" class="customer-testimonials__project-image" :class="testimonial.customerProject" :alt="testimonial.customerProject">
              </div>
            </div>
          </div>
        </div>
        <CustomerTestimonialMobileSlider :testimonials="testimonials" class="mobile-slider" />
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
      testimonials: [
        {
          customerName: 'Atif Mahmud,',
          customerCountry: 'The UK',
          customerProject: 'teacherly',
          customerImageName: 'atif',
          testimonialText: 'Being a small team without a project manager we have never regretted of the collaboration with Mad Devs. The team shared the product ownership and responsibility for its development.'
        },
        {
          customerName: 'Daniel Vartanov,',
          customerCountry: 'The UK',
          customerProject: 'veeqo',
          customerImageName: 'daniel',
          testimonialText: 'We would never had a better deal on the labour market on our own. Buying from Mad Devs was our best way of finding a top-notch DevOps engineer.'
        },
        {
          customerName: 'Stefan Streichsbier,',
          customerCountry: 'Singapore',
          customerProject: 'guardrails',
          customerImageName: 'stefan',
          testimonialText: 'I am very happy with Mad Devs services so far. Looking forward to a long and fruitful partnership.'
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      CLUTCHCO.Init();
    }, 0);
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .customer-testimonials {
    padding: 144px 0;
    background-color: $bgcolor--grey-light;

    &__main-title {
      padding-bottom: 59px;

      span {
        color: $text-color--grey-light;
        text-shadow: $text-shadow--black;
      }
    }

    &__testimonials-list {
      max-height: 785px;
      display: flex;
      flex-direction: column;
      padding-left: 50px;
    }

    &__content-wrap {
      display: flex;
      justify-content: space-between;
    }

    &__testimonials-item {
      max-width: 445px;
      padding-top: 54px;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        div {
          border-bottom: 0;
        }
      }
    }

    &__testimonials-text {
      position: relative;

      &::before {
        content: '';
        width: 18px;
        height: 12px;
        position: absolute;
        top: 5px;
        left: -23px;
        background: url('../../assets/img/Home/svg/customerTestimonials/quotes.svg') no-repeat center;
      }
    }

    &__customer-info {
      justify-content: space-between;
      padding-top: 15px;
      padding-bottom: 54px;
      border-bottom: 1px solid $input-bgcolor--grey-dark;
    }

    &__customer-info,
    &__profile,
    /deep/.mobile-profile {
      display: flex;
      align-items: center;
    }

    &__customer-image,
    /deep/.mobile-customer_image {
      border-radius: 100%;
    }

    &__customer-name,
    /deep/.mobile-customer_name {
      padding-left: 14px;
      color: $text-color--grey;
      font-family: 'Hoves-Regular';
      font-size: 16px;
    }

    &__widget-wrap {
      width: 813px;
      height: 100%;
      overflow: hidden;

      .clutch-widget {
        margin: 0 -30px;
      }
    }

    &__project {
      width: 156px;
    }

    .mobile-slider {
      display: none;
    }
  }

  @media only screen and (max-width: 1310px) {
    .customer-testimonials {
      &__widget-wrap {
        .clutch-widget {
          margin: initial;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .customer-testimonials {
      &__main-title {
        text-align: center;
      }

      &__content-wrap {
        flex-direction: column;
      }

      &__testimonials-list {
        display: none;
      }

      &__widget-wrap {
        width: initial;
      }

      .mobile-slider {
        display: block;
        padding-top: 35px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .customer-testimonials {
      padding-top: 45px;
      padding-bottom: 27px;
    }
  }

  @media only screen and (max-width: 440px) {
    .customer-testimonials {
      /deep/.mobile-customer_name {
        font-size: 14px;
      }
    }
  }
</style>
