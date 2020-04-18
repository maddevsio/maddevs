<template>
  <div class="software-development__content-item">
    <div class="software-development__content-item_wrapper">
      <h1 class="software-development__title" v-if="title === 'Mobile'">
        <span>Mobi</span>
        <img 
          class="software-development__mobile-title-icon" 
          src="../../assets/img/Services/svg/phone-title-symbol.svg" 
          alt="phone-title-symbol"
        />
        <span>e</span>
      </h1>
      <h1 class="software-development__title" v-else>{{ title }}</h1>
      <h2 class="software-development__sub-title">{{ subTitle }}</h2>
      <p class="software-development__paragraph">{{ firstParagraph }}</p>
      <p class="software-development__paragraph">{{ secondParagraph }}</p>
      <p class="software-development__paragraph" v-if="title === 'Backend'">{{ thirdParagraph }}</p>
      <SoftwareBackendIcons v-if="title === 'Backend'"/>
      <SoftwareFrontendIcons v-if="title === 'Frontend'"/>
      <SoftwareMobileIcons v-if="title === 'Mobile'"/>
    </div>
    <buttonTrigger :buttonInnerText="buttonInnerText"/>
  </div>
</template>

<script>
import buttonTrigger from '@/components/ui/button-trigger';
import SoftwareBackendIcons from '@/components/Services/SoftwareBackendIcons';
import SoftwareFrontendIcons from '@/components/Services/SoftwareFrontendIcons';
import SoftwareMobileIcons from '@/components/Services/SoftwareMobileIcons';

export default {
	name: 'SoftwareDevelopment',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subTitle: {
      type: String,
      default: 'Sub Title'
    },
    firstParagraph: {
      type: String,
      default: 'First Paragraph'
    },
    secondParagraph: {
      type: String,
      default: 'Second Paragraph'
    },
    thirdParagraph: {
      type: String,
      default: 'Third Paragraph'
    },
    buttonInnerText: {
      type: String,
      default: 'Button Inner Text'
    }
  },
	components: {
    buttonTrigger,
    SoftwareBackendIcons,
    SoftwareFrontendIcons,
    SoftwareMobileIcons
	}
};
</script>

<style lang="scss" scoped>
  .software-development {
    button {
      width: 100%;
      color: #96969c;
    }

		&__content-item_wrapper {
			color: #96969c;
    }
    
    &__content-item {
      max-width: 440px;
      min-width: calc(1em + 4vw);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 120px;
      padding-right: 30px;
      &:last-child {
        padding-right: 0;
      }
    }

    &__title, &__sub-title {
      font-family: 'Hoves-Bold';
    }

    &__title {
      font-size: 90px;
      :last-child {
        margin-left: -33px;
      }
    }

    &__sub-title {
      font-size: 50px;
      padding-bottom: 10px;
    }

    &__paragraph {
      max-width: 360px;
      padding-bottom: 20px;
      font-size: 18px;
      font-family: 'Hoves-Regular';
    }

    &__mobile-title-icon {
      margin-left: -24px;
      margin-bottom: -10px;
      padding: 0 5px;
    }
  }

  @media only screen and (max-width: 1560px) {
    .software-development {
      &__title {
        font-size: 80px;
      }

      &__sub-title  {
        font-size: 44px;
      }

      &__mobile-title-icon {
        height: 77px;
      }
    }

    .frontend-item {
      .software-development__sub-title {
        max-width: 390px;
      }
    }
  }

  @media only screen and (max-width: 1390px) {
    .software-development {
      &__title {
        font-size: 75px;
      }

      &__sub-title  {
        font-size: 40px;
      }
    }

    .frontend-item {
      .software-development__sub-title {
        max-width: 370px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .software-development {
      &__title {
        font-size: 70px;
        :last-child {
          margin-left: -26px;
        }
      }

      &__sub-title  {
        font-size: 35px;
      }

      &__mobile-title-icon {
        height: 67px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .software-development {
      &__title {
        font-size: 65px;
      }

      &__sub-title  {
        width: 270px;
        font-size: 30px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .software-development {
      &__content-item {
        max-width: initial;
        padding-right: 0;
      }

      &__title {
        max-width: initial;
        font-size: 80px;
      }

      &__sub-title  {
        width: initial;
        font-size: 50px;
      }

      &__paragraph {
        max-width: initial;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .software-development {
      &__title {
        font-size: 65px;
      }

      &__sub-title  {
        font-size: 40px;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    .software-development {
      &__title {
        font-size: 60px;
      }

      &__sub-title  {
        font-size: 35px;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .software-development {
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

      &__mobile-title-icon {
        height: 45px;
        padding-left: 13px;
      }
    }
  }
</style>