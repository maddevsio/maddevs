<template>
  <section id="godee-in-the-news" class="godee-in-the-news">
    <div class="container-godee">
      <h2 class="godee-in-the-news__main-title">GoDee in the News</h2>
      <div class="godee-in-the-news__central-blocks-wrapper">
        <div class="godee-in-the-news__block godee-in-the-news__left-block">
          <img src="@/assets/img/GoDee/png/phone-in-hand.png" alt="Phone in hand" class="godee-in-the-news__block-image">
          <div class="godee-in-the-news__block-text-content">
            <h4 class="godee-in-the-news__block-title">Rise Above Saigon’s Traffic with GoDee: A Reliable, <br> Stress-Free Commute</h4>
            <p class="godee-in-the-news__description">Being a user of the product we have developed is key for the <br> successful collaboration with GoDee...</p>
            <a href="https://saigoneer.com/" class="godee-in-the-news__block-link" target="blank">saigoneer.com</a>
          </div>
        </div>
        <div class="godee-in-the-news__block godee-in-the-news__right-block">
          <img src="@/assets/img/GoDee/png/bus.png" alt="Bus" class="godee-in-the-news__block-image">
          <div class="godee-in-the-news__block-text-content">
            <h4 class="godee-in-the-news__block-title">Vietnam Building Rapid Bus System <br> in Ho Chi Minh City</h4>
            <p class="godee-in-the-news__description">The company GoDee offers a car transport service, similar to <br> Uber. GoDee also offers people a low-cost way to share...</p>
            <a href="https://learningenglish.voanews.com/" class="godee-in-the-news__block-link" target="blank">learningenglish.voanews.com</a>
          </div>
        </div>
      </div>
      <a href="#" class="godee-in-the-news__view-next-project">View next project</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GoDeeInTheNews'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .godee-in-the-news {
    &__main-title,
    &__block-title {
      font-family: 'Hoves-Bold', sans-serif;
    }

    &__main-title,
    &__view-next-project,
    &__block-link {
      color: $accent-orange-text-color;
    }


    &__main-title {
      margin-bottom: get-vw(80px);
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
      text-align: center;
    }

    &__block-title {
      margin-bottom: get-vw(15px);
    }

    &__block-title,
    &__description,
    &__view-next-project,
    &__block-link {
      font-size: get-vw(24px);
      line-height: get-vw(33px);
      letter-spacing: get-vw(-1px);
    }

    &__description,
    &__view-next-project,
    &__block-link {
      font-family: 'Hoves-Regular', sans-serif;
    }

    &__description {
      margin-bottom: get-vw(27px);
      color: $text-color--grey-dark;
    }

    &__central-blocks-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 -8.5vw;
      padding-bottom: get-vw(181px);
      border-bottom: get-vw(1px) solid #C4C4C4;
    }

    &__block {
      width: get-vw(657px);
      display: flex;
      flex-direction: column;
      box-shadow: 0 get-vw(10px) get-vw(25px) rgba(0, 0, 0, 0.15);
      border-radius: get-vw(15px);
      overflow: hidden;
    }

    &__left-block {
      margin-right: get-vw(80px);
    }

    &__block-text-content {
      padding: get-vw(30px) get-vw(25px);
    }

    &__block-image {
      width: 100%;
    }

    &__block-link {
      text-decoration: none;
    }

    &__view-next-project {
      display: block;
      margin-top: get-vw(30px);
      margin-bottom: get-vw(382px);
    }
  }
</style>
