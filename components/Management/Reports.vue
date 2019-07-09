<template>
  <section id="reports">
    <div class="container">
      <h2 class="sec-title">{{ $t('management.reports.title') }}</h2>
      <p>{{ $t('management.reports.desc') }}</p>
      <shape />
    </div>
  </section>
</template>

<script>
import shape from '@/components/svg/shape';

export default {
  name: 'Reports',
  components: { shape }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  section {
    width: 100%;
    padding: 60px 0;
    position: relative;
    background-color: $bgcolor--yellow;

    h2 {
      position: relative;
      z-index: 1;
    }

    p {
      max-width: 870px;
      position: relative;
      margin: 0 auto;
      margin-top: 70px;
      text-align: center;
      font-size: 24px;
      line-height: 1.7;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      z-index: 1;
    }

    svg {
      height: 80%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
      opacity: .6;
    }
  }

  @media only screen and (max-width: 576px) {
    section {
      p {
        margin-top: 30px;
        font-size: 22px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    section {
      p {
        font-size: 18px;
      }
    }
  }
</style>
