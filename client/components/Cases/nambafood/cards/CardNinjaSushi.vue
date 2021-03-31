<template>
  <div class="case_card-content">
    <div class="case_card-content_left-column">
      <h3 :style="{ color: '#f5f7f9' }" class="case_title_h4 m-8_bottom">Mini white label</h3>
      <TextParagraph class="case_card-content_paragraph" color="#f5f7f9">
        After business owners submit images and prices, the Namba Food team creates a customised and branded e-commerce
        website. Updates, support and maintenance are also done by Namba Food.
      </TextParagraph>
      <h3 :style="{ color: '#f5f7f9' }" class="case_title_h4 m-8_bottom">Full white label</h3>
      <TextParagraph color="#f5f7f9">
        Business partners can use Namba Food’s software and business model, adjusting for their needs, scale and region.
        Namba Food is responsible for its maintenance and helps with management and marketing.
      </TextParagraph>
    </div>
    <div class="case_card-content_right-column">
      <div class="case_card-content_macbook-frame"></div>
      <picture>
        <source
          ref="source"
          :srcset="[
            require(`@/assets/img/Cases/nambafood/webp/ninja-sushi-slide.webp`) + ' ',
            require(`@/assets/img/Cases/nambafood/webp/ninja-sushi-slide@2x.webp`) + ' 2x',
          ]"
          class="case_card-content_image"
          type="image/webp"
        />
        <img
          ref="img"
          :src="[require('@/assets/img/Cases/nambafood/jpg/ninja-sushi-slide.jpg')]"
          :srcset="[require(`@/assets/img/Cases/nambafood/jpg/ninja-sushi-slide@2x.jpg`) + ' 2x']"
          class="case_card-content_image"
        />
      </picture>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph'

export default {
  name: 'CardNinjaSushi',
  components: {
    TextParagraph,
  },

  mounted() {
    const { img } = this.$refs
    const { source } = this.$refs
    const pictures = [
      {
        img: 'ninja-sushi-slide',
        alt: 'Namba Food: Sushi Room.',
      },
      {
        img: 'sushi-room-slide',
        alt: 'Namba Food: Sushi Room.',
      },
      {
        img: 'coffee-house-slide',
        alt: 'Namba Food: Coffee House.',
      },
    ]
    let i = 0

    function toggle() {
      img.src = require(`@/assets/img/Cases/nambafood/jpg/${pictures[i].img}.jpg`)
      img.srcset = `${require(`@/assets/img/Cases/nambafood/jpg/${pictures[i].img}@2x.jpg`)} 2x`
      img.alt = pictures[i].alt
      source.srcset = `${require(`@/assets/img/Cases/nambafood/webp/${pictures[i].img}.webp`)}, 
      ${require(`@/assets/img/Cases/nambafood/webp/${pictures[i].img}@2x.webp`)} 2x`
      i = (i + 1) % pictures.length // update the counter
    }
    setInterval(toggle, 1500)
  },
}
</script>

<style scoped lang="scss">
@import '../../../../assets/styles/cases/_mixins';
@import '../../../../assets/styles/cases/_icons';

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
    bottom: -38px;
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
    border-radius: 4px;
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
