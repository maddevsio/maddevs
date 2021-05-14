<template>
  <div class="key-metrics_container container">
    <h2 class="key-metrics_title">
      Mad Devs’ key metrics
    </h2>
    <div class="key-metrics_grid">
      <MetricCard
        v-for="metrica in keyMetrics"
        v-bind="metrica"
        :key="metrica.title"
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
    grid-template-columns: 1fr 2fr;
  }

  &_grid {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  &_title {
    margin-right: 48px;
    @include font('Poppins', 60px, 700);
    letter-spacing: -2.6px;
    line-height: 64px;
    color: $text-color--white;
  }
}
</style>
