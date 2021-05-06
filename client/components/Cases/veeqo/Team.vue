<template>
  <section class="container_regular m-72_bottom media-m-48_bottom">
    <h2 class="case_title_h2 m-48_bottom media-m-24_bottom case_text-align-center">
      Meet the team
    </h2>
    <TextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author="Ruslan Karabukaev"
      position="Co-founder of GoDee"
      file="ruslan-karabukaev"
      extension="png"
      alt="Ruslan Karabukaev"
      folder="godee"
    >
      The resource provided by Mad Devs is excellent, bringing not only their own skill and expertise, but the input of the wider team to the project too. They manage the remote work seamlessly and fit well into the company’s workflow.
    </TextQuoteAuthor>
  </section>
</template>

<script>
import TextQuoteAuthor from '@/components/Cases/shared/TextQuoteAuthor'

export default {
  name: 'Team',
  components: {
    TextQuoteAuthor,
  },
}
</script>
