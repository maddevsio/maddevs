<template>
  <section class="ebook-learn">
    <div class="container">
      <h2>From it, you will learn:</h2>

      <div class="ebook-learn_cards">
        <LearnCard
          v-for="(card, i) of cards"
          :key="`card_${i}`"
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import LearnCard from '@/components/Ebook/LearnCard'
import { cards } from '@/data/ebookLearnCards'

export default {
  name: 'EbookLearn',
  components: { LearnCard },
  data() {
    return {
      cards,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '@/assets/styles/cases/_mixins';

.ebook-learn {
  padding-top: 130px;
  padding-bottom: 96px;

  @media screen and (max-width: 1024px) {
    padding-top: 96px;
  }

  h2 {
    @include font('Inter', 42px, 600);
    color: #fff;
    line-height: 46px;
    letter-spacing: -1.3px;
    margin-bottom: 32px;

    @media screen and (max-width: 540px) {
      @include font('Inter', 28px, 600);
      line-height: 32px;
    }
  }

  &_cards {
    @include grid(repeat(3, 1fr), auto, 30px, 30px);

    @media screen and (max-width: 768px) {
      @include grid(repeat(2, 1fr), auto, 30px, 30px);
    }

    @media screen and (max-width: 540px) {
      @include grid(repeat(1, 1fr), auto, 0, 30px);
    }
  }
}
</style>
