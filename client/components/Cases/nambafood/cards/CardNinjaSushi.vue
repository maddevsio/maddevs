<template>
  <div class="case_card-content">
    <div class="case_card-content_left-column">
      <h3
        :style="{ color: '#f5f7f9' }"
        class="case_title_h4 m-8_bottom"
      >
        Mini white label
      </h3>
      <TextParagraph
        class="case_card-content_paragraph"
        color="#f5f7f9"
      >
        After business owners submit images and prices, the Namba Food team creates a customised and branded e-commerce
        website. Updates, support and maintenance are also done by Namba Food.
      </TextParagraph>
      <h3
        :style="{ color: '#f5f7f9' }"
        class="case_title_h4 m-8_bottom"
      >
        Full white label
      </h3>
      <TextParagraph color="#f5f7f9">
        Business partners can use Namba Food’s software and business model, adjusting for their needs, scale and region.
        Namba Food is responsible for its maintenance and helps with management and marketing.
      </TextParagraph>
    </div>
    <div class="case_card-content_right-column">
      <img
        :src="require(`@/assets/img/Studies/svg/macbook-frame.svg`)"
        width="1441"
        height="790"
        alt="Macbook frame"
        class="case_card-content_macbook-frame"
      >
      <picture>
        <source
          v-if="source"
          ref="source"
          :srcset="[source.x1 + ' ', source.x2 + ' 2x']"
          class="case_card-content_image"
          type="image/webp"
        >
        <img
          v-if="img"
          ref="img"
          :src="[img.x1]"
          :srcset="[img.x2 + ' 2x']"
          :alt="img.alt"
          width="1028"
          height="547"
          class="case_card-content_image"
          data-testid="test-case_card-content_image"
        >
      </picture>
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'CardNinjaSushi',
  components: {
    TextParagraph,
  },

  data() {
    return {
      imgIndex: 0,
      img: {
        x1: this.$getMediaFromS3('/images/Cases/nambafood/webp/ninja-sushi-slide.webp'),
        x2: this.$getMediaFromS3('/images/Cases/nambafood/webp/ninja-sushi-slide@2x.webp'),
        alt: 'Cases image',
      },

      source: {
        x1: this.$getMediaFromS3('/images/Cases/nambafood/jpg/ninja-sushi-slide.jpg'),
        x2: this.$getMediaFromS3('/images/Cases/nambafood/jpg/ninja-sushi-slide@2x.jpg'),
      },
    }
  },

  mounted() {
    setInterval(this.toggleImages, 1500)
  },

  destroyed() {
    clearInterval(this.toggleImages)
  },

  methods: {
    toggleImages() {
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
      this.img.x1 = this.$getMediaFromS3(`/images/Cases/nambafood/jpg/${pictures[this.imgIndex].img}.jpg`)
      this.img.x2 = this.$getMediaFromS3(`/images/Cases/nambafood/jpg/${pictures[this.imgIndex].img}@2x.jpg`)
      this.img.alt = pictures[this.imgIndex].alt
      this.source.x1 = this.$getMediaFromS3(`/images/Cases/nambafood/webp/${pictures[this.imgIndex].img}.webp`)
      this.source.x2 = this.$getMediaFromS3(`/images/Cases/nambafood/webp/${pictures[this.imgIndex].img}@2x.webp`)
      this.imgIndex = (this.imgIndex + 1) % pictures.length // update the counter
    },
  },
}
</script>

<style scoped lang="scss">
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
    top: 0;
    left: 0;
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
