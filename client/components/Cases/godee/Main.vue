<template>
  <section>
    <div class="case_content-layer p-48_bottom media-p-24_bottom">
      <div
        id="case-first-section"
        class="case_animation_block"
      />
      <About />
      <IssuesAndSolution />
    </div>
    <ParallaxImage />
    <div class="case_content-layer p-48_top media-p-24_top">
      <IssuesAndSolutionCards />
      <section class="container_full case_video-wrapper m-60_top media-m-24_top m-96_bottom media-m-48_bottom">
        <iframe
          width="1440"
          height="809"
          src="https://www.youtube.com/embed/_XCRbXmTUwI"
          frameborder="0"
          allowfullscreen
        />
      </section>
      <Collaboration />
      <Mvp />
      <BeforeAfter />
      <DevelopmentGoals />
      <PreviewCards />
      <IntellegentManagementPanel :is-iphone="isIphone" />
      <TripsMonitor :is-iphone="isIphone" />
      <RouteOptimisation :is-iphone="isIphone" />
      <RealTimeETA />
      <InfrastructureScheme />
      <TechnologyStack />
      <Monitoring />
      <StableScalableSolution />
      <Team />
    </div>
  </section>
</template>

<script>
import About from '@/components/Cases/godee/About'
import IssuesAndSolution from '@/components/Cases/godee/IssuesAndSolution'
import ParallaxImage from '@/components/Cases/godee/ParallaxImage'
import IssuesAndSolutionCards from '@/components/Cases/godee/IssuesAndSolutionCards'
import Collaboration from '@/components/Cases/godee/Collaboration'
import Mvp from '@/components/Cases/godee/Mvp'
import BeforeAfter from '@/components/Cases/godee/BeforeAfter'
import DevelopmentGoals from '@/components/Cases/godee/DevelopmentGoals'
import PreviewCards from '@/components/Cases/godee/PreviewCards'
import IntellegentManagementPanel from '@/components/Cases/godee/IntellegentManagementPanel'
import TripsMonitor from '@/components/Cases/godee/TripsMonitor'
import RouteOptimisation from '@/components/Cases/godee/RouteOptimisation'
import RealTimeETA from '@/components/Cases/godee/RealTimeETA'
import InfrastructureScheme from '@/components/Cases/godee/InfrastructureScheme'
import TechnologyStack from '@/components/Cases/godee/TechnologyStack'
import Monitoring from '@/components/Cases/godee/Monitoring'
import StableScalableSolution from '@/components/Cases/godee/StableScalableSolution'
import Team from '@/components/Cases/godee/Team'
import isIphoneMixin from '@/mixins/isIphoneMixin'
import autoplayVideoMixin from '@/mixins/autoplayVideoMixin'

export default {
  name: 'Main',
  components: {
    About,
    IssuesAndSolution,
    ParallaxImage,
    IssuesAndSolutionCards,
    Collaboration,
    Mvp,
    BeforeAfter,
    DevelopmentGoals,
    PreviewCards,
    IntellegentManagementPanel,
    TripsMonitor,
    RouteOptimisation,
    RealTimeETA,
    InfrastructureScheme,
    TechnologyStack,
    Monitoring,
    StableScalableSolution,
    Team,
  },

  mixins: [isIphoneMixin, autoplayVideoMixin(['trip-request-map', 'trip-monitor', 'route-optimization'])],
}
</script>
