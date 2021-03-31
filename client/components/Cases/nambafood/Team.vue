<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-96_top m-24_bottom media-m-48_top media-m-12_bottom">Meet the team</h3>
    <TextParagraph class="m-48_bottom media-m-24_bottom">
      There are now three members on the core development team; during the pre-launch phase, a larger team worked on the
      Namba Food project. Over the course of the project, five full-time employees and two part-timers have worked
      closely with the customer:
    </TextParagraph>
    <ListTeam>
      <ListTeamItem
        v-for="member in team"
        :key="member.name"
        :name="member.name"
        :position="member.position"
        :file-name="member.fileName"
        :file-name-retina="`${member.fileName}@2x`"
        :file-extension="member.fileExtension"
        :alt="member.name"
        picture-folder="common"
      />
    </ListTeam>
    <h4 class="case_title_h4 m-72_top m-12_bottom media-m-41_top">Transparent communication</h4>
    <TextParagraph>
      Weekly calls with the customer's business representatives and monthly meetings to see what could be improved from
      a development/IT viewpoint. Our staff members also work on the Namba Food premises several days a week to keep in
      touch with the customer's employees. This keeps everyone on the same page. We can collect the most recent business
      requirements and quickly respond to changes that a highly competitive delivery market may throw at us.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import ListTeam from '@/components/Cases/shared/ListTeam'
import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import { team } from '@/data/caseNambafood'

export default {
  name: 'Team',
  components: {
    TextParagraph,
    ListTeam,
    ListTeamItem,
  },

  data() {
    return {
      team,
    }
  },
}
</script>

<style></style>