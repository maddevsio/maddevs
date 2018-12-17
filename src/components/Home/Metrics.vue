<template>
  <section id="metrics" class="metrics">
    <div class="container">
      <h2 class="sec-title">Output metrics & measurement</h2>
      <div class="metrics-wrap">
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/user-empl.svg" alt="User">
          <animated-number
            :value="employees"
            :formatValue="formatWithPlus"
            :duration="1000"
          />
          <h4>Employees<br>in company</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/globe.svg" alt="Globe">
          <animated-number
            :value="countries"
            :formatValue="formatWithPlus"
            :duration="1000"
          />
          <h4>Different<br>countries</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/duration.svg" alt="Duration">
          <animated-number
            :value="duration"
            :formatValue="formatSimple"
            :duration="1000"
          />
          <h4>Duration<br>one project</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/participants.svg" alt="Participants">
          <animated-number
            :value="participants"
            :formatValue="formatSimple"
            :duration="1000"
          />
          <h4>Average of the<br>participants</h4>
        </div>
        <div class="metrics-wrap_item">
          <img src="../../assets/img/Home/svg/metrics/projects.svg" alt="Projects">
          <animated-number
            :value="successfulProj"
            :formatValue="formatSimple"
            :duration="1000"
          />
          <h4>Successful<br>of projects</h4>
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
      employees: 65,
      countries: 10,
      duration: 730,
      participants: 5,
      successfulProj: 19,
    };
  },
  methods: {
    formatWithPlus(value) {
      return `${value.toFixed(0)}+`;
    },
    formatSimple(value) {
      return `${value.toFixed(0)}`;
    }
  },
  components: {
    AnimatedNumber
  },
};
</script>
