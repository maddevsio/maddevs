<template>
  <li class="positions-grid__item">
    <NuxtLink
      :to="`/careers/${uid}`"
      class="positions-grid__item-link"
    >
      <div
        :v-if="labels.remote || labels.relocation"
        class="positions-grid__item-labels"
      >
        <PositionLabels
          variant="outlined"
          :labels="labels"
        />
      </div>
      <h3
        class="positions-grid__item-title"
        :title="position"
      >
        {{ position }}
      </h3>
      <hr class="positions-grid__item-divider">
      <p
        class="positions-grid__item-subtitle"
        :title="firstParagraph"
      >
        {{ firstParagraph }}
      </p>
      <div
        v-if="tags.length"
        class="positions-grid__item-tags"
      >
        <PositionTags
          divider="comma"
          :tags="tags"
        />
      </div>
    </NuxtLink>
  </li>
</template>

<script>
import PositionLabels from '@/components/Careers/shared/PositionLabels'
import PositionTags from '@/components/Careers/shared/PositionTags'
import getFirstParagraph from '@/helpers/getFirstParagraph'

export default {
  name: 'PositionsGridItem',
  components: {
    PositionLabels,
    PositionTags,
  },

  props: {
    uid: {
      type: String,
      default: '',
    },

    position: {
      type: String,
      default: '',
    },

    slices: {
      type: Array,
      default: () => ([]),
    },

    labels: {
      type: Object,
      default: () => ({}),
    },

    tags: {
      type: Array,
      default: () => ([]),
    },
  },

  computed: {
    firstParagraph() {
      const limit = 90
      return getFirstParagraph(this.slices, limit)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

/deep/ .position-tags__item {
  color: $text-color--grey-pale;
  font-size: 14px;
  line-height: 18px;
}

.positions-grid__item {
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
    /deep/ .position-labels__item {
      color: $text-color--white-primary;
      &:first-child {
        background-color: $bgcolor--blue;
      }
      &:last-child {
        background-color: $bgcolor--green;
      }
    }
  }
  &-link {
    display: block;
    padding: 40px;
    padding-bottom: 46.5px;
    color: $text-color--black-oil;
  }
  &-labels {
    margin-bottom: 20px;
  }
  &-title {
    @include font('Poppins', 32px, 700);
    letter-spacing: -0.03em;
    line-height: 35px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &-tags {
    margin-top: 23.5px;
  }

  @media screen and (max-width: 1250px) {
    &-link {
      padding: 30px;
      padding-bottom: 36.5px;
    }
  }

  @media screen and (max-width: 1190px) {
    &-link {
      padding: 25px;
      padding-bottom: 30.5px;
    }
    &-title {
      font-size: 26px;
      letter-spacing: -0.03em;
      line-height: 31px;
    }
  }

  @media screen and (max-width: 1024px) {
    &-link {
      padding: 22px;
      padding-bottom: 28px;
    }
    &-title {
      font-size: 25px;
    }
  }
}
</style>
