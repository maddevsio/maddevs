<template>
  <section id="nda">
    <div class="container">
      <div class="nda__header">
        <h1 class="nda__title">
          <span class="nda__nowrap">Non-Disclosure</span> Agreement <br>
          at <span class="nda__nowrap">Mad Devs</span>
        </h1>
        <div class="nda__image" />
      </div>
      <div class="nda__content">
        <p class="nda__text nda__text--first">
          All staff members, including contractors and consultants working for
          <span class="nda__nowrap">Mad Devs</span>, are obliged to sign a
          <span class="nda__nowrap">non-disclosure</span> agreement before getting access to our internal systems. This
          is one of our standard onboarding practices for the employee’s day one. At
          <span class="nda__nowrap">Mad Devs</span>, we understand how important it is to protect our technology and
          process <span class="nda__nowrap">know-how.</span>
        </p>
        <p class="nda__text">
          Even if our customer doesn’t have an NDA in place, we will protect their business secrets and any of the
          competitive advantages we create for them by our <span class="nda__nowrap">non-disclosure</span> agreement. If
          you want to get familiar with this document, please send us a request via
          <a
            class="nda__link nda__link--head-text"
            href="mailto:rock@maddevs.io"
          >rock@maddevs.io</a>.
        </p>
        <h2 class="nda__sec-title nda__sec-title--first">
          Customer NDA Templates
        </h2>
        <p class="nda__paragraph">
          Some of our customers have standard NDA templates <span class="nda__nowrap">pre-approved</span> by their legal
          departments. If we are offered to sign such an agreement, we always proceed with it as the customer knows
          their industry better. If a customer offers us some additional instructions or training on confidential
          information in their organization, we eagerly agree. Any requirements related to data protection,
          distribution, processing, or storage under NDA will be taken into consideration and applied in the process of
          work on the customer’s project.
        </p>
        <h2 class="nda__sec-title">
          Customer NDA Agreements Made Specifically for <span class="nda__nowrap">Mad Devs</span>
        </h2>
        <p class="nda__paragraph nda__break-paragraph">
          Many customers prefer to create a tailored NDA for <span class="nda__nowrap">Mad Devs</span> in collaboration
          with us. This practice is also very welcome. We are ready to explain how data will circulate within the new
          system, list the tools that we use, and describe the process our team follows. We are used to talking with the
          customer’s legal department and take efforts aimed at the protection of confidential information.
        </p>
        <p class="nda__paragraph nda__paragraph-margin">
          Our company has experience of working with NDA agreements of any kind and complexity. If you have more
          specific questions please contact us via
          <a
            class="nda__link nda__link--paragraph"
            href="mailto:rock@maddevs.io"
          >rock@maddevs.io</a>.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NDA',
}
</script>

<style lang="scss" scoped>
.nda {
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
    text-decoration: underline;

    &--head-text {
      color: $text-color--white;
    }

    &--paragraph {
      color: $remote-tech-staff-sub-title-grey;
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

    &--italic {
      font-style: italic;
    }
  }

  &__paragraph {
    @include font('Inter', 17px, 400);
    line-height: 28px;
    letter-spacing: -0.02em;
    color: $remote-tech-staff-sub-title-grey;
  }

  &__paragraph-margin {
    margin-top: 14px;
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

    @media only screen and (max-width: 350px) {
      font-size: 20px;
    }
  }

  &__break-paragraph {
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

    @media only screen and (max-width: 1180px) {
      display: none;
    }
  }
}
</style>
