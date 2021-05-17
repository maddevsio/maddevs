<template>
  <div
    id="open-positions"
    class="open-positions"
  >
    <div class="container">
      <div class="open-positions__head">
        <h2 class="open-positions__title">
          Open Positions
        </h2>
        <PositionsFilter />
      </div>
      <PositionsGrid />
    </div>
  </div>
</template>

<script>

import PositionsFilter from '@/components/Careers/shared/PositionsFilter'
import PositionsGrid from '@/components/Careers/shared/PositionsGrid'

export default {
  name: 'OpenPositions',
  components: {
    PositionsFilter,
    PositionsGrid,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.open-positions {
  padding: 82px 0 88px;
  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 48px;
  }
  &__title {
    @include font('Popins', 60px, 700);
    line-height: 64px;
    letter-spacing: -2.6px;
    margin-bottom: 38px;
  }

  @media screen and (max-width: 1024px) {
    padding: 55px 0 60px;
    &__head {
      align-items: flex-start;
      margin-bottom: 27px;
    }
    &__title {
      margin-bottom: 24px;
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.04em;
    }
  }

  @media screen and (max-width: 768px) {
    &__title {
      margin-bottom: 22px;
      font-size: 34px;
      letter-spacing: -0.04em;
    }
    &__head {
      margin-bottom: 14px;
    }
  }
}
</style>
