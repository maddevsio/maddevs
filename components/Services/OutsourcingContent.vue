<template>
  <div class="it-outsourcing__outsourcing-content">
    <div class="it-outsourcing__content_wrapper">
      <h3 class="it-outsourcing__title title" v-if="title === 'Teams'">
        <span>Tea</span>
        <img 
          class="it-outsourcing__teams-title-icon title-icon" 
          src="../../assets/img/Services/svg/teams-sub-title-symbol.svg" 
          alt="teams-sub-title-symbol"
        />
        <span class="it-outsourcing__last-character last-character">s</span>
      </h3>
      <h3 class="it-outsourcing__title title" v-else>{{ title }}</h3>
      <h4 class="it-outsourcing__sub-title sub-title">{{ subTitle }}</h4>
      <p class="it-outsourcing__paragraph paragraph">{{ paragraph }}</p>
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
  @import '../../assets/styles/vars';

  .it-outsourcing {
    button {
      width: 450px;
    }

    &__outsourcing-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 725px;
    }

    &__title {
      height: 100px;
    }

    &__paragraph {
      width: 535px;
      padding-bottom: 46px;
    }

    &__teams-title-icon {
      margin-left: -24px;
    }
  }

  .teams * {
    color: $text-color--grey-light;

    .it-outsourcing__paragraph {
      width: 535px;
    }
  }

  .individuals * {
    color: $text-color--grey;

    .it-outsourcing__paragraph {
      width: 575px;
    }
  }

  @media only screen and (max-width: 1560px) {
    .it-outsourcing {
      button {
        width: 400px;
      }
    }
  }

  @media only screen and (max-width: 1390px) {
    .it-outsourcing {
      button {
        width: 380px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .it-outsourcing {
      button {
        width: 360px;
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

      &__sub-title  {
        width: 465px;
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

      &__sub-title  {
        width: initial;
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

  @media only screen and (max-width: 520px) {
    .it-outsourcing {
      &__last-character {
        margin-left: -21px;
      }
    }
  }
</style>
