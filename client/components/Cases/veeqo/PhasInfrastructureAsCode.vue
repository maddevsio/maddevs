<template>
  <div class="container_regular">
    <h2 class="case_title_h2 m-12_bottom">
      Phase 6: Infrastructure as Code (IaC)
    </h2>
    <TextParagraph class="m-24_bottom">
      IaC is a way to manage large structures where manual operation is highly ineffective or simply impossible. To go fully IaC, our teams made fundamental changes in the ways we develop, deliver, and maintain our solutions.
    </TextParagraph>
    <h4 class="case_title_h4 m-12_bottom">
      Advantages of IaC
    </h4>
    <ol>
      <li>
        Control over resources: The more people have access to the cloud, the more expensive it is to use it. By introducing IaC, we rule out disorderly alterations in the system and prevent wastefulness, thus improving security and gaining firmer control over resources and costs.
      </li>
      <li>
        Reproducibility: IaC is the tool of ultimate reproducibility. By going straight to Terraform, one can avoid repetitive manual work, thus achieving: lower operating costs, higher speed, better coordination within the team, (ideally) fully automated infrastructure deployment.
      </li>
      <li>
        Security: Introduced changes can be tracked, reviewed, and analyzed automatically before delivery. It’s a reliable way to detect and fix vulnerabilities before they can make trouble.
      </li>
      <li>
        Reliable documentation: Documentation effectively stops being relevant once a new change is introduced into the system without being documented. With many changes going on, doc updates get easily forgotten. But if you have code for documentation, this problem is solved. There’s nothing more relevant for understanding a system than code itself. Ideally, what you have in master is what you have in production.
      </li>
    </ol>
    <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
      We are proud of our work with Veeqo and eager to share our successes. As our partnership continues, we’re constantly looking for new ways to meet Veeqo’s business needs and make its users’ experience better.
    </TextQuote>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuote from '@/components/Cases/shared/TextQuote'

export default {
  name: 'PhasInfrastructureAsCode',
  components: {
    TextParagraph,
    TextQuote,
  },
}
</script>
