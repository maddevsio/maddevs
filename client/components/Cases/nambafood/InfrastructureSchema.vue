<template>
  <section>
    <section class="container_regular">
      <h3 class="text-center case_title_h3 m-107_top m-24_bottom media-m-48_top">
        Website and mobile app infrastructure scheme
      </h3>
    </section>
    <section class="container_full background-color-silver">
      <img
        src="../../../assets/img/Cases/nambafood/gif/website-and-mobile-apps-infrastructure-scheme.gif"
        class="case_gif case_website-and-mobile-apps-infrastructure-scheme-gif"
        alt="Namba Food: Website and Mobile App Infrastructure Scheme."
      />
    </section>
    <section class="container_regular">
      <TextParagraph class="m-24_top">
        A local hosting provider is used to host the infrastructure. When a system receives a request from the client,
        it is handled by the Nginx proxy. When the Mad Devs team deploys a new version, we use the Nginx Gen server. The
        Nginx proxy sends requests to the website, which is in turn connected to the MySQL database, and Redis serves as
        an in-memory key-value storage.
      </TextParagraph>
      <TextParagraph class="m-24_top media-m-12_top">
        All our services run in Docker containers, which simplifies the process of infrastructure maintenance and
        monitoring.
      </TextParagraph>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph'

export default {
  name: 'InfrastructureSchema',
  components: {
    TextParagraph,
  },
}
</script>

<style scoped lang="scss">
.text-center {
  text-align: center;
}
</style>