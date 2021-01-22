<template>
  <div class="card-content" :class="`card-content_${className}`">
    <div class="card-content_text-wrapper">
      <h4 class="case_title_h4 card-content_title">{{title}}</h4>
      <TextParagraph class="card-content_description">
        {{description}}
      </TextParagraph>
    </div>
    <div class="card-content_image-wrapper" :class="`card-content_image-wrapper-${className}`">
      <Picture
        :pictureFolder="pictureFolder"
        :fileName="fileName"
        :fileExtension="fileExtension"
        :alt="alt"
        :lazyLoading="false"
      />
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph';
import Picture from '@/components/Cases/Picture';

export default {
  name: 'CardGoDeePreview',
  components: {
    TextParagraph,
    Picture
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    fileName: {
      type: String,
      default: ''
    },
    pictureFolder: {
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
    },
    className: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .card-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &_godee-admin-panel {
      text-align: center;
    }

    &_title {
      margin-bottom: 10px;
      color: $text-color--white-primary;
    }

    &_description {
      color: $text-color--grey-team-list;
    }

    &_image-wrapper {
      margin-bottom: -32px;
    }

    &_image-wrapper-application-for-passengers {
      max-width: 341px;
    }

    &_image-wrapper-application-for-drivers {
      max-width: 313px;
    }

    &_image-wrapper-godee-admin-panel {
      max-width: 695px;
      margin: 10px auto -32px;
    }

    @media screen and (max-width: 768px) {
      &_title {
        margin-bottom: 8px;
      }
    }
  }
</style>
