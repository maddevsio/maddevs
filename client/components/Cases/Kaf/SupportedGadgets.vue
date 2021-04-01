<template>
  <section class="container_regular">
    <h2
      class="case_title_h2 m-24_bottom media-m-12_bottom"
    >
      Supported gadgets
    </h2>
    <TextParagraph class="m-48_bottom media-m-24_bottom">
      The platform is available on any device and remains equally friendly to both web and mobile users. Since 2016, the
      project has been continuously improving to provide more options for each category of viewers.
    </TextParagraph>
    <div class="m-107_bottom media-m-68_bottom case_supported-gadgets">
      <Card
        v-for="(gadget, i) in supportedGadgets"
        :key="i"
        :class="`background-color-${gadget.cardColor}`"
      >
        <CardSupportedGadgets :gadget="gadget" />
      </Card>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Cases/Card'
import CardSupportedGadgets from '@/components/Cases/Kaf/CardSupportedGadgets'
import TextParagraph from '@/components/Cases/TextParagraph'
import { supportedGadgets } from '@/data/kafCase'

export default {
  name: 'SupportedGadgets',
  components: {
    Card,
    CardSupportedGadgets,
    TextParagraph,
  },

  data() {
    return {
      supportedGadgets,
    }
  },
}
</script>

<style lang="scss">
@import '../../../assets/styles/cases/mixins';

.case {
  &_supported-gadgets {
    @include grid(repeat(3, 1fr), auto, 15px, 0);

    @media screen and (max-width: 870px) {
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }
  }
}
</style>
