<template>
  <section>
    <div id="case-first-section" />
    <About />
    <ProjectMission />
    <Challenges />
    <SavingTime />
    <CollectingDataForAnalysis />
    <DevelopingTheInnovation />
    <Technologies />
    <Team />
    <FuturePlans />
    <Partnership />
  </section>
</template>

<script>
import About from '@/components/Cases/itc/About'
import ProjectMission from '@/components/Cases/itc/ProjectMission'
import Team from '@/components/Cases/itc/Team'
import Technologies from '@/components/Cases/itc/Technologies'
import Challenges from '@/components/Cases/itc/Challenges'
import SavingTime from '@/components/Cases/itc/SavingTime'
import CollectingDataForAnalysis from '@/components/Cases/itc/CollectingDataForAnalysis'
import DevelopingTheInnovation from '@/components/Cases/itc/DevelopingTheInnovation'
import FuturePlans from '@/components/Cases/itc/FuturePlans'
import Partnership from '@/components/Cases/itc/Partnership'

export default {
  name: 'Main',
  components: {
    About,
    ProjectMission,
    Team,
    Technologies,
    Challenges,
    SavingTime,
    CollectingDataForAnalysis,
    DevelopingTheInnovation,
    FuturePlans,
    Partnership,
  },
}
</script>
