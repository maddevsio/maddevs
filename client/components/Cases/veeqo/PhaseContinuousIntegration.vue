<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom">
      Phase 1: Fixing database outages
    </h2>
    <Card class="background-color-silver">
      <h3 class="case_title_h4 m-8_bottom">
        Challenge
      </h3>
      <TextParagraph>
        Development processes lacked consistency. Particularly, the project had manually configured CI system and pipelines, different development, test, and production environments and runtimes, non-reproducible development environment, inconsistent test builds.
      </TextParagraph>
    </Card>
    <Card class="background-color-blue-light">
      <h3 class="case_title_h4 m-8_bottom">
        Solution
      </h3>
      <TextParagraph>
        Dockerization is the most viable solution today to set up continuous delivery. As our application was back then partially hosted on Heroku, we created a unified runtime for developers and CI by dockerizing the main app using a Heroku Stack image and Docker Compose. It made CI reliable and allowed simplifying deployment. Also, it sped up bootstrapping of the development environment.
      </TextParagraph>
    </Card>
    <TextQuoteBox class="m-48_top m-96_bottom media-m-24_top media-m-72_bottom m-auto">
      The developers didn’t trust their CI system. CI wasn’t helping them; it was hindering their work instead. It’s just bad DevOps.
    </TextQuoteBox>
    <h3 class="case_title_h3 m-38_bottom media-m-24_bottom">
      What we achieved
    </h3>
    <div class="case_results">
      <div class="case_result-item">
        Reproducible CI results
      </div>
      <div class="case_result-item">
        Unified runtime
      </div>
      <div class="case_result-item">
        Standardized development, test, and production environments
      </div>
    </div>
    <h3 class="case_title_h3 m-12_bottom">
      Moving Jenkins
    </h3>
    <TextParagraph class="m-34_bottom">
      Jenkins was operated manually on a separate EC2 instance. Managing it was thus challenging, especially in emergencies. We moved the Jenkins master to ECS by remaking its provisioning, deployment, and updating (Later, we’ll move it to k8s, but in 2017, ECS was the only good option for us). We reduced build time and cost by allocating a small part of compute resources of Jenkins agents to reserved instances and moving 90% of the load to spot instances.
    </TextParagraph>
    <TextParagraph class="case_bold">
      We further renovated CI by:
    </TextParagraph>
    <List>
      <ListItemDot>Creating Jenkinsfiles for all repositories thus making pipelines reproducible</ListItemDot>
      <ListItemDot>Creating backups</ListItemDot>
      <ListItemDot>Running access audit and configuring SSO for more secure access</ListItemDot>
    </List>
    <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-72_bottom">
      Everything down to the last comma is now written in the form of code. Even if we took Jenkins down completely and had to build it from scratch again, it’d take us no more than 10 minutes.
    </TextQuote>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import TextQuote from '@/components/Cases/shared/TextQuote'
import ListItemDot from '@/components/Cases/shared/ListItemDot'
import List from '@/components/Cases/shared/List'

export default {
  name: 'PhaseContinuousIntegration',
  components: {
    TextParagraph,
    Card,
    TextQuoteBox,
    TextQuote,
    ListItemDot,
    List,
  },
}
</script>
