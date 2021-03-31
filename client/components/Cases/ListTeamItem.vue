<template>
  <li class="case_team-item">
    <Picture
      :picture-folder="pictureFolder"
      :file-name="fileName"
      :file-extension="fileExtension"
      :alt="alt"
      :lazy-loading="true"
      :width="50"
      :height="50"
      :background-color="true"
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
import Picture from '@/components/Cases/Picture'

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

    pictureFolder: {
      type: String,
      default: '',
    },

    fileName: {
      type: String,
      default: '',
    },

    fileExtension: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/cases/_mixins';

.case_team-item {
  display: flex;
  align-items: center;

  &__info {
    margin-top: 4px;
  }

  &__name {
    @include default_text($text-color--black-cases, 18px, 22px, -0.035em, 600);
  }

  &__position {
    @include default_text($text-color--grey-team-list, 13px, 20px, -0.02em, normal);
  }

  &__image {
    width: 52px;
    height: 51px;
    margin-right: 7.5px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    &__info {
      margin-top: 7px;
    }

    &__name {
      @include default_text($text-color--black-cases, 14px, 16px, -0.035em, 600);
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
