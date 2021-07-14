<template>
  <div class="paragraph-section">
    <div class="container">
      <p
        v-for="paragraph in paragraphTexts"
        :key="paragraph"
        class="paragraph-section__text"
        v-html="paragraph"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { paragraphTexts } from '@/data/openSourceTexts'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ParagraphSection',
  data() {
    return {
      paragraphTexts,
    }
  },

  mounted() {
    const textBlocks = gsap.utils.toArray('.paragraph-section__text')
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.paragraph-section',
        scrub: 1,
        pin: true,
        start: 'top top+=5%+',
        end: '+=1400',
      },
    })

    textBlocks.forEach(textBlock => {
      tl.fromTo(textBlock,
        { opacity: 0, scale: 0.87 },
        {
          scale: 1, opacity: 1, repeat: 1, yoyo: true, yoyoEase: true,
        })
    })
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.paragraph-section {
  padding: 360px 0;
  &__text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-size: 60px;
    font-weight: 600;
    line-height: 70px;
    letter-spacing: -0.013em;
    color: $text-color--silver;
    text-align: center;
    &:nth-child(1) {
      /deep/ span {
        color: $text-color--red-dark;
      }
    }
    &:nth-child(2) {
      /deep/ span {
        color: $text-color--green;
      }
    }
    &:nth-child(3) {
      /deep/ span {
        color: $text-color--yellow;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 195px 0;
    &__text {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 128px 0;
    &__text {
      font-size: 28px;
      line-height: 40px;
    }
  }

  @media screen and (max-width: 520px) {
    &__text {
      /deep/ br {
        display: none;
      }
    }
  }
}
</style>
