<template>
  <div class="container_full background-color-blue m-72_bottom media-m-48_bottom p-72_top media-p-41_top">
    <div class="container_regular">
      <h2 class="case_title_h2 case_title">
        Veeqo high-level overview
      </h2>
      <TextParagraph class="case_sec-desc m-12_top m-80_bottom media-m-41_bottom">
        The service has multiple subsystems integrated into one platform
      </TextParagraph>
      <div class="case_dashboard-container m-72_bottom media-m-48_bottom">
        <div class="case_dashboard-item">
          <TextParagraphUppercase class="case_dashboard-desc m-8_bottom media-m-6_bottom">
            Dashboard
          </TextParagraphUppercase>
          <h5 class="case_title_h5 case_dashboard-title media-m-41_bottom">
            The dashboard used to visualize reports
          </h5>
        </div>
        <div class="case_dashboard-item case_animate-text">
          <TextParagraphUppercase class="case_dashboard-desc m-8_bottom media-m-6_bottom">
            Subsystems
          </TextParagraphUppercase>
          <h5 class="case_title_h5 case_dashboard-title">
            Inventory management, Management, Warehouse, Reporting
          </h5>
        </div>
      </div>
    </div>
    <div class="case_image-wrapp">
      <Picture
        folder="veeqo"
        file="high-level-overview"
        extension="png"
        alt=""
        :width="1440"
        :height="335"
        :background="false"
      />
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextParagraphUppercase from '@/components/Cases/shared/TextParagraphUppercase'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'HighLevelOverview',
  components: {
    TextParagraph,
    TextParagraphUppercase,
    Picture,
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';
@import '../../../assets/styles/cases/_mixins';

.case {
  &_title,
  &_sec-desc {
    text-align: center;
  }

  &_title,
  &_sec-desc,
  &_dashboard-title,
  &_dashboard-desc {
    color: $text-color--white;
  }

  &_dashboard-container {
    @include grid(repeat(2, 1fr), auto, 0, 0);
  }

  &_dashboard-title,
  &_dashboard-desc {
    opacity: 0.5;
  }

  &_animate-text {
    margin-top: 30px;
  }

  &_image-wrapp {
    min-width: 1440px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  &_no-wrap {
    white-space: nowrap;
  }

   @media screen and (max-width: 960px) {
    &_dashboard-container {
      @include grid(repeat(1, 1fr), auto, 0, 0);
      text-align: center;
    }

    &_dashboard-title {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    &_animate-text {
      margin-top: 0;
    }
  }
}
</style>
