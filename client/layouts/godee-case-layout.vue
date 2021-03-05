<template>
  <div class="godee-case-layout">
    <nuxt/>
    <client-only>
      <ContactMeModal />
    </client-only>
  </div>
</template>

<script>
import ContactMeModal from '@/components/Modals/contact-me-modal';
import initDriftHelper from '@/helpers/initDrift';

export default {
  name: 'Default',
  components: { 
    ContactMeModal
  },
  mounted() {
    const scrollContainer = document.getElementById('scroll-container');
    let driftLoader = () => {
      this.initDrift();
      scrollContainer.removeEventListener('scroll', driftLoader);
    };
	  scrollContainer.addEventListener('scroll', driftLoader);
  },
  methods: {
    initDrift() {
      initDriftHelper();
    }
  }
};
</script>

