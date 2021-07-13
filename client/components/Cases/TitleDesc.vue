<template>
  <div class="container">
    <section class="title-desc">
      <h1>Case studies</h1>
      <p>We help world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity.</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.title-desc {
  margin-top: 180px;
  margin-bottom: 54px;

  @media screen and (max-width: 970px) {
    margin-top: 120px;
    margin-bottom: 47px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 125px;
    margin-bottom: 39px;
  }

  h1 {
    @include font('Poppins', 100px, 800);
    line-height: 96px;
    color: #fff;
    margin-bottom: 32px;

    @media screen and (max-width: 1140px) {
      font-size: 90px;
    }

    @media screen and (max-width: 970px) {
      font-size: 76px;
      line-height: 100%;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }

    @media screen and (max-width: 576px) {
      font-size: 60px;
    }

    @media screen and (max-width: 375px) {
      font-size: 48px;
      line-height: 58px;
      letter-spacing: -0.05em;
      margin-bottom: 14px;
    }

    @media screen and (max-width: 370px) {
      font-size: 36px;
      line-height: 52px;
      letter-spacing: -0.05em;
    }
  }

  p {
    @include font('Inter', 28px, 400);
    max-width: 820px;
    line-height: 34px;
    letter-spacing: -0.013em;
    color: #fff;

    @media screen and (max-width: 1140px) {
      font-size: 26px;
    }

    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 28px;
    }

    @media screen and (max-width: 576px) {
      font-size: 18px;
      line-height: 23px;
    }

    @media screen and (max-width: 375px) {
      font-size: 18px;
      line-height: 22px;
    }
  }
}
</style>
