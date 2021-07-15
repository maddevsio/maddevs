<template>
  <section class="container_regular m-48_top media-m-24_top">
    <TextParagraph class="m-12_bottom">
      Peklo Tool is a service that simplifies and automates the process of creating contextual advertising campaigns for Google Ads and its Russian-language analogue Yandex Direct. We built it from scratch for Peklo Studio, a digital marketing agency.
    </TextParagraph>
    <TextParagraph class="case_bold-text m-12_bottom">
      Peklo Tool’s two major functions are:
    </TextParagraph>
    <List class="m-72_bottom media-m-48_bottom">
      <ListItemDot>Saving up dozens of working hours in digital marketing specialists’ time</ListItemDot>
      <ListItemDot>Making contextual advertising campaigns measurably more effective</ListItemDot>
    </List>
    <h2 class="case_title_h2 m-12_bottom media-m-24_bottom">
      The needs that Peklo Tool meets
    </h2>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      Launching contextual ads is a slow, routine, and highly repetitive activity. A marketer or entrepreneur spends days upon days dealing with hundreds of lines in several spreadsheets.
    </TextParagraph>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      Tedious as it is, the process also features a high risk of errors. When it comes to processing large data arrays, humans are famously prone to mistakes. This work is better left to the reliable machines.
    </TextParagraph>
    <TextParagraph class="m-72_bottom media-m-48_bottom">
      The Peklo Tool team’s effort was to develop an automation solution to speed up the launch of campaigns and rule out human error.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import List from '@/components/Cases/shared/List'
import ListItemDot from '@/components/Cases/shared/ListItemDot'

export default {
  name: 'About',
  components: {
    TextParagraph,
    List,
    ListItemDot,
  },
}
</script>

<style scoped lang="scss">

.case {
  &_bold-text {
    font-weight: 700
  }
}

/deep/ .list-item_dot {
  margin-bottom: 0;
}
</style>
