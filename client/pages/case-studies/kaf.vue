<template>
  <main class="case">
    <CaseHeader :header-logo="headerLogo" video-name="" video-fallback-path="/images/Cases/kaf/png/banner-bg.png">
      <h1 slot="title" class="case_header-title">
        The Evolution <br />
        of Yourcast.TV
      </h1>
      <p slot="description" class="case_header-description">
        Mad Devs developed a secure and private video streaming service and live <br />
        video broadcasting cinema to provide entertainment experience to isolated <br />
        groups feeling homesick.
      </p>
    </CaseHeader>
    <section id="case-body" class="case_body p-48_top media-p-24_top">
      <AboutKaf />
      <ProjectInNumbers />
      <SupportedGadgets />
      <TechnologyStack />
      <KeyProjectMilestones />
      <PhaseOnlineCinema />
      <PhaseLiveStreamingTechnology />
      <PhaseRedesignAndOptimisations />
      <FullPlatformArchitecture />
      <PhaseVideoOnDemand />
      <PhaseUserAuthorisation />
      <WatchWhatYouLikeVideo />
      <PlansForSimilarProjects />
      <MeetTheTeam />
    </section>
    <Footer link="/case-studies/sir-john-monash-centre/" class-name="kaf-case">
      <div slot="icon" class="case_logotype"></div>
      The maintenance <br class="case_mobile-break" />
      of memory: <br />
      Sir John Monash <br class="case_mobile-break" />
      Centre
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/CaseHeader'
import Footer from '@/components/Cases/Footer'
import AboutKaf from '@/components/Cases/Kaf/AboutKaf'
import ProjectInNumbers from '@/components/Cases/Kaf/ProjectInNumbers'
import SupportedGadgets from '@/components/Cases/Kaf/SupportedGadgets'
import TechnologyStack from '@/components/Cases/Kaf/TechnologyStack'
import KeyProjectMilestones from '@/components/Cases/Kaf/KeyProjectMilestones'
import PhaseOnlineCinema from '@/components/Cases/Kaf/PhaseOnlineCinema'
import PhaseLiveStreamingTechnology from '@/components/Cases/Kaf/PhaseLiveStreamingTechnology'
import PhaseRedesignAndOptimisations from '@/components/Cases/Kaf/PhaseRedesignAndOptimisations'
import FullPlatformArchitecture from '@/components/Cases/Kaf/FullPlatformArchitecture'
import PhaseVideoOnDemand from '@/components/Cases/Kaf/PhaseVideoOnDemand'
import PhaseUserAuthorisation from '@/components/Cases/Kaf/PhaseUserAuthorisation'
import WatchWhatYouLikeVideo from '@/components/Cases/Kaf/WatchWhatYouLikeVideo'
import PlansForSimilarProjects from '@/components/Cases/Kaf/PlansForSimilarProjects'
import MeetTheTeam from '@/components/Cases/Kaf/MeetTheTeam'

export default {
  name: 'KafCase',
  components: {
    CaseHeader,
    Footer,
    AboutKaf,
    ProjectInNumbers,
    SupportedGadgets,
    TechnologyStack,
    KeyProjectMilestones,
    PhaseOnlineCinema,
    PhaseLiveStreamingTechnology,
    PhaseRedesignAndOptimisations,
    FullPlatformArchitecture,
    PhaseVideoOnDemand,
    PhaseUserAuthorisation,
    WatchWhatYouLikeVideo,
    PlansForSimilarProjects,
    MeetTheTeam,
  },

  data() {
    return {
      headerLogo: {
        width: 387,
        height: 81.23,
        pictureFolder: 'kaf',
        fileName: 'kaf-logo',
        alt: '',
      },
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/mixins';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/kaf/styles';
@import '../../assets/styles/cases/media';
</style>
