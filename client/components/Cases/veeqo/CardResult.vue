<template>
  <div class="card">
    <img
      v-if="icon"
      :data-src="$getMediaFromS3(`/images/Cases/veeqo/svg/${icon}.svg`)"
      :alt="description"
      width="66"
      height="66"
      class="card_icon img_lazy"
      :class="`card_icon_${icon}`"
    >
    <div class="card_text-content">
      <h4 class="case_title_h4 card_title">
        {{ title }}
      </h4>
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

export default {
  name: 'CardResult',
  components: {
    TextParagraph,
  },

  props: {
    icon: {
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
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/_vars';

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60px 14px 20px 14px;
  background: #268BDC;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;

  &_icon {
    width: 66px;
    height: 66px;
    display: block;
    margin-bottom: 40px;

    &_gears-card {
      width: 105px;
      height: 83px;
    }
  }

  &_title {
    margin-bottom: 5px;
    color: $text-color--white;
  }

  @media screen and (max-width: 880px) {
    &_title {
      font-size: 20.25px;
      letter-spacing: -1px;
    }

    &_description {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 52px 35px 30px 35px;
  }
}
</style>
