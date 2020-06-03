<template>
  <section id="quick-project-start" class="quick-project_start">
    <div class="container">
      <div class="quick-project_start__title-wrap">
        <h2 class="quick-project_start__main-title main-title">Quick <br> Project Start</h2>
      </div>
      <div class="quick-project_start__content-wrap">
        <div class="quick-project_start__content-items_list">
          <div class="quick-project_start__content-item" v-for="(item, i) in itemsTextContent" :key="i">
            <div class="quick-project_start__icon-item" :class="item.title">
              <img :src="require(`@/assets/img/Home/svg/Quick/${item.title}.svg`)" class="quick-project_start__image-item" :alt="item.title">
            </div>
            <div class="quick-project_start__text-item">
              <h4 class="quick-project_start__title sub-title">{{ item.title }}</h4>
              <p class="quick-project_start__paragraph paragraph">{{ item.paragraph }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="quick-project_start__button-wrap">
        <buttonTrigger :buttonInnerText="buttonInnerText" :modalWindowName="modalWindowName" class="red-text-and-border"/>
      </div>
    </div>
  </section>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'QuickProjectStart',
  components: {
    buttonTrigger
  },
  data() {
    return {
      itemsTextContent: [
        {
          title: 'contact',
          paragraph: 'Submit your project requestor project idea to us.'
        },
        {
          title: 'analysis',
          paragraph: 'We will contact you to clarify your project requirements.'
        },
        {
          title: 'proposal',
          paragraph: 'We will provide you with our free, non-binding bid or a tailored proposal.'
        },
        {
          title: 'team',
          paragraph: 'We will assemble and prepare a team for your project.'
        },
        {
          title: 'start',
          paragraph: 'You will get to know our team and we will organise the process.'
        }
      ],
      buttonInnerText: 'Order a project from us',
      modalWindowName: 'order-project-from-us'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .quick-project_start {
    padding-top: 230px;
    padding-bottom: 195px;
    text-align: center;

    &__main-title {
      padding-bottom: 105px;
      color: $text-color--white;

      br {
        display: none;
      }
    }

    &__button-wrap {
      width: 100%;
      margin-top: 123px;

      button {
        width: inherit;
      }
    }

    &__content-items_list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 65px;
    }

    &__content-item {
      max-width: 240px;
      display: flex;
      flex-direction: column;
    }

    &__icon-item {
      position: relative;
      padding-bottom: 22px;

       &::after {
        content: '';
        width: 200px;
        height: 200px;
        position: absolute;
        left: 190px;
        background: url('../../assets/img/Home/svg/Quick/quick-project-arrow.svg') no-repeat;
      }
    }

    &__title {
      text-transform: capitalize;
      color: $text-color--red;
    }

    &__paragraph {
      color: $text-color--grey-light;
    }

    .team {
      margin-top: -7px;
    }

    .start {
      &::after {
        display: none;
      }
    }

    .start,
    .contacts {
      margin-top: -3px;
    }
  }

  @media only screen and (max-width: 1620px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 180px;
        }
      }
    }
  }

  @media only screen and (max-width: 1520px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 165px;
        }
      }
    }
  }

  @media only screen and (max-width: 1470px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 160px;
        }
      }
    }
  }

  @media only screen and (max-width: 1420px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 150px;
        }
      }
    }
  }

  @media only screen and (max-width: 1370px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 140px;
        }
      }
    }
  }

  @media only screen and (max-width: 1330px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 120px;
        }
      }
    }
  }

  @media only screen and (max-width: 1240px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 110px;
        }
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          top: 15px;
          left: 125px;
          background-size: 130px;
        }
      }
    }
  }

  @media only screen and (max-width: 1120px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 115px;
        }
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 100px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .quick-project_start {
      text-align: initial;

      &__main-title {
        padding-bottom: 51px;

        br {
          display: block;
        }
      }

       &__button-wrap {
        display: flex;
        justify-content: flex-start;
        margin-top: 38px;
        margin-left: 58px;

        button {
          width: calc(100% - 15%);
          color: $text-color--grey-light;
          background-color: $button-bgcolor--red;
        }
      }


      &__content-items_list {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 40px;
      }

      &__content-item {
        max-width: 360px;
        flex-direction: row;
      }

      &__icon-item {
        padding-top: 7px;
        padding-right: 17px;

        &::after {
          display: none;
        }
      }

      .team {
        padding-top: 14px;
      }

      .start {
        padding-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .quick-project_start {
      padding-top: 100px;
      padding-bottom: 100px;

      &__button-wrap {
        margin-left: 52px;

        button {
          width: calc(100% - 28%);
        }
      }

      &__image-item {
        width: 33px;
      }
    }
  }

  @media only screen and (max-width: 370px) {
    .quick-project_start {
      &__button-wrap {
        margin-left: 52px;

        button {
          width: calc(100% - 28%);
          font-size: 15px;
        }
      }
    }
  }

</style>
