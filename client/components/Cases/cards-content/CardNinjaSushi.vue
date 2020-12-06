<template>
  <div class="case_card-content">
    <div class="case_card-content_left-column">
      <h4 class="case_title_h4 m-8_bottom" :style="{color: '#f5f7f9'}">Mini white label</h4>
      <TextParagraph class="case_card-content_paragraph" color="#f5f7f9">
        After business owners submit pictures and prices, the
        Namba Food team creates a customized and branded
        e-commerce website. Updates, support, and
        maintenance are done by Namba Food, too.
      </TextParagraph>
      <h4 class="case_title_h4 m-8_bottom" :style="{color: '#f5f7f9'}">Full white label</h4>
      <TextParagraph color="#f5f7f9">
        Business partners can use Namba Food’s software
        and business model, adjusting those to their needs,
        scale, and region. Namba Food is responsible for its
        maintenance and helps with management and marketing.
      </TextParagraph>
    </div>
    <div class="case_card-content_right-column">
      <div class="case_card-content_macbook-frame"></div>
      <picture>
        <source
          class="case_card-content_image"
          :srcset="[require(`@/assets/img/Cases/nambafood/webp/ninja-sushi-slide.webp`) + ' ', require(`@/assets/img/Cases/nambafood/webp/ninja-sushi-slide@2x.webp`) + ' 2x']"
          type='image/webp'
          ref="source"
        >
        <img
          class="case_card-content_image"
          :src="[require('@/assets/img/Cases/nambafood/png/ninja-sushi-slide.png')]"
          :srcset="[require(`@/assets/img/Cases/nambafood/png/ninja-sushi-slide@2x.png`) + ' 2x']"
          ref="img"
        >
      </picture>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph';
import Picture from '@/components/Cases/Picture';

export default {
  name: 'CardNinjaSushi',
  components: {
    TextParagraph,
    Picture
  },
  mounted() {
    const img = this.$refs.img;
    const source = this.$refs.source;
    const pictures = ['ninja-sushi-slide', 'sushi-room-slide', 'coffee-house-slide'];
    let i = 0;

    function toggle() {
      img.src = require(`@/assets/img/Cases/nambafood/png/${pictures[i]}.png`);
      img.srcset = require(`@/assets/img/Cases/nambafood/png/${pictures[i]}@2x.png`) + ' 2x';
      source.srcset = require(`@/assets/img/Cases/nambafood/webp/${pictures[i]}.webp`) + ' ', require(`@/assets/img/Cases/nambafood/webp/${pictures[i]}@2x.webp`) + ' 2x';
      i = (i + 1) % pictures.length; // update the counter
    }
    setInterval(toggle, 1500);
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';
  @import '../../../assets/styles/cases/_icons';

  .case_card-content {
    @include grid(repeat(2, 1fr), auto, 0, 0);

    &_paragraph {
      margin-bottom: 41px;
    }
    
    &_right-column {
      width: 292px;
      height: 383px;
      margin-top: auto;
      margin-left: auto;
      position: relative;
      right: -32px;
      bottom: -15px;
    }

    &_macbook-frame {
      width: 1441px;
      height: 790px;
      position: absolute;
      @include macbook-frame;
    }

    &_image {
      position: relative;
      right: -34px;
      bottom: -59px;
    }

    @media screen and (max-width: 840px) {
      @include grid(repeat(1, 1fr), auto, 0, 0);

      &_left-column {
        margin-bottom: 300px;
      }

      &_right-column {
        width: 100%;
        position: absolute;
        right: -32px;
        bottom: -90px;
      }
    }

    @media screen and (max-width: 768px) {
      &_paragraph {
        margin-bottom: 24px;
      }
    }
  }
</style>
