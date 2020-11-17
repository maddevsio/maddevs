<template>
  <li class="case_team-item">
    <div class="case_team-item__image-wrap" v-if="fileName && fileNameRetina">
      <Picture
        :pictureFolder="pictureFolder"
        :fileName="fileName"
        :fileNameRetina="fileNameRetina"
        :fileExtension="fileExtension"
        :alt="alt"
      />
    </div>
    <div class="case_team-item__default-image" v-else></div>
    <div class="case_team-item__info">
      <p class="case_team-item__name">{{name}}</p>
      <p class="case_team-item__position">{{position}}</p>
    </div>
  </li>
</template>

<script>
import Picture from '@/components/Cases/Picture';
export default {
  name: 'ListTeamItem',
  components: {
    Picture
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    pictureFolder: {
      type: String,
      default: ''
    },
    fileName: {
      type: String,
      default: ''
    },
    fileNameRetina: {
      type: String,
      default: ''
    },
    fileExtension: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/cases/_mixins';

  .case_team-item {
    display: flex;
    align-items: center;

    &__info-wrap {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }

    &__name {
      @include default_text($text-color--black-cases, 18px, 22px, -0.035em, bold);
    }

    &__position {
      @include default_text($text-color--black-cases, 13px, 20px, -0.02em, normal);
    }

    &__image-wrap,
    &__default-image {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    &__default-image {
      background-color: gainsboro;
    }
  }
</style>
