<template>
  <section class="case_body p-48_top media-p-24_top">
    <AboutYourcast id="case-first-section" />
    <ProjectInNumbers />
    <SupportedGadgets />
    <Technologies />
    <KeyProjectMilestones />
    <PhaseOnlineCinema />
    <PhaseLiveStreamingTechnology />
    <PhaseRedesignAndOptimisations />
    <FullPlatformArchitecture />
    <PhaseVideoOnDemand />
    <PhaseUserAuthorisation />
    <WatchWhatYouLikeVideo />
    <PlansForSimilarProjects />
    <Team />
  </section>
</template>

<script>
import AboutYourcast from '@/components/Cases/yourcast/AboutYourcast'
import ProjectInNumbers from '@/components/Cases/yourcast/ProjectInNumbers'
import SupportedGadgets from '@/components/Cases/yourcast/SupportedGadgets'
import Technologies from '@/components/Cases/yourcast/Technologies'
import KeyProjectMilestones from '@/components/Cases/yourcast/KeyProjectMilestones'
import PhaseOnlineCinema from '@/components/Cases/yourcast/PhaseOnlineCinema'
import PhaseLiveStreamingTechnology from '@/components/Cases/yourcast/PhaseLiveStreamingTechnology'
import PhaseRedesignAndOptimisations from '@/components/Cases/yourcast/PhaseRedesignAndOptimisations'
import FullPlatformArchitecture from '@/components/Cases/yourcast/FullPlatformArchitecture'
import PhaseVideoOnDemand from '@/components/Cases/yourcast/PhaseVideoOnDemand'
import PhaseUserAuthorisation from '@/components/Cases/yourcast/PhaseUserAuthorisation'
import WatchWhatYouLikeVideo from '@/components/Cases/yourcast/WatchWhatYouLikeVideo'
import PlansForSimilarProjects from '@/components/Cases/yourcast/PlansForSimilarProjects'
import Team from '@/components/Cases/yourcast/Team'
import autoplayVideoMixin from '@/mixins/autoplayVideoMixin'

export default {
  components: {
    AboutYourcast,
    ProjectInNumbers,
    SupportedGadgets,
    Technologies,
    KeyProjectMilestones,
    PhaseOnlineCinema,
    PhaseLiveStreamingTechnology,
    PhaseRedesignAndOptimisations,
    FullPlatformArchitecture,
    PhaseVideoOnDemand,
    PhaseUserAuthorisation,
    WatchWhatYouLikeVideo,
    PlansForSimilarProjects,
    Team,
  },

  mixins: [autoplayVideoMixin(['yourcast-tv'], {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  })],

}
</script>
