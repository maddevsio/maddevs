<template>
  <section id="it-consulting" class="it-consulting">
    <div class="container">
      <h2 class="it-consulting__main-title">IT Consulting</h2>
      <div class="it-consulting__content row">
        <ItConsultingContent
          :title="TechnologyStack.title"
          :sub-title="TechnologyStack.subTitle"
          :paragraph="TechnologyStack.paragraph"
          :class-name="TechnologyStack.className"
        />
        <ItConsultingContent
          :title="ProcessAudit.title"
          :sub-title="ProcessAudit.subTitle"
          :paragraph="ProcessAudit.paragraph"
          :class-name="ProcessAudit.className"
        />
        <ItConsultingContent
          :title="TeamHeadcount.title"
          :sub-title="TeamHeadcount.subTitle"
          :paragraph="TeamHeadcount.paragraph"
          :class-name="TeamHeadcount.className"
        />
      </div>
      <UIButtonModalTrigger
        :button-inner-text="buttonInnerText"
        :is-black="true"
        class="it-consulting__button"
        @onClick="$refs.getExpertAdviceModal.show()"
      />
    </div>

    <Modal ref="getExpertAdviceModal">
      <getExpertAdviceModal />
    </Modal>
  </section>
</template>

<script>
import ItConsultingContent from '@/components/Services/ItConsultingContent';
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';
import getExpertAdviceModal from '@/components/Modals/get-expert-advice-modal';
import Modal from '@/containers/Modal';

export default {
  name: 'ItConsulting',
  components: {
    ItConsultingContent,
    UIButtonModalTrigger,
    getExpertAdviceModal,
    Modal,
  },

  data() {
    return {
      TechnologyStack: {
        title: 'Technology <br> Stack',
        subTitle: 'Tired of the slow and <span>hard-to-maintain</span> technology that your previous team used?',
        paragraph:
          'We’ll help you resolve this with minimal changes using proper optimisations, updates and code refactoring.',

        className: 'first-item',
      },

      ProcessAudit: {
        title: 'Process <br> Audit',
        subTitle: 'Have to constantly deal with extended deadlines and <span>mess-ups?</span>',
        paragraph:
          'Your process probably just lacks transparency and reasonable control. We know how to avoid this and check who does what right now.',

        className: 'second-item',
      },

      TeamHeadcount: {
        title: 'Team <br> Headcount',
        subTitle: 'Is your team too big or too small and therefore causing trouble?',
        paragraph:
          'Hire good people and get rid of underperformers. Easier said than done, right? Get assessments for the skills and seniority level of your staff. Our positively mad engineers and PMs know how to do this.',

        className: 'third-item',
      },

      buttonInnerText: 'Get expert advice',
    };
  },
};
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
