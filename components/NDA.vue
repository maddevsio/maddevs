<template>
  <section id="nda">
    <div class="container">
      <div class="nda__header">
        <h3 class="nda__title title">
          Non-Disclosure Agreement at Mad Devs
        </h3>
        <img
          class="nda__image"
          src="@/assets/img/common/docs.svg"
          alt="NDA image"
        />
      </div>
      <div class="nda__content">
        <p class="nda__text doc-text">
          All staff members, including contractors and consultants working for
          Mad Devs, are obliged to sign a non-disclosure agreement prior to
          getting access to our internal systems. This is one of our standard
          onboarding practices for the employee’s day one. At Mad Devs we
          understand how important it is to protect our own technology and
          process know-hows. Even if our customer doesn’t have an NDA in place,
          we will protect their business secrets and any of the competitive
          advantages we create for them by our own non-disclosure agreement. If
          you want to get familiar with this document, please send us a request
          via
          <a class="nda__link" href="mailto:rock@maddevs.com"
            >rock@maddevs.com</a
          >.
        </p>
        <h5 class="nda__sec-title">Customer NDA Templates</h5>
        <p class="nda__paragraph paragraph">
          Some of our customers have standard NDA templates pre-approved by
          their legal departments. If we are offered to sign such an agreement,
          we always proceed with it as the customer knows their industry better.
          If a customer offers us some additional instructions or training on
          confidential information in their organization, we eagerly agree. Any
          requirements related to data protection, distribution, processing or
          storage under NDA will be taken into consideration and applied in the
          process of work on the customer’s project.
        </p>
        <h5 class="nda__sec-title">
          Customer NDA Agreements Made Specifically for Mad Devs
        </h5>
        <p class="nda__paragraph paragraph nda__break-paragraph">
          Many customers prefer to create a tailored NDA for Mad Devs in
          collaboration with us. This practice is also very welcome. We are
          ready to explain how data will circulate within the new system, list
          the tools that we use and describe the process our team follows. We
          are used to talking with the customer’s legal department and take
          efforts aimed at the protection of confidential information.
        </p>
        <br />
        <p class="nda__paragraph paragraph">
          Our company has experience of working with NDA agreements of any kind
          and complexity. If you have more specific questions please contact us
          via
          <a class="nda__link" href="mailto:rock@maddevs.com"
            >rock@maddevs.com</a
          >.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NDA'
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars';

.nda {
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
  .nda {
    &__image {
      height: 180px;
    }
  }
}

@media only screen and (min-width: 1150px) {
  .nda {
    &__image {
      margin-left: 15%;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .nda {
    &__image {
      height: 170px;
    }

    &__title {
      margin-top: 0;
    }
  }
}

@media only screen and (max-width: 870px) {
  .nda {
    &__image {
      height: 155px;
    }

    &__sec-title {
      font-size: 30px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .nda {
    &__image {
      height: 150px;
    }
  }
}

@media only screen and (max-width: 670px) {
  .nda {
    &__header {
      position: relative;
    }

    &__image {
      height: 140px;
      position: absolute;
      right: 39px;
      top: -125px;
    }
  }
}

@media only screen and (max-width: 520px) and (min-width: 460px) {
  .nda {
    &__image {
      top: -82px;
    }
  }
}

@media only screen and (max-width: 520px) {
  .nda {
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

@media only screen and (max-width: 455px) {
  .nda {
    &__image {
      top: -60px;
    }
  }
}

@media only screen and (max-width: 370px) {
  .nda {
    &__title {
      font-size: 47px;
    }
  }
}
</style>
