<template>
  <div class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Phase 4: Cutting the costs
    </h2>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      Cutting the costs for the customer is not about making compromises but about achieving efficiency. The mind of a DevOps engineer is like an hourglass: engineers are focusing on either improving performance or cutting the costs. It’s flipping all the time, and it is needed to find balance, which is solutions that are effective and cheap.
    </TextParagraph>
    <TextParagraph class="m-48_bottom media-m-24_bottom">
      Once we improved Veeqo’s performance and user experience, we started working on optimizing infrastructure costs. In total, the infrastructure used to cost the customer about <span class="case_red-text">~$20,000 per month.</span> Within one summer, as we prepared the new solutions and migrated to them, we brought the figure down to ~$13,000.
    </TextParagraph>
    <Lottie
      id="chart"
      :options="options"
      class="case_lottie"
      @animCreated="handleAnimation"
    />
    <TextParagraph class="m-48_top media-m-24_top">
      Importantly, we made the system more secure as we started using RabbitMQ, Memcached, Elasticsearch, and other services within our own network. The monitoring system that we kept perfecting as we went on with cutting the costs confirmed the effectiveness of cost optimization.
    </TextParagraph>
    <TextQuoteBox
      class="m-48_top m-96_bottom media-m-24_top media-m-48_bottom m-auto"
      author="Andrew Sapozhnikov, Head of DevOps at Mad Devs"
    >
      Costs can’t be cut overnight. Not without damaging user experience, service uptime, and system survivability, anyway. We initially told Veeqo how we would decrease monthly infrastructure costs by ~7,000 dollars, but it took months to make smooth transitions. Our Veeqo partners trusted our professionalism, and it all paid off. We’re proud of how we optimized the costs along with improving the system’s performance.
    </TextQuoteBox>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import Lottie from 'vue-lottie/src/lottie.vue'
import playLottieMixin from '@/mixins/playLottieMixin'
import animationData from '@/assets/lottie/veeqo/chart.json'

export default {
  name: 'PhaseCuttingTheCosts',
  components: {
    TextParagraph,
    TextQuoteBox,
    Lottie,
  },

  mixins: [playLottieMixin('chart', {
    animationData,
    autoplay: false,
    loop: false,
  })],

}
</script>
