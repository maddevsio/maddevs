<template>
  <div class="case_result-container">
    <div class="case_result-item">
      <h4 class="case_result-item_title">
        ReadIOPS
      </h4>
      <TextParagraph color="#404143">
        halved for better instance performance
      </TextParagraph>
    </div>
    <div class="case_result-item">
      <h4 class="case_result-item_title">
        CPU
      </h4>
      <TextParagraph color="#404143">
        load: reduced due to extra RAM
      </TextParagraph>
    </div>
    <div class="case_result-item">
      <h4 class="case_result-item_title">
        TPS
      </h4>
      <TextParagraph color="#404143">
        increased <br> by 50%
      </TextParagraph>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'FixingDatabaseOutagesResult',
  components: {
    TextParagraph,
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_result-container {
    @include grid(repeat(3, 1fr), auto, 0, 0);
  }

  &_result-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 34px;

    &:nth-child(2) {
      border-left: 1px solid $border-color--black-border-03-opacity;
      border-right: 1px solid $border-color--black-border-03-opacity;
    }

    &_title {
      @include title($text-color--blue-pale, 36px, -0.02em)
    }
  }

  @media screen and (max-width: 880px) {
    &_result-container {
      @include grid(repeat(1, 180px), auto, 0, 0);
      justify-content: center;
    }

    &_result-item {
      padding: 20px 0;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &:nth-child(2) {
        position: relative;
        border-left: 0;
        border-right: 0;

        &:before,
        &:after {
          content: '';
          width: 131px;
          height: 1px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: $border-color--black-border-03-opacity;
        }

        &:before {
          top: 0;
        }

        &:after {
          bottom: 0;
        }
      }
    }
  }
}
</style>
