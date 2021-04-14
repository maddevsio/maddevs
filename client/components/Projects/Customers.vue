<template>
  <section
    id="customers"
    class="customers"
  >
    <div class="container">
      <div class="customers__text-content">
        <h2 class="customers__main-title">
          Our valued customers
        </h2>
        <p class="customers__description">
          Due to our NDAs and confidentiality requirements, we cannot disclose details for all of our customers. These
          are a few of the companies we work with.
        </p>
      </div>
      <div class="customers__customers-list">
        <div
          v-for="customer in customers"
          :key="customer"
          class="icon-wrapper"
        >
          <img
            class="icon-wrapper__icon img_lazy"
            :data-src="require(`@/assets/img/Projects/svg/${customer}.svg`)"
            :alt="customer"
          >
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

  @media only screen and (max-width: 1024px) {
    min-height: 81px;

    &__icon {
      width: 75px;
      height: 33px;
    }
  }
}
</style>
