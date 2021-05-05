<template>
  <section>
    <div id="case-first-section" />
    <About />
    <HighLevelOverview />
    <ChallengesAndSolutions />
    <PhaseFixingDatabaseOutages />
    <PhaseContinuousIntegration />
    <ContinuousIntegrationResult />
    <PhaseElasticsearch />
    <PhaseElasticsearchResult />
    <PhaseCuttingTheCosts />
    <PhasInfrastructureAsCode />
    <PhasInfrastructureAsCodeResult />
    <Team />
  </section>
</template>

<script>
import About from '@/components/Cases/veeqo/About'
import HighLevelOverview from '@/components/Cases/veeqo/HighLevelOverview'
import ChallengesAndSolutions from '@/components/Cases/veeqo/ChallengesAndSolutions'
import PhaseFixingDatabaseOutages from '@/components/Cases/veeqo/PhaseFixingDatabaseOutages'
import PhaseContinuousIntegration from '@/components/Cases/veeqo/PhaseContinuousIntegration'
import ContinuousIntegrationResult from '@/components/Cases/veeqo/ContinuousIntegrationResult'
import PhaseElasticsearch from '@/components/Cases/veeqo/PhaseElasticsearch'
import PhaseElasticsearchResult from '@/components/Cases/veeqo/PhaseElasticsearchResult'
import PhaseCuttingTheCosts from '@/components/Cases/veeqo/PhaseCuttingTheCosts'
import PhasInfrastructureAsCode from '@/components/Cases/veeqo/PhasInfrastructureAsCode'
import PhasInfrastructureAsCodeResult from '@/components/Cases/veeqo/PhasInfrastructureAsCodeResult'
import Team from '@/components/Cases/veeqo/Team'

export default {
  name: 'Main',
  components: {
    About,
    HighLevelOverview,
    ChallengesAndSolutions,
    PhaseFixingDatabaseOutages,
    PhaseContinuousIntegration,
    ContinuousIntegrationResult,
    PhaseElasticsearch,
    PhaseElasticsearchResult,
    PhaseCuttingTheCosts,
    PhasInfrastructureAsCode,
    PhasInfrastructureAsCodeResult,
    Team,
  },
}
</script>
