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

  data() {
    return {
      isIphone: false,
    }
  },

  mounted() {
    this.checkNavigatior()
    this.setupAutoplay()
  },

  methods: {
    checkNavigatior() {
      if (navigator.userAgent.match(/(iPhone)/i)) {
        this.isIphone = true
      } else {
        this.isIphone = false
      }
    },

    setupAutoplay() {
      const videoIds = ['map-video', 'iphone-silver-video']
      videoIds.forEach(video => {
        const callback = entries => {
          entries.forEach(entry => {
            if (entry.target.id === video) {
              if (entry.isIntersecting) {
                entry.target.play()
              }
            }
          })
        }
        const observer = new IntersectionObserver(callback, {
          root: null,
          rootMargin: '0px',
          threshold: 1.0,
        })
        observer.observe(document.getElementById(video))
      })
    },
  },
}
</script>
