<template>
  <main class="main">
    <ServicesBanner />
    <RemoteTechStaff />
    <SoftwareDevelopment />
    <InfrastructureOptimisation />
    <ItConsulting />
  </main>
</template>

<script>
import ServicesBanner from '@/components/core/banners/ServicesBanner'
import RemoteTechStaff from '@/components/Services/RemoteTechStaff'
import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment'
import InfrastructureOptimisation from '@/components/Services/InfrastructureOptimisation'
import ItConsulting from '@/components/Services/ItСonsulting'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'MainServices',
  components: {
    ServicesBanner,
    RemoteTechStaff,
    SoftwareDevelopment,
    InfrastructureOptimisation,
    ItConsulting,
  },

  mixins: [initLazyLoadMixin],

  head() {
    return buildHead(getMetadata('services'))
  },
}
</script>
