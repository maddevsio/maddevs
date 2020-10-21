<template>
  <section id="weCreateItProject" class="weCreateItProject">
    <div class="container">
      <div class="weCreateItProject__content-wrapper">
        <h2 class="weCreateItProject__main-title">
          We create <br> IT projects for:
        </h2>
        <div class="weCreateItProject__projects-type_list row gy-0">
          <div class="weCreateItProject__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <p class="weCreateItProject__paragraph">Content Streaming <br> Transportation</p>
          </div>
          <div class="weCreateItProject__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <p class="weCreateItProject__paragraph">HealthTech <br> IoTs</p>
          </div>
          <div class="weCreateItProject__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <p class="weCreateItProject__paragraph">E-Commerce <br> AdTech</p>
          </div>
          <div class="weCreateItProject__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <p class="weCreateItProject__paragraph">E-Learning <br> FinTech</p>
          </div>
          <div class="weCreateItProject__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <p class="weCreateItProject__paragraph">Serverless <br> BYOD</p>
          </div>
          <div class="weCreateItProject__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6">
            <p class="weCreateItProject__paragraph">Blockchain <br> FoodTech</p>
          </div>
        </div>
        <ul class="weCreateItProject__flags-list">
          <li v-for="(flag, i) in flags" :key="i" class="weCreateItProject__flag-item"
              :class="`weCreateItProject__${flag}`"></li>
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
      flags: [ // if will be added or removed flag, need to change css grid, on line 94 and 178
        'flag-usa',
        'flag-australia',
        'flag-vietnam',
        'flag-france',
        'flag-uk',
        'flag-indonesia',
        'flag-germany',
        'flag-austria',
        'flag-switzerland',
        'flag-canada',
        'flag-latvia',
        'flag-kazakhstan',
        'flag-sweden',
        'flag-finland',
        'flag-united-arab-emirates',
        'flag-denmark',
        'flag-japan',
        'flag-norway',
        'flag-portugal',
        'flag-katar',
        'flag-south-africa',
        'flag-netherlands'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/_flagsIcons';

.weCreateItProject {
  &__content-wrapper {
    padding: 0 45px 45px;
    text-align: center;
    background-color: $bgcolor--white;
  }

  &__projects-type_list {
    margin: 0 0 63px;
  }

  &__project-item {
    padding: 0;
  }

  &__flags-list {
    display: grid;
    grid-template-columns: repeat(22, max-content);
    justify-content: space-between;
  }

  &__flag-item {
    display: block;
    width: 32px;
    height: 23px;
  }

  &__main-title,
  &__paragraph {
    color: $text-color--black-lighter;
  }

  &__main-title {
    @include h2_title;
    padding-top: 40px;
    margin-bottom: 23px;

    br {
      display: none;
    }
  }

  &__paragraph {
    font-family: 'Poppins-Regular', sans-serif;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.02em;
    line-height: 34px;
  }

  &__flag-usa {
    @include flag-usa;
  }

  &__flag-australia {
    @include flag-australia;
  }

  &__flag-vietnam {
    @include flag-vietnam;
  }

  &__flag-france {
    @include flag-france;
  }

  &__flag-uk {
    @include flag-uk;
  }

  &__flag-indonesia {
    @include flag-indonesia;
  }

  &__flag-germany {
    @include flag-germany;
  }

  &__flag-austria {
    @include flag-austria;
  }

  &__flag-switzerland {
    @include flag-switzerland;
  }

  &__flag-canada {
    @include flag-canada;
  }

  &__flag-latvia {
    @include flag-latvia;
  }

  &__flag-kazakhstan {
    @include flag-kazakhstan;
  }

  &__flag-sweden {
    @include flag-sweden;
  }

  &__flag-finland {
    @include flag-finland;
  }

  &__flag-united-arab-emirates {
    @include flag-united-arab-emirates;
  }

  &__flag-denmark {
    @include flag-denmark;
  }

  &__flag-japan {
    @include flag-japan;
  }

  &__flag-norway {
    @include flag-norway;
  }

  &__flag-portugal {
    @include flag-portugal;
  }

  &__flag-katar {
    @include flag-katar;
  }

  &__flag-south-africa {
    @include flag-south-africa;
  }

  &__flag-netherlands {
    @include flag-netherlands;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1270px) {
  .weCreateItProject__paragraph {
    font-size: 16px;
  }
}

@media only screen and (max-width: 1040px) {
  .weCreateItProject {
    &__content-wrapper {
      padding: 0 33px 45px;
    }

    &__projects-type_list {
      margin: 0 0 40px;
    }

    &__flag-item {
      width: 21px;
      height: 15px;
    }

    &__paragraph {
      font-size: 14px;
      line-height: 25px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .weCreateItProject__main-title br {
    display: block;
  }
}

@media screen and (max-width: 834px) {
  .weCreateItProject__main-title {
    padding-top: 33px;
    margin-bottom: 3px;

    br {
      display: none;
    }
  }
}

@media only screen and (max-width: 720px) {
  .weCreateItProject__flags-list {
    grid-template-columns: repeat(11, max-content);
    grid-row-gap: 19px;
  }
}

@media only screen and (max-width: 606px) {
  .weCreateItProject__main-title br {
    display: block;
  }
}

@media only screen and (max-width: 576px) {
  .weCreateItProject {
    background-color: $bgcolor--white;

    &__main-title {
      padding-top: 34px;
      margin-bottom: 1px;

      br {
        display: block;
      }
    }

    &__content-wrapper {
      padding-left: 0;
      padding-right: 0;
      text-align: left;
    }

    &__paragraph {
      font-size: 16px;
      line-height: 33px;
      letter-spacing: -0.02em;
    }

    &__flag-item {
      width: 23px;
      height: 19px;
    }

    &__projects-type_list {
      margin: 0 0 27px;
    }

    &__project-item {
      &:nth-child(2n) {
        padding-left: 26px;
      }
    }
  }
}

@media only screen and (max-width: 345px) {
  .weCreateItProject__paragraph {
    font-size: 14px;
  }
}
</style>
