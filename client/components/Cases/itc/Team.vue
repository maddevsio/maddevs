<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Meet the team
    </h2>
    <ListTeam class="m-96_bottom media-m-48_bottom">
      <ListTeamItem
        v-for="member in team"
        :key="member.name"
        v-bind="member"
      />
    </ListTeam>
  </section>
</template>

<script>
import ListTeam from '@/components/Cases/shared/ListTeam'
import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import { team } from '@/data/caseITC'

export default {
  name: 'MeetTheTeam',
  components: {
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
