<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Challenges and solutions
    </h2>
    <TextParagraph>
      In making Veeqo the reliable and efficient system it is today, our teams faced serious technical challenges. Addressing them required profound expertise, creative solutions, and intensive work. Particularly important were the contributions of our DevOps engineers.
    </TextParagraph>
    <TextQuoteBox class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto">
      The role of DevOps specialists is to bring order and predictability to the development process: remove bottlenecks, simplify delivery, and automate as many processes as possible. The goal is to turn the development of features into a smoothly running conveyor belt.
    </TextQuoteBox>
    <TextParagraph class="m-96_bottom media-m-48_bottom">
      When we joined the Veeqo project, our DevOps team started sorting out existing blockages in the development process, prioritizing those that affected Veeqo’s users and the client’s business the most.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'

export default {
  name: 'ChallengesAndSolutions',
  components: {
    TextParagraph,
    TextQuoteBox,
  },
}
</script>
