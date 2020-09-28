<template>
  <section id="customer-testimonials" class="customer-testimonials">
    <div class="container">
      <h2 class="customer-testimonials__title title">
        Customer Testimonials
      </h2>
      <div class="customer-testimonials__content-wrap row">
        <div class="customer-testimonials__widget-col col-xl-8 col-lg-8">
          <client-only>
            <div class="customer-testimonials__widget-wrap">
              <div
                ref="clutch"
                class="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="4"
                data-expandifr="true"
                data-height="auto"
                data-clutchcompany-id="258762">
              </div>
            </div>
          </client-only>
        </div>
        <div class="col-xl-4 col-lg-4">
          <div class="customer-testimonials__testimonials-list row">
            <div class="customer-testimonials__testimonials-item col-xl-12 col-lg-12 col-md-4 col-sm-4" v-for="(testimonial, i) in testimonials" :key="i">
              <div class="customer-testimonials__testimonials-text paragraph-md">
                {{ testimonial.testimonialText }}
              </div>
              <div class="customer-testimonials__customer-info">
                <div class="customer-testimonials__profile">
                  <img
                    :src="require(`@/assets/img/Home/png/customers/${testimonial.customerImageName}.png`)"
                    loading="lazy"
                    class="customer-testimonials__customer-image"
                    :alt="testimonial.customerName">
                  <p class="customer-testimonials__customer-name paragraph-sm">
                    {{ testimonial.customerName }} <br> {{ testimonial.customerCountry }}
                  </p>
                </div>
                <div class="customer-testimonials__project">
                  <a :href="testimonial.link" target="blank" rel="nofollow">
                    <img
                      :src="require(`@/assets/img/Home/svg/customerTestimonials/${testimonial.customerProject}.svg`)"
                      class="customer-testimonials__project-image"
                      loading="lazy"
                      :class="`customer-testimonials__${testimonial.customerProject}`"
                      :alt="testimonial.customerProject">
                  </a>
                </div>
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
  name: 'CustomerTestimonials',
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

  .customer-testimonials {
    padding-top: 60px;
    padding-bottom: 102px;
    background-color: $bgcolor--grey-light;

    &__title {
      margin-bottom: 10px;
    }

    &__content-wrap {
      display: flex;
    }

    &__testimonials-list {
      margin-top: 25px;
    }

    &__testimonials-item {
      margin-top: 62px;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        div {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: 0;
        }
      }
    }

    &__customer-info {
      justify-content: space-between;
      padding-top: 16px;
    }

    &__customer-info,
    &__profile {
      display: flex;
      align-items: center;
    }

    &__customer-image {
      width: 42px;
      height: 42px;
      border-radius: 4px;
    }

    &__customer-name {
      padding-left: 8px;
      font-family: 'Formular-Regular';
      color: $text-color--grey;
    }

    &__widget-wrap {
      margin-right: 37px;
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

  @media only screen and (max-width: 1328px) {
    .customer-testimonials {
      &__widget-wrap {
        .clutch-widget {
          margin: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .customer-testimonials {
      &__customer-info {
        flex-direction: column;
        align-items: flex-start;
      }

      &__project {
        margin-top: 15px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .customer-testimonials {
      padding-top: 42px;
      padding-bottom: 58px;
    }
  }

  @media only screen and (max-width: 991px) {
    .customer-testimonials {
      &__widget-wrap {
        width: 100%;
        margin: 0;

        .clutch-widget {
          margin: 0 -30px;
        }
      }

      &__customer-image {
        width: 34px;
        height: 34px;
      }

      &__testimonials-list {
        margin-top: 5px;
        flex-direction: unset;
      }

      &__testimonials-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 0;
      }

      &__profile {
        align-items: initial;
      }

      &__project {
        margin-top: 11px;
      }

      &__teacherly {
        width: 52px;
      }

      &__veeqo {
        width: 45px;
      }

      &__guardrails {
        width: 85px;
      }
    }
  }

  @media only screen and (max-width: 910px) {
    .customer-testimonials {
      &__widget-wrap {
        .clutch-widget {
          margin: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .customer-testimonials {
      padding-bottom: 71px;

      &__customer-info {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        padding-bottom: 24px;
        border-bottom: 1px solid $input-bgcolor--grey-dark;
      }

      &__profile {
        align-items: center;
      }

      &__project {
        width: initial;
      }

      &__teacherly,
      &__veeqo {
        width: initial;
      }

      &__guardrails {
        width: 120px;
      }
    }
  }
</style>
