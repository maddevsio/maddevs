<template>
  <section class="container_regular">
    <TextParagraph>
      Integrating new business with 1000+ products takes less than a few hours. The scalability of Namba Food enables
      its managers to integrate new business partners into a system quickly. Managers prepare an Excel file with
      structured menu or product data.
    </TextParagraph>
    <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-72_bottom">
      Namba Food automatically categorises data inside the managers' dashboard panel. More than 4000 products can be
      catalogued in a few clicks.
    </TextQuote>
    <h3 class="case_title_h3 m-12_bottom">
      Flexible catalogue management
    </h3>
    <TextParagraph class="m-96_bottom media-m-48_bottom">
      Managing partners' content is straightforward, as managers can quickly turn on or off a position inside the
      catalogue and change pictures and descriptions. Such flexibility enables business owners to meet daily business
      needs. For example, if a cafe offers a seasonal menu, the items from the summer menu can be temporarily turned off
      during the rest of the year.
    </TextParagraph>
    <h3 class="case_title_h3 m-24_bottom">
      Control panel functionality
    </h3>
    <div class="case_columns_container">
      <Card class="background-color-silver">
        <h4 class="case_title_h4 m-12_bottom media-m-6_bottom case_control-panel-card-title">
          Namba Food <br>
          managers
        </h4>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          The control panel gives managers a high-level overview of Namba Food’s daily, weekly, monthly and yearly
          performance. Business owners receive automatically generated monthly reports to their email.
        </TextParagraph>
        <TextParagraph class="m-8_bottom media-m-12_bottom">
          Detailed reports include information <br>
          such as:
        </TextParagraph>
        <List>
          <ListItemDot>Accrued revenue</ListItemDot>
          <ListItemDot>Total number of orders</ListItemDot>
          <ListItemDot>Total accrued commission</ListItemDot>
        </List>
      </Card>
      <Card class="background-color-silver">
        <h4 class="case_title_h4 m-12_bottom media-m-6_bottom case_control-panel-card-title">
          Namba Food <br>
          operators
        </h4>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          The control panel enables operators to manage promo codes and items ordered from a shop or restaurant. The
          panel makes it easy to get an order status overview, make required corrections and cancel orders if necessary.
        </TextParagraph>
        <TextParagraph>
          Within the panel, operators interact with clients by confirming orders and ensuring that customers’ notes are
          communicated during the process.
        </TextParagraph>
      </Card>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuote from '@/components/Cases/shared/TextQuote'
import Card from '@/components/Cases/shared/Card'
import List from '@/components/Cases/shared/List'
import ListItemDot from '@/components/Cases/shared/ListItemDot'

export default {
  name: 'Integrating',
  components: {
    TextParagraph,
    TextQuote,
    Card,
    List,
    ListItemDot,
  },
}
</script>
