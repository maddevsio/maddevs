<template>
  <section id="gdpr">
    <div class="container">
      <div class="gdpr__header">
        <h3 class="gdpr__title title">
          GDPR Compliance Commitment by Mad Devs?
        </h3>
        <img
          class="gdpr__image"
          src="@/assets/img/common/docs.svg"
          alt="GDPR image"
        />
      </div>
      <div class="gdpr__content">
        <p class="gdpr__text doc-text">
          GDPR, General Data Protection Regulation, effective May 25, 2018
          defines the clear procedure for how personal data of EU citizens
          should be collected, modified, stored and processed. CDNvideo
          understands the positive impact of the new data protection law and is
          committed to stay compliant with GDPR for the sake of our customers
          and partners based in European Union and European Economic Area.
        </p>
        <h5 class="gdpr__sec-title sec-title">Data Processor Status</h5>
        <p class="gdpr__paragraph paragraph">
          In accordance with official GDPR terminology, CDNvideo has the status
          of a Data Processor. If your company is a Data Controller under the
          terms of the GDPR, and you need a written consent to process personal
          data with us, please contact us via legal@cdnvideo.com to get our Data
          Processing Addendum (DPA) document
        </p>
        <h5 class="gdpr__sec-title sec-title">
          Privacy Policy & Usage Agreement
        </h5>
        <p class="gdpr__paragraph paragraph">
          We have made our Privacy Policy public for your convenience, you can
          read or download it here. Our amended Usage Agreement is available
          here. We appreciate any heads-up and improvement requests sent to us.
          If you have any questions, updates or concerns related to these
          documents please let us know via legal@cdnvideo.com.
        </p>
        <h5 class="gdpr__sec-title sec-title">
          Cookie Usage & Marketing Communications
        </h5>
        <p class="gdpr__paragraph paragraph gdpr__break-paragraph">
          Our website uses cookies to identify you as our customer and send you
          relevant offers and content. We want to make sure that it was you who
          logged into the administration panel to manage your services. To
          accept cookies, please click ‘Accept’ on the pop-up message below.
        </p>
        <br />
        <p class="gdpr__paragraph paragraph">
          We also ask our customers for their explicit consent before sending
          them any marketing communications. You are free to opt-out any time.
          Our legal & compliance department will be happy to help you with
          opt-in/opt-out issues, please contact them via legal@cdnvideo.com.
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
    justify-content: space-between;
  }

  &__content {
    max-width: 880px;
  }

  &__title {
    margin-right: 36px;
    max-width: 800px;
  }

  &__sec-title {
    text-align: left;
    color: $text-color--grey-light;
    margin-top: 62px;
    margin-bottom: 11px;
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

@media only screen and (max-width: 1024px) {
  .gdpr {
    &__image {
      height: 170px;
    }
  }
}

@media only screen and (max-width: 870px) {
  .gdpr {
    &__image {
      height: 155px;
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

    &__image {
      height: 140px;
      position: absolute;
      right: 39px;
      top: -72px;
    }
  }
}

@media only screen and (max-width: 520px) and (min-width: 425px) {
  .gdpr {
    &__image {
      top: -82px;
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

@media only screen and (max-width: 370px) {
  .gdpr {
    &__title {
      font-size: 47px;
    }
  }
}
</style>
