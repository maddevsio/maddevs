<template>
  <div class="open-positions">
    <div class="container">
      <div class="open-positions__head">
        <h2 class="open-positions__title">
          Open Positions
        </h2>
      </div>
      <PositionsGrid />
    </div>
  </div>
</template>

<script>
import PositionsGrid from '@/components/Careers/shared/PositionsGrid'

export default {
  name: 'OpenPositions',
  components: {
    PositionsGrid,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.open-positions {
  padding: 82px 0 88px;
  &__head {
    text-align: center;
    margin-bottom: 46px;
  }
  &__title {
    @include font('Popins', 60px, 700);
    line-height: 64px;
    letter-spacing: -2.6px;
  }
}
</style>
