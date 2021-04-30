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

    @media screen and (max-width: 375px) {
      margin-top: 125px;
      margin-bottom: 39px;
    }

    h1 {
      font-weight: 800;
      font-size: 100px;
      line-height: 96px;
      color: #fff;
      margin-bottom: 32px;
      font-family: 'Poppins-Bold', sans-serif;

      @media screen and (max-width: 375px) {
        font-size: 48px;
        line-height: 58px;
        letter-spacing: -0.05em;
      }
    }

    p {
      max-width: 820px;
      font-size: 28px;
      font-weight: normal;
      line-height: 34px;
      letter-spacing: -0.013em;
      color: #fff;
      font-family: 'Inter', sans-serif;

      @media screen and (max-width: 375px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
</style>
