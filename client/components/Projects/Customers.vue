<template>
  <section id="customers" class="customers">
    <div class="container">
      <div class="customers__text-content">
        <h2 class="customers__main-title">Our valued customers</h2>
        <p class="customers__description">
          Due to our NDAs and confidentiality requirements, we cannot disclose details for all of our customers. These
          are a few of the companies we work with.
        </p>
      </div>
      <div class="customers__customers-list">
        <div v-for="customer in customers" :key="customer" class="icon-wrapper">
          <div :class="`icon-wrapper__${customer}-icon`" class="icon-wrapper__icon"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { customers } from '@/data/customers'

export default {
  name: 'Customers',

  data() {
    return {
      customers,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/_ourValuedIcons';

.customers {
  padding-bottom: 108px;

  &__text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  &__customers-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }

  &__main-title,
  &__description {
    text-align: center;
  }

  &__main-title {
    @include h2_title;
    width: max-content;
    color: $text-color--white;
    padding-bottom: 4px;
  }

  &__description {
    width: 680px;
    font-family: 'Poppins-Regular';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: $text-color--grey;
  }

  @media only screen and (max-width: 1300px) {
    &__customers-list {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media only screen and (max-width: 1160px) {
    &__customers-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-bottom: 109px;

    &__customers-list {
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 14px;
    }
  }

  @media only screen and (max-width: 834px) {
    padding-bottom: 82px;

    &__text-content {
      margin-bottom: 20px;
    }

    &__customers-list {
      grid-template-columns: repeat(5, 1fr);
    }

    &__description {
      width: 395px;
    }
  }

  @media only screen and (max-width: 640px) {
    &__customers-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media only screen and (max-width: 578px) {
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 520px) {
    &__customers-list {
      grid-template-columns: repeat(3, 1fr);
    }

    &__main-title {
      width: unset;
    }

    &__description {
      width: 100%;
    }
  }

  @media only screen and (max-width: 360px) {
    &__customers-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.icon-wrapper {
  min-height: 111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $our-valued-icon-background;

  &__icon {
    width: 143px;
    height: 64px;
    display: block;
  }

  &__godee-icon {
    @include godee-icon;
  }

  &__guardrails-icon {
    @include guardrails-icon;
  }

  &__teacherly-icon {
    @include teacherly-icon;
  }

  &__triggermesh-icon {
    @include triggermesh-icon;
  }

  &__clutch-icon {
    @include clutch-icon;
  }

  &__eatigo-icon {
    @include eatigo-icon;
  }

  &__veeqo-icon {
    @include veeqo-icon;
  }

  &__admitad-icon {
    @include admitad-icon;
  }

  &__iotsploit-icon {
    @include iotsploit-icon;
  }

  &__sir-jonas-icon {
    @include sir-jonas-icon;
  }

  &__progressay-icon {
    @include progressay-icon;
  }

  &__kickoico-icon {
    @include kickoico-icon;
  }

  &__nambafood-icon {
    @include nambafood-icon;
  }

  &__showmebishkek-icon {
    @include showmebishkek-icon;
  }

  &__mythril-icon {
    @include mythril-icon;
  }

  &__seso-icon {
    @include seso-icon;
  }

  &__tengri-icon {
    @include tengri-icon;
  }

  &__peklo-icon {
    @include peklo-icon;
  }

  @media only screen and (max-width: 1024px) {
    min-height: 81px;

    &__icon {
      width: 75px;
      height: 33px;
    }
  }
}
</style>
