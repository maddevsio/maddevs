<template>
  <div class="key-metrics_container container">
    <h2
      class="key-metrics_title"
    >
      Mad Devs’ key metrics
    </h2>
    <div
      class="key-metrics_grid"
    >
      <MetricCard
        v-for="metrica in keyMetrics"
        v-bind="metrica"
        :key="metrica.description"
      />
    </div>
  </div>
</template>

<script>
import MetricCard from '@/components/Careers/shared/MetricCard'
import { keyMetrics } from '@/data/careersPage'

export default {
  name: 'KeyMetrics',
  components: {
    MetricCard,
  },

  data() {
    return {
      keyMetrics,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.key-metrics {
  &_container,
  &_grid {
    display: grid;
  }

  &_container {
    margin-bottom: 101px;
    grid-template-columns: 1fr 2fr;
  }

  &_grid {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 630px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 370px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &_title {
    margin-right: 48px;
    @include font('Poppins', 60px, 700);
    letter-spacing: -2.6px;
    line-height: 64px;
    color: $text-color--white;
  }

  @media screen and (max-width: 1340px) {
    &_container {
      grid-template-columns: 1fr;
    }

    &_grid {
      grid-gap: 10px;
    }

    &_title {
      margin-right: 0;
      margin-bottom: 27px;
    }
  }

  @media screen and (max-width: 1024px) {
    &_container {
      margin-bottom: 65px;
    }

    &_title {
      margin-bottom: 21px;
      font-size: 40px;
      line-height: 50px;
      letter-spacing: -0.04em;
    }
  }
}
</style>
