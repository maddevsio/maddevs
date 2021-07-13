<template>
  <section
    id="customers"
    class="customers"
    :class="{ 'customers--light': light }"
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
      <UICustomersList
        :light="light"
        :customers="customers"
        :icon-background="iconBackground"
      />
    </div>
  </section>
</template>

<script>
import UICustomersList from '@/components/shared/UICustomersList'
import { customers } from '@/data/customers'

export default {
  name: 'Customers',
  components: {
    UICustomersList,
  },

  props: {
    light: {
      type: Boolean,
      default: false,
    },

    iconBackground: {
      type: String,
      default: 'transparent',
    },
  },

  data() {
    return {
      customers,
    }
  },
}
</script>

<style lang="scss" scoped>
.customers {
  padding-bottom: 108px;

  &__text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  &__main-title,
  &__description {
    text-align: center;
  }

  &__main-title {
    @include h2-title;
    width: max-content;
    color: $text-color--white;
    padding-bottom: 4px;
  }

  &__description {
    @include font('Inter', 14px, 400);
    width: 680px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: $text-color--grey;
  }

  &--light {
    background-color: #fff;

    .customers__main-title {
      color: #101113;
    }

    .customers__description {
      color: #101113;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-bottom: 109px;
  }

  @media only screen and (max-width: 834px) {
    padding-bottom: 82px;

    &__text-content {
      margin-bottom: 20px;
    }

    &__description {
      width: 395px;
    }
  }

  @media only screen and (max-width: 578px) {
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 520px) {
    &__main-title {
      width: unset;
    }

    &__description {
      width: 100%;
    }
  }
}
</style>
