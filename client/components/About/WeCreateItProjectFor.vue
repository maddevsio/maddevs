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
          <li v-for="(flag, i) in flags" :key="i" class="weCreateItProject__flag-item" :class="flag"></li>
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
    margin: 131px 0;

    &__content-wrapper {
      padding: 40px 48px 48px;
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
      grid-template-columns: repeat(22, 1fr);
    }

    &__flag-item {
      &::before {
        content: '';
        display: block;
        width: 32px;
        height: 23px;
      }
    }

    &__main-title,
    &__paragraph {
      color: $text-color--black;
    }

    &__main-title {
      margin-bottom: 25px;
      font-size: 62px;
      font-family: 'Poppins-Bold', sans-serif;
      letter-spacing: -1px;

      br {
        display: none;
      }
    }

    &__paragraph {
      font-family: 'Poppins-Regular', sans-serif;
      font-size: 18px;
      letter-spacing: -0.02em;
      line-height: 34px;
    }
  }

  @media only screen and (max-width: 1270px) {
    .weCreateItProject {
      &__paragraph {
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 1040px) {
    .weCreateItProject {
      &__content-wrapper {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .weCreateItProject {
      &__content-wrapper {
        padding: 25px 33px 33px;
      }

      &__main-title {
        font-size: 32px;
      }

      &__projects-type_list {
        margin: 0 0 45px;
      }

      &__flag-item {
        &::before {
          width: 21px;
          height: 15px;
        }
      }

      &__paragraph {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  @media only screen and (max-width: 720px) {
    .weCreateItProject {
      &__flags-list {
        grid-template-columns: repeat(11, 1fr);
        grid-row-gap: 19px;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .weCreateItProject {
      &__main-title {
        br {
          display: block;
        }
      }
    }
  }

  @media screen and (min-width: 575px) and (max-width: 576px) {
    .weCreateItProject {
      &__content-wrapper {
        padding-left: 13px;
        padding-right: 13px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .weCreateItProject {
      margin-top: 34px;
      margin-bottom: 45px;
      background-color: $bgcolor--white;

      &__content-wrapper {
        padding-left: 0;
        padding-right: 0;
        text-align: left;
      }

      &__main-title {
        font-size: 36px;
        line-height: 120%;
      }

      &__paragraph {
        font-size: 16px;
        line-height: 33px;
        letter-spacing: -0.02em;
      }

      &__flag-item {
        &::before {
          width: 23px;
          height: 19px;
        }
      }

      &__projects-type_list {
        margin: 0 0 30px;
      }

      &__project-item {
        &:nth-child(2n) {
          padding-left: 26px;
        }
      }
    }
  }

  @media only screen and (max-width: 345px) {
    .weCreateItProject {
      &__paragraph {
        font-size: 14px;
      }
    }
  }
</style>
