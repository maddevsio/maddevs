<template>
  <div class="key-metrics container">
    <h2 class="key-metrics_title">
      Mad Devs’ key metrics
    </h2>
    <div class="key-metrics_grid">
      <MetricaCard
        v-for="metrica in keyMetrics"
        v-bind="metrica"
        :key="metrica.title"
      />
    </div>
  </div>
</template>

<script>
import MetricaCard from '@/components/Careers/shared/MetricaCard'
import { keyMetrics } from '@/data/careersPage'

export default {
  name: 'KeyMetrics',
  components: {
    MetricaCard,
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
  display: grid;
  grid-template-columns: 1fr 2fr;

  &_grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  &_title {
    margin-right: 48px;
    @include font('Inter', 60px, 800);
    letter-spacing: -2.6px;
    line-height: 64px;
    color: $text-color--white;
  }
}
</style>
