<template>
  <li class="case_team-item">
    <Picture
      :folder="image.folder || 'common'"
      :file="image.file"
      :extension="image.extension || 'png'"
      :alt="name"
      :width="50"
      :height="50"
      :background="true"
      class="case_team-item__image"
    />
    <div class="case_team-item__info">
      <p class="case_team-item__name">
        {{ name }}
      </p>
      <p class="case_team-item__position">
        {{ position }}
      </p>
    </div>
  </li>
</template>

<script>
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'ListTeamItem',
  components: {
    Picture,
  },

  props: {
    name: {
      type: String,
      default: '',
    },

    position: {
      type: String,
      default: '',
    },

    image: {
      type: Object,
      required: true,

      folder: {
        type: String,
        default: '',
      },

      file: {
        type: String,
        default: '',
      },

      extension: {
        type: String,
        default: '',
      },
    },
  },
}
</script>

<style scoped lang="scss">
.case_team-item {
  display: flex;
  align-items: center;

  &__info {
    margin-top: 4px;
  }

  &__name {
    @include default-text($text-color--black-oil, 18px, 22px, -0.035em, 600);
  }

  &__position {
    @include default-text($text-color--grey-opacity-40-percent, 13px, 20px, -0.02em, normal);
  }

  &__image {
    width: 53px;
    height: 53px;
    border-radius: 6px;
    overflow: hidden;
    margin-right: 7.5px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    &__info {
      margin-top: 7px;
    }

    &__name {
      @include default-text($text-color--black-oil, 14px, 16px, -0.035em, 600);
    }

    &__position {
      line-height: 14px;
    }

    &__image {
      width: 50px;
      height: 49px;
    }
  }

  @media screen and (max-width: 360px) {
    &__info {
      margin-top: 5px;
    }

    &__name {
      font-size: 12px;
    }

    &__position {
      font-size: 11px;
    }

    &__image {
      width: 48px;
      height: 47px;
    }
  }
}
</style>
