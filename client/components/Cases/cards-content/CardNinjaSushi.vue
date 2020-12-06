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
      <picture>
        <source
          class="image"
          :srcset="[require(`@/assets/img/Cases/nambafood/webp/ninja-sushi-slide.webp`) + ' ', require(`@/assets/img/Cases/nambafood/webp/ninja-sushi-slide@2x.webp`) + ' 2x']"
          type='image/webp'
          ref="source"
        >
        <img
          class="image"
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
    (() => { // function expression closure to contain variables
      let i = 0;
      const pictures = ['ninja-sushi-slide', 'sushi-room-slide', 'coffee-house-slide'];
      function toggle() {
        img.src = require(`@/assets/img/Cases/nambafood/png/${pictures[i]}.png`);
        img.srcset = require(`@/assets/img/Cases/nambafood/png/${pictures[i]}@2x.png`) + ' 2x';
        source.srcset = require(`@/assets/img/Cases/nambafood/webp/${pictures[i]}.webp`) + ' ', require(`@/assets/img/Cases/nambafood/webp/${pictures[i]}@2x.webp`) + ' 2x';
        i = (i + 1) % pictures.length; // update the counter
      }
      setInterval(toggle, 1500);
    })(); 
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .case_card-content {
    @include grid(repeat(2, 1fr), auto, 0, 0);

    &_paragraph {
      margin-bottom: 41px;
    }
    
    &_right-column {
      width: 292px;
      height: 388px;
      margin-top: auto;
      margin-left: auto;
      position: relative;
      right: -32px;
      bottom: -42px;
    }

    &_multi-directional-business-model-gif {
      width: auto;
      height: 316px;
      position: absolute;
      bottom: 6px;
      right: -232px;
    }

    @media screen and (max-width: 840px) {
      @include grid(repeat(1, 1fr), auto, 0, 0);

      &_left-column {
        margin-bottom: 200px;
      }

      &_right-column {
        width: 306px;
        position: absolute;
        right: -32px;
        bottom: -190px;
      }

      &_multi-directional-business-model-gif {
        right: -219px;
        bottom: 4px;
      }
    }

    @media screen and (max-width: 768px) {
      &_right-column {
        right: -20px;
      }

      &_paragraph {
        margin-bottom: 24px;
      }
    }

    @media screen and (max-width: 370px) {
      &_right-column {
        width: 270px;
        height: 360px;
        bottom: -163px;
      }

      &_multi-directional-business-model-gif {
        height: 290px;
        right: -211px;
        bottom: 7px;
      }
    }
  }
</style>
