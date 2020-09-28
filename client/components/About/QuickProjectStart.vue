<template>
  <section id="quick-project-start" class="quick-project_start">
    <div class="container">
      <div class="quick-project_start__title-wrap">
        <h2 class="quick-project_start__main-title title">Quick Project Start</h2>
      </div>
      <div class="quick-project_start__content-wrap">
        <div class="quick-project_start__content-items_list row">
          <div class="quick-project_start__content-item col-xl-2 col-lg-2 col-md-2 col-sm-2" v-for="(item, i) in itemsTextContent" :key="i">
            <div class="quick-project_start__icon-item" :class="item.title">
              <span :class="`quick-project_start__image-bg quick-project_start__image-bg--${item.title}`"/>
            </div>
            <div class="quick-project_start__text-item">
              <h4 class="quick-project_start__item-title">{{ item.title }}</h4>
              <p class="quick-project_start__paragraph paragraph-sm">{{ item.paragraph }}</p>
            </div>
          </div>
        </div>
      </div>
      <UIButtonModalTrigger
        class="quick-project_start__button"
        :buttonInnerText="buttonInnerText"
        :modalWindowName="modalWindowName"
        :isRed="true"
      />
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

  .quick-project_start {
    padding: 165px 0;
    text-align: center;

    &__main-title {
      padding-bottom: 35px;
      color: $text-color--white;
    }

    &__image-bg {
      display: block;
      width: 40px;
      height: 40px;
      background-size: contain;
      background-repeat: no-repeat;

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

    &__button {
      width: 100%;
      height: 56px;
      margin-top: 47px;
      font-family: 'Poppins-Regular';
      font-size: 16px;
      letter-spacing: -0.02em;
    }

    &__content-items_list {
      justify-content: space-between;
    }

    &__content-item {
      display: flex;
      flex-direction: column;
    }

    &__icon-item {
      position: relative;
      margin-bottom: 15px;
      display: flex;
      justify-content: center;

       &::after {
        content: '';
        width: 200px;
        height: 200px;
        position: absolute;
        top: -13px;
        left: 130px;
        background: url('../../assets/img/Home/svg/Quick/quick-project-arrow.svg') no-repeat;
      }
    }

    &__item-title {
      font-family: 'Poppins-Bold';
      font-size: 32px;
      letter-spacing: -1px;
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

  @media only screen and (max-width: 8192px) { // 8K UHD max screen resolution 
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 170px;
        }
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 135px;
          background-size: 145px;
        }
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          background-size: 125px;
          left: 130px;
        }
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 120px;
          background-size: 110px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .quick-project_start {
      padding: 62px 0;

      &__item-title {
        font-size: 18px;
      }

      &__paragraph {
        font-size: 10px;
      }

      &__image-bg {
        width: 27px;
        height: 30px;
      }

      &__button {
        width: 100%;
        color: $text-color--grey-light;
        background-color: $button-bgcolor--red;
      }

      &__icon-item {
        &::after {
          top: -5px;
          left: 110px;
          background-size: 80px;
        }
      }
    }
  }

  @media only screen and (max-width: 960px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 95px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .quick-project_start {
      &__icon-item {
        &::after {
          left: 75px;
          background-size: 62px;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .quick-project_start {
      &__content-item {
        padding: 0;
      }

      &__icon-item {
        &::after {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .quick-project_start {
      padding: 95px 0;
      text-align: initial;

      &__content-item {
        max-width: 360px;
        flex-direction: row;
      }

      &__item-title {
        font-size: 27px;
      }

      &__paragraph,
      &__button {
        font-size: 14px;
      }

      &__icon-item {
        margin-top: 6px;
        margin-right: 23px;
      }


      &__image-bg {
        width: 32px;
        height: 32px;
      }
    }
  }
</style>
