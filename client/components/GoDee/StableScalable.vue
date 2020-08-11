<template>
  <section id="stable-scalable" class="stable-scalable">
    <div class="container-godee">
      <h2 class="stable-scalable__main-title">Stable & Scalable <br> Solution</h2>
      <p class="stable-scalable__description stable-scalable__description-head">Transportation & logistics software has zero-tolerance to downtime. Imagine hundreds of passengers <br> not being able to book a ticket, drivers not knowing where to pick up/drop off passengers, operators <br> seeing empty screens. Disaster!</p>
      <img src="@/assets/img/GoDee/svg/man-at-the-computer.svg" alt="Man at the computer" class="stable-scalable__man-at-the-computer">
      <p class="stable-scalable__description stable-scalable__description-footer">GoDee’s microservice architecture, as well as the quality of the solution itself, make it easy for each Mad <br> Devs developer to deploy new features without causing spikes in downtime. On top of that, <span>75%</span> of <br> code is covered by various tests and has detailed documentation and pull requests. GoDee's business <br> model greatly benefits from economies of scale. Thus, increased demand from Ho Chi Minh citizens is <br> backed up by GoDee's unchanging low cost for infrastructure.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StableScalable'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .stable-scalable {
    margin-bottom: get-vw(116px);
    text-align: center;

    &__main-title {
      margin-bottom: get-vw(42px);
      font-size: get-vw(90px);
      letter-spacing: get-vw(-3px);
      font-family: 'Hoves-Bold';
      color: $accent-orange-text-color;
    }

    &__description {
      position: relative;
      font-size: get-vw(24px);
      line-height: get-vw(33px);
      font-family: 'Hoves-Regular';
      letter-spacing: get-vw(-1px);
      color: $text-color--grey-dark;

      span {
        font-family: 'Hoves-Bold';
      }
    }

    &__man-at-the-computer {
      width: get-vw(709px);
      height: get-vw(413px);
      margin-top: get-vw(59px);
      margin-bottom: get-vw(70px);
    }

    &__description-head {
      &::before {
        top: get-vw(-110px);
        right: get-vw(190px);
      }
    }

    &__description-footer {
      &::before {
        bottom: get-vw(65px);
        left: get-vw(160px);
      }
    }

    &__description-head,
    &__description-footer {
      &::before {
        content: '';
        width: get-vw(194px);
        height: get-vw(251px);
        position: absolute;
        background-image: url('../../assets/img/GoDee/svg/fire-gray.svg');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
      }
    }
  }
</style>
