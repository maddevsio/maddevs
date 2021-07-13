<template>
  <section class="container_regular">
    <h3 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Key project milestones
    </h3>
    <div class="m-96_bottom media-m-48_bottom case_key-project-milestones">
      <CardProjectMilestone
        v-for="projectMilestone in keyProjectMilestones"
        :key="projectMilestone.title"
        :title="projectMilestone.title"
        :description="projectMilestone.description"
        :background="projectMilestone.background"
      />
    </div>
  </section>
</template>

<script>
import CardProjectMilestone from '@/components/Cases/yourcast/CardProjectMilestone'
import { keyProjectMilestones } from '@/data/caseYourcast'

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
.case {
  &_key-project-milestones {
    @include grid(1fr, auto, 0, 20px);

    @media screen and (max-width: 768px) {
      grid-row-gap: 10px;
    }
  }
}
</style>
