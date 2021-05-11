<template>
  <section
    id="weCreateItProject"
    class="weCreateItProject"
    data-testid="test-weCreateItProject"
  >
    <div class="container">
      <div class="weCreateItProject__content-wrapper">
        <h2 class="weCreateItProject__main-title">
          We create <br>
          IT projects for:
        </h2>
        <div class="weCreateItProject__projects-type_list row gy-0">
          <div
            v-for="[first, second] in industriesEntries"
            :key="first"
            class="weCreateItProject__project-item col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6"
          >
            <p class="weCreateItProject__paragraph">
              {{ first }}
              <br>
              {{ second }}
            </p>
          </div>
        </div>
        <ul class="weCreateItProject__flags-list">
          <li
            v-for="country in countries"
            :key="country"
            class="weCreateItProject__flag-item"
          >
            <img
              :data-src="require(`@/assets/img/Home/flags/${country}.svg`)"
              :alt="country"
              width="32"
              height="32"
              class="img_lazy"
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { countries, industriesEntries } from '@/data/projectsFor'

export default {
  name: 'WeCreateItProjectFor',

  data() {
    return {
      // if will be added or removed country, need to change css grid, on line 94 and 178
      countries,
      industriesEntries,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

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

    img {
      display: block;
      width: 32px;
      height: 23px;
      transition: opacity 0.3s ease-in;
    }
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
    @include font('Inter', 18px, 400);
    letter-spacing: -0.02em;
    line-height: 34px;
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

      img {
        width: 21px;
        height: 15px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .weCreateItProject__main-title br {
    display: block;
  }
}

@media screen and (max-width: 834px) {
  .weCreateItProject {
    &__paragraph {
      font-size: 14px;
      line-height: 25px;
    }

    &__main-title {
      padding-top: 33px;
      margin-bottom: 3px;

      br {
        display: none;
      }
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

      img {
        width: 23px;
        height: 19px;
      }
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
