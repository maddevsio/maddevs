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
          <div class="we-create-it-project__country-list_title">We work with customers in:</div>
          <ul class="we-create-it-project__country-list">
            <li v-for="(country, i) in countries" :key="i" class="we-create-it-project__country-item">
              <img :src="require(`@/assets/img/Flags/${country.iconName}.svg`)" :alt="`${country.countryName}`" />
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
          iconName: 'united-kingdom',
          countryName: 'UK'
        },
        {
          iconName: 'austria',
          countryName: 'Austria'
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
          iconName: 'russia',
          countryName: 'Russia'
        },
        {
          iconName: 'kazakhstan',
          countryName: 'Kazakhstan'
        },
        {
          iconName: 'poland',
          countryName: 'Poland'
        },
        {
          iconName: 'australia',
          countryName: 'Australia'
        },
        {
          iconName: 'france',
          countryName: 'France'
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

  .it-consulting {
    padding-top: 127px;
    padding-bottom: 151px;
    background-color: $bgcolor--white;

    &__flex-wrapper {
      margin-top: -40px;
    }

    &__main-title {
      color: $text-color--black;
    }
  }

  @media only screen and (max-width: 1024px) {
    .it-consulting {
      &__flex-wrapper {
        flex-wrap: wrap;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .it-consulting {
      padding-top: 60px;
      padding-bottom: 75px;
    }
  }
</style>
