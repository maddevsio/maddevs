<template>
  <div class="software-development__content-item">
    <div class="software-development__content-item_wrapper">
      <h1 class="software-development__title">{{ title }}</h1>
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 440px;
    }

    &__title, &__sub-title {
      font-family: 'Hoves-Bold';
    }

    &__title {
      font-size: 90px;
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
  }
</style>