<template>
  <section id="software-development" class="software-development">
    <div class="container">
      <h2 class="software-development__main-title">Software Development</h2>
      <div class="software-development__content row">
        <SoftwareDevelopmentContent
          :title="backend.title"
          :sub-title="backend.subTitle"
          :first-paragraph="backend.firstParagraph"
          :second-paragraph="backend.secondParagraph"
          :icons="backend.icons"
        />
        <SoftwareDevelopmentContent
          :title="frontend.title"
          :sub-title="frontend.subTitle"
          :first-paragraph="frontend.firstParagraph"
          :second-paragraph="frontend.secondParagraph"
          :icons="frontend.icons"
        />
        <SoftwareDevelopmentContent
          :title="mobile.title"
          :sub-title="mobile.subTitle"
          :first-paragraph="mobile.firstParagraph"
          :second-paragraph="mobile.secondParagraph"
          :icons="mobile.icons"
        />
      </div>
      <UIModalTriggerButton
        label="Get your trusted IT partner"
        color="grey"
        class="software-development__button"
        @click="$refs.getYourTrustedItPartnerModal.show()"
      />
    </div>

    <Modal ref="getYourTrustedItPartnerModal">
      <getYourTrustedItPartnerModal />
    </Modal>
  </section>
</template>

<script>
import SoftwareDevelopmentContent from '@/components/Services/SoftwareDevelopmentContent'
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'
import getYourTrustedItPartnerModal from '@/components/Modals/get-your-trusted-it-partner-modal'
import Modal from '@/containers/Modal'

export default {
  name: 'SoftwareDevelopment',
  components: {
    SoftwareDevelopmentContent,
    UIModalTriggerButton,
    getYourTrustedItPartnerModal,
    Modal,
  },

  data() {
    return {
      backend: {
        title: 'Backend',
        subTitle: "Your MVP doesn't work as expected after launch?",
        firstParagraph:
          "Let our positively mad team rescue you and create sensible server logic for your project. We'll cure your growth pains like good doctors – just tell us about them and only focus on your business.",

        secondParagraph: 'At Mad Devs we know everything about:',
        icons: [
          {
            title: 'Python',
            className: 'backend-python',
          },
          {
            title: 'Go',
            className: 'backend-go',
          },
          {
            title: 'Node.js',
            className: 'backend-node',
          },
          {
            title: 'C',
            className: 'backend-c',
          },
          {
            title: 'TypeScript',
            className: 'frontend-typescript',
          },
          {
            title: 'PHP',
            className: 'backend-php',
          },
          {
            title: 'Ruby',
            className: 'backend-ruby',
          },
          {
            title: 'C++',
            className: 'backend-c-plus',
          },
        ],
      },

      frontend: {
        title: 'Frontend',
        subTitle: 'Your users get lost in lousy interfaces?',
        firstParagraph:
          'Our wizards will take your UX magic to the next level where everything is intuitive and <span>user-friendly.</span> <span>Mad Devs</span> strive to get involved with <span>well-polished</span> projects that will live a long life.',

        secondParagraph: 'We work with the best <span>present-day</span> frontend stack:',
        icons: [
          {
            title: 'JavaScript',
            className: 'frontend-js',
          },
          {
            title: 'React',
            className: 'frontend-react',
          },
          {
            title: 'Babel',
            className: 'frontend-babel',
          },
          {
            title: 'Vue',
            className: 'frontend-vue',
          },
          {
            title: 'PostCSS',
            className: 'frontend-post-css',
          },
          {
            title: 'Angular',
            className: 'frontend-angular',
          },
          {
            title: 'Nuxt.js',
            className: 'frontend-nuxt',
          },
          {
            title: 'SASS',
            className: 'frontend-sass',
          },
        ],
      },

      mobile: {
        title: 'Mobile',
        subTitle: 'Your app is slow and unable to survive a demo?',
        firstParagraph:
          "We understand that your success is our reputation, so we want your apps to be awesome. Our team will deliver an app that you'll be ecstatic to use yourself.",

        secondParagraph: 'We do both iOS and Android development using the following languages and frameworks:',
        icons: [
          {
            title: 'Android',
            className: 'mobile-android',
          },
          {
            title: 'Kotlin',
            className: 'mobile-kotlin',
          },
          {
            title: 'Java',
            className: 'mobile-java',
          },
          {
            title: 'Firebase',
            className: 'mobile-firebase',
          },
          {
            title: 'iOS',
            className: 'mobile-apple',
          },
          {
            title: 'Objective-C',
            className: 'mobile-obj-c',
          },
          {
            title: 'Swift',
            className: 'mobile-swift',
          },
          {
            title: 'Flutter',
            className: 'mobile-flutter',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.software-development {
  &__main-title {
    text-align: center;
    @include h2_title;
  }

  &__main-title,
  &__button {
    color: $text-color--white;
  }

  &__button {
    width: 100%;
    height: 56px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    border-color: $button-border--white-opacity;

    &:hover {
      background-color: $bgcolor--white;
      color: $text-color--black !important;
    }

    &:active {
      background-color: $bgcolor--white !important;
      border-color: $button-border--white-opacity !important;
    }

    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }

    @media screen and (max-width: 375px) {
      height: 48px;
    }
  }

  &__content {
    margin-bottom: 22px;

    @media screen and (min-width: 400px) and (max-width: 1023px) {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 834px) {
    padding-bottom: 25px;
  }

  @media screen and (max-width: 578px) {
    padding-bottom: 47px;
  }
}
</style>
