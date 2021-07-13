<template>
  <section id="gdpr">
    <div class="container">
      <div class="gdpr__header">
        <h1 class="gdpr__title">
          <span class="gdpr__nowrap">Mad Devs’</span> GDPR <br>
          Compliance Commitment
        </h1>
        <div class="gdpr__image" />
      </div>
      <div class="gdpr__content">
        <p class="gdpr__text--first gdpr__text">
          We are committed to staying compliant with the General Data Protection Regulation (GDPR) for the sake of our
          customers, partners, and staff. Personally identifiable information that belongs to EU citizens is subject to
          rules, restrictions, and limitations stated in GDPR dated May 25, 2018.
        </p>
        <p class="gdpr__text">
          <span class="gdpr__text gdpr__text--bold">Important note.</span> Our software development and infrastructure
          optimization departments have worked with projects requiring full GDPR compliance, and if you need help with
          any personal data to be properly collected, modified, stored, and processed, please let us know.
        </p>
        <h2 class="gdpr__sec-title gdpr__sec-title--first">
          Data Processing Documentation
        </h2>
        <p class="gdpr__paragraph">
          Under the terms of GDPR, <span class="gdpr__nowrap">Mad Devs</span> is a Data Processor. In case you are a
          Data Controller according to the official GDPR terminology, our legal department is ready to provide written
          consent for the processing of any personal data of individuals from the European Union and European Economic
          Area. We are also ready to provide our
          <a
            class="gdpr__link"
            href="https://gdpr.eu/what-is-data-processing-agreement/"
            target="_blank"
          >Data Processing Addendum (DPA)</a>
          <br>
          upon your request. Please notify our management via
          <a
            class="gdpr__link"
            href="mailto:rock@maddevs.io"
          >rock@maddevs.io</a>
          to get help.
        </p>
        <h2 class="gdpr__sec-title">
          Privacy Policy
        </h2>
        <p class="gdpr__paragraph">
          For your convenience, our Privacy Policy is available on our website in
          <a
            class="gdpr__link"
            download
            href="/mad-devs-termsfeed-privacy-policy.pdf"
          >PDF format</a>, you can also download it
          to your computer if needed. If you have any questions or concerns related to this document, please let us know
          via
          <a
            class="gdpr__link"
            href="mailto:rock@maddevs.io"
          >rock@maddevs.io</a>.
        </p>
        <h2 class="gdpr__sec-title">
          Cookie Usage
        </h2>
        <p class="gdpr__paragraph">
          Our website uses cookies to help us define your core interests and make you relevant service offerings. The
          “Accept” button on our pop-up notification will enable you to accept cookies.
        </p>
        <h2 class="gdpr__sec-title">
          Marketing Communications
        </h2>
        <p class="gdpr__paragraph">
          To get information on our recent blog posts, hottest discounts, and newest services, you can subscribe to the
          <span class="gdpr__nowrap">Mad Devs</span> Newsletter. You can unsubscribe at any time. If you want to make
          sure that your data has been amended or deleted, please contact us via
          <a
            class="gdpr__link"
            href="mailto:rock@maddevs.io"
          >rock@maddevs.io</a>.
        </p>
        <p class="gdpr__paragraph gdpr__paragraph--bold">
          We appreciate your collaboration and openness with regard to any legal issues!
        </p>
        <p class="gdpr__paragraph gdpr__paragraph--bold gdpr__paragraph--italic">
          Team <span class="gdpr__nowrap">Mad Devs</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GDPR',
}
</script>

<style lang="scss" scoped>
.gdpr {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: $bgcolor--black;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 71px;
  }

  &__content {
    max-width: 880px;
  }

  &__title {
    color: $text-color--white;
    @include h2-title;
  }

  &__link {
    color: $remote-tech-staff-sub-title-grey;
    text-decoration: underline;
  }

  &__paragraph {
    @include font('Inter', 17px, 400);
    line-height: 28px;
    letter-spacing: -0.02em;
    color: $remote-tech-staff-sub-title-grey;

    &--bold {
      margin-top: 15px;
      font-weight: bold;
    }
  }

  &__sec-title {
    @include font('Inter', 24px, 400);
    margin-top: 48px;
    margin-bottom: 8px;
    line-height: 136%;
    letter-spacing: 0;
    color: $text-color--red;

    &--first {
      margin-top: 71px;
    }
  }

  &__text {
    @include font('Inter', 22px, 400);
    margin: 25px 0;
    line-height: 36px;
    letter-spacing: -0.035em;
    color: $text-color--white;

    &--first {
      margin-top: 0;
    }

    &--bold {
      font-weight: bold;
    }

    &--italic {
      font-style: italic;
    }

    @media only screen and (max-width: 350px) {
      font-size: 20px;
    }
  }

  &__break {
    margin-bottom: 5px;
  }

  &__nowrap {
    white-space: nowrap;
  }

  &__image {
    width: 190px;
    height: 230px;
    display: block;
    position: relative;
    top: 80px;
    @include document-icon;

    @media only screen and (max-width: 1300px) {
      width: 140px;
      height: 170px;
      top: 55px;
    }

    @media only screen and (max-width: 1200px) {
      width: 100px;
      height: 150px;
      top: 30px;
    }

    @media only screen and (max-width: 1140px) {
      width: 65px;
      height: 115px;
      top: 7px;
    }
  }

  @media only screen and (max-width: 1080px) {
    &__title {
      br {
        display: none;
      }
    }

    &__image {
      display: none;
    }
  }
}
</style>
