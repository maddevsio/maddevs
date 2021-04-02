<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-48_bottom media-m-38_bottom">
      Meet the team
    </h2>
    <ListTeam class="m-72_bottom media-m-48_bottom">
      <ListTeamItem
        v-for="member in team"
        :key="member.name"
        v-bind="member"
      />
    </ListTeam>
    <TextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author-name="Andrew Minkin"
      author-position="CTO, Mad Devs"
      file-name="andrew-minkin"
      file-extension="png"
      alt="Andrew Minkin"
      folder="common"
    >
      While working on this project, we acquired extensive hands-on experience in building modern livestreaming and VoD
      services. We were amazed by the abundance of open-source tools available for building great OTT platforms and
      online movies. Yourcast.TV was the beginning; however, we now see that this internal project could become a
      cornerstone for many enterprise-level solutions.
    </TextQuoteAuthor>
  </section>
</template>

<script>
import ListTeam from '@/components/Cases/shared/ListTeam'
import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import TextQuoteAuthor from '@/components/Cases/shared/TextQuoteAuthor'
import { team } from '@/data/caseKaf'

export default {
  name: 'MeetTheTeam',
  components: {
    ListTeam,
    ListTeamItem,
    TextQuoteAuthor,
  },

  data() {
    return {
      team,
    }
  },
}
</script>

<style></style>
