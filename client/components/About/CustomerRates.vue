<template>
  <section
    id="customer-rates"
    class="customer-rates"
  >
    <div class="container">
      <h2 class="customer-rates__main-title">
        <span>Fantastic</span> <br>
        customer&nbsp;&nbsp;&nbsp;<span class="customer-rates__title-icon">rates:</span>
      </h2>
      <div class="customer-rates__top-row row">
        <div
          v-for="item in percentages"
          :key="item.percent"
          class="col-xl-4 col-md-4"
        >
          <div class="customer-rates__rates-block customer-rates__rates-block-top-row">
            <p class="customer-rates__number-item customer-rates__number-item-top-row">
              {{ item.percent }}%
            </p>
            <p class="customer-rates__description customer-rates__description-top-row">
              {{ item.description }}
              <br class="customer-rates__line-break">
              {{ item.descriptionSecond }}
            </p>
          </div>
        </div>
      </div>
      <div class="customer-rates__bottom-row">
        <h3 class="customer-rates__section-sub-title">
          Mad Devs' key metrics:
        </h3>
        <div class="row">
          <div
            v-for="metrick in keyMetricks"
            :key="metrick.number"
            class="col-xl-2 col-lg-4 col-md-4 col-6"
          >
            <div class="customer-rates__rates-block customer-rates__rates-block-bottom-row">
              <p class="customer-rates__number-item customer-rates__number-item-bottom-row">
                {{ metrick.number }}
              </p>
              <p class="customer-rates__description customer-rates__description-bottom-row">
                {{ metrick.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ratesPercentages as percentages, keyMetricks } from '@/data/customers'

export default {
  name: 'CustomerRates',
  data() {
    return {
      percentages,
      keyMetricks,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.customer-rates {
  background-color: $bgcolor--white-darken;
  // margins and paddings for removing the dark line between sections, that appears when Chome browser is scaled > 100%
  margin: -1px 0;
  padding: 1px 0;

  &__main-title-wrapper {
    display: flex;
    justify-content: center;
  }

  &__main-title {
    @include h2_title;
  }

  &__section-sub-title {
    @include h3_title;
    margin: 0 0 -20px;
  }

  &__number-item {
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 700;
  }

  &__main-title,
  &__section-sub-title,
  &__rates-block {
    text-align: center;
  }

  &__main-title,
  &__section-sub-title,
  &__description {
    color: $text-color--black-lighter;
  }

  &__main-title br {
    display: none;
  }

  &__rates-block {
    background-color: $bgcolor--white;
  }

  &__rates-block-top-row {
    padding-top: 28px;
    padding-bottom: 40px;
  }

  &__rates-block-bottom-row {
    height: 128px;
    padding: 27px 20px;
  }

  &__number-item-top-row {
    margin-bottom: 11px;
    font-size: 102px;
    line-height: 107px;
    color: $text-color--black-lighter;
  }

  &__number-item-bottom-row {
    margin-top: 3px;
    margin-bottom: 10px;
    font-size: 44px;
    line-height: 46px;
    letter-spacing: -1.4px;
    color: $text-color--red;
  }

  &__description {
    font-family: 'Poppins-Regular', sans-serif;
    letter-spacing: -0.02em;
  }

  &__description-top-row {
    font-size: 16px;
    line-height: 24px;
  }

  &__description-bottom-row {
    font-size: 14px;
    line-height: 22px;
  }

  &__title-icon {
    position: relative;
    z-index: 1;
    margin-left: 65px;

    &::after {
      content: '';
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('data:image/svg+xml;charset=UTF-8,\ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 228 107"><defs/><path fill="%23EC1C24" d="M.8 60.4A3.1 3.1 0 013 56.6L211.2.8A3.1 3.1 0 01215 3l11.7 43.6a3.1 3.1 0 01-2.2 3.8L16.3 106.2a3.1 3.1 0 01-3.8-2.2L.8 60.4z"/><g mask="url(a)"><rect width="211.9" height="41.8" x="5.9" y="60.8" stroke="%23F5F7F9" stroke-width="1.2" rx="3.6" transform="rotate(-15 5.9 60.8)"/><path fill="%23FCFCFD" d="M28.5 87.1c-.7.4-1.3.6-2 .5-.5 0-.9-.5-1-1a.8.8 0 010-.7l.6-.6a13 13 0 011.7-1l.9-.3c1.7-1 3.3-2.5 4.6-4.4 1.4-2 2.4-4 3-6-1.3 0-2.5.4-3.7 1.1a32.7 32.7 0 00-3.6 2.4c-1.2.9-2.3 1.5-3.2 1.8-.6.2-1 .1-1.5-.1a2 2 0 01-.9-1.3c-.3-1.2.2-3 1.7-5l4.3-6.2c1.3-1.9 2.4-3 3.4-3.2.8-.2 1.3 0 1.7.8a26.9 26.9 0 00-7.9 11c.5 0 2-.7 4.7-2a28.3 28.3 0 015.7-2.1h.8c.3 0 .6 0 .7.3.2.1.3.4.5.7a5 5 0 01-.2 2.3c-.6 2.4-1.8 4.8-3.7 7.2a26.7 26.7 0 01-6.6 5.8zm27-17c-.3-1-.7-2-1.1-2.7-.4-.8-1-1.3-1.7-1.6-.8-.3-1.5-.2-2.3.3-2.3 1.6-4 3.5-5.3 5.7-.4.7-1 1-1.5.8-.5-.3-.9-.7-1-1.4-.2-.5 0-1.1.4-1.8s1-1.3 1.5-1.8a38.4 38.4 0 012.1-1.8 99.8 99.8 0 001.7-1.4l1.5-1.4a3.8 3.8 0 011.2-.5c.5-.2 1-.2 1.7-.1.4 0 .8.3 1.3.7 2.6 2.7 4.3 5.5 5 8.4l1.7 2.5c1 1.3 1.6 2.2 1.7 2.6.1.5.1 1 0 1.6-.1.6-.4.9-.8 1-.4.1-.9 0-1.3-.1l-1-.7a26.4 26.4 0 01-.7-1.2l-2 1.5a60.7 60.7 0 01-2.2 1.7l-2 1.3a16.5 16.5 0 01-4.4 2c-2.4.7-4.4.3-5.8-1.3a6.5 6.5 0 01-.6-1.2c-.1-.4 0-.9.1-1.4.2-.5.4-1 .7-1.3a50.7 50.7 0 012-2.4 9.6 9.6 0 011.1-1c2-1.6 5-3.1 9-4.7l1-.4zM44.6 81c1.3 0 2.6-.2 3.9-.5A13.9 13.9 0 0052 79a28.8 28.8 0 003-2 19.9 19.9 0 002.4-2.3 5 5 0 00-3.8-1.1 9.6 9.6 0 00-4.4 1.3 11.8 11.8 0 00-3.4 2.8c-1 1.1-1.4 2.2-1.2 3.3zm22.6-4c-1.7.5-2.7-.3-3.2-2l-.6-2.5a38.4 38.4 0 00-.8-3.2c-.2-1-.5-1.6-.7-2.2-.2-.3-.7-.8-1.6-1.4-.9-.5-1.3-1-1.3-1.5 0-.2.2-.5.6-1 .4-.4.6-.8.4-1.3 0-.6-.4-1.7-1-3.2-.7-1.6-1-2.6-.8-3 .1-.4.4-.6.8-.8 1-.2 1.9.6 2.6 2.6.7 2 1.1 3 1.4 3.2.2.2.6.3 1 .4a9 9 0 002-.1l1.8-.3a43.2 43.2 0 003.9-.7 240.2 240.2 0 01-7.2 4.4c-.4.5-.5 1.3-.2 2.4.4 1.8.9 3.2 1.3 4.2a14.2 14.2 0 001.8 3 38 38 0 013.5-1.7c.1.9-.2 1.9-1 2.9s-1.7 1.6-2.7 1.9zm1-26.5c.5-.3 1-.2 1.4.3.5.4.8 1 .9 1.6.1.6 0 1-.6 1.3-.6.2-1.2 0-1.6-.5-.4-.6-.6-1.3-.7-2.1l.1-.4a2.6 2.6 0 01.6-.2zm6.3 24.8c-.3-.4-.7-.9-.9-1.5a7.6 7.6 0 01-.4-1.8l-.2-2a18.4 18.4 0 00-.5-2.1l-.4-3c0-1.6-.2-2.4-.2-2.5a12.6 12.6 0 00-.4-.9l-.4-1.1-.2-1v-1c0-.3.2-.5.4-.6.5 0 1 .2 1.7.8.6.6 1 1.3 1 2a40.6 40.6 0 01.5 4.8l.2 1.4a26.7 26.7 0 01.9 5.7 8.3 8.3 0 01-.1 1.2 2.4 2.4 0 01-.3 1c-.2.3-.4.5-.7.6zm4-9.9a21.6 21.6 0 005.8-1.4l3-1c1.3-.3 2.4-.3 3.1 0 .8.3 1 1 1 2.2a5 5 0 01-1 2 8.7 8.7 0 01-1.4 1.6 48.9 48.9 0 01-5.4 4.2H82c0-.3 0-.6.2-1l.8-1.2a47.2 47.2 0 014-4.8c-.7 0-2 .5-4 1.4l-3.6 1.4c-1.3.3-2.3.3-3 0-.8-.5-1.1-1.3-1-2.5 0-1 .4-2.1 1.1-3.3l2.5-2.7a126.6 126.6 0 015.2-5.2c.4-.3.9-.5 1.4-.5.4-.1 1 0 1.5.2.9.3 1.3.7 1.3 1.2 0 .6-.6 1-1.5 1.6-3.3 2-6 4.5-8.2 7.8zm13-7.1c.1-.8 0-1.6-.3-2.4a48.2 48.2 0 00-1-2.7l-1-2.5c-.2-.9-.3-1.6-.1-2.4a3 3 0 011.5-1.8l.5.2 1-.6 1.2-.3 1.5-.2a19.4 19.4 0 016-.2c1 .2 2.1.7 3.2 1.5-.6.2-1.6.3-3 .4a37.5 37.5 0 00-3.5.3c-1 0-2 .3-3 .7-1 .3-1.8.8-2.2 1.6-.3.8-.3 1.8 0 3 .5 1.4 1.2 3 2.1 4.7 2-1 4.7-1.5 8-1.8a35.5 35.5 0 01-4.4 3 22.6 22.6 0 00-1.4 1c-.6.4-1 .9-1.1 1.5-.2.5-.1 1.3.1 2.2a18.8 18.8 0 001.3 3.3l.3 1.5c.1.5.2 1 0 1.3-1 0-1.7-.5-2.2-1.4-.5-1-.9-2.3-1.2-4-.1-.6-.3-1-.5-1.3-.2-.4-.4-.6-.7-.7l-1-.5a4.1 4.1 0 01-1-.7.7.7 0 01-.2-.3l-.1-.5-.2-.6a5.2 5.2 0 000-.5c.7-.2 1.2-.5 1.4-.8zm27.1-5.2c-.2-1-.5-1.9-1-2.7-.4-.7-1-1.3-1.7-1.5-.7-.3-1.5-.2-2.3.3-2.2 1.5-4 3.4-5.3 5.7-.4.6-.9.9-1.4.7-.6-.2-1-.7-1.1-1.4-.2-.5 0-1.1.4-1.8.5-.7 1-1.3 1.6-1.8a38.3 38.3 0 012-1.8 98 98 0 001.7-1.4l1.5-1.3a3.8 3.8 0 011.3-.6c.5-.2 1-.2 1.6-.1.5 0 .9.3 1.3.8 2.6 2.7 4.3 5.4 5 8.3L124 57c1 1.4 1.6 2.2 1.7 2.6.2.5.2 1 0 1.6-.1.6-.4 1-.7 1h-1.3l-1-.7a25.5 25.5 0 01-.8-1.2l-2 1.5a61 61 0 01-2.2 1.6l-2 1.4-2.2 1.2a13.2 13.2 0 01-2.2.8c-2.4.7-4.3.2-5.7-1.4a6.5 6.5 0 01-.7-1.2l.1-1.4c.2-.5.4-1 .7-1.3l1-1.3 1-1.1a9.6 9.6 0 011.2-1c2-1.6 4.9-3.1 8.9-4.6l1-.4zM108 64c1.4 0 2.7-.2 3.9-.4a13.9 13.9 0 003.5-1.6 28.8 28.8 0 003-2 20 20 0 002.4-2.3 5 5 0 00-3.8-1 9.6 9.6 0 00-4.3 1.2 11.8 11.8 0 00-3.5 2.8c-1 1.1-1.3 2.2-1.2 3.3zm21.6-6.6c1.3-.2 2.5-.6 3.7-1.3 1.3-.7 2.7-1.7 4.4-3a107.4 107.4 0 014-3l1.2-1.5a6.3 6.3 0 011.4-1.1c.6-.3 1-.4 1.5-.1.4.3.8.6 1 1a1408 1408 0 00-6.7 6.3l-2 1.4a30 30 0 01-8 4.6c-.9.3-1.5.2-2-.2-.6-.5-1-1.2-1.2-2a9.4 9.4 0 010-3.9 14.5 14.5 0 011.6-4 30.3 30.3 0 012.3-3.5 27.5 27.5 0 012.5-3c.7-.6 1.4-1 2-.8.7 0 1.2.6 1.5 1.5 0 .4 0 .8-.2 1.2a3.3 3.3 0 01-.9 1 41.7 41.7 0 01-2.4 1.8c-1 .7-1.9 2-2.7 3.9a9.6 9.6 0 00-1 4.7zm22.6-3c-1.6.3-2.7-.4-3.2-2.2a54 54 0 01-.5-2.5 38.2 38.2 0 00-.9-3.2c-.2-.9-.4-1.6-.7-2.1-.2-.4-.7-.9-1.6-1.4-.8-.6-1.3-1.1-1.3-1.5 0-.3.2-.6.6-1 .4-.5.6-.9.5-1.3 0-.7-.4-1.8-1.1-3.3-.7-1.5-1-2.6-.7-3 0-.4.3-.6.8-.7 1-.3 1.8.6 2.5 2.5.7 2 1.1 3 1.4 3.2.2.3.6.4 1.1.4a9 9 0 001.9 0l1.8-.3a42.6 42.6 0 002.2-.4l1.7-.4a243 243 0 01-7.2 4.4c-.4.6-.5 1.4-.2 2.5a40 40 0 001.3 4.2 14.1 14.1 0 001.8 3 41.7 41.7 0 013.5-1.8c.1 1-.2 1.9-1 3-.8 1-1.7 1.5-2.7 1.8zm1.1-26.7c.4-.2.8-.1 1.3.3s.8 1 .9 1.6c.1.7 0 1.1-.6 1.3-.6.3-1.2.1-1.6-.4-.4-.6-.6-1.3-.7-2.2l.1-.4.6-.2zm6.3 24.9c-.4-.4-.7-1-1-1.6a7.6 7.6 0 01-.3-1.7 22.3 22.3 0 00-.3-2 18.4 18.4 0 00-.4-2.2c-.2-.5-.3-1.5-.5-3 0-1.6-.1-2.4-.2-2.5l-.3-.8a21 21 0 00-.4-1.2l-.3-1v-1c0-.2.2-.4.4-.5.5-.1 1 .2 1.7.8.6.6 1 1.2 1 2a40.6 40.6 0 01.5 4.8l.2 1.4a26.4 26.4 0 01.8 6.9 2.4 2.4 0 01-.3 1l-.6.6zm7.8-3.1c-.9 1-1.7 1.4-2.4 1.2-.8-.2-1.4-1-1.8-2.4-.4-1.9 0-4.4 1.5-7.7 1.4-3.3 2.8-5.6 4.2-7 .8-.8 1.3-1.2 1.6-1.3.3-.2 1-.4 2-.5 2-.2 3.3.8 3.9 3.2a9.3 9.3 0 010 3.9 9.6 9.6 0 01-1.5 3.5 22.1 22.1 0 01-2.6 3 25.6 25.6 0 01-3.1 2.6l-.3.2a6.5 6.5 0 00-.7.6 13.6 13.6 0 00-.8.7zm-2-2.1c1.4-.3 2.8-1.1 4.4-2.5 1.6-1.3 2.9-3 3.8-4.7 1-1.8 1.2-3.3.7-4.5-.2-.5-.4-1-.6-1.1-.2-.3-.5-.3-1-.2-.4 0-.9.4-1.3.9l-1.7 1.8a154.3 154.3 0 00-1 1.4c-.8.8-1.6 2.2-2.2 4.1-.7 1.9-1 3.5-1.1 4.8zm10.8-18.2l.7.7.8.7.4.6.5 1 .2 1 .3.8.2.7a67.3 67.3 0 00.8 1.5l.9-1.7c.5-1 1-2 1.5-2.5.4-.5 1-.9 1.4-1h1c.3.1.5.2.6.4.2 0 .4.4.7.8.4.4 1 1.6 1.9 3.7.9 2 1.4 3.3 1.7 3.7.4.8 2.2 1 5.4.6 0 .8-.3 1.6-1 2.3-.8.7-1.7 1.1-2.8 1.3-1 .2-2 0-2.6-.6a7.8 7.8 0 01-2-3 46 46 0 00-2.3-5.6c-2.8 3.4-3.6 7.5-2.4 12.3-.7.1-1.3 0-1.8-.3-.4-.4-.8-.9-1-1.6a16.1 16.1 0 01-.6-2 41 41 0 01-.5-2.5 17 17 0 00-.3-2 27 27 0 00-1.3-3.3 14 14 0 01-1-3.5 3.5 3.5 0 01.6-2.5zm36.8 9.4v.7c0 .2-.2.3-.5.4a5 5 0 01-.6.3 26 26 0 00-1.4.1l-1.3.5a151.2 151.2 0 00-2.3.9c-.7.1-1.8.4-3.2.9l-4 1a30 30 0 01-3 .6c-1 .1-1.9 0-2.3-.5-.4-.5-.4-1.3 0-2.2.8-.3 2.3-.5 4.4-.7a29.3 29.3 0 008.4-2l3.3-1c.7-.2 1.2-.2 1.5 0 .4 0 .7.4 1 1z"/></g></svg>');
      top: -20px;
      right: 95px;
      position: absolute;
      z-index: 12;
      width: 220px;
      height: 105px;
      display: block;
    }

    @media screen and (max-width: 834px) {
      margin-left: 0;

      &::after {
        width: 103px;
        height: 50px;
        top: -2px;
        right: 43px;
      }
    }
  }

  &__line-break {
    display: none;
  }
}

@media only screen and (max-width: 1366px) {
  .customer-rates {
    &__rates-block-bottom-row {
      padding-left: 10px;
      padding-right: 10px;
    }

    &__description-bottom-row {
      font-size: 13px;
    }
  }
}

@media only screen and (max-width: 1199px) {
  .customer-rates {
    &__rates-block-bottom-row {
      height: 110px;
    }

    &__number-item-top-row {
      margin-bottom: 0;
      font-size: 80px;
    }

    &__line-break {
      display: block;
    }
  }
}

@media screen and (max-width: 965px) {
  .customer-rates__main-title br {
    display: block;
  }
}

@media only screen and (max-width: 834px) {
  .customer-rates {
    &__main-title br {
      display: none;
    }

    &__rates-block {
      height: 103px;
      padding: 20px 10px;
    }

    &__number-item-top-row {
      font-size: 56px;
      line-height: 66px;
    }

    &__description {
      font-size: 12px;
      line-height: 18px;
    }
  }
}

@media only screen and (max-width: 767px) {
  .customer-rates {
    &__number-item-top-row {
      font-size: 50px;
      line-height: 60px;
    }

    &__number-item-bottom-row {
      font-size: 38px;
      line-height: 39px;
      margin-top: 10px;
    }

    &__description-top-row {
      font-size: 14px;
      line-height: 18px;
    }
  }
}

@media screen and (max-width: 534px) {
  .customer-rates__main-title br {
    display: block;
  }
}

@media only screen and (max-width: 540px) {
  .customer-rates {
    &__number-item-top-row {
      line-height: 66px;
    }

    &__number-item-bottom-row {
      margin-top: 8px;
      margin-bottom: 5px;
    }
  }
}

@media only screen and (max-width: 340px) {
  .customer-rates {
    &__description-bottom-row {
      font-size: 11px;
      line-height: 17px;
    }

    &__number-item-top-row {
      line-height: 63px;
    }
  }
}
</style>
