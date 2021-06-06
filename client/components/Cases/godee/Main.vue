<template>
  <main
    id="case-scroll-container"
    ref="main"
    class="case case_parallax"
  >
    <CaseHeader
      :logo="logo"
      project="godee"
      video-name="/videos/godee-case-main-video.mp4"
      video-fallback-path="/images/Cases/godee/jpg/godee-case-preview.jpg"
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        Convenient shuttle <br>
        bus service
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        Mad Devs helped GoDee with developing feature-rich software to re-invent <br>
        public mobility by building new smart ways of a daily commute.
      </p>
    </CaseHeader>
    <div class="case_content-layer p-48_bottom media-p-24_bottom media-p-24_top">
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
    <CaseFooter
      link="/case-studies/namba-food/"
      class-name="namba-food"
    >
      <img
        slot="icon"
        :data-src="require(`@/assets/img/Studies/svg/nambafood-footer.svg`)"
        alt="Namba Food"
        class="case_logotype-namba-food img_lazy"
      >
      Namba Food <br>
      Top Delivery Service in <br class="case_mobile-break-namba-food">
      Central Asia
    </CaseFooter>
    <!-- Добавил главный футер сайта, так как из-за того что скролл на странице находиться у элемента .main, нельзя доскроллить фо футера -->
    <Footer class="background-color-black" />
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/shared/CaseHeader'
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
import CaseFooter from '@/components/Cases/shared/CaseFooter'
import Footer from '@/components/core/Footer/Footer'
import isIphoneMixin from '@/mixins/isIphoneMixin'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import playVideo from '@/helpers/playVideo'

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -2px 0px',
  threshold: 0.8,
}

export default {
  name: 'Main',
  components: {
    CaseHeader,
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
    CaseFooter,
    Footer,
  },

  mixins: [
    isIphoneMixin,
    IntersectionObserverMixin(
      ['trip-request-map', 'trip-monitor', 'route-optimization'],
      playVideo,
      observerOptions,
    ),
  ],

  data() {
    return {
      logo: {
        width: 293,
        height: 130,
        folder: 'godee',
        file: 'godee-logo',
        alt: 'Godee Logo',
      },
    }
  },
}
</script>
