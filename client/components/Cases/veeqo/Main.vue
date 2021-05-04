<template>
  <section>
    <div id="case-first-section" />
    <About />
    <HighLevelOverview />
    <ChallengesAndSolutions />
    <PhaseFixingDatabaseOutages />
    <PhaseContinuousIntegration />
    <ContinuousIntegrationResult />
  </section>
</template>

<script>
import About from '@/components/Cases/veeqo/About'
import HighLevelOverview from '@/components/Cases/veeqo/HighLevelOverview'
import ChallengesAndSolutions from '@/components/Cases/veeqo/ChallengesAndSolutions'
import PhaseFixingDatabaseOutages from '@/components/Cases/veeqo/PhaseFixingDatabaseOutages'
import PhaseContinuousIntegration from '@/components/Cases/veeqo/PhaseContinuousIntegration'
import ContinuousIntegrationResult from '@/components/Cases/veeqo/ContinuousIntegrationResult'

export default {
  name: 'Main',
  components: {
    About,
    HighLevelOverview,
    ChallengesAndSolutions,
    PhaseFixingDatabaseOutages,
    PhaseContinuousIntegration,
    ContinuousIntegrationResult,
  },
}
</script>
