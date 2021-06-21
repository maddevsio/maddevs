<template>
  <section
    id="it-consulting"
    class="it-consulting"
  >
    <div class="container">
      <h2 class="it-consulting__main-title">
        IT Consulting
      </h2>
      <div class="it-consulting__content row">
        <ItConsultingContent
          v-for="type in consultungTypes"
          :key="type.type"
          v-bind="type"
        />
      </div>
      <UIModalTriggerButton
        label="Get expert advice"
        color="black"
        class="it-consulting__button"
        @click="$refs.modalGetExpertAdvice.show()"
      />
    </div>
    <ModalGetExpertAdvice ref="modalGetExpertAdvice" />
  </section>
</template>

<script>
import ItConsultingContent from '@/components/Services/ItConsultingContent'
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'
import ModalGetExpertAdvice from '@/components/core/modals/ModalGetExpertAdvice'
import { consultungTypes } from '@/data/itConsulting'

export default {
  name: 'ItConsulting',
  components: {
    ItConsultingContent,
    UIModalTriggerButton,
    ModalGetExpertAdvice,
  },

  data() {
    return {
      consultungTypes,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.it-consulting {
  padding-bottom: 76px;
  background-color: $bgcolor--white-darken;

  &__content {
    margin-bottom: 22px;
  }

  &__main-title {
    @include h2_title;
    padding-top: 76px;
    margin-bottom: 8px;
    text-align: center;

    @media screen and (max-width: 834px) {
      margin-bottom: 0;
    }
  }

  &__button {
    width: 100%;
    height: 56px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;

    &:active {
      background-color: $bgcolor--black !important;
      border-color: $border-color--black !important;
    }

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }

    @media screen and (max-width: 375px) {
      height: 48px;
    }
  }

  @media screen and (max-width: 576px) {
    padding-bottom: 48px;

    &__main-title {
      padding-top: 48px;
    }
  }
}
</style>
