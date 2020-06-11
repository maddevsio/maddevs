<template>
  <section id="we-create-it-project" class="we-create-it-project">
    <div class="container">
      <h2 class="we-create-it-project__main-title main-title">
        We create <br> IT projects for:
      </h2>
      <div class="we-create-it-project__content-wrap">
        <ul class="we-create-it-project__projects-type_list">
          <li class="we-create-it-project__project-item">E-learning</li>
          <li class="we-create-it-project__project-item">FinTech</li>
          <li class="we-create-it-project__project-item">HealthTech</li>
          <li class="we-create-it-project__project-item">E-commerce</li>
          <li class="we-create-it-project__project-item">AdTech</li>
          <li class="we-create-it-project__project-item">Transportation</li>
        </ul>
        <div class="we-create-it-project__country-list_wrap">
          <div class="we-create-it-project__country-list_title">We work with 
            <br> customers in:
          </div>
          <ul class="we-create-it-project__country-list">
            <li v-for="(country, i) in countries" :key="i" class="we-create-it-project__country-item">
              <img :src="require(`@/assets/img/Flags/${country.iconName}.svg`)" :alt="`${country.countryName}`" />
              {{ country.countryName }}
            </li>
          </ul>
          <buttonTrigger :buttonInnerText="buttonInnerText" :modalWindowName="modalWindowName" class="red-text-and-border"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'WeCreateItProjectFor',
  components: {
    buttonTrigger
  },
  data() {
    return {
      countries: [
        {
          iconName: 'united-states',
          countryName: 'USA'
        },
        {
          iconName: 'australia',
          countryName: 'Australia'
        },
        {
          iconName: 'vietnam',
          countryName: 'Vietnam'
        },
        {
          iconName: 'united-kingdom',
          countryName: 'UK'
        },
        {
          iconName: 'poland',
          countryName: 'Poland'
        },
        {
          iconName: 'russia',
          countryName: 'Russia'
        },
        {
          iconName: 'austria',
          countryName: 'Austria'
        },
        {
          iconName: 'france',
          countryName: 'France'
        },
        {
          iconName: 'belarus',
          countryName: 'Belarus'
        },
        {
          iconName: 'switzerland',
          countryName: 'Switzerland'
        },
        {
          iconName: 'singapore',
          countryName: 'Singapore'
        },
        {
          iconName: 'kazakhstan',
          countryName: 'Kazakhstan'
        }
      ],
      buttonInnerText: 'Get case studies',
      modalWindowName: 'get-case-studies'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .we-create-it-project {
    padding-top: 105px;
    padding-bottom: 295px;

    &__content-wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__main-title {
      color: $text-color--red;
      padding-bottom: 80px;
    }

    &__projects-type_list {
      padding-right: 60px;
    }

    &__country-list_wrap {
      max-width: 770px;

      button {
        width: 100%;
        margin-bottom: 15px;
      }
    }

    &__country-list_title {
      padding-bottom: 30px;
      color: $text-color--grey;
      font-size: 50px;
      letter-spacing: -2px;

      br {
        display: none;
      }
    }

    &__country-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 83px;
      grid-row-gap: 15px;
      padding-bottom: 60px;
    }

    &__country-item {
      display: flex;
      color: $text-color--grey;
      font-size: 32px;
      letter-spacing: -1px;

      img {
        padding-right: 10px;
      }
    }

    &__project-item,
    &__country-list_title,
    &__country-item {
      font-family: 'Hoves-Bold';
    }

    &__project-item {
      color: $text-color--white;
      font-size: 70px;
      letter-spacing: -2px;
    }
  }

  @media only screen and (max-width: 1440px) {
    .we-create-it-project {
      &__main-title {
        padding-bottom: 60px;
      }

      &__country-list_wrap {
        max-width: 680px;
      }

      &__project-item {
        font-size: 64px;
      }

      &__country-list_title {
        padding-bottom: 25px;
      }

      &__country-list {
        padding-bottom: 44px;
      }

      &__country-item {
        font-size: 25px;
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    .we-create-it-project {
      &__country-list_wrap {
        max-width: 625px;
      }

      &__country-list_title {
        font-size: 36px;
        padding-bottom: 13px;
      }

      &__country-list {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 155px;
        grid-row-gap: 8px;
        padding-bottom: 33px;
      }

      &__project-item {
        font-size: 54px;
        padding-bottom: 13px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .we-create-it-project {
      &__project-item {
        font-size: 47px;
        padding-bottom: 8px;
      }

      &__country-list_title {
        font-size: 34px;
      }

      &__country-list {
        grid-column-gap: 86px;
        padding-bottom: 27px;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .we-create-it-project {
      &__main-title {
        font-size: 95px;

        br {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .we-create-it-project {
      padding-bottom: 105px;

      &__main-title {
        font-size: 80px;
      }

      &__country-list_title {
        font-size: 32px;
      }

      &__country-list {
        grid-template-columns: repeat(2, 1fr);
      }

      &__country-item {
        font-size: 25px;

        &:nth-child(3n+3) {
          margin-left: 0;
        }

        &:nth-child(4) {
          grid-row-start: 2;
        }

        &:nth-child(2) {
					grid-row-start: 3;
        }

        &:nth-child(3) {
          grid-row-start: 4;
        }

        &:nth-child(10) {
          grid-row-start: 5;
        }

        &:nth-child(6) {
          grid-row-start: 6;
        }

        &:nth-child(5) {
          grid-row-start: 3;
        }

        &:nth-child(11) {
          grid-row-start: 4;
        }
      }

      &__project-item {
        font-size: 50px;
      }
    }
  }

  @media only screen and (max-width: 440px) {
    .we-create-it-project {
      &__main-title {
        font-size: 48px;
      }

      &__country-list_title {
        font-size: 28px;

        br {
          display: block;
        }
      }

      &__country-item {
        font-size: 18px;
      }

      &__project-item {
        font-size: 41px;
      }
    }
  }
</style>
