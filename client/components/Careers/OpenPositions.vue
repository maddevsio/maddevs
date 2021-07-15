<template>
  <div
    id="open-positions"
    class="open-positions"
  >
    <div class="container">
      <div
        class="open-positions__head"
      >
        <h2 class="open-positions__title">
          Open positions
        </h2>
        <PositionsFilter />
      </div>
      <PositionsGrid
      />
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
    text-align: center;
    margin-bottom: 48px;
    /deep/ .positions-filter {
      justify-content: center;
    }
  }
  &__title {
    @include font('Poppins', 60px, 700);
    line-height: 64px;
    letter-spacing: -2.6px;
    margin-bottom: 38px;
  }

  @media screen and (max-width: 1024px) {
    padding: 57px 0 60px;
    &__head {
      align-items: flex-start;
      text-align: left;
      margin-bottom: 27px;
      /deep/ .positions-filter {
        justify-content: flex-start;
      }
    }
    &__title {
      margin-bottom: 24px;
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -0.04em;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 55px 0 60px;
    &__title {
      margin-bottom: 22px;
      font-size: 34px;
      letter-spacing: -0.04em;
    }
    &__head {
      margin-bottom: 24px;
    }
  }
}
</style>
