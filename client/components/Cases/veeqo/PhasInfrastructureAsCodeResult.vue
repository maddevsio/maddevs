<template>
  <section class="container_full background-color-blue m-72_bottom media-m-48_bottom p-48_top media-p-41_top p-100_bottom media-p-48_bottom">
    <div class="container_regular">
      <h2 class="case_title_h2 case_title case_text-align-center m-48_bottom media-m-32_bottom">
        Key results
      </h2>
      <div class="case_cards-container">
        <CardResult
          v-for="result in infrastructureAsCodeResult"
          v-bind="result"
          :key="result.title"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardResult from '@/components/Cases/veeqo/CardResult'
import { infrastructureAsCodeResult } from '@/data/caseVeeqo'

export default {
  name: 'PhasInfrastructureAsCodeResult',
  components: {
    CardResult,
  },

  data() {
    return {
      infrastructureAsCodeResult,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/cases/_mixins';
@import '@/assets/styles/_vars';

.case {
  &_title {
    color: $text-color--white;
  }

  &_cards-container {
    @include grid(repeat(3, 1fr), auto, 25px, 0);

    @media screen and (max-width: 880px) {
      @include grid(repeat(1, 1fr), auto, 0, 16px);
    }
  }
}
</style>
