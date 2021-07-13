<template>
  <div class="card-content">
    <div class="card-content_column-item">
      <p class="card-content_title">
        7500
      </p>
      <TextParagraph class="card-content_paragraph">
        viewers in the <br>
        database
      </TextParagraph>
    </div>
    <div class="card-content_column-item">
      <p class="card-content_title">
        6000+
      </p>
      <TextParagraph class="card-content_paragraph">
        active / current
        <br>
        viewers
      </TextParagraph>
    </div>
    <div class="card-content_column-item">
      <p class="card-content_title">
        500
      </p>
      <TextParagraph class="card-content_paragraph">
        viewers per day
      </TextParagraph>
    </div>
    <div class="card-content_column-item">
      <p class="card-content_title">
        280–300
      </p>
      <TextParagraph class="card-content_paragraph">
        concurrent viewers
      </TextParagraph>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'CardProjectInNumbers',
  components: {
    TextParagraph,
  },
}
</script>

<style scoped lang="scss">
.card-content {
  @include grid(154px 195px 173px 254px, auto, 0, 0);

  &_column-item {
    width: 100%;
    position: relative;
    text-align: center;
    border-right: 1px solid $border-color--white-03-opacity;

    &:last-child {
      border-right: none;
    }
  }

  &_title,
  &_paragraph {
    color: $text-color--white-primary;
  }

  &_title {
    @include font('Poppins', 48px, 600);
    line-height: 62.4px;
    letter-spacing: -0.02em;
  }

  &_paragraph {
    font-size: 17px;
    line-height: 23px;
    letter-spacing: -0.035em;
  }

  @media screen and (max-width: 996px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    &_column-item {
      width: 131px;
      padding: 20px 0;
      border-right: none;
      border-bottom: 1px solid $border-color--white-03-opacity;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        width: max-content;
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }
}
</style>
