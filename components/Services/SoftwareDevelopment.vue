<template>
  <section id="software-development" class="software-development main-parent-item">
    <div class="container">
        <h2 class="software-development__main-title main-title">
            <span>Software</span><br>Development
        </h2>
        <div class="software-development__flex-wrapper flex-wrapper">
         <SoftwareDevelopContent 
            :title="backend.title" 
            :subTitle="backend.subTitle" 
            :firstParagraph="backend.firstParagraph"
            :secondParagraph="backend.secondParagraph"
            :thirdParagraph="backend.thirdParagraph"
            :buttonInnerText="backend.buttonInnerText"
            :modalWindowName="backend.modalWindowName"
          />
          <SoftwareDevelopContent 
            :title="frontend.title" 
            :subTitle="frontend.subTitle" 
            :firstParagraph="frontend.firstParagraph"
            :secondParagraph="frontend.secondParagraph"
            :buttonInnerText="frontend.buttonInnerText"
            :modalWindowName="frontend.modalWindowName"
            class="frontend-item"
          />
          <SoftwareDevelopContent 
            :title="mobile.title" 
            :subTitle="mobile.subTitle" 
            :firstParagraph="mobile.firstParagraph"
            :secondParagraph="mobile.secondParagraph"
            :buttonInnerText="mobile.buttonInnerText"
            :modalWindowName="mobile.modalWindowName"
          />
        </div>
    </div>
  </section>
</template>

<script>
import SoftwareDevelopContent from '@/components/Services/SoftwareDevelopContent';

export default {
  name: 'SoftwareDevelopment',
  components: {
    SoftwareDevelopContent
  },
  data() {
    return {
      backend: {
        title: 'Backend',
        subTitle: 'Your MVP doesn\'t work as expected after launch?',
        firstParagraph: 'Let our positively mad team rescue you and create sensible server logic for your project.',
        secondParagraph: 'We\'ll cure your growth pains like good doctors – just tell us about them and focus on your business.',
        thirdParagraph: 'At Mad Devs we know everything about:',
        buttonInnerText: 'Get server help',
        modalWindowName: 'backend-modal'
      },
      frontend: {
        title: 'Frontend',
        subTitle: 'Your users get lost in lousy interfaces?',
        firstParagraph: 'Our wizards will take your UX magic to the next level where everything is intuitive and user-friendly. Mad Devs strive to get involved with well-polished projects that will live a long life.',
        secondParagraph: 'We work with the best present-day frontend stack:',
        buttonInnerText: 'Get UX help',
        modalWindowName: 'frontend-modal'
      },
      mobile: {
        title: 'Mobile',
        subTitle: 'Your app is slow and unable to survive a demo?',
        firstParagraph: 'We understand that your success is our reputation, so we want your apps to be awesome. Our team will deliver an app that you\'ll be ecstatic to use yourself.',
        secondParagraph: 'We do both iOS and Android development using the following languages and frameworks:',
        buttonInnerText: 'Get mobile help',
        modalWindowName: 'mobile-modal'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .software-development {
    padding-bottom: 204px;
    background-color: $bgcolor--black;

    &__flex-wrapper {
      margin-top: -40px;
    }

    &__main-title {
      color: $text-color--red;

      span {
        color: $text-color--black;
        text-shadow: $text-shadow--red;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .software-development {
      padding-bottom: 90px;

      &__flex-wrapper {
        flex-wrap: wrap;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .software-development {
      padding-bottom: 80px;
    }
  }

  @media only screen and (max-width: 520px) {
    .software-development {
      padding-bottom: 143px;
    }
  }

  @media only screen and (max-width: 376px) {
    .software-development {
      padding-bottom: 80px;
    }
  }
</style>
