<template>
  <section id="customers" class="customers">
    <div class="container">
      <div class="customers__title-wrap">
        <h2 class="customers__main-title main-title">
          Our valued customers
        </h2>
        <p class="customers__main-description paragraph">
          Due to our NDAs and confidentiality requirements, we cannot disclose
          details for all of our customers. These are a few of the companies we
          work with.
        </p>
      </div>
      <div class="valued-customers">
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
          imgName: 'godee',
          industry: 'Transportation'
        },
        {
          imgName: 'guardrails',
          industry: 'Security'
        },
        {
          imgName: 'teacherly',
          industry: 'EdTech'
        },
        {
          imgName: 'triggermesh',
          industry: 'CloudTech'
        },
        {
          imgName: 'clutch',
          industry: 'AdTech'
        },
        {
          imgName: 'eatigo',
          industry: 'Logistics'
        },
        {
          imgName: 'veeqo',
          industry: 'Ecommerce'
        },
        {
          imgName: 'admitad',
          industry: 'AdTech'
        },
        {
          imgName: 'iotsploit',
          industry: 'IoT'
        },
        {
          imgName: 'sir_jonas',
          industry: 'Tourism'
        },
        {
          imgName: 'progressay',
          industry: 'EdTech'
        },
        {
          imgName: 'kickoico',
          industry: 'Blockchain'
        },
        {
          imgName: 'namba_food',
          industry: 'Logistics'
        },
        {
          imgName: 'showmebishkek',
          industry: 'Tourism'
        },
        {
          imgName: 'mythril',
          industry: 'Blockchain'
        },
        {
          imgName: 'seso',
          industry: 'Entertainment'
        },
        {
          imgName: 'tengri',
          industry: 'FinTech'
        },
        {
          imgName: 'peklo',
          industry: 'AdTech'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/get-vw';

.customers {
  padding-top: get-vw(170px);

  &__title-wrap {
    display: flex;
    align-items: flex-end;
  }

  &__main-title {
    color: $text-color--red;
    max-width: get-vw(837px);
    min-width: get-vw(575px);
    margin-right: get-vw(58px);
  }

  &__main-description {
    color: $text-color--grey;
    line-height: get-vw(25px);
    letter-spacing: -0.03em;
    max-width: get-vw(575px);
    padding-bottom: get-vw(19px);
  }

  .valued-customers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(get-vw(150px), 1fr));
    align-items: center;
    margin: get-vw(80px) 0 get-vw(40px);
    grid-row-gap: get-vw(100px);
    grid-column-gap: get-vw(80px);
  }
}

@media only screen and (max-width: 1600px) {
  .customers {
    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(get-vw(140px), 1fr));
    }
  }
}

@media only screen and (max-width: 1024px) {
  .customers {
    padding-top: 192px;

    &__title-wrap {
      flex-wrap: wrap;
    }

    &__main-title {
      max-width: 90%;
      margin-bottom: 2vw;
    }

    &__main-description {
      max-width: 90%;
      line-height: 2.4881vw;
    }
  }
}

@media only screen and (max-width: 680px) {
  .customers {
    padding-top: 80px;

    &__main-title {
      min-width: 0;
    }

    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-row-gap: 25px;
      grid-column-gap: 15px;
      margin-top: get-vw(47px, 680);
    }
  }
}

@media only screen and (max-width: 640px) {
  .customers {
    &__main-description {
      line-height: 110%;
    }
  }
}

@media only screen and (max-width: 520px) {
  .customers {
    .valued-customers {
      grid-row-gap: 0;
      grid-column-gap: 0;
    }

    &__main-title {
      letter-spacing: 1px;
      margin-bottom: 5vw;
    }

    &__main-description {
      line-height: 135%;
    }
  }
}

@media only screen and (max-width: 377px) {
  .customers {
    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }
  }
}

@media only screen and (max-width: 350px) {
  .customers {
    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    }
  }
}
</style>
