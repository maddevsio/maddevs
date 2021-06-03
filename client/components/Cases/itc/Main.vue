<template>
  <section>
    <div id="case-first-section" />
    <About />
    <ProjectMission />
    <Technologies />
    <Team />
  </section>
</template>

<script>
import About from '@/components/Cases/itc/About'
import ProjectMission from '@/components/Cases/itc/ProjectMission'
import Team from '@/components/Cases/veeqo/Team'
import Technologies from '@/components/Cases/veeqo/Technologies'

export default {
  name: 'Main',
  components: {
    About,
    ProjectMission,
    Team,
    Technologies,
  },
}
</script>
