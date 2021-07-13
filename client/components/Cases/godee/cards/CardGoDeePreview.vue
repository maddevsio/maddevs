<template>
  <div
    :class="`card-content_${className}`"
    class="card-content"
  >
    <div class="card-content_text-wrapper">
      <h4 class="case_title_h4 card-content_title">
        {{ title }}
      </h4>
      <TextParagraph class="card-content_description">
        {{ description }}
      </TextParagraph>
    </div>
    <div
      :class="`card-content_image-wrapper-${className}`"
      class="card-content_image-wrapper"
    >
      <Picture
        :folder="pictureFolder"
        :file="fileName"
        :extension="fileExtension"
        :alt="alt"
        :lazy="false"
        :class="{ 'card-content_desktop-image': mobileImage }"
        :width="width"
        :height="height"
      />
      <Picture
        v-if="mobileImage"
        :folder="pictureFolder"
        :file="mobileImageName"
        :extension="fileExtension"
        :lazy="false"
        :class="{ 'card-content_mobile-image': mobileImage }"
        :width="307"
        :height="160"
        alt="GoDee: bus app management control panel"
      />
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'CardGoDeePreview',
  components: {
    TextParagraph,
    Picture,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    fileName: {
      type: String,
      default: '',
    },

    pictureFolder: {
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

    className: {
      type: String,
      default: '',
    },

    mobileImage: {
      type: Boolean,
      default: false,
    },

    mobileImageName: {
      type: String,
      default: '',
    },

    width: {
      type: Number,
      default: 0,
    },

    height: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped lang="scss">
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
    color: $text-color--grey-opacity-40-percent;
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

  &_mobile-image {
    display: none;
  }

  @media screen and (max-width: 825px) {
    align-items: center;
    text-align: center;

    &_image-wrapper-application-for-passengers,
    &_image-wrapper-application-for-drivers {
      max-width: 306px;
    }

    &_image-wrapper-application-for-passengers {
      margin-top: 20px;
      margin-bottom: -51px;
    }

    &_image-wrapper-application-for-drivers {
      margin-bottom: -127px;
    }

    &_image-wrapper-godee-admin-panel {
      margin-top: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    &_title {
      margin-bottom: 8px;
    }
  }

  @media screen and (max-width: 640px) {
    &_desktop-image {
      display: none;
    }

    &_mobile-image {
      display: block;
    }
  }

  @media screen and (max-width: 420px) {
    text-align: left;
  }
}
</style>
