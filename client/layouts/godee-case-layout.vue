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

export default {
  name: 'Default',
  components: { 
    ContactMeModal
  }
};
</script>

<style lang="scss" scoped>

</style>
