<template>
  <section id="customers" class="customers">
    <div class="container">
      <div class="customers__text-content">
        <h2 class="customers__main-title">Our valued customers</h2>
        <p class="customers__description">Due to our NDAs and confidentiality requirements, we cannot disclose details for all of our customers. These are a few of the companies we work with.</p>
      </div>
      <div class="customers__customers-list">
        <Customer
          v-for="(customer, i) in customers"
          :key="i"
          :customer="customer"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Customer from '@/components/Projects/Customer';

export default {
  name: 'Customers',
  components: {
    Customer
  },
  data() {
    return {
      buttonInnerText: 'Order a project from us',
      modalWindowName: 'order-project-from-us-modal',
      customers: [
        {
          className: 'godee-icon'
        },
        {
          className: 'guardrails-icon'
        },
        {
          className: 'teacherly-icon'
        },
        {
          className: 'triggermesh-icon'
        },
        {
          className: 'clutch-icon'
        },
        {
          className: 'eatigo-icon'
        },
        {
          className: 'veeqo-icon'
        },
        {
          className: 'admitad-icon'
        },
        {
          className: 'iotsploit-icon'
        },
        {
          className: 'sir-jonas-icon'
        },
        {
          className: 'progressay-icon'
        },
        {
          className: 'kickoico-icon'
        },
        {
          className: 'nambafood-icon'
        },
        {
          className: 'showmebishkek-icon'
        },
        {
          className: 'mythril-icon'
        },
        {
          className: 'seso-icon'
        },
        {
          className: 'tengri-icon'
        },
        {
          className: 'peklo-icon'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.customers {
  padding-bottom: 151px;

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
</style>
