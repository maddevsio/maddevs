<template>
  <div class="employees-benefits">
    <div class="employees-benefits_grid-container container">
      <h2
        class="employees-benefits_title"
      >
        Employees benefits
      </h2>
      <div
        class="employees-benefits_benefits-cards"
      >
        <BenefitCard
          v-for="benefit in benefits"
          v-bind="benefit"
          :key="benefit.title"
        />
      </div>
    </div>
    <div class="employees-benefits_slider-wrap">
      <UISlider
        :options="swiperOptions"
        :slides="slides"
      />
    </div>
  </div>
</template>

<script>
import BenefitCard from '@/components/Careers/shared/BenefitCard'
import UISlider from '@/components/shared/UISlider'
import { employeesBenefits as benefits } from '@/data/benefits'
import { slides } from '@/data/careersPage'

export default {
  name: 'EmployeesBenefits',
  components: {
    BenefitCard,
    UISlider,
  },

  data() {
    return {
      benefits,
      slides,
      swiperOptions: {
        speed: 750,
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        loop: false,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },

        autoplay: {
          delay: 2500,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.employees-benefits {
  padding-top: 100px;

  &_grid-container,
  &_benefits-cards {
    display: grid;
  }

  &_grid-container {
    grid-template-columns: 1fr 2fr;
    margin-bottom: 61px;

    @media screen and (max-width: 768px) {
      margin-bottom: 32px;
    }
  }

  &_benefits-cards {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 740px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &_title {
    margin-right: 48px;
    @include font('Poppins', 60px, 700);
    letter-spacing: -2.6px;
    line-height: 64px;
    color: $text-color--red;
  }

  &_slider-wrap {
    max-width: 1440px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1340px) {
    &_grid-container {
      grid-template-columns: 1fr;
    }

    &_benefits-cards {
      grid-gap: 8px;
    }

    &_title {
      margin-right: 0;
      margin-bottom: 29px;
    }
  }

  @media screen and (max-width: 1024px) {
    padding-top: 62px;

    &_title {
      margin-bottom: 23px;
      font-size: 40px;
      line-height: 118%;
      letter-spacing: -0.04em;
    }
  }

  @media screen and (max-width: 375px) {
    padding-top: 43px;
  }
}

/deep/ .benefit-card {
  padding: 30px 27px;

  @media screen and (max-width: 1024px) {
    padding: 15px;
  }

  @media screen and (max-width: 740px) {
    &__title br {
      display: none;
    }
  }
}

/deep/ .swiper-slide {
  height: 415px;
  width: 415px;

  @media screen and (max-width: 768px) {
    height: 293px;
    width: 293px;
  }
}
</style>
