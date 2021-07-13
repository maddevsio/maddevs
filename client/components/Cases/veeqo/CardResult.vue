<template>
  <div class="card">
    <TextParagraphUppercase
      v-if="cardName"
      class="card_card-name"
    >
      {{ cardName }}
    </TextParagraphUppercase>
    <img
      v-if="icon"
      :data-src="$getMediaFromS3(`/images/Cases/veeqo/svg/${icon}.svg`)"
      :alt="alt"
      width="66"
      height="66"
      class="card_icon media_lazy"
      :class="`card_icon_${icon}`"
    >
    <div class="card_text-content">
      <h3 class="case_title_h4 card_title">
        {{ title }}
      </h3>
      <TextParagraph
        class="card_description"
        color="#ffffff"
      >
        {{ description }}
      </TextParagraph>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextParagraphUppercase from '@/components/Cases/shared/TextParagraphUppercase'

export default {
  name: 'CardResult',
  components: {
    TextParagraph,
    TextParagraphUppercase,
  },

  props: {
    icon: {
      type: String,
      default: null,
    },

    cardName: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: null,
    },

    description: {
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
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 14px;
  background: $bgcolor--blue-veeqo;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;

  &_icon {
    width: 66px;
    height: 66px;
    display: block;
    margin: 40px 0;

    &_gears-card {
      width: 105px;
      height: 83px;
    }
  }

  &_card-name,
  &_title {
    color: $text-color--white;
  }

  &_title {
    margin-bottom: 5px;
  }

  &_card-name {
    opacity: 0.5;
  }

  @media screen and (max-width: 880px) {
    &_title {
      font-size: 20.25px;
      letter-spacing: -1px;
    }

    &_description {
      font-size: 16px;
    }

    &_icon {
      margin: 30px 0;
    }
  }
}
</style>
