<template>
  <ul class="positions-grid">
    <li
      v-for="item in items"
      :key="item"
      class="positions-grid__item"
    >
      <NuxtLink
        to="/"
        class="positions-grid__item-link"
      >
        <div class="positions-grid__item-labels">
          <PositionLabels :labels="{remote: true, relocation: true}" />
        </div>
        <h3 class="positions-grid__item-title">
          Position title
        </h3>
        <hr class="positions-grid__item-divider">
        <p class="positions-grid__item-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat est, modi veritatis in iste porro cum dolore harum doloremque.
        </p>
        <div class="positions-grid__item-tags">
          <PositionTags :tags="['HR', 'DevOps']" />
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import PositionLabels from '@/components/Careers/shared/PositionLabels'
import PositionTags from '@/components/Careers/shared/PositionTags'

export default {
  name: 'PositionsGrid',
  components: {
    PositionLabels,
    PositionTags,
  },

  data() {
    return {
      items: [1, 2, 3, 4, 6, 7, 8, 10, 11],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.positions-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 0.5px;
  margin-left: 0.5px;
  &__item {
    display: block;
    margin-left: -1px;
    margin-top: -1px;
    border: 1px solid $border-color--grey-20-percent;
    & {
      transition: all 0.4s;
    }
    & * {
      transition: all 0.2s;
    }
    &:first-child {
      border-top-left-radius: 8px;
    }
    &:nth-child(3) {
      border-top-right-radius: 8px;
    }
    &:nth-last-child(3) {
      border-bottom-left-radius: 8px;
    }
    &:last-child {
      border-bottom-right-radius: 8px;
    }
    &:hover {
      background-color: $bgcolor--black-oil;
      border-color: $bgcolor--black-oil;
      .positions-grid__item {
        &-link {
          color: $text-color--white-primary;
        }
        &-subtitle {
          color: $text-color--silver;
        }
      }
    }
    &-link {
      display: block;
      padding: 46px;
      padding-bottom: 66.5px;
      color: $text-color--black-oil;
    }
    &-labels {
      margin-bottom: 20px;
    }
    &-title {
      @include font('Poppins', 32px, 700);
      letter-spacing: -0.03em;
      line-height: 35px;
    }
    &-divider {
      width: 75px;
      height: 1px;
      margin: 20px 0;
      border: none;
      background: $border-color--red;
    }
    &-subtitle {
      line-height: 22px;
      letter-spacing: -0.013em;
    }
    &-tags {
      margin-top: 23.5px;
    }
  }
}
</style>
