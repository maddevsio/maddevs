<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Customers track order statuses
    </h2>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      As Namba Food’s delivery service grew more popular, the load on customer support and its operators increased
      exponentially.
    </TextParagraph>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      Customer support challenge: The lack of transparent status updates led to the majority of users calling to check
      the delivery status. Business challenge: A continuously growing number of customer support teams occurred in high
      operational expenses.
    </TextParagraph>
    <TextParagraph class="m-96_bottom media-m-48_bottom">
      Solution: The Mad Devs team has developed a user-friendly status feature that allows customers to easily track
      progress on both the mobile app and website.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'

export default {
  name: 'TrackStatuses',
  components: {
    TextParagraph,
  },
}
</script>
