<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
      Simple ordering process for end-users
    </h2>
    <TextParagraph class="m-24_bottom">
      Namba Food meticulously studied users' behaviours and collected feedback to find the perfect market fit.
    </TextParagraph>
    <ListNumberedBox class="m-72_bottom media-m-48_bottom">
      <ListNumberedItemBox
        >Users go to the website and choose cafes and shops (+ orders can be placed via phone).
      </ListNumberedItemBox>
      <ListNumberedItemBox>Users save products to cart and check out.</ListNumberedItemBox>
      <ListNumberedItemBox
        >Users receive a call from an operator to confirm the order or can tick the "no calls" checkbox.
      </ListNumberedItemBox>
      <ListNumberedItemBox>Courier delivers the order at a pre-estimated time.</ListNumberedItemBox>
    </ListNumberedBox>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph'
import ListNumberedBox from '@/components/Cases/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/ListNumberedItemBox'

export default {
  name: 'OrderingProcess',
  components: {
    TextParagraph,
    ListNumberedBox,
    ListNumberedItemBox,
  },
}
</script>

<style></style>