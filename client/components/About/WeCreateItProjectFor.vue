<template>
  <section id="we-create-it-project" class="we-create-it-project">
    <div class="container">
      <h2 class="we-create-it-project__main-title main-title">
        We create <br> IT projects for:
      </h2>
      <div class="we-create-it-project__content-wrap">
        <ul class="we-create-it-project__projects-type_list">
          <li class="we-create-it-project__project-item block-paragraph">E-learning</li>
          <li class="we-create-it-project__project-item block-paragraph">FinTech</li>
          <li class="we-create-it-project__project-item block-paragraph">HealthTech</li>
          <li class="we-create-it-project__project-item block-paragraph">E-commerce</li>
          <li class="we-create-it-project__project-item block-paragraph">AdTech</li>
          <li class="we-create-it-project__project-item block-paragraph">Transportation</li>
        </ul>
        <div class="we-create-it-project__country-list_wrap">
          <div class="we-create-it-project__country-list_title sub-paragraph">We work with
            <br> customers in:
          </div>
          <ul class="we-create-it-project__country-list">
            <li v-for="(country, i) in countries" :key="i" class="we-create-it-project__country-item">
              <span :class="`we-create-it-project__logo-country we-create-it-project__logo-country--${country.iconName}`"/>
              {{ country.countryName }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'WeCreateItProjectFor',
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
          iconName: 'united-kingdom',
          countryName: 'UK'
        },
        {
          iconName: 'poland',
          countryName: 'Poland'
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
          iconName: 'switzerland',
          countryName: 'Switzerland'
        },
        {
          iconName: 'belarus',
          countryName: 'Belarus'
        },
        {
          iconName: 'vietnam',
          countryName: 'Vietnam'
        },
        {
          iconName: 'kazakhstan',
          countryName: 'Kazakhstan'
        },
        {
          iconName: 'russia',
          countryName: 'Russia'
        },
        {
          iconName: 'singapore',
          countryName: 'Singapore'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .we-create-it-project {
    padding-top: get-vw(195px);
    padding-bottom: get-vw(214px);

    &__content-wrap {
      display: flex;
      align-items: flex-end;
    }

    &__main-title {
      color: $text-color--red;
      padding-bottom: 4vw;

      @media only screen and (max-width: 745px) {
        padding-bottom: 14vw;
      }
    }

    &__projects-type_list {
      padding-right: 4.5vw;
      width: 49%;
    }

    &__logo-country {
      height: 1.6vw;
      width: 2.5vw;
      background-repeat: no-repeat;
      margin: 0 0.1vw 0 0;
      background-size: contain;

      &--united-kingdom {
        background-image: url(../../assets/img/Flags/united-kingdom.svg);
      }

      &--united-states {
        background-image: url(../../assets/img/Flags/united-states.svg);
      }

      &--austria {
        background-image: url(../../assets/img/Flags/austria.svg);
      }

      &--poland {
        background-image: url(../../assets/img/Flags/poland.svg);
      }

      &--russia {
        background-image: url(../../assets/img/Flags/russia.svg);
      }

      &--vietnam {
        background-image: url(../../assets/img/Flags/vietnam.svg);
      }

      &--switzerland {
        background-image: url(../../assets/img/Flags/switzerland.svg);
      }

      &--australia {
        background-image: url(../../assets/img/Flags/australia.svg);
      }

      &--belarus {
        background-image: url(../../assets/img/Flags/belarus.svg);
      }

      &--france {
        background-image: url(../../assets/img/Flags/france.svg);
      }

      &--singapore {
        background-image: url(../../assets/img/Flags/singapore.svg);
      }

      &--kazakhstan {
        background-image: url(../../assets/img/Flags/kazakhstan.svg);
      }
    }

    &__country-list_wrap {
      max-width: 770px;
      padding-bottom: 0.3vw;

      button {
        width: 100%;
        margin-bottom: 15px;
      }
    }

    &__country-list_title {
      padding-bottom: 2vw;
      color: $text-color--grey;
      letter-spacing: -2px;
      max-width: 547px;
      line-height: 3.9vw;

      br {
        display: none;
      }
    }

    &__country-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 83px;
      grid-row-gap: 15px;
    }

    &__country-item {
      color: $text-color--grey;
      font-size: 1.9vw;
      letter-spacing: -1px;
      display: flex;
      align-items: center;
    }

    &__project-item,
    &__country-list_title,
    &__country-item {
      font-family: 'Hoves-Bold', sans-serif;
    }

    &__project-item {
      color: $text-color--white;
      letter-spacing: -1px;
      line-height: 5.35vw;
    }
  }

  @media only screen and (max-width: 1440px) {
    .we-create-it-project {
      &__country-list_wrap {
        max-width: 680px;
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    .we-create-it-project {

      &__country-list_wrap {
        max-width: 625px;
      }

      &__country-list {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 155px;
        grid-row-gap: 8px;
      }

      &__project-item {
        &:last-child {
          padding-bottom: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .we-create-it-project {
      padding-top: 12vw;
      padding-bottom: 10vw;

      &__country-list_wrap {
        button {
          height: 44px;
        }
      }

      &__country-list {
        grid-column-gap: 86px;
      }
    }
  }

  @media only screen and (max-width: 890px) {
    .we-create-it-project {

      &__main-title {
        letter-spacing: -0.03em;
      }

      &__country-list_title {
        br {
          display: block;
        }
      }

      &__country-list {
        grid-column-gap: 57px;
        grid-row-gap: 6px;
      }
    }
  }

  @media only screen and (max-width: 970px) {
    .we-create-it-project {
      &__country-item {
        font-size: 2.8vw;
      }

      &__logo-country {
        height: 2.5vw;
        width: 3vw;
        margin: 0 2vw 0 0;
      }
    }
  }

  @media only screen and (max-width: 745px) {
    .we-create-it-project {
      padding-top: 73px;
      padding-bottom: 25vw;

      &__content-wrap {
        flex-direction: column;
        justify-content: initial;
        align-items: initial;
      }

      &__project-item {
        padding-bottom: 10vw;
      }

      &__country-list_title {
        padding-bottom: 7vw;
        line-height: 8.9vw;
        br {
          display: none;
        }
      }

      &__country-list {
        grid-column-gap: 10vw;
        grid-row-gap: 5vw;
      }

      &__country-item {
        font-size: 3.9vw;
        letter-spacing: 1px;
      }

      &__logo-country {
        height: 4.2vw;
        width: 5vw;
        margin: 0 2.5vw 0 0;
      }

      &__projects-type_list {
        padding-bottom: 16vw;
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .we-create-it-project {
      &__country-list_title {
        br {
          display: block;
        }
      }

      &__country-item {
        font-size: 5vw;
      }
    }
  }
</style>
