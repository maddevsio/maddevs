<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2">Admin panel automates Namba Food’s scalability</h2>
      <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
        The built-in reporting functionality enables managers to have full control over the entire list of business
        partners.
      </TextQuoteBox>
      <TextParagraph class="m-48_bottom">
        In the admin panel, managers can configure discounts, set working days and hours for cafes, add new meal
        offerings and do many other things enabling them to deliver users the best possible experience.
      </TextParagraph>
    </section>
    <section class="container_middle m-72_bottom media-m-48_bottom">
      <Picture
        :box-shadow="true"
        :lazy-loading="true"
        picture-folder="nambafood"
        file-name="sjms-analytics"
        file-name-retina="sjms-analytics@2x"
        file-extension="jpg"
        alt="Namba Food: Admin Panel Which Help to Manage Food and Grocery Delivery."
      />
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'AdminPanel',
  components: {
    TextParagraph,
    TextQuoteBox,
    Picture,
  },
}
</script>

<style></style>