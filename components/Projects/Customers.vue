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
      <buttonTrigger
        :buttonInnerText="buttonInnerText"
        class="red-text-and-border"
        :modalWindowName="modalWindowName"
      />
    </div>
  </section>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';
import Customer from '@/components/Projects/Customer';

export default {
  name: 'Customers',
  components: {
    buttonTrigger,
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

.customers {
  margin-top: 170px;

  button {
    width: 100%;
  }

  &__title-wrap {
    display: flex;
    align-items: flex-end;
  }

  &__main-title {
    color: $text-color--red;
    max-width: 700px;
    min-width: 575px;
    margin-right: 58px;
  }

  &__main-description {
    color: $text-color--grey;
    line-height: 25px;
    letter-spacing: -0.03em;
    max-width: 575px;
    padding-bottom: 19px;
  }

  .valued-customers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(166px, 1fr));
    align-items: center;
    margin: 80px 0 40px;
    grid-row-gap: 100px;
    grid-column-gap: 80px;
  }
}

@media only screen and (max-width: 1440px) {
  .customers {
    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      grid-row-gap: 95px;
    }
  }
}

@media only screen and (max-width: 1240px) {
  .customers {
    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
      grid-row-gap: 90px;
    }
  }
}

@media only screen and (max-width: 1065px) {
  .customers {
    &__main-description {
      padding-top: 17px;
    }

    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-row-gap: 65px;
      grid-column-gap: 70px;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .customers {
    &__title-wrap {
      flex-wrap: wrap;
    }
  }
}

@media only screen and (max-width: 860px) {
  .customers {
    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
      grid-row-gap: 30px;
    }
  }
}

@media only screen and (max-width: 680px) {
  .customers {
    margin-top: 80px;

    &__main-title {
      min-width: 0;
    }

    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));
      grid-row-gap: 25px;
      grid-column-gap: 15px;
      margin-top: 47px;
    }
  }
}

@media only screen and (max-width: 520px) {
  .customers {
    .valued-customers {
      grid-row-gap: 0;
      grid-column-gap: 0;
    }
  }
}

@media only screen and (max-width: 377px) {
  .customers {
    .valued-customers {
      grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
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
