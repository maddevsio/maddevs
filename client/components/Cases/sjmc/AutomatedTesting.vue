<template>
  <section class="container_regular">
    <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
      Automated testing the MMIT Brain via custom emulators
    </h2>
    <TextParagraph class="m-6_bottom">
      Auto-testing of the MMIT Brain can be sorted into two categories:
    </TextParagraph>
    <List class="m-32_bottom">
      <ListItemDot>The synchronisation of two internal information systems.</ListItemDot>
      <ListItemDot>
        End to end testing to ensure seamless user experience for thousands of SJMC visitors.
      </ListItemDot>
    </List>
    <TextParagraph class="m-72_bottom media-m-48_bottom">
      Testing the accuracy of new content and feature deployment is a challenge due to the 5000 km distance that
      separate Mad Devs’ office and the SJMC. Thus, our back-end developers developed two types of emulation
      software that enables Mad Devs to test the MMIT Brain without accumulating additional travel expenses.
    </TextParagraph>
    <h3 class="case_title_h3 m-12_bottom">
      1. Internal information systems synchronization
    </h3>
    <TextParagraph>
      The emulator code tests the interaction of two independent information systems that control multimedia
      software and intelligent infrastructure integrations.
    </TextParagraph>
    <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
      The internal information systems synchronisation emulator makes the infrastructure control system believe that
      emulated hardware is real.
    </TextQuoteBox>
    <TextParagraph class="m-24_bottom media-m-12_bottom">
      For example, in case of an emergency like a water leakage, a smart building control system that controls
      electricity has to communicate the emergency to multimedia software through the MMIT Brain and turn off all
      multimedia computers to avoid closure.
    </TextParagraph>
    <TextParagraph class="m-72_bottom media-m-48_bottom">
      Without such an emulator, Mad Devs’ developers would not be able to look at the MMIT Brain code and understand
      whether the Brain has transferred the command from one system to another. Without such an emulator, the team
      would be clueless regarding whether the command had been successfully executed or not.
    </TextParagraph>
    <h3 class="case_title_h3">
      2. End to end tests using emulators of mobile applications
    </h3>
    <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
      A mobile applications emulator enables the SJMC to run all possible user experiences on all possible virtual
      multimedia sites.
    </TextQuoteBox>
    <TextParagraph class="m-96_bottom media-m-48_bottom">
      All possible interactions with WATCHOUT site multimedia computers including touch screens, multiple users
      watching simultaneously, and switching audio and subtitle languages usually last a minimum of 6 hours. The
      emulator for end to end testing accomplishes the tests in just 20 minutes.
    </TextParagraph>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import List from '@/components/Cases/shared/List'
import ListItemDot from '@/components/Cases/shared/ListItemDot'

export default {
  name: 'AutomatedTesting',
  components: {
    TextParagraph,
    TextQuoteBox,
    List,
    ListItemDot,
  },
}
</script>
