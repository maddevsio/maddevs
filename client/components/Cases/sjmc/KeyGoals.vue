<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-48_bottom media-m-24_bottom">
      Key goals for Mad Devs
    </h2>
    <List class="m-96_bottom media-m-48_bottom">
      <ListItemBoxCheckMark
        v-for="goal in keyGoalsList"
        :key="goal"
      >
        {{ goal }}
      </ListItemBoxCheckMark>
    </List>
  </section>
</template>

<script>
import List from '@/components/Cases/shared/List'
import ListItemBoxCheckMark from '@/components/Cases/shared/ListItemBoxCheckMark'
import { keyGoalsList } from '@/data/caseSJMC'

export default {
  name: 'KeyGoals',
  components: {
    List,
    ListItemBoxCheckMark,
  },

  data() {
    return {
      keyGoalsList,
    }
  },
}
</script>
