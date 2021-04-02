<template>
  <section>
    <div
      id="case-first-section"
      class="case_animation_block"
    />
    <About />
    <Partnership />
    <TheChallenges />
    <Software />
    <!-- <section class="container_full case_full-screen-slider">
      <Swiper
        :components="swiperMultimediaManagement"
        :safariTopBar="false"
        :boxShadow="false"
        sliderDescription="Australia-based IT company to create integrated multimedia solutions."
      />
    </section> -->
    <MobileApplications />
    <Hardware />
    <KeyGoals />
    <Technologies />
    <Office />
    <TeamIssues />
    <SystemMonitoring />
    <AutomatedTesting />
    <Trip />
    <OngoingPartnership />
  </section>
</template>

<script>
import About from '@/components/Cases/sjmc/About'
import Partnership from '@/components/Cases/sjmc/Partnership'
import TheChallenges from '@/components/Cases/sjmc/TheChallenges'
import Software from '@/components/Cases/sjmc/Software'
import MobileApplications from '@/components/Cases/sjmc/MobileApplications'
import Hardware from '@/components/Cases/sjmc/Hardware'
import KeyGoals from '@/components/Cases/sjmc/KeyGoals'
import Technologies from '@/components/Cases/sjmc/Technologies'
import Office from '@/components/Cases/sjmc/Office'
import TeamIssues from '@/components/Cases/sjmc/TeamIssues'
import SystemMonitoring from '@/components/Cases/sjmc/SystemMonitoring'
import AutomatedTesting from '@/components/Cases/sjmc/AutomatedTesting'
import Trip from '@/components/Cases/sjmc/Trip'
import OngoingPartnership from '@/components/Cases/sjmc/OngoingPartnership'

export default {
  name: 'Main',
  components: {
    About,
    Partnership,
    TheChallenges,
    Software,
    MobileApplications,
    Hardware,
    KeyGoals,
    Technologies,
    Office,
    TeamIssues,
    SystemMonitoring,
    AutomatedTesting,
    Trip,
    OngoingPartnership,
  },
}
</script>
