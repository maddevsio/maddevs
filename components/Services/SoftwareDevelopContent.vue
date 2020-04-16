<template>
  <div class="software-development__outsourcing-content" :class="className">
    <div class="software-development__content_wrapper">
      <h1 class="software-development__title">{{ title }}</h1>
      <h2 class="software-development__sub-title">{{ subTitle }}</h2>
      <p class="software-development__first-paragraph">{{ firstParagraph }}</p>
      <p class="software-development__second-paragraph">{{ secondParagraph }}</p>
      <p class="software-development__third-paragraph" v-if="title === 'Backend'">{{ thidrParagraph }}</p>
    </div>
    <buttonTrigger :buttonInnerText="buttonInnerText"/>
  </div>
</template>

<script>
import buttonTrigger from '../ui/button-trigger';

export default {
  props: ['title', 'subTitle', 'firstParagraph', 'secondParagraph', 'thidrParagraph', 'buttonInnerText', 'className'],
	name: 'SoftwareDevelopment',
	components: {
    buttonTrigger
	}
};
</script>

<style lang="scss" scoped>
  .software-development {
		&__content_wrapper {
			color: #96969c;
		}
	}
</style>