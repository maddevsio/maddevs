<template>
  <section class="container_regular">
    <Card class="case_issues-godee-card background-color-silver">
      <CardIssuesGoDee />
    </Card>
    <Card class="background-color-orange">
      <CardSolutionGoDee />
    </Card>
  </section>
</template>

<script>
import Card from '@/components/Cases/shared/Card'
import CardIssuesGoDee from '@/components/Cases/godee/cards/CardIssuesGoDee'
import CardSolutionGoDee from '@/components/Cases/godee/cards/CardSolutionGoDee'

export default {
  name: 'IssuesAndSolutionCards',
  components: {
    Card,
    CardIssuesGoDee,
    CardSolutionGoDee,
  },
}
</script>

<style>

</style>
