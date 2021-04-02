<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-24_bottom">
        Mad Devs’ trip to the SJMC
      </h2>
    </section>
    <section class="container_full case_full-screen-slider">
      <Swiper
        :components="swiperMadDevsTrip"
        :safari-top-bar="false"
        :box-shadow="false"
      />
    </section>
    <section class="container_regular">
      <TextParagraph class="m-56_top media-m-24_top m-24_bottom media-m-12_bottom">
        In February 2020, just before the contract’s deadline, a Mad Devs’ team of eight travelled to the Сentre,
        which is located near the village of Villers-Bretonneux (Somme) in northern France.
      </TextParagraph>
      <TextParagraph class="m-6_bottom">
        Although the small-scale version of the Сentre was built inside Mad Devs’ office, the team was pursuing the
        following goals:
      </TextParagraph>
      <List class="m-56_bottom media-m-24_bottom">
        <ListItemDot>Understand the complexity of the SJMC hardware and software in person</ListItemDot>
        <ListItemDot>Uncover the potential risks and problems</ListItemDot>
        <ListItemDot>Deploy technical debts and test the changes</ListItemDot>
        <ListItemDot>Deploy new content on large scale screens and test the changes</ListItemDot>
      </List>
      <!-- Заменить фотографии -->
      <ListTeam class="m-96_bottom media-m-24_bottom">
        <ListTeamItem
          v-for="member in team"
          :key="member.name"
          v-bind="member"
        />
      </ListTeam>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import List from '@/components/Cases/shared/List'
import ListTeam from '@/components/Cases/shared/ListTeam'
import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import ListItemDot from '@/components/Cases/shared/ListItemDot'
import Swiper from '@/components/Cases/shared/Swiper'
import { team, swiperMadDevsTrip } from '@/data/caseSJMC'

export default {
  name: 'Trip',
  components: {
    TextParagraph,
    List,
    ListTeam,
    ListTeamItem,
    ListItemDot,
    Swiper,
  },

  data() {
    return {
      team,
      swiperMadDevsTrip,
    }
  },
}
</script>
