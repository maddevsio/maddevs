<template>
  <section class="container_regular m-72_top media-m-38_top">
    <TextParagraph>
      Veeqo is an inventory and shipping platform for e-commerce. It helps businesses to manage sales across multiple channels, ship items via multiple carriers, process refunds, manage B2B orders, forecast <span class="case_no-wrap">inventory—the</span> list of features is almost endless. The platform directly integrates with the world’s most popular retail applications, including e-commerce platforms, marketplaces, shipping carriers, POS systems, and more.
    </TextParagraph>
    <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-72_bottom">
      Veeqo is a single platform that gives users complete control of their entire inventory. It enables businesses to quickly bulk ship orders from any sales channel, automate repetitive shipping tasks, and track every delivery in one place.
    </TextQuote>
    <TextParagraph class="case_text-align-center m-48_bottom">
      Hundreds of retailers all over the world use Veeqo to power their inventory and shipping founded
    </TextParagraph>
    <StatisticsContainer class="m-96_bottom media-m-48_bottom">
      <StatisticsItem
        v-for="(inventoryAndShippingItem, i) in inventoryAndShipping"
        v-bind="inventoryAndShippingItem"
        :key="`${inventoryAndShippingItem.title}_${i}`"
      />
    </StatisticsContainer>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuote from '@/components/Cases/shared/TextQuote'
import StatisticsContainer from '@/components/Cases/shared/StatisticsContainer'
import StatisticsItem from '@/components/Cases/shared/StatisticsItem'
import { inventoryAndShipping } from '@/data/caseVeeqo'

export default {
  name: 'About',
  components: {
    TextParagraph,
    TextQuote,
    StatisticsContainer,
    StatisticsItem,
  },

  data() {
    return {
      inventoryAndShipping,
    }
  },
}
</script>

<style lang="scss" scoped>
  .case {
   &_no-wrap {
      white-space: nowrap;
    }
  }
</style>
