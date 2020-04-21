<template>
  <div class="it-outsourcing__outsourcing-content">
    <div class="it-outsourcing__content_wrapper">
      <h1 class="it-outsourcing__title" v-if="title === 'Teams'">
        <span>Tea</span>
        <img 
          class="it-outsourcing__teams-title-icon" 
          src="../../assets/img/Services/svg/teams-sub-title-symbol.svg" 
          alt="teams-sub-title-symbol"
        />
        <span>s</span>
      </h1>
      <h1 class="it-outsourcing__title" v-else>{{ title }}</h1>
      <h2 class="it-outsourcing__sub-title">{{ subTitle }}</h2>
      <p class="it-outsourcing__paragraph">{{ paragraph }}</p>
    </div>
    <buttonTrigger :buttonInnerText="buttonInnerText"/>
  </div>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';

export default {
  name: 'OutsourcingContent',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subTitle: {
      type: String,
      default: 'Sub Title'
    },
    paragraph: {
      type: String,
      default: 'Paragraph'
    },
    buttonInnerText: {
      type: String,
      default: 'Button Inner Text'
    }
  },
  components: {
    buttonTrigger
  }
};

</script>

<style lang="scss" scoped>
  .it-outsourcing {
    &__outsourcing-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    
    &__title,
    &__sub-title {
      font-family: 'Hoves-Bold';
    }

    &__title {
      height: 100px;
      padding-bottom: 34px;
      font-size: 90px;
      :last-child {
        margin-left: -33px;
      }
    }

    &__sub-title  {
      padding-bottom: 16px;
      font-size: 50px;
    }

    &__paragraph {
      width: 535px;
      padding-bottom: 46px;
      font-size: 18px;
      font-family: 'Hoves-Regular';
    }

    &__teams-title-icon {
      margin-left: -24px;
      padding: 0 5px;
    }
  }

  .teams * {
    color: #f2f2f2;
    .it-outsourcing__paragraph {
      width: 535px;
    }
  }

  .individuals * {
    color: #96969C;
    .it-outsourcing__paragraph {
      width: 575px;
    }
  }

  @media only screen and (max-width: 1560px) {
    .it-outsourcing {
      button {
        width: 400px;
      }

      &__title {
        font-size: 80px;
      }

      &__sub-title  {
        font-size: 44px;
      }

      &__teams-title-icon {
        height: 77px;
      }
    }
  }

  @media only screen and (max-width: 1390px) {
    .it-outsourcing {
      button {
        width: 380px;
      }

      &__title {
        font-size: 75px;
      }

      &__sub-title  {
        font-size: 40px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .it-outsourcing {
      button {
        width: 360px;
      }

      &__title {
        font-size: 70px;
        padding-bottom: 0;
      }

      &__sub-title  {
        font-size: 35px;
      }

      &__teams-title-icon {
        height: 67px;
      }
    }

    .teams,
    .individuals * {
      .it-outsourcing__paragraph {
        width: 435px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .it-outsourcing {
      button {
        width: 340px;
      }

      &__title {
        font-size: 65px;
      }

      &__sub-title  {
        width: 465px;
        font-size: 30px;
      }
    }

    .teams,
    .individuals * {
      .it-outsourcing__paragraph {
        width: 300px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .it-outsourcing {
      button {
        width: initial;
      }

      &__title {
        font-size: 80px;
      }

      &__sub-title  {
        width: initial;
        font-size: 50px;
      }
    }

    .teams,
    .individuals * {
      .it-outsourcing__paragraph {
        width: initial;
      }
    }

    .individuals {
      padding-top: 104px;
    }
  }

  @media only screen and (max-width: 768px) {
    .it-outsourcing {
      &__title {
        font-size: 65px;
      }

      &__sub-title  {
        font-size: 40px;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .it-outsourcing {
      &__title {
        font-size: 60px;
      }

      &__sub-title  {
        font-size: 35px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .it-outsourcing {
      &__title {
        font-size: 41px;
        :last-child {
          margin-left: -21px;
        }
      }

      &__sub-title  {
        font-size: 27px;
      }

      &__paragraph {
        font-size: 17px;
      }

      &__teams-title-icon {
        height: 45px;
        padding-left: 13px;
      }
    }
  }
</style>