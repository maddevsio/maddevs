<template>
  <section class="container_regular">
    <h3 class="case_title_h3 m-48_top m-12_bottom">
      The challenges
    </h3>
    <List>
      <ListHyphenItemBox
        v-for="challenge in theChallenges"
        :key="challenge"
      >
        {{ challenge }}
      </ListHyphenItemBox>
    </List>
  </section>
</template>

<script>
import List from '@/components/Cases/shared/List'
import ListHyphenItemBox from '@/components/Cases/shared/ListHyphenItemBox'
import { theChallenges } from '@/data/caseSJMC'

export default {
  name: 'TheChallenges',
  components: {
    List,
    ListHyphenItemBox,
  },

  data() {
    return {
      theChallenges,
    }
  },
}
</script>
