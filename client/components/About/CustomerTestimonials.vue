<template>
  <section id="customer-testimonials" class="customer-testimonials">
    <div class="container">
      <h2 class="customer-testimonials__title">
        Customer Testimonials
      </h2>
      <div class="customer-testimonials__content-wrap">
        <div class="customer-testimonials__widget-col">
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
        <div class="customer-testimonials__testimonials-list">
          <div class="customer-testimonials__testimonials-item"
               v-for="(testimonial, i) in testimonials" :key="i">
            <blockquote class="customer-testimonials__testimonials-text paragraph-md">
              {{ testimonial.testimonialText }}
            </blockquote>
            <div class="customer-testimonials__customer-info">
              <div class="customer-testimonials__profile">
                <img
                  :data-src="require(`@/assets/img/Home/png/customers/${testimonial.customerImageName}.png`)"
                  class="customer-testimonials__customer-image img_lazy"
                  :alt="testimonial.alt"
                  width="42"
                  height="42"
                >
                <span class="customer-testimonials__customer-name paragraph-sm">
                  {{ testimonial.customerName }} <span>{{ testimonial.customerCountry }}</span>
                </span>
              </div>
              <div class="customer-testimonials__project">
                <a :href="testimonial.link" target="_blank" rel="nofollow">
                  <img
                    :width="testimonial.logoWidth"
                    height="31"
                    :data-src="require(`@/assets/img/Home/svg/testimonials/${testimonial.customerProject}.svg`)"
                    class="img_lazy single-project__logo"
                    :class="`customer-testimonials__${testimonial.customerProject}`"
                    :alt="testimonial.alt"
                  >
                </a>
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
          customerName: 'Atif Mahmood,',
          customerCountry: 'The UK',
          customerProject: 'teacherly',
          customerImageName: 'atif',
          testimonialText: 'Being a small team without a project manager we have never regretted of the collaboration with Mad Devs. The team shared the product ownership and responsibility for its development.',
          link: 'https://teacherly.io/',
          alt: 'Atif Mahmood - CEO and Founder at Teacherly.',
          logoWidth: 91
        },
        {
          customerName: 'Daniel Vartanov,',
          customerCountry: 'The UK',
          customerProject: 'veeqo',
          customerImageName: 'daniel',
          testimonialText: 'We would never had a better deal on the labour market on our own. Buying from Mad Devs was our best way of finding a top-notch DevOps engineer.',
          link: 'https://veeqo.com/',
          alt: 'Daniel Vartanov - CTO at Veeqo.com.',
          logoWidth: 83
        },
        {
          customerName: 'Stefan Streichsbier,',
          customerCountry: 'Singapore',
          customerProject: 'guardrails',
          customerImageName: 'stefan',
          testimonialText: 'I am very happy with Mad Devs services so far. Looking forward to a long and fruitful partnership.',
          link: 'https://guardrails.io/',
          alt: 'Stefan Streichsbier - CEO and Founder at GuardRails.io.',
          logoWidth: 160
        }
      ],
      script: null
    };
  },
  mounted() {
    let clutchLoader = () => {
      this.script = document.createElement('script');
      this.script.setAttribute('src', 'https://widget.clutch.co/static/js/widget.js');
      document.body.appendChild(this.script);
      this.script.onload = function() {
        CLUTCHCO.Init();
      };
      window.removeEventListener('scroll', clutchLoader);
    };
	  window.addEventListener('scroll', clutchLoader);
  },
  destroyed() {
    if (this.script !== null) {
      this.script.remove();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.customer-testimonials {
  background-color: #f5f7f9;

  &__title {
    @include h2_title;
  }

  &__content-wrap {
    display: flex;
    justify-content: space-between;
    padding-bottom: 77px;

    @media screen and (max-width: 1169px) {
      flex-direction: column;
      padding-bottom: 53px;
    }

    @media screen and (max-width: 767px) {
      display: block;
    }
  }

  &__testimonials {
    &-list {
      max-width: 315px;

      @media screen and (max-width: 1169px) {
        max-width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0 36px;
        justify-content: space-between;
      }

      @media screen and (max-width: 767px) {
        display: block;
      }
    }

    &-item {
      margin-bottom: 62px;

      @media screen and (max-width: 1169px) {
        margin-bottom: 0  ;
      }

      @media screen and (max-width: 767px) {
        border-bottom: 1px solid #D7DDE1;
        margin-bottom: 24px;
        padding-bottom: 24px;

        &:last-child {
          margin-bottom: 0;
          border-bottom: 0;
          padding-bottom: 0;
        }
      }
    }

    &-text {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.02em;
      color: #111213;
      margin: 0 0 16px;

      @media screen and (min-width: 768px) {
        @media screen and (max-width: 1169px) {
          height: 144px;
        }

        @media screen and (max-width: 1090px) {
          height: 166px;
        }

        @media screen and (max-width: 1024px) {
          font-size: 12px;
          line-height: 20px;
          height: 100px;
        }

        @media screen and (max-width: 905px) {
          height: 118px;
        }

        @media screen and (max-width: 830px) {
          height: 134px;
        }

        @media screen and (max-width: 802px) {
          height: 140px;
        }
      }

      @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;
        margin: 0 0 17px;
      }
    }
  }

  &__profile {
    display: flex;
    align-items: flex-start;
  }

  &__customer {
    &-image {
      border-radius: 4px;
      margin-right: 8px;

      @media screen and (min-width: 1025px) {
        width: 42px;
        min-width: 42px;
        height: 42px;
      }

      @media screen and (max-width: 1024px) {
        width: 34px;
        min-width: 34px;
        height: 34px;
        margin-right: 10px;
      }
    }

    &-info {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      @media screen and (max-width: 1169px) {
        flex-direction: column;

        .customer-testimonials__project {
          align-self: flex-start;
          margin-top: 15px;
        }
      }

      @media screen and (max-width: 767px) {
        flex-direction: row;

        .customer-testimonials__project {
          margin-top: 0;
          align-self: center;
        }
      }
    }

    &-name {
      color: #6d7a7d;
      font-size: 14px;
      line-height: 18px;
      margin-top: 3px;

      @media screen and (max-width: 1024px) {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.02em;
      }

      span {
        display: block;
      }
    }
  }

  &__widget {
    &-wrap {
      overflow: hidden;

      .clutch-widget {
        @media only screen and (min-width: 992px) {
          margin: 0 -30px;
        }

        @media only screen and (max-width: 991px) and (min-width: 911px) {
          margin: 0 -30px;
        }

        @media only screen and (max-width: 1279px) and (min-width: 1170px) {
          margin: 0;
        }

        @media only screen and (max-width: 910px) {
          margin: 0;
        }
      }
    }

    &-col {
      width: 100%;
      margin-right: 4.45vw;

      @media screen and (max-width: 1169px) {
        margin-bottom: 34px;
      }
    }
  }

  &__project {
    align-self: center;

    @media screen and (max-width: 1365px) and (min-width: 1025px) {
      justify-self: flex-end;
    }
  }

  &__teacherly,
  &__veeqo,
  &__guardrails {
    display: block;
  }

  &__teacherly {
    width: 91px;
    height: 29px;

    @media screen and (max-width: 1169px) and (min-width: 768px) {
      width: 50px;
      height: 16px;
      background-size: contain;
    }
  }

  &__veeqo {
    width: 83px;
    height: 31px;

    @media screen and (max-width: 1169px) and (min-width: 768px) {
      width: 43px;
      height: 16px;
      background-size: contain;
    }
  }

  &__guardrails {
    width: 160px;
    height: 32px;

    @media screen and (max-width: 1169px) {
      width: 80px;
      height: 16px;
      background-size: contain;
    }

    @media screen and (max-width: 768px) {
      width: 105px;
      height: 20px;
    }
  }
}
</style>
