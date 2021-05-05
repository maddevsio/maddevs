<template>
  <div class="container_full background-color-blue m-72_bottom media-m-48_bottom p-72_top media-p-41_top">
    <div class="container_regular">
      <h2 class="case_title_h2 case_title">
        Veeqo high-level overview
      </h2>
      <TextParagraph class="case_description m-12_top m-80_bottom media-m-41_bottom">
        The service has multiple subsystems integrated into one platform
      </TextParagraph>
      <div class="case_animation-items">
        <div class="case_animation-item">
          <p class="case_animation-item-description">
            dashboard
          </p>
          <h5 class="case_title_h5 case_animation-item-title">
            The dashboard used to visualize reports
          </h5>
        </div>
        <div class="case_animation-item">
          <p class="case_animation-item-description">
            Subsystems
          </p>
          <h5 class="case_title_h5 case_animation-item-title">
            Inventory management, Management, Warehouse, Reporting
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'HighLevelOverview',
  components: {
    TextParagraph,
  },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.case {
  &_title,
  &_description {
    text-align: center;
  }

  &_title,
  &_description,
  &_animation-item-title {
    color: $text-color--white;
  }

  &_no-wrap {
    white-space: nowrap;
  }
}
</style>
