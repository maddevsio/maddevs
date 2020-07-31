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
                <a :href="testimonial.link" target="blank" rel="nofollow">
                  <img :src="require(`@/assets/img/Home/svg/customerTestimonials/${testimonial.customerProject}.svg`)" class="customer-testimonials__project-image" :class="testimonial.customerProject" :alt="testimonial.customerProject">
                </a>
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
          testimonialText: 'Being a small team without a project manager we have never regretted of the collaboration with Mad Devs. The team shared the product ownership and responsibility for its development.',
          link: 'https://teacherly.io/'
        },
        {
          customerName: 'Daniel Vartanov,',
          customerCountry: 'The UK',
          customerProject: 'veeqo',
          customerImageName: 'daniel',
          testimonialText: 'We would never had a better deal on the labour market on our own. Buying from Mad Devs was our best way of finding a top-notch DevOps engineer.',
          link: 'https://veeqo.com/'
        },
        {
          customerName: 'Stefan Streichsbier,',
          customerCountry: 'Singapore',
          customerProject: 'guardrails',
          customerImageName: 'stefan',
          testimonialText: 'I am very happy with Mad Devs services so far. Looking forward to a long and fruitful partnership.',
          link: 'https://guardrails.io/'
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
  @import '../../assets/styles/get-vw';

  .customer-testimonials {
    padding: get-vw(137px) 0;
    background-color: $bgcolor--grey-light;

    &__main-title {
      padding-bottom: get-vw(59px);

      span {
        color: $text-color--grey-light;
        -webkit-text-stroke: $text-stroke--black;
      }
    }

    &__testimonials-list {
      max-height: get-vw(785px);
      display: flex;
      flex-direction: column;
      padding-left: get-vw(82px);
    }

    &__content-wrap {
      display: flex;
    }

    &__testimonials-item {
      max-width: get-vw(445px);
      padding-top: get-vw(54px);

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
        width: get-vw(18px);
        height: get-vw(12px);
        position: absolute;
        top: get-vw(5px);
        left: get-vw(-23px);
        background: url('../../assets/img/Home/svg/customerTestimonials/quotes.svg') no-repeat center;
      }
    }

    &__customer-info {
      justify-content: space-between;
      padding-top: get-vw(15px);
      padding-bottom: get-vw(54px);
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
      padding-left: get-vw(14px);
      color: $text-color--grey;
      font-family: 'Hoves-Regular';
      font-size: get-vw(16px);
    }

    &__widget-wrap {
      max-width: 37vw;
      width: 90%;
      height: 100%;
    }

    &__project {
      width: get-vw(156px);
    }

    .mobile-slider {
      display: none;
    }
  }

  @media only screen and (max-width: 1600px) {
    .customer-testimonials {
      &__widget-wrap {
        max-width: get-vw(813px);
        overflow: hidden;

        .clutch-widget {
          margin: 0 get-vw(-30px);
        }
      }
    }
  }

  @media only screen and (max-width: 1480px) {
    .customer-testimonials {
      &__widget-wrap {
        max-width: 58vw;
      }
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

  @media only screen and (max-width: 1280px) {
    .customer-testimonials {
      &__project {
        width: initial;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .customer-testimonials {

      &__content-wrap {
        flex-direction: column;
      }

      &__widget-wrap {
        width: initial;
      }

      &__testimonials-list {
        padding-top: get-vw(85px);
        padding-left: 0;
        max-height: 64vw;
      }

      &__testimonials-item {
        max-width: 100%;
      }

      &__widget-wrap {
        max-width: 100%;
      }
    }
  }

  @media only screen and (max-width: 745px) {
    .customer-testimonials {
      &__customer-name,
      /deep/.mobile-customer_name {
        padding-left: 2vw;
        font-size: 2vw;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .customer-testimonials {
      &__testimonials-list {
        display: none;
      }

      .mobile-slider {
        display: block;
        padding-top: 6vw;
      }

      &__widget-wrap {
        margin: initial;
      }

      &__customer-name,
      /deep/.mobile-customer_name {
        padding-left: 3vw;
        font-size: 3vw;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .customer-testimonials {
      &__customer-name,
      /deep/.mobile-customer_name {
        padding-left: 4vw;
        font-size: 4vw;
        line-height: 6vw;
      }
    }
  }
</style>
