<template>
  <section class="container_regular m-66_bottom media-m-48_bottom">
    <h2 class="case_title_h2 m-12_bottom">
      Phase 3: Elasticsearch
    </h2>
    <TextParagraph class="m-24_bottom">
      Elasticsearch is crucial in the way users experience the Veeqo platform: the dashboard and the entire interface rely on Elasticsearch. Even if everything else functions flawlessly, delays in the search engine alone cause problems for user experience.
    </TextParagraph>
    <div class="case_cards-container m-96_bottom media-m-48_bottom">
      <Card class="background-color-silver">
        <h3 class="case_title_h4 m-8_bottom">
          Challenge
        </h3>
        <TextParagraph>
          Elasticsearch didn’t cope with the load due to its outdated version and non-optimized configurations.
        </TextParagraph>
      </Card>
      <Card class="background-color-blue-light">
        <h3 class="case_title_h4 m-8_bottom">
          Effect on users
        </h3>
        <TextParagraph>
          The users were often unable to access search results. Elasticsearch would expose them to delays of up to 30 seconds.
        </TextParagraph>
      </Card>
    </div>
    <h3 class="case_title_h4 m-8_bottom">
      Solution
    </h3>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      There are two main ways to improve performance: Increase compute resources, Optimize the use of resources
    </TextParagraph>
    <TextParagraph class="m-34_bottom media-m-24_bottom">
      At any given moment DevOps specialists calculate and evaluate cost factors of different solutions. We applied both types of solutions as we started with enhancing the cluster and later optimized indexing to make searching as convenient for users as possible.
    </TextParagraph>
    <div class="case_cards-container">
      <Card
        class="background-color-silver"
        padding="24px"
      >
        <h4 class="case_title_h4 m-8_bottom">
          New cluster
        </h4>
        <TextParagraph class="m-32_bottom">
          We implemented a new Elasticsearch cluster as a self-hosted solution on EC2 instances.
        </TextParagraph>
        <TextParagraph class="case_bold">
          Three reasons:
        </TextParagraph>
        <List>
          <ListItemDot>Control over the security of our Elasticsearch</ListItemDot>
          <ListItemDot>Immediate response in case of incidents</ListItemDot>
          <ListItemDot>Independent monitoring and investigation of Elasticsearch performance</ListItemDot>
        </List>
      </Card>
      <Card
        class="background-color-silver"
        padding="24px"
      >
        <h4 class="case_title_h4 m-8_bottom">
          Indexing and performance
        </h4>
        <TextParagraph class="m-32_bottom">
          The indices featured too much unnecessary information and non-optimized mapping.
        </TextParagraph>
        <TextParagraph class="case_bold">
          What we did:
        </TextParagraph>
        <List>
          <ListItemDot>Refactored them to make them concise</ListItemDot>
          <ListItemDot>Used the replication and sharding mechanisms to distribute the indices among five nodes</ListItemDot>
        </List>
      </Card>
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import ListItemDot from '@/components/Cases/shared/ListItemDot'
import List from '@/components/Cases/shared/List'

export default {
  name: 'PhaseElasticsearch',
  components: {
    TextParagraph,
    Card,
    ListItemDot,
    List,
  },
}
</script>

<style lang="scss" scoped>
.case {
  &_cards-container {
    @include grid(repeat(2, 1fr), auto, 25px, 0);

    @media screen and (max-width: 880px) {
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }
  }

  &_bold {
    font-weight: 700;
  }
}

/deep/ .list-item_dot {
  margin-bottom: 0;
}
</style>
