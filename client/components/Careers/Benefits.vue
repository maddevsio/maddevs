<template>
  <div class="benefits container">
    <div class="benefits_benefit">
      <div
        class="benefits_description"
      >
        <h2 class="benefits_title">
          Sustainable <br> engineering culture
        </h2>
        <p class="benefits_paragraph">
          At Mad Devs, we build an environment where teams can move sustainably and quickly by implementing modern technologies and best practices.
        </p>
      </div>
      <ul
        class="benefits_list"
      >
        <li
          v-for="benefit in engineeringCultureBenefits"
          :key="benefit"
          class="benefits_list-item"
        >
          {{ benefit }}
        </li>
      </ul>
    </div>
    <div class="benefits_benefit">
      <div
        class="benefits_description"
      >
        <h2 class="benefits_title">
          Agile <br> development
        </h2>
        <p class="benefits_paragraph">
          High talent density in our 20+ teams creates a culture where collaboratively innovative and autonomous people thrive.
        </p>
      </div>
      <ul
        class="benefits_list"
      >
        <li
          v-for="benefit in agileDevelopmentBenefits"
          :key="benefit"
          class="benefits_list-item"
        >
          {{ benefit }}
        </li>
      </ul>
    </div>
    <div class="benefits_benefit">
      <div
        class="benefits_description"
      >
        <h2 class="benefits_title">
          Competitive and <br> reliable compensation
        </h2>
        <p class="benefits_paragraph">
          Everybody at Mad Devs—from C-suite to interns—gets paid competitive compensation in USD. Please note that due to legal regulations, majority of employees receive salaries in the local currency with respect to the exchange rate.
        </p>
      </div>
      <ul
        class="benefits_list"
      >
        <li
          v-for="benefit in competitiveAndCompensationBenefits"
          :key="benefit"
          class="benefits_list-item"
        >
          {{ benefit }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  engineeringCultureBenefits,
  agileDevelopmentBenefits,
  competitiveAndCompensationBenefits,
} from '@/data/benefits'

export default {
  name: 'Benefits',
  data() {
    return {
      engineeringCultureBenefits,
      agileDevelopmentBenefits,
      competitiveAndCompensationBenefits,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.benefits {
  margin-bottom: 68px;

  &_benefit {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: end;
    padding: 85px 0;
    border-bottom: 1px solid $border-color--grey-02-opacity;

    &:first-child {
      padding-top: 0;
    }
  }

  &_description {
    max-width: 686px;
  }

  &_title,
  &_paragraph,
  &_list-item {
    color: $text-color--white;
  }

  &_paragraph,
  &_list-item {
    letter-spacing: -0.013em;
  }

  &_title {
    margin-bottom: 21px;
    @include font('Poppins', 60px, 700);
    letter-spacing: -0.04em;
    line-height: 65px;
  }

  &_paragraph {
    @include font('Inter', 20px, 400);
    line-height: 29px;
  }

  &_list {
    display: flex;
    flex-direction: column;
  }

  &_list-item  {
    position: relative;
    margin-bottom: 15px;
    padding-left: 32px;
    @include font('Inter', 17px, 400);
    line-height: 140%;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      content: '―';
      position: absolute;
      left: 0;
      color: $text-color--red;
    }
  }

  @media screen and (max-width: 1340px) {
    &_benefit {
      padding: 56px 0;
    }

    &_description {
      max-width: 610px;
    }

    &_title {
      font-size: 40px;
      line-height: 50px;
    }

    &_paragraph {
      font-size: 18px;
      line-height: 29px;
    }
  }

  @media screen and (max-width: 1260px) {
    margin-bottom: 117px;

    &_benefit {
      grid-template-columns: 1fr;

      &:last-child {
        padding-bottom: 0;
        border-bottom: 0;
      }
    }

    &_description {
      max-width: 100%;
    }

    &_title br {
      display: none;
    }

    &_paragraph {
      margin-bottom: 29px;
    }
  }

  @media screen and (max-width: 620px) {
    margin-bottom: 81px;

    &_benefit {
      padding: 47px 0;
    }

    &_title {
      font-size: 34px;
      line-height: 118%;
    }

    &_paragraph {
      margin-bottom: 27px;
      font-size: 17px;
      line-height: 143%;
    }
  }
}
</style>
