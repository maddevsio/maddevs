<template>
  <section
    ref="caseBody"
    class="case_body"
  >
    <div
      id="case-first-section"
      class="case_animation_block"
    />
    <About />
    <BusinessModel />
    <SystemOverview />
    <UsageScenarios />
    <Applications :is-iphone="isIphone" />
    <OrderingProcess />
    <TrackStatuses />
    <CouriersApplication />
    <AdminPanel />
    <Integrating />
    <Swift :is-iphone="isIphone" />
    <Grafana />
    <Technologies />
    <InfrastructureSchema />
    <Pipelines />
    <Team />
    <NationwideSuccess />
  </section>
</template>

<script>
import About from '@/components/Cases/nambafood/About'
import BusinessModel from '@/components/Cases/nambafood/BusinessModel'
import SystemOverview from '@/components/Cases/nambafood/SystemOverview'
import UsageScenarios from '@/components/Cases/nambafood/UsageScenarios'
import Applications from '@/components/Cases/nambafood/Applications'
import OrderingProcess from '@/components/Cases/nambafood/OrderingProcess'
import TrackStatuses from '@/components/Cases/nambafood/TrackStatuses'
import CouriersApplication from '@/components/Cases/nambafood/CouriersApplication'
import AdminPanel from '@/components/Cases/nambafood/AdminPanel'
import Integrating from '@/components/Cases/nambafood/Integrating'
import Swift from '@/components/Cases/nambafood/Swift'
import Grafana from '@/components/Cases/nambafood/Grafana'
import Technologies from '@/components/Cases/nambafood/Technologies'
import InfrastructureSchema from '@/components/Cases/nambafood/InfrastructureSchema'
import Pipelines from '@/components/Cases/nambafood/Pipelines'
import Team from '@/components/Cases/nambafood/Team'
import NationwideSuccess from '@/components/Cases/nambafood/NationwideSuccess'
import isIphoneMixin from '@/mixins/isIphoneMixin'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import playVideo from '@/helpers/playVideo'

export default {
  name: 'Main',
  components: {
    About,
    BusinessModel,
    SystemOverview,
    UsageScenarios,
    Applications,
    OrderingProcess,
    TrackStatuses,
    CouriersApplication,
    AdminPanel,
    Integrating,
    Swift,
    Grafana,
    Technologies,
    InfrastructureSchema,
    Pipelines,
    Team,
    NationwideSuccess,
  },

  mixins: [
    isIphoneMixin,
    IntersectionObserverMixin(
      ['map-video', 'iphone-silver-video'],
      playVideo,
    ),
  ],
}
</script>
