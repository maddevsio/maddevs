<template>
  <section id="we-create-it-project" class="we-create-it-project">
    <div class="container">
      <div class="we-create-it-project__content-wrapper">
        <h2 class="we-create-it-project__title title-md">
          We create <br> IT projects for:
        </h2>
        <div class="we-create-it-project__projects-type_list row gy-0">
          <div class="we-create-it-project__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <div class="we-create-it-project__paragraph paragraph-lg">Content Streaming <br> Transportation</div>
          </div>
          <div class="we-create-it-project__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <div class="we-create-it-project__paragraph paragraph-lg">HealthTech <br> IoTs</div>
          </div>
          <div class="we-create-it-project__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <div class="we-create-it-project__paragraph paragraph-lg">E-Commerce <br> AdTech</div>
          </div>
          <div class="we-create-it-project__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <div class="we-create-it-project__paragraph paragraph-lg">E-Learning <br> FinTech</div>
          </div>
          <div class="we-create-it-project__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <div class="we-create-it-project__paragraph paragraph-lg">Serverless <br> BYOD</div>
          </div>
          <div class="we-create-it-project__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <div class="we-create-it-project__paragraph paragraph-lg">Blockchain <br> FoodTech</div>
          </div>
        </div>
        <ul class="we-create-it-project__country-list row">
          <li v-for="(country, i) in countries" :key="i" class="we-create-it-project__country-item col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2">
            <span :class="`we-create-it-project__logo-country we-create-it-project__logo-country--${country.iconName}`"/>
          </li>
        </ul>
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

  .we-create-it-project {
    margin: 134px 0;

    &__content-wrapper {
      padding: 51px 80px 73px;
      text-align: center;
      background-color: $bgcolor--white;
    }

    &__title {
      margin-bottom: 24px;

      br {
        display: none;
      }
    }

    &__projects-type_list {
      margin: 0 0 45px;
    }

    &__project-item {
      padding: 0;
    }

    &__logo-country {
      display: block;
      width: 28px;
      height: 20px;
      background-repeat: no-repeat;
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
  }

  @media only screen and (max-width: 1366px) {
    .we-create-it-project {
      &__content-wrapper {
        padding-left: 70px;
        padding-right: 70px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .we-create-it-project {
      margin-top: 75px;
      margin-bottom: 64px;

      &__logo-country {
        width: 21px;
        height: 15px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .we-create-it-project {
      &__projects-type_list {
        margin-bottom: 40px;
      }

      &__content-wrapper {
        padding: 33px;
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .we-create-it-project {
      margin-top: 34px;
      margin-bottom: 45px;
      background-color: $bgcolor--white;

      &__content-wrapper {
        padding-left: 0;
        padding-right: 0;
        text-align: left;
      }

      &__title {
        br {
          display: block;
        }
      }
    }
  }
</style>
