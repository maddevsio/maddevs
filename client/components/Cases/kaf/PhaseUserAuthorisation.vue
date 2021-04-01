<template>
  <section class="container_regular m-48_bottom media-m-24_bottom">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Phase 5: User authorisation & personalised experience
    </h2>
    <TextParagraph class="m-24_bottom">
      In 2020, the platform launched individual user authorisation through email. With the statistics collected for each
      user, the project started to provide a more personalised experience based on people’s preferences. A number of new
      features were added to improve the existing services:
    </TextParagraph>
    <List>
      <ListHyphenItemBox>Full-text search across the movie and TV series databases</ListHyphenItemBox>
      <ListHyphenItemBox>A history of interactions with various movies and TV channels.</ListHyphenItemBox>
      <ListHyphenItemBox>Suggestions to resume incompletely watched videos.</ListHyphenItemBox>
      <ListHyphenItemBox>Lists of favourites for both watched and desired content.</ListHyphenItemBox>
    </List>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph'
import List from '@/components/Cases/List'
import ListHyphenItemBox from '@/components/Cases/ListHyphenItemBox'

export default {
  name: 'PhaseUserAuthorisation',
  components: {
    TextParagraph,
    List,
    ListHyphenItemBox,
  },
}
</script>
