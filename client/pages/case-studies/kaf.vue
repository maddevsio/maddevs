<template>
  <main class="case">
    <CaseHeader
      :header-logo="headerLogo"
      video-name=""
    >
      <h1
        slot="title"
        class="case_header-title"
      >
        The Evolution <br>
        of Yourcast.TV
      </h1>
      <p
        slot="description"
        class="case_header-description"
      >
        Mad Devs developed a secure and private video streaming service and live <br>
        video broadcasting cinema to provide entertainment experience to isolated <br>
        groups feeling homesick.
      </p>
    </CaseHeader>
    <section
      id="case-first-section"
      class="case_body p-48_top media-p-24_top"
    >
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
          OTT-like video streaming platform & online cinema
        </h2>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          A custom video streaming solution* was created to provide the ultimate entertainment experience to isolated
          groups of people feeling homesick. Access and the ability to securely watch familiar and up-to-date content on
          any device is something that closely resembles home and its comforts.
        </TextParagraph>
        <TextParagraph>
          According to the Statement of Work, we ensured the platform’s 100% autonomous work and strictly followed the
          security compliance requirements. However, due to an NDA, we are not authorised to share the how-tos and best
          practices related to security.
        </TextParagraph>
        <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
          We respect the customer’s request to keep this project under the NDA and will not disclose the project name
          while sharing its details.
        </TextQuote>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
          Project in numbers
        </h2>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          Being a small, highly customised video streaming and online cinema platform, the service remains popular, with
          its audience sharing new feature requests for Mad Devs.
        </TextParagraph>
        <div class="m-96_bottom media-m-48_bottom">
          <!-- Тут будет карточка -->
        </div>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
          Supported gadgets
        </h2>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          The platform is available on any device and remains equally friendly to both web and mobile users. Since 2016,
          the project has been continuously improving to provide more options for each category of viewers.
        </TextParagraph>
        <div class="m-107_bottom media-m-68_bottom">
          <!-- Карточки -->
        </div>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom">
          Technology stack
        </h2>
        <!-- <ListTechnologies class="m-96_bottom media-m-48_bottom">
          <ListTechnologiesItem
            v-for="(technologiesItem, i) in technologiesList"
            :key="i"
            :tech-name="technologiesItem.techName"
            :class-name="technologiesItem.className"
          />
        </ListTechnologies> -->
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
          Key project milestones
        </h2>
        <div class="m-96_bottom media-m-48_bottom">
          <!-- Карточки -->
        </div>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
          Phase 1: Online cinema
        </h2>
        <TextParagraph class="m-24_bottom">
          Initially, it was decided to create a movie library with previews, duration information, etc. Purchasing
          videos was the easiest part. Pulling a good description for each movie from an external source eliminated the
          routine work related to content management. To address this issue.
        </TextParagraph>
      </section>
      <section class="container_regular">
        <!--- Lottie --->
      </section>
      <section class="container_regular">
        <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
          Mad Devs integrated the platform with Plex Media Server, which provides free movie descriptions via an API.
        </TextQuote>
        <h3 class="case_title_h3 m-12_bottom">
          TV shows & TV series
        </h3>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-20_bottom">
          Phase 2: Live streaming technology
        </h2>
        <TextParagraph class="m-48_bottom media-m-20_bottom">
          To provide viewers with access to their favourite TV channels, the platform needed to emulate the TV
          experience. To add live-streaming technology, Mad Devs leveraged its existing open-source project,
          Yourcast.tv.
        </TextParagraph>
      </section>
      <section class="container_full">
        <div class="m-60_bottom media-m-48_bottom">
          <!--- Секция с анимацией --->
          <!--- Ссылки --->
        </div>
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3">
          TV shows & TV series
        </h3>
        <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
          Yourcast.tv by Mad Devs is used to create TV-like streams using YouTube video content. All you need is to
          create a list of YouTube videos that you want to stream. The streaming starts a few seconds after you save
          your list of videos.
          <span class="case_blockquote-box_text-modificator"> Read more about Yourcast.TV. </span>
        </TextQuoteBox>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          The customer purchased access to several popular TV channels streamed online, and Mad Devs added additional
          code to start re-streaming the channels using Yourcast.TV. As a result, the platform’s viewers received a
          selection of TV channel streams on their devices. HBO, Showtime and other TV channels were seamlessly added to
          the list of available options.
        </TextParagraph>
        <TextParagraph class="m-48_bottom">
          Technically, Django was used for storing stream entries for the Live TV service. The admin created the entries
          that the platform’s Live TV service then pulled down from Django.
        </TextParagraph>
      </section>
      <section class="container_full">
        <div class="m-96_bottom media-m-48_bottom">
          <!--- Lottie --->
        </div>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
          Phase 3: Redesign & optimisations
        </h2>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          To reduce traffic while re-streaming movies and TV series, Mad Devs used Nimble Streamer and Nimble
          Transcoder. As the source provided maximum quality, re-streaming of the ‘heavy’ content was overly expensive.
          To maintain high quality while reducing costs, files were split into data packages by Nimble Streamer and sent
          to the viewer’s browser.
        </TextParagraph>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          As all parts of the projects were developed independently during the first two phases, Mad Devs redesigned the
          platform infrastructure to orchestrate all of its services. The project became more organised and
          cost-effective, which was important for further growth.
        </TextParagraph>
      </section>
      <section class="container_full">
        <div>
          <!--- Lottie --->
        </div>
        <TextParagraph class="m-104_bottom media-m-48_bottom case_text-align-center">
          Full Platform Architecture:
        </TextParagraph>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
          Phase 4: Video on demand
        </h2>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          Video on Demand (VoD) functionality was added to the platform in 2019. To adapt it to the most current VoD
          standards, Mad Devs leveraged Nimble Streamer and Nimble Transcoder. The viewers received access to the
          present-day VoD experience, enabling on-the-go movie ordering and MD5 hotlink protection.
        </TextParagraph>
      </section>
      <section class="container_full">
        <div class="m-96_bottom media-m-48_bottom">
          <!--- Lottie --->
        </div>
      </section>
      <section class="container_regular m-48_bottom media-m-24_bottom">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
          Phase 5: User authorisation & personalised experience
        </h2>
        <TextParagraph class="m-24_bottom">
          In 2020, the platform launched individual user authorisation through email. With the statistics collected for
          each user, the project started to provide a more personalised experience based on people’s preferences. A
          number of new features were added to improve the existing services:
        </TextParagraph>
        <List>
          <ListHyphenItemBox>Full-text search across the movie and TV series databases</ListHyphenItemBox>
          <ListHyphenItemBox>A history of interactions with various movies and TV channels.</ListHyphenItemBox>
          <ListHyphenItemBox>Suggestions to resume incompletely watched videos.</ListHyphenItemBox>
          <ListHyphenItemBox>Lists of favourites for both watched and desired content.</ListHyphenItemBox>
        </List>
      </section>
      <section class="container_full">
        <div class="m-48_bottom media-m-24_bottom">
          <!--- Телефон --->
        </div>
      </section>
      <section class="container_regular">
        <TextParagraph class="m-72_bottom media-m-48_bottom">
          The development of the platform is still a work in progress. The Mad Devs team improves it with each new
          iteration and borrows best practices from leading over-the-top (OTT) providers to make end users happier. The
          project is progressing towards a modern entertainment platform.
        </TextParagraph>
        <h3 class="case_title_h3 m-24_bottom media-m-12_bottom">
          Plans for similar projects
        </h3>
        <TextParagraph class="m-96_bottom media-m-48_bottom">
          The platform will remain the one-and-only NDA-protected project. However, Yourcast.TV is fully open source and
          can serve as a foundation for other video streaming services, assuming monetisation through subscription or
          advertising. With the experience Mad Devs gained building the platform, customers from the video streaming
          industry will be able to orchestrate back-end technologies of any complexity.
        </TextParagraph>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-48_bottom media-m-38_bottom">
          Meet the team
        </h2>
        <!-- <ListTeam class="m-72_bottom media-m-48_bottom">
          <ListTeamItem
            v-for="(teamMember, i) in team"
            :key="i"
            :name="teamMember.name"
            :position="teamMember.position"
            :file-name="teamMember.fileName"
            :file-name-retina="`${teamMember.fileName}@2x`"
            :file-extension="teamMember.fileExtension"
            :alt="teamMember.name"
            picture-folder="common"
          />
        </ListTeam> -->
        <!-- <TextQuoteAuthor
          class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
          author-name="Andrew Minkin"
          author-position="CTO, Mad Devs"
          file-name="andrew-minkin"
          file-extension="png"
          alt=""
          picture-folder="nambafood"
        >
          While working on this project, we acquired extensive hands-on experience in building modern livestreaming and VoD services. We were amazed by the abundance of open-source tools available for building great OTT platforms and online movies. Yourcast.TV was the beginning; however, we now see that this internal project could become a cornerstone for many enterprise-level solutions.
        </TextQuoteAuthor> -->
      </section>
    </section>
    <Footer
      link="/case-studies/sir-john-monash-centre/"
      class-name="kaf-case"
    >
      <div
        slot="icon"
        class="case_logotype"
      />
      The maintenance <br class="case_mobile-break">
      of memory: <br>
      Sir John Monash <br class="case_mobile-break">
      Centre
    </Footer>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/CaseHeader'
import Footer from '@/components/Cases/Footer'
import TextParagraph from '@/components/Cases/TextParagraph'
import TextQuote from '@/components/Cases/TextQuote'
import TextQuoteBox from '@/components/Cases/TextQuoteBox'
import List from '@/components/Cases/List'
import ListHyphenItemBox from '@/components/Cases/ListHyphenItemBox'

export default {
  name: 'KafCase',
  components: {
    CaseHeader,
    Footer,
    TextParagraph,
    TextQuote,
    TextQuoteBox,
    List,
    ListHyphenItemBox,
  },

  data() {
    return {
      headerLogo: {
        width: 387,
        height: 81.23,
        pictureFolder: 'kaf',
        fileName: 'kaf-logo',
        alt: '',
      },
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/mixins';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/kaf/styles';
@import '../../assets/styles/cases/media';
</style>
