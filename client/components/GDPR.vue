<template>
  <section id="gdpr">
    <div class="container">
      <div class="gdpr__header">
        <h3 class="gdpr__title title">
          Mad Devs’ GDPR Compliance Commitment
        </h3>
        <img
          class="gdpr__image"
          src="@/assets/img/common/docs.svg"
          alt="GDPR image"
        />
      </div>
      <div class="gdpr__content">
        <p class="gdpr__text doc-text">
          We are committed to staying compliant with the General Data Protection Regulation (GDPR)
          for the sake of our customers, partners, and staff. Personally identifiable information that
          belongs to EU citizens is subject to rules, restrictions, and limitations stated in GDPR dated
          May 25, 2018.
        </p>
        <p class="gdpr__text doc-text">
          <span class="gdpr__text gdpr__text--bold">Important note.</span> Our software development and infrastructure optimization departments
          have worked with projects requiring full GDPR compliance, and if you need help with any
          personal data to be properly collected, modified, stored, and processed, please let us know.
        </p>
        <h5 class="gdpr__sec-title">Data Processing Documentation</h5>
        <p class="gdpr__paragraph paragraph">
          Under the terms of GDPR, Mad Devs is a Data Processor. In case you are a Data Controller
          according to the official GDPR terminology, our legal department is ready to provide written
          consent for the processing of any personal data of individuals from the European Union and
          European Economic Area. We are also ready to provide our <a class="gdpr__link" href="https://gdpr.eu/what-is-data-processing-agreement/">Data Processing Addendum (DPA)</a>
          <br> upon your request. Please notify our management via
          <a class="gdpr__link" href="mailto:rock@maddevs.io"
            >rock@maddevs.io</a
          >
          to get help.
        </p>
        <h5 class="gdpr__sec-title">
          Privacy Policy
        </h5>
        <p class="gdpr__paragraph paragraph">
          For your convenience, our Privacy Policy is available on our website in PDF format, you can
          also download it to your computer if needed. If you have any questions or concerns related
          to this document, please let us know via
          <a class="gdpr__link" href="mailto:rock@maddevs.io">rock@maddevs.io</a
          >.
        </p>
        <h5 class="gdpr__sec-title">
          Cookie Usage
        </h5>
        <p class="gdpr__paragraph paragraph">
          Our website uses cookies to help us define your core interests and make you relevant
          service offerings. The “Accept” button on our pop-up notification will enable you to accept
          cookies.
        </p>
        <h5 class="gdpr__sec-title">
          Marketing Communications
        </h5>
        <p class="gdpr__paragraph paragraph">
          To get information on our recent blog posts, hottest discounts, and newest services, you can
          subscribe to the Mad Devs Newsletter. You can unsubscribe at any time. If you want to make
          sure that your data has been amended or deleted, please contact us via
          <a class="gdpr__link" href="mailto:rock@maddevs.io">rock@maddevs.io</a
          >.
        </p>
        <p class="gdpr__paragraph gdpr__paragraph--bold paragraph">
          We appreciate your collaboration and openness with regard to any legal issues!
        </p>
        <p class="gdpr__paragraph gdpr__paragraph--bold gdpr__paragraph--italic paragraph">
          Team Mad Devs
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GDPR'
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars';

.gdpr {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: $bgcolor--black;

  &__header {
    display: flex;
    margin-top: 147px;
    margin-bottom: 53px;
    align-items: center;
  }

  &__content {
    max-width: 880px;
  }

  &__title {
    margin-right: 36px;
    margin-top: 55px;
    max-width: 800px;
  }

  &__link {
    color: $text-color--white;
    text-decoration: none;
  }

  &__paragraph,
  &__text {
    margin-bottom: 15px;

    &--bold {
      font-weight: bold;
    }

    &--italic {
      font-style: italic;
    }
  }

  &__sec-title {
    text-align: left;
    color: $text-color--grey-light;
    margin-top: 62px;
    margin-bottom: 11px;
    font-size: 32px;
    font-family: 'Hoves-Regular';
    font-weight: bold;
  }

  &__text,
  &__paragraph,
  &__header {
    color: $text-color--white;
  }

  &__break-paragraph {
    margin-bottom: 5px;
  }
}

@media only screen and (max-width: 1280px) {
  .gdpr {
    &__image {
      height: 180px;
    }
  }
}

@media only screen and (min-width: 1150px) {
  .gdpr {
    &__image {
      margin-left: 15%;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .gdpr {
    &__image {
      height: 170px;
    }

    &__title {
      margin-top: 0;
    }
  }
}

@media only screen and (max-width: 870px) {
  .gdpr {
    &__image {
      height: 155px;
    }

    &__sec-title {
      font-size: 30px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .gdpr {
    &__image {
      height: 150px;
    }
  }
}

@media only screen and (max-width: 670px) {
  .gdpr {
    &__header {
      position: relative;
    }

    &__title {
      max-width: 480px;
    }

    &__image {
      height: 140px;
      position: absolute;
      right: 39px;
      top: -72px;
    }
  }
}

@media only screen and (max-width: 520px) and (min-width: 495px) {
  .gdpr {
    &__image {
      top: -95px;
    }
  }
}

@media only screen and (max-width: 520px) {
  .gdpr {
    &__image {
      height: 95px;
    }

    &__title {
      font-size: 53px;
    }

    &__sec-title {
      font-size: 27px;
    }
  }
}

@media only screen and (max-width: 420px) {
  .gdpr {
    &__image {
      top: -93px;
      right: 0;
    }
  }
}

@media only screen and (max-width: 370px) {
  .gdpr {
    &__title {
      font-size: 47px;
    }
  }
}
</style>
