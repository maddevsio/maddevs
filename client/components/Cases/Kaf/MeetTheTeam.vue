<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-48_bottom media-m-38_bottom">Meet the team</h2>
    <!-- <ListTeam class="m-72_bottom media-m-48_bottom">
      <ListTeamItem
        v-for="(teamMember, i) in team"
        :key="i"
        :name="teamMember.name"
        :position="teamMember.position"
        :file-name="teamMember.fileName"
        :file-name-retina="`${teamMember.fileName}@2x`"
        :file-extension="teamMember.fileExtension"
        :alt="teamMember.name"
        picture-folder="common"
      />
    </ListTeam> -->
    <!-- <TextQuoteAuthor
      class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
      author-name="Andrew Minkin"
      author-position="CTO, Mad Devs"
      file-name="andrew-minkin"
      file-extension="png"
      alt=""
      picture-folder="nambafood"
    >
      While working on this project, we acquired extensive hands-on experience in building modern livestreaming and VoD services. We were amazed by the abundance of open-source tools available for building great OTT platforms and online movies. Yourcast.TV was the beginning; however, we now see that this internal project could become a cornerstone for many enterprise-level solutions.
    </TextQuoteAuthor> -->
  </section>
</template>

<script>
export default {
  name: 'MeetTheTeam',
}
</script>

<style></style>