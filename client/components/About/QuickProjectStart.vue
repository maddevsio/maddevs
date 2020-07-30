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
              <span :class="`quick-project_start__icon quick-project_start__icon--${item.title}`"/>
            </div>
            <div class="quick-project_start__text-item">
              <h4 class="quick-project_start__title sub-paragraph">{{ item.title }}</h4>
              <p class="quick-project_start__paragraph paragraph">{{ item.paragraph }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="quick-project_start__button-wrap">
        <UIButtonModalTrigger
          :buttonInnerText="buttonInnerText"
          :modalWindowName="modalWindowName"
          :isRed="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';

export default {
  name: 'QuickProjectStart',
  components: {
    UIButtonModalTrigger
  },
  data() {
    return {
      itemsTextContent: [
        {
          title: 'contact',
          paragraph: 'Submit your project request or project idea to us.'
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
          paragraph: 'You will get to know the team and we’ll start the project work.'
        }
      ],
      modalWindowName: 'order-project-from-us-modal',
      buttonInnerText: 'Submit your project'
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .quick-project_start {
    padding-top: get-vw(215px);
    padding-bottom: get-vw(155px);
    text-align: center;

    &__main-title {
      padding-bottom: get-vw(105px);
      color: $text-color--white;
      text-align: initial;

      br {
        display: none;
      }
    }

    &__button-wrap {
      width: 100%;
      margin-top: get-vw(75px);

      button {
        width: inherit;
      }
    }

    &__content-items_list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: get-vw(65px);
    }

    &__content-item {
      max-width: get-vw(240px);
      display: flex;
      flex-direction: column;
    }

    &__icon-item {
      position: relative;
      padding-bottom: get-vw(22px);

       &::after {
        content: '';
        width: get-vw(200px);
        height: get-vw(200px);
        position: absolute;
         left: 9.3vw;
         top: get-vw(-32px);
        background: url('../../assets/img/Home/svg/Quick/quick-project-arrow.svg') no-repeat;
        background-size: get-vw(190px);
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
      margin-top: get-vw(-7px);
    }

    .start {
      &::after {
        display: none;
      }
    }

    .start,
    .contacts {
      margin-top: get-vw(-3px);
    }

    &__icon {
      display: inline-block;
      height: 3vw;
      width: 3vw;
      background-repeat: no-repeat;
      margin: 0;
      background-size: contain;

      &--analysis {
        background-image: url(../../assets/img/Home/svg/Quick/analysis.svg);
      }

      &--contact {
        background-image: url(../../assets/img/Home/svg/Quick/contact.svg);
      }

      &--proposal {
        background-image: url(../../assets/img/Home/svg/Quick/proposal.svg);
      }

      &--quick-project-arrow {
        background-image: url(../../assets/img/Home/svg/Quick/quick-project-arrow.svg);
      }

      &--start {
        background-image: url(../../assets/img/Home/svg/Quick/start.svg);
      }

      &--team {
        background-image: url(../../assets/img/Home/svg/Quick/team.svg);
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .quick-project_start {
      &__button-wrap {
        button {
          width: 100%;
          color: $text-color--grey-light;
          background-color: $button-bgcolor--red;
        }
      }
    }
  }

  @media only screen and (max-width: 960px) {
    .quick-project_start {
      padding-top: 85px;
      padding-bottom: 124px;
      text-align: initial;

      &__content-items_list {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 45px;
      }

      &__content-item {
        max-width: 360px;
        flex-direction: row;
      }

      &__icon-item {
        padding-top: 13px;
        padding-right: 17px;

        img {
          width: 30px;
        }

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

  @media only screen and (max-width: 745px) {
    .quick-project_start {
      &__icon {
        height: 6vw;
        width: 8vw;
      }
    }
  }

  @media only screen and (max-width: 680px) {
    .quick-project_start {
      &__paragraph {
        width: initial;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .quick-project_start {
      &__icon {
        height: 7vw;
        width: 9vw;
      }

      &__title {
        text-transform: capitalize;
        color: $text-color--red;
        letter-spacing: -0.1vw;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .quick-project_start {
      padding-bottom: 102px;

      &__content-items_list {
        grid-row-gap: 35px;
      }

      &__button-wrap {
        margin-top: 35px;
        margin-left: 52px;

        button {
          width: calc(100% - 28%);
        }
      }

      &__icon-item {
        padding-top: 5px;
      }
    }
  }

  @media only screen and (max-width: 340px) {
    .quick-project_start {
      padding-top: 65px;
      padding-bottom: 78px;

      &__button-wrap {
        margin-left: 0;

        button {
          width: 100%;
        }
      }
    }
  }
</style>
