<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Future plans
    </h2>
    <TextParagraph class="case_bold-text m-12_bottom">
      ITC and Mad Devs are hoping for further cooperation, and when the time comes, we are planning to add the following functionality to the digital manual:
    </TextParagraph>
    <List class="m-48_bottom">
      <ListItemDot>Travel requests: create them; add details; display their lists, statuses, and workflow; and send email notifications</ListItemDot>
      <ListItemDot>Travel calendar and travel request reports</ListItemDot>
      <ListItemDot>Editable captions for initial approach questionnaires (IAQs) and post-mission questionnaires (PMQs)</ListItemDot>
      <ListItemDot>With certain localisation efforts, the app will be fit for similar trade facilitation initiatives in more countries in the future</ListItemDot>
    </List>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import List from '@/components/Cases/shared/List'
import ListItemDot from '@/components/Cases/shared/ListItemDot'

export default {
  name: 'FuturePlans',
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
