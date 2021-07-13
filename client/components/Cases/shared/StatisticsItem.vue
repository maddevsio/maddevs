<template>
  <div class="case_statistics-item">
    <TextParagraphUppercase class="case_statistics-item_title">
      {{ title }}
    </TextParagraphUppercase>
    <p class="case_statistics-item_number">
      {{ number }}
    </p>
    <p class="case_statistics-item_description">
      {{ description }}
    </p>
  </div>
</template>

<script>
import TextParagraphUppercase from '@/components/Cases/shared/TextParagraphUppercase'

export default {
  name: 'StatisticsItem',
  components: {
    TextParagraphUppercase,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    number: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_statistics-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 34px;

    &:nth-child(2) {
      border-left: 1px solid $border-color--black-border-03-opacity;
      border-right: 1px solid $border-color--black-border-03-opacity;
    }

    &_description {
      @include font('Inter', 16px, 400);
      line-height: 135%;
      letter-spacing: -0.035em;
    }

    &_title,
    &_number {
      margin-bottom: 16px;
    }

    &_number {
      @include font('Poppins', 48px, 600);
      line-height: 90%;
      letter-spacing: -0.02em;
    }

    @media screen and (max-width: 880px) {
      max-width: 242px;
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

      &_title,
      &_description {
        font-size: 17px;
      }

      &_title  {
        margin-bottom: 13px;
      }

      &_number {
        margin-bottom: 6px;
        font-size: 36px;
        line-height: 130%;
      }
    }
  }
}
</style>
