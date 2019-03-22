<template>
  <section id="metrics" class="metrics">
    <div class="container">
      <h2 class="sec-title">{{$t('metrics-title')}}</h2>
      <div class="metrics-wrap">
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/user-empl.svg" alt="User">
          <number
            animationPaused
            ref="number1"
            :from="0"
            :to="65"
            :format="formatWithPlus"
            :duration="2"
            easing="Power1.easeOut"/>
          <h4>{{$t('metrics-item1')}}</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/participants.svg" alt="Participants">
          <number
            animationPaused
            ref="number2"
            :from="0"
            :to="5"
            :format="formatWithPlus"
            :duration="2"
            easing="Power1.easeOut"/>
          <h4>{{$t('metrics-item2')}}</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/duration.svg" alt="Duration">
          <number
            animationPaused
            ref="number3"
            :from="0"
            :to="730"
            :format="formatSimple"
            :duration="2"
            easing="Power1.easeOut"/>
          <h4>{{$t('metrics-item3')}}</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/globe.svg" alt="Globe">
          <number
            animationPaused
            ref="number4"
            :from="0"
            :to="10"
            :format="formatWithPlus"
            :duration="2"
            easing="Power1.easeOut"/>
          <h4>{{$t('metrics-item4')}}</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/projects.svg" alt="Projects">
          <number
            animationPaused
            ref="number5"
            :from="0"
            :to="19"
            :format="formatSimple"
            :duration="2"
            easing="Power1.easeOut"/>
          <h4>{{$t('metrics-item5')}}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'metrics',
  data() {
    return {
      complate: false
    };
  },
  methods: {
    formatWithPlus(value) {
      return `${value.toFixed(0)}+`;
    },
    formatSimple(value) {
      return `${value.toFixed(0)}`;
    },
    playAnimation() {
      this.$refs.number1.play();
      this.$refs.number2.play();
      this.$refs.number3.play();
      this.$refs.number4.play();
      this.$refs.number5.play();
    }
  },
  mounted() {
    const metricsSec = document.getElementById('metrics');
    const runAminNumber = this.playAnimation;
    if (this.complate === false) {
      this.complate = true;
      window.addEventListener('scroll', function(event) {
        var top = this.scrollY;
        if (top + 300 >= metricsSec.offsetTop) {
          runAminNumber();
        }
      }, false);
    }
  }
};
</script>

<style lang="scss" scoped>
.metrics {
  padding: 60px 0 0;
  &-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 40px;
    &_item {
      width: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
      img {
        width: 62px;
        height: 62px;
      }
      span {
        font-size: 62px;
        color: #2c1c1c;
        font-family: 'MADEEvolveSans-bold',
        sans-serif;
        font-weight: normal;
        line-height: 1;
        margin: 24px 0 12px;
      }
      h4 {
        width: 100%;
        text-align: center;
        font-family: 'MADEEvolveSans-regular',
        sans-serif;
        font-weight: normal;
        font-size: 24px;
        color: #2c1c1c;
        line-height: 1.33;
        white-space: pre;
      }
    }
  }
}
</style>
