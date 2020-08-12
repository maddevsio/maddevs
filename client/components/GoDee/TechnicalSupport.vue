<template>
  <section id="technical-support" class="technical-support">
    <div class="container-godee">
      <div class="technical-support__head-text-content">
        <h2 class="technical-support__main-title">Technical Support Service <br> for GoDee </h2>
        <p class="technical-support__description">Mad Devs is still improving GoDee, developing new features and components to deliver the best possible <br> user experience by analyzing their behavior and feedback. We provide technical support to GoDee’s <br> customers which helps resolve all issues instantly and have a direct line with the system’s users.</p>
      </div>
      <img src="@/assets/img/GoDee/png/support-team.png" alt="Support team" class="technical-support__support-team">
      <div class="technical-support__customer-review-content">
        <h3 class="technical-support__review-section-title">What does our customer say about Mad Devs?</h3>
        <div class="technical-support__review-item">
          <div class="technical-support__customer-info">
            <img src="@/assets/img/GoDee/png/karabukaev.png" alt="Customer" class="technical-support__customer-image">
            <div class="technical-support__info">
              <p class="technical-support__customer-name">Ruslan Karabukaev</p>
              <p class="technical-support__position">Co-founder of GoDee</p>
            </div>
          </div>
          <p class="technical-support__description technical-support__description--review">We built the platforms from scratch with Mad Devs. They have dedicately and patiently support and <br> guide us to take proper action on a bunch of ideas and requirements. We have attracted 27,000 <br> users so far thanks to their continuous support for improvement and development.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechnicalSupport'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .technical-support {
    margin-bottom: get-vw(151px);

    &__head-text-content,
    &__review-section-title {
      text-align: center;
    }

    &__main-title,
    &__review-section-title,
    &__customer-name {
      font-family: 'Hoves-Bold';
    }

    &__main-title,
    &__review-section-title {
      color: $accent-orange-text-color;
    }

    &__main-title {
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
    }

    &__review-section-title {
      margin-top: get-vw(106px);
      margin-bottom: get-vw(84px);
      font-size: get-vw(50px);
      line-height: get-vw(55px);
      letter-spacing: get-vw(-2px);
    }

    &__description,
    &__customer-name {
      letter-spacing: get-vw(-1px);
    }

    &__description,
    &__position {
      font-size: get-vw(24px);
      line-height: get-vw(33px);
      font-family: 'Hoves-Regular';
      color: $text-color--grey-dark;
    }

    &__description {
      margin-top: get-vw(90px);
      margin-bottom: get-vw(40px);

      &--review {
        margin: get-vw(20px) 0;
        color: $text-color--black;
      }
    }

    &__customer-review-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__support-team {
      width: get-vw(1394px);
      height: get-vw(483px);
      margin-top: get-vw(95px);
      margin-bottom: get-vw(15px);
    }

    &__customer-info,
    &__info {
      display: flex;
    }

    &__info {
      margin-top: get-vw(5px);
      margin-left: get-vw(30px);
      flex-direction: column;
      position: relative;

      &::before {
        content: '';
        width: get-vw(126px);
        height: get-vw(87px);
        position: absolute;
        top: get-vw(-52px);
        left: get-vw(-190px);
        background-image: url('../../assets/img/GoDee/svg/quotes.svg');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
      }
    }

    &__customer-name {
      margin-bottom: get-vw(5px);
      font-size: get-vw(32px);
      line-height: get-vw(35px);
    }
    
    &__customer-image {
      width: get-vw(74px);
      height: get-vw(74px);
      border-radius: 100%;
    }

    &__review-item {
      margin-right: get-vw(110px);
    }
  }
</style>
