<template>
  <main class="main">
    <BannerContainer />
    <RemoteTechStaff />
    <SoftwareDevelopment />
    <InfrastructureOptimisation />
    <ItConsulting />
  </main>
</template>

<script>
import BannerContainer from '@/containers/BannerContainer';
import RemoteTechStaff from '@/components/Services/RemoteTechStaff';
import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment';
import InfrastructureOptimisation from '@/components/Services/InfrastructureOptimisation';
import ItConsulting from '@/components/Services/ItСonsulting';

export default {
  name: 'main-services',
  components: {
    BannerContainer,
    RemoteTechStaff,
    SoftwareDevelopment,
    InfrastructureOptimisation,
    ItConsulting
  },
  data() {
    return {
      title: 'Mad Devs: Custom Software Development and Mobile App Creation Services',
      description: 'We deliver software engineering and mobile app development services, software testing and QA services, DevOps and IT consulting services to businesses of any size.',
      ogUrl: 'https://maddevs.io/services'
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },
        { property: 'og:url', content: this.ogUrl },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: 'https://maddevs.io/Open-Graph.png' }
      ]
    };
  }
};
</script>
