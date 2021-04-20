<template>
  <section>
    <section class="container_regular">
      <h3 class="case_title_h3 m-78_top media-m-48_top m-12_bottom">
        Technical debt
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Although the previous vendors have developed incredible software, an independent organisation prepared a
        detailed audit and evaluated deficiencies or areas of improvement.
      </TextParagraph>
      <TextParagraph class="m-72_bottom media-m-48_bottom">
        The complexity of the system raises particular challenges for the Mad Devs team, as they had to submerge
        themselves into the full comprehensiveness of the Brain solution to be able to improve it. It took our team a
        month of onboarding and reading documentation before we could fix even a minor issue.
      </TextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Code refactoring and optimization
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Refactoring the SJMC code and covering it with the unit and integration tests improved the stability and
        usability of both mobile applications and the MMIT Brain.
      </TextParagraph>
      <TextParagraph class="m-72_bottom media-m-48_bottom">
        On top of that, by establishing an efficient testing process we significantly increased iOS and Android
        applications' 40% test coverage that ultimately prevented defect leakage. Moreover, after fighting 1000+ minor
        defects and optimising applications to support the latest mobile operating systems, Mad Devs’ engineers
        successfully finished the technical debt on time and planned the deployment of the changes on site.
      </TextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Analytics and user-friendly reports
      </h3>
      <TextParagraph class="m-48_bottom media-m-24_bottom">
        Extensive SJMC data gathered from the Multimedia IT System is organised into user-friendly reports by an
        Analytics feature. Such reports enabled the Centre’s managers to easily track performance and report directly
        to stakeholders.
      </TextParagraph>
    </section>
    <section class="container_middle">
      <Picture
        :shadow="true"
        :width="1025"
        :height="516"
        folder="sjmc"
        file="kibana-reports"
        extension="jpg"
        alt="Kibana Reports Which Help to Manage SJMC Hardware in a Single Dashboard."
      />
    </section>
    <section class="container_regular">
      <TextParagraph class="m-48_top media-m-24_top m-6_bottom">
        The analytics show the following metrics:
      </TextParagraph>
      <List class="m-104_bottom media-m-56_bottom">
        <ListItemDot>Number of visitors</ListItemDot>
        <ListItemDot>Number of school groups</ListItemDot>
        <ListItemDot>Number of students</ListItemDot>
        <ListItemDot>Average visit time – i.e. time detected on-site</ListItemDot>
        <ListItemDot>
          The average length of time of the SJMC Experience – i.e. time between connections to first and last
          site
        </ListItemDot>
        <ListItemDot>
          Popular stands, by analysing the longevity of visitors listening to/watching/interacting with
          content
        </ListItemDot>
        <ListItemDot>Average time visitors spend in each SJMC zone</ListItemDot>
      </List>
    </section>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import List from '@/components/Cases/shared/List'
import ListItemDot from '@/components/Cases/shared/ListItemDot'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'TeamIssues',
  components: {
    TextParagraph,
    List,
    ListItemDot,
    Picture,
  },
}
</script>
