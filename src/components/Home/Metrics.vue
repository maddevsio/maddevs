<template>
  <section id="metrics" class="metrics">
    <div class="container">
      <h2 class="sec-title">{{$t('metrics-title')}}</h2>
      <div class="metrics-wrap">
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/user-empl.svg" alt="User">
          <animated-number
            :value="employees"
            :formatValue="formatWithPlus"
            :duration="1000"
          />
          <h4>{{$t('metrics-item1')}}</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/participants.svg" alt="Participants">
          <animated-number
            :value="participants"
            :formatValue="formatSimple"
            :duration="1000"
          />
          <h4>{{$t('metrics-item2')}}</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/duration.svg" alt="Duration">
          <animated-number
            :value="duration"
            :formatValue="formatSimple"
            :duration="1000"
          />
          <h4>{{$t('metrics-item3')}}</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/globe.svg" alt="Globe">
          <animated-number
            :value="countries"
            :formatValue="formatWithPlus"
            :duration="1000"
          />
          <h4>{{$t('metrics-item4')}}</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/projects.svg" alt="Projects">
          <animated-number
            :value="successfulProj"
            :formatValue="formatSimple"
            :duration="1000"
          />
          <h4>{{$t('metrics-item5')}}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnimatedNumber from 'animated-number-vue';

export default {
  name: 'metrics',
  data() {
    return {
      employees: 0,
      countries: 0,
      duration: 0,
      participants: 0,
      successfulProj: 0,
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
    increase() {
      this.employees = 65;
      this.countries = 10;
      this.duration = 730;
      this.participants = 5;
      this.successfulProj = 19;
    },
  },
  mounted() {
    const metricsSec = document.getElementById('metrics');
    const runAminNumber = this.increase;
    if (this.complate === false) {
      this.complate = true;
      window.addEventListener('scroll', function(event) {
        var top = this.scrollY;
        if (top + 300 >= metricsSec.offsetTop) {
          runAminNumber();
        }
      }, false);
    }
  },
  components: {
    AnimatedNumber
  },
};
</script>
