<template>
  <section class="container_regular">
    <h2
      class="case_title_h2 m-24_bottom media-m-12_bottom"
    >
      Key project milestones
    </h2>
    <div class="m-96_bottom media-m-48_bottom case_key-project-milestones">
      <CardProjectMilestone
        v-for="(projectMilestone, i) in keyProjectMilestones"
        :key="i"
        :project-milestone="projectMilestone"
      />
    </div>
  </section>
</template>

<script>
import CardProjectMilestone from '@/components/Cases/Kaf/CardProjectMilestone'
import { keyProjectMilestones } from '@/data/kafCase'

export default {
  name: 'KeyProjectMilestones',
  components: {
    CardProjectMilestone,
  },

  data() {
    return {
      keyProjectMilestones,
    }
  },
}
</script>

<style lang="scss">
@import '../../../assets/styles/cases/mixins';

.case {
  &_key-project-milestones {
    @include grid(1fr, auto, 0, 20px);

    @media screen and (max-width: 768px) {
      grid-row-gap: 10px;
    }
  }
}
</style>
