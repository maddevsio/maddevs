<template>
  <div class="software-development__content-item">
    <div class="software-development__content-item_wrapper">
      <h1 class="software-development__title title" v-if="title === 'Mobile'">
        <span>Mobi</span>
        <img 
          class="software-development__mobile-title-icon title-icon" 
          src="../../assets/img/Services/svg/phone-title-symbol.svg" 
          alt="phone-title-symbol"
        />
        <span class="software-development__last-character last-character">e</span>
      </h1>
      <h1 class="software-development__title title" v-else>{{ title }}</h1>
      <h2 class="software-development__sub-title sub-title">{{ subTitle }}</h2>
      <p class="software-development__paragraph paragraph">{{ firstParagraph }}</p>
      <p class="software-development__paragraph paragraph">{{ secondParagraph }}</p>
      <p class="software-development__paragraph paragraph" v-if="title === 'Backend'">{{ thirdParagraph }}</p>
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

    &__sub-title {
      padding-bottom: 10px;
    }

    &__paragraph {
      max-width: 360px;
      padding-bottom: 20px;
    }

    &__mobile-title-icon {
      margin-left: -24px;
      margin-bottom: -10px;
    }
  }

  @media only screen and (max-width: 1560px) {
    .frontend-item {

      .software-development__sub-title {
        max-width: 390px;
      }
    }
  }

  @media only screen and (max-width: 1390px) {
    .frontend-item {

      .software-development__sub-title {
        max-width: 370px;
      }
    }
  }

  @media only screen and (max-width: 1270px) {
    .software-development {
      &__last-character {
        margin-left: -26px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .software-development {

      &__sub-title  {
        width: 270px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .software-development {
      &__content-item {
        max-width: initial;
        padding-right: 0;
      }

      &__title,
      &__paragraph {
        max-width: initial;
      }

      &__sub-title  {
        width: initial;
      }
    }

    .frontend-item {

      .software-development__sub-title {
        max-width: initial;
      }
    }
  }

  @media only screen and (max-width: 520px) {
    .software-development {
      &__last-character {
        margin-left: -21px;
      }
    }
  }
</style>