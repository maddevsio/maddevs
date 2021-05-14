<template>
  <div class="open-positions">
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
    margin-bottom: 56px;
  }
  &__title {
    @include font('Popins', 60px, 700);
    line-height: 64px;
    letter-spacing: -2.6px;
    margin-bottom: 38px;
  }
}
</style>
