<template>
  <main class="main case">
    <CaseHeader
      :header-logo="headerLogo"
      video-name="/videos/sjmc/sjmc-main-video.b35a387.mp4"
      video-fallback-path="/images/Cases/sjmc/jpg/sjmc-main-video-preview.jpg"
    >
      <h1 slot="title" class="case_header-title">
        Sir John Monash <br />
        Centre
      </h1>
      <p slot="description" class="case_header-description">
        The Sir John Monash Centre (SJMC) tells Australia’s story of the Western Front <br />
        during the First World War in the words of those who served.
      </p>
      <button slot="actions" class="case_play-button" type="button" @click="openFullscreen()">
        <div class="case_play-icon"></div>
        View video about SJMC
      </button>
    </CaseHeader>
    <SJMCVideo />
    <section class="case_body">
      <div id="case-body" class="case_animation_block"></div>
      <section class="container_regular m-48_top m-96_bottom media-m-16_top media-m-48_bottom">
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          The Sir John Monash Centre (SJMC) tells Australia’s story of the Western Front during the First World War in
          the words of those who served.
        </TextParagraph>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          There is much to learn from the Great War, however, ordinary history books often only explain events on a
          surface level. In contrast, using interactive multimedia installations and technologies, the 480-square metre
          interpretive centre takes visitors on a journey in the footsteps of ordinary soldiers who experienced
          extraordinary events.
        </TextParagraph>
        <TextParagraph>
          The SJMC’s technology enables each visitor to personalise their experience as they learn about the Australian
          soldiers’ stories. Visitors are "fully immersed" in a way that is not seen anywhere else.
        </TextParagraph>
        <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-72_bottom">
          World-class BYOD technology delivers an enhanced understanding of the nature and context of the Australian
          contribution to the First World War.
        </TextQuote>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-12_bottom">The SJMC and Mad Devs partnership</h2>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          The SJMC opened to the public on April 16th, 2018. The entire centre, including its half-sunken building and
          cutting-edge new technology, was developed and deployed by an Australian-based IT vendor. The SJMC and Mad
          Devs partnership has therefore been based on enhancements and preventative maintenance contracts.
        </TextParagraph>
        <TextParagraph>
          After conducting an
          <nuxt-link :to="`/services#it-consulting`" class="case_link">independent audit</nuxt-link> of a previous IT
          vendor, a list of technical debt was formed.
        </TextParagraph>
        <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top">
          The Mad Devs team has successfully accomplished code refactoring as well as closing the technical debt. After
          that, system monitoring, new feature development, and maintenance was placed on Mad Devs shoulders.
        </TextQuoteBox>
      </section>
      <section class="container_full case_full-screen-img">
        <Picture
          :lazy-loading="true"
          picture-folder="sjmc"
          file-name="sjmc-team"
          file-extension="jpg"
          alt="The Mad Devs team in Sir John Monash Centre."
        />
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3 m-48_top m-12_bottom">The challenges</h3>
        <List>
          <ListHyphenItemBox v-for="(text, i) in theChallenges" :key="i">{{ text }}</ListHyphenItemBox>
        </List>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-96_top media-m-48_top m-12_bottom">The SJMC Software</h2>
        <TextParagraph class="m-48_bottom">
          Transferring a project to another software partner is never easy for all parties involved. So, let us
          introduce you to the new era of interpretive centres and walk you through the complexity of the SJMC project.
        </TextParagraph>
        <h3 class="case_title_h3 m-12_bottom">Multimedia Management IT Brain</h3>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          Personalised experience at your own speed and in your own language
        </TextParagraph>
      </section>
      <section class="container_full background-color-silver">
        <div class="container_full case_full-screen-img">
          <Picture
            :lazy-loading="true"
            picture-folder="sjmc"
            file-name="multimedia-management"
            file-extension="jpg"
            alt="The SJMC: Multimedia Management System."
          />
        </div>
      </section>
      <section class="container_regular">
        <TextParagraph class="m-48_top media-m-24_top">
          Since the available existing solutions had limitations and restrictions, The Sir John Monash Centre hired an
          Australia-based IT company to create an integrated multimedia solution to coordinate and communicate with
          every piece of technology in the centre.
        </TextParagraph>
        <TextParagraph class="m-24_top media-m-12_top">
          The MMIT Brain synchronises two information systems: the multimedia management system and the smart building
          management system. The multimedia software and hardware management system controls, supervises and monitors
          lighting, audio, video and special effects for the SJMC. The universal software infrastructure to building
          controls infrastructure integrators is the third-party framework that works as a foundation of the SJMC
          intelligent building. It supports a complete IP-based information network for real-time management and
          controls the SJMC's multiple facilities. This one-stop software manages all building operations, energy,
          security, and operational systems.
        </TextParagraph>
        <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-72_bottom">
          The MMIT Brain is a coherent solution that brings together the monitoring and management of two information
          systems.
        </TextQuote>
        <TextParagraph class="m-16_bottom">
          The MMIT Brain orchestrated the synchronisation of every thread into one coherent solution. Physically
          constructed as a single hardware and software, it performs various services under one hood. Here is a list of
          functions the MMIT Brain performs.
        </TextParagraph>
        <List class="m-56_bottom media-m-32_bottom">
          <ListItemDot
            >Delivers content to mobile applications and synchronises subtitles and audio on multimedia screens in 3
            languages (German, English, and French).</ListItemDot
          >
          <ListItemDot>Orchestrates the experience of multiple SJMC visitors to avoid interference.</ListItemDot>
          <ListItemDot>Performs interaction between two internal information systems.</ListItemDot>
          <ListItemDot>Enables content managers to deploy and modify new content.</ListItemDot>
          <ListItemDot>Synchronises content storage and other multimedia computers.</ListItemDot>
        </List>
      </section>
      <!-- <section class="container_full case_full-screen-slider">
        <Swiper
          :components="swiperMultimediaManagement"
          :safariTopBar="false"
          :boxShadow="false"
          sliderDescription="Australia-based IT company to create integrated multimedia solutions."
        />
      </section> -->
      <section class="container_regular">
        <h2 class="case_title_h2 m-104_top media-m-48_top m-12_bottom">Mobile applications</h2>
        <TextParagraph class="m-48_bottom">
          The world-class BYOD technology solution ensures that visitors are immersed in soldiers' personal histories.
        </TextParagraph>
      </section>
      <section class="container_full background-color-black-section">
        <div class="container_full case_full-screen-img">
          <Picture
            :lazy-loading="true"
            picture-folder="sjmc"
            file-name="mobile-applications"
            file-extension="jpg"
            alt="The SJMC Mobile Applications."
          />
        </div>
      </section>
      <section class="container_regular">
        <TextQuoteBox class="m-auto m-48_top m-48_bottom">
          As soon as visitors enter the site, the SJMC’s mobile applications, with the help of advanced positioning
          algorithms proactively cache content, cue up relevant multimedia, and guide visitors through the stories of
          Australian soldiers.
        </TextQuoteBox>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          On an annual basis, approximately 60,000 visitors move throughout the centre. 150 Bluetooth beacons determine
          the location of each smartphone to deliver the right content at the right time.
        </TextParagraph>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          The gallery's small size and the volume and density of signal traffic from visitors is a challenge that was
          solved using a complex, layered positioning algorithm that was developed to help deal with the unique
          challenges of SJMC’s physical environment.
        </TextParagraph>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          When visitors move around the centre, the app will continually refresh a list of the content that is available
          nearby and allow them to create their own experience.
        </TextParagraph>
      </section>
      <section class="container_regular">
        <Picture
          :lazy-loading="true"
          picture-folder="sjmc"
          file-name="sjmc-map"
          file-extension="jpg"
          alt="Sir Jonh Monash Centre Map."
        />
        <p class="case_image-description m-8_top">Sir Jonh Monash Centre Site</p>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-56_top media-m-48_top m-12_bottom">SJMC Hardware</h2>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          Hundreds of pieces of equipment are master-mindedly organised to transform content stored in audio, video, and
          subtitles format to interactive monitors that are run on multiple servers.
        </TextParagraph>
      </section>
      <section class="container_full case_full-screen-img">
        <Picture
          :lazy-loading="true"
          picture-folder="sjmc"
          file-name="immersive-gallery"
          file-extension="jpg"
          alt="The SJMC Immersive Gallery."
        />
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3 m-48_top m-12_bottom">WATCHOUT</h3>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          WATCHOUT is a multi-display production and presentation system that enables the SJMC to arrange displays in
          unusual ways and create seamless images and videos. The absence of gaps between display surfaces is possible
          due to the WATCHOUT system that distributes the content and keeps everything in sync across all connected
          displays.
        </TextParagraph>
      </section>
      <section class="container_full background-color-silver">
        <section class="container_middle">
          <img
            :src="getMediaFromS3('/images/Cases/sjmc/gif/watchpax.gif')"
            class="case_gif"
            alt="WATCHOUT - Multi-Display Production and Presentation Software."
          />
        </section>
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3 m-96_top media-m-48_top m-12_bottom">BRIX</h3>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          Essentially, BRIX is an ultra-compact multimedia computer that can be hung on a wall. The advanced graphics
          card delivers heavy content to multiple monitors simultaneously. Moreover, each BRIX is managed by the MMIT
          Brain to work in synchronisation with mobile applications.
        </TextParagraph>
      </section>
      <section class="container_full background-color-silver">
        <section class="container_middle">
          <img
            :src="getMediaFromS3('/images/Cases/sjmc/gif/brix.gif')"
            class="case_gif"
            alt="Ultra-Compact Multimedia Computer - BRIX."
          />
        </section>
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3 m-96_top media-m-48_top m-12_bottom">Bluetooth beacons</h3>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          The mobile application’s positioning algorithm collects the location data of each user via 150 Bluetooth
          beacons located all over the centre.
        </TextParagraph>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          The limited space in the SJMC made detecting each visitor’s location and continuously refreshing a list of
          available content nearby challenging.
        </TextParagraph>
      </section>
      <section class="container_full case_sjmc-phone-video-section background-color-black-primary">
        <div
          ref="videoWrap"
          class="case_sjmc-phone-video-wrapper case_sjmc-phone-video-wrapper--on-pause case_full-screen-video"
          @click="videoSetState"
        >
          <!-- Video fallback -->
          <div
            class="case_sjmc-phone-video-wrapper_fallback"
            :style="{
              backgroundImage: `url(${getMediaFromS3(
                '/images/Cases/sjmc/png/bluetooth-beacons-video-background.png',
              )})`,
            }"
          ></div>
          <!-- End video fallback -->
          <video ref="video" width="100%" height="100%" playsinline>
            <source :src="getMediaFromS3('/videos/bluetooth-beacons-video.9ca649c.mp4')" type="video/mp4" />
            Your browser does not support the video tag.
            <img :src="getMediaFromS3('/images/Cases/sjmc/png/bluetooth-beacons-video-background.png')" />
          </video>
        </div>
      </section>
      <section class="container_regular">
        <p class="case_image-description m-34_top media-m-24_top">
          Playback of content in the application when approaching the bluetooth beacons.
        </p>
      </section>
      <section class="container_regular m-56_top media-m-24_top m-96_bottom media-m-72_bottom">
        <div class="case_column-container">
          <div class="case_column-item">
            <h4 class="case_title_h4 m-8_bottom media-m-2_bottom">60,000 visitors</h4>
            <TextParagraph> On an annual basis move throughout the centre. </TextParagraph>
          </div>
          <div class="case_column-item">
            <h4 class="case_title_h4 m-8_bottom media-m-2_bottom">150 Bluetooth beacons</h4>
            <TextParagraph>
              Determine the location of each smartphone to deliver the right content at the right time.
            </TextParagraph>
          </div>
        </div>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-48_bottom media-m-24_bottom">Key goals for Mad Devs</h2>
        <List class="m-96_bottom media-m-48_bottom">
          <ListItemBoxCheckMark v-for="(text, i) in keyGoalsList" :key="i">
            {{ text }}
          </ListItemBoxCheckMark>
        </List>
        <h3 class="case_title_h3 m-48_bottom media-m-24_bottom">Technology stack</h3>
        <ListTechnologies class="m-107_bottom media-m-48_bottom">
          <ListTechnologiesItem
            v-for="(technologiesItem, i) in technologiesList"
            :key="i"
            :tech-name="technologiesItem.techName"
            :class-name="technologiesItem.className"
          />
        </ListTechnologies>
        <h3 class="case_title_h3 m-12_bottom">Custom small-scale version of the SJMC in Mad Devs’ office</h3>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          As thousands of kilometres separate the SJMC and Mad Devs’ office, a unique approach to the engineering
          partnership was required.
        </TextParagraph>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          After purchasing the required equipment and reading code and documentation, in one month after understanding
          the complexity of the SJMC, Mad Devs’ DevOps and back-end engineers built a custom small-scale version of the
          SJMC complex multimedia environment. Thus, testing and deploying new content and changes in the Brain was made
          possible even kilometres away from the real SJMC.
        </TextParagraph>
      </section>
      <section class="container_full case_full-screen-slider">
        <Swiper :components="swiperOfficeTeam" :safari-top-bar="false" :box-shadow="false" />
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3 m-78_top media-m-48_top m-12_bottom">Technical debt</h3>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          Although the previous vendors have developed incredible software, an independent organisation prepared a
          detailed audit and evaluated deficiencies or areas of improvement.
        </TextParagraph>
        <TextParagraph class="m-72_bottom media-m-48_bottom">
          The complexity of the system raises particular challenges for the Mad Devs team, as they had to submerge
          themselves into the full comprehensiveness of the Brain solution to be able to improve it. It took our team a
          month of onboarding and reading documentation before we could fix even a minor issue.
        </TextParagraph>
        <h3 class="case_title_h3 m-12_bottom">Code refactoring and optimization</h3>
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
        <h3 class="case_title_h3 m-12_bottom">Analytics and user-friendly reports</h3>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          Extensive SJMC data gathered from the Multimedia IT System is organised into user-friendly reports by an
          Analytics feature. Such reports enabled the Centre’s managers to easily track performance and report directly
          to stakeholders.
        </TextParagraph>
      </section>
      <section class="container_middle">
        <Picture
          :box-shadow="true"
          :lazy-loading="true"
          picture-folder="sjmc"
          file-name="kibana-reports"
          file-extension="jpg"
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
          <ListItemDot
            >The average length of time of the SJMC Experience – i.e. time between connections to first and last
            site</ListItemDot
          >
          <ListItemDot
            >Popular stands, by analysing the longevity of visitors listening to/watching/interacting with
            content</ListItemDot
          >
          <ListItemDot>Average time visitors spend in each SJMC zone</ListItemDot>
        </List>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-12_bottom">SJMC System monitoring</h2>
        <TextParagraph>
          System monitoring is a proactive method to improve the quality of SJMC software and hardware by gathering data
          from 6 servers and 100+ BRIX multimedia computers highlighting areas that might need Mad Devs’ engineers'
          attention.
        </TextParagraph>
        <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
          Sophisticated system monitoring is the fight life of defence against downtime.
        </TextQuote>
        <h3 class="case_title_h3 m-12_bottom">Grafana + Prometheus</h3>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          To achieve maximum observability of the SJMC hardware Grafana was used to build all the graphs for the current
          state. It enables the Mad Devs team to configure the reports and alerts if any of the system components fail
          or are under high load or in case of any other problem.
        </TextParagraph>
      </section>
      <section class="container_middle m-48_bottom media-m-24_bottom">
        <Swiper
          :components="swiperGrafanaPrometheus"
          :safari-top-bar="true"
          :box-shadow="true"
          safari-top-bar-image="safari-top-bar"
          safari-top-bar-alt="Safari Top Bar."
        />
      </section>
      <section class="container_regular">
        <TextParagraph class="m-56_bottom media-m-24_bottom">
          Prometheus acts as the storage backend and exposes a wide variety of metrics gathered from 6 servers while
          Grafana acts as a visualisation layer and works as the interface for analysis and visualisation.
        </TextParagraph>
        <h3 class="case_title_h3 m-12_bottom">Elasticsearch+Kibana+<br class="case_mobile-break" />Logstash</h3>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          Logstash ingests, transforms, and ships SJMC logging data from 100+ BRIX (multimedia computers). Before
          unstructured logging data was scattered across hundreds of folders and was not properly monitored, which
          ultimately caused breakages and deterioration of expensive hardware. Now Logstash collects and transforms
          logging data by sending it to Elasticsearch. Elasticsearch enables the SJMC to store, search, and analyse
          logged data with ease at scale.
        </TextParagraph>
      </section>
      <section class="container_middle">
        <Picture
          :box-shadow="true"
          :lazy-loading="true"
          picture-folder="sjmc"
          file-name="kibana"
          file-extension="jpg"
          alt="Kibana Reports Which Help to Manage SJMC Hardware in a Single Dashboard."
        />
      </section>
      <section class="container_regular">
        <TextParagraph class="m-48_top media-m-24_top m-72_bottom media-m-48_bottom">
          Kibana pulls up logged data and creates user-friendly visualizations with charts, graphs, heatmaps, and more.
          It is easy to understand solutions to manage SJMC hardware in a single dashboard.
        </TextParagraph>
        <h3 class="case_title_h3 m-12_bottom">Continuous integration and delivery (CI/CD)</h3>
        <TextParagraph class="m-72_bottom media-m-48_bottom">
          CI/CD shortens the feedback cycle and allows Mad Devs’ engineers to minimise risks and increase productivity
          by configuring CI/CD for autotest running and automatic deployment.
        </TextParagraph>
        <h3 class="case_title_h3 m-12_bottom">Sentry</h3>
        <TextParagraph class="m-96_bottom media-m-72_bottom">
          Integration of Sentry provides the Mad Devs team with automated error tracking and shows us every fault that
          happens with the SJMC MMIT Brain by organising its logs. Sentry enables the Mad Devs team to identify,
          prioritise, and reproduce each issue.
        </TextParagraph>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
          Automated testing the MMIT Brain via custom emulators
        </h2>
        <TextParagraph class="m-6_bottom">
          Auto-testing of the MMIT Brain can be sorted into two categories:
        </TextParagraph>
        <List class="m-32_bottom">
          <ListItemDot>The synchronisation of two internal information systems.</ListItemDot>
          <ListItemDot
            >End to end testing to ensure seamless user experience for thousands of SJMC visitors.</ListItemDot
          >
        </List>
        <TextParagraph class="m-72_bottom media-m-48_bottom">
          Testing the accuracy of new content and feature deployment is a challenge due to the 5000 km distance that
          separate Mad Devs’ office and the SJMC. Thus, our back-end developers developed two types of emulation
          software that enables Mad Devs to test the MMIT Brain without accumulating additional travel expenses.
        </TextParagraph>
        <h3 class="case_title_h3 m-12_bottom">1. Internal information systems synchronization</h3>
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
        <h3 class="case_title_h3">2. End to end tests using emulators of mobile applications</h3>
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
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom">Mad Devs’ trip to the SJMC</h2>
      </section>
      <section class="container_full case_full-screen-slider">
        <Swiper :components="swiperMadDevsTrip" :safari-top-bar="false" :box-shadow="false" />
      </section>
      <section class="container_regular">
        <TextParagraph class="m-56_top media-m-24_top m-24_bottom media-m-12_bottom">
          In February 2020, just before the contract’s deadline, a Mad Devs’ team of eight travelled to the Сentre,
          which is located near the village of Villers-Bretonneux (Somme) in northern France.
        </TextParagraph>
        <TextParagraph class="m-6_bottom">
          Although the small-scale version of the Сentre was built inside Mad Devs’ office, the team was pursuing the
          following goals:
        </TextParagraph>
        <List class="m-56_bottom media-m-24_bottom">
          <ListItemDot>Understand the complexity of the SJMC hardware and software in person</ListItemDot>
          <ListItemDot>Uncover the potential risks and problems</ListItemDot>
          <ListItemDot>Deploy technical debts and test the changes</ListItemDot>
          <ListItemDot>Deploy new content on large scale screens and test the changes</ListItemDot>
        </List>
        <!-- Заменить фотографии -->
        <ListTeam class="m-96_bottom media-m-24_bottom">
          <ListTeamItem
            v-for="(teamMember, i) in team"
            :key="i"
            :name="teamMember.name"
            :position="teamMember.position"
            :file-name="teamMember.fileName"
            :file-extension="teamMember.fileExtension"
            :alt="teamMember.name"
            picture-folder="common"
          />
        </ListTeam>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-12_bottom">Ongoing partnership</h2>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          According to the internal CSAT survey, 98% of Mad Devs' customers find the company's service great value for
          money, and most of them stay with us for 3+ years. The SJMC is no exception.
        </TextParagraph>
        <TextParagraph class="m-72_bottom media-m-48_bottom">
          We are honoured to extend our partnership to improve the SJMC visitors' experience by introducing the iPadOS
          application for children. This application will offer engaging content which allows children to discover the
          centre and its resources through a series of educational games. Moreover, Mad Devs is going to develop a
          sophisticated content management system that is eventually going to simplify the deployment of new content and
          will enable the managers of the SJMC themselves to make the required changes with ease.
        </TextParagraph>
        <TextQuoteAuthor
          class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
          author-name="Wade Bartlett"
          author-position="Former Technical and Operations Director, Sir John Monash Centre"
          file-name="wade-bartlett"
          file-extension="png"
          alt="Wade Bartlett: Former Technical and Operations Director, Sir John Monash Centre."
          picture-folder="sjmc"
        >
          The Sir John Monash Centre operates within a bespoke multimedia framework, which requires high-level technical
          expertise to deliver the Centre's visitor experience. Mad Devs provide outstanding levels of support and
          development services across our multimedia and IT platforms, systems and languages. Always available to
          provide assistance when needed, Mad Devs are a highly-valued part of our wider operations.
        </TextQuoteAuthor>
      </section>
      <Footer link="/case-studies/namba-food/" class-name="sjmc-case">
        <div slot="icon" class="case_logotype"></div>
        Namba Food <br />
        Top Delivery Service in <br class="case_mobile-screen-break" />
        Central Asia
      </Footer>
    </section>
  </main>
</template>

<script>
import CaseHeader from '@/components/Cases/CaseHeader'
import SJMCVideo from '@/components/Cases/SJMCVideo'
import TextParagraph from '@/components/Cases/TextParagraph'
import TextQuote from '@/components/Cases/TextQuote'
import TextQuoteBox from '@/components/Cases/TextQuoteBox'
import Picture from '@/components/Cases/Picture'
import List from '@/components/Cases/List'
import ListTeam from '@/components/Cases/ListTeam'
import ListTeamItem from '@/components/Cases/ListTeamItem'
import ListItemBoxCheckMark from '@/components/Cases/ListItemBoxCheckMark'
import ListItemDot from '@/components/Cases/ListItemDot'
import ListTechnologies from '@/components/Cases/ListTechnologies'
import ListTechnologiesItem from '@/components/Cases/ListTechnologiesItem'
import ListHyphenItemBox from '@/components/Cases/ListHyphenItemBox'
import TextQuoteAuthor from '@/components/Cases/TextQuoteAuthor'
import Swiper from '@/components/Cases/Swiper'
import Footer from '@/components/Cases/Footer'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'SirJohnMonashCentre',
  components: {
    CaseHeader,
    SJMCVideo,
    TextParagraph,
    TextQuote,
    TextQuoteBox,
    TextQuoteAuthor,
    Picture,
    List,
    ListTeam,
    ListTeamItem,
    ListItemBoxCheckMark,
    ListItemDot,
    ListTechnologies,
    ListTechnologiesItem,
    ListHyphenItemBox,
    Swiper,
    Footer,
  },

  mixins: [initLazyLoadMixin],

  data() {
    return {
      keyGoalsList: [
        'Understanding the complexity of the MMIT Brain software',
        'Building a small-scale version of the SJMC experience in 1 month',
        'Finishing technical debt conducted by an independent auditor',
        'Covering the code with unit and integration tests',
        'Building a framework for automating E2E tests',
        'Deploying technical debt changes and improvements on site',
        'Developing a reporting system',
        'Testing the deployment of new content',
        'Setting up system monitoring',
      ],

      theChallenges: [
        'The 100MB of documentation and 1M+ lines of code, which required months of onboarding.',
        'The unique nature of the software in a one-of-a-kind technologically advanced centre.',
        'The 450 units of hardware connected to operate as a coherent solution that delivers content to SJMC visitors in a personalised manner.',
        'The 5000 km distance between the SJMC and Mad Devs’ office.',
        'The lockdown caused by the Covid19 pandemic, which made it difficult to check the deploy updates.',
        'Orchestrating a seamless experience for 110K visitors annually.',
        'Cooperating and communicating with numerous vendors working at SJMC.',
      ],

      technologiesList: [
        {
          techName: 'Go',
          className: 'backend-go',
        },
        {
          techName: 'Swift',
          className: 'mobile-swift',
        },
        {
          techName: 'Java for Android',
          className: 'mobile-java',
        },
        {
          techName: 'Unity',
          className: 'other-unity',
        },
        {
          techName: 'AWS',
          className: 'infrastructure-aws',
        },
        {
          techName: 'CodeCommit',
          className: 'infrastructure-codecommit',
        },
        {
          techName: 'Windows 10',
          className: 'other-windows',
        },
        {
          techName: 'iOS',
          className: 'mobile-apple-black',
        },
        {
          techName: 'Android',
          className: 'mobile-android-black-text',
        },
        {
          techName: 'Ubuntu',
          className: 'other-ubuntu',
        },
        {
          techName: 'Ansible',
          className: 'devops-ansible',
        },
        {
          techName: 'Sentry',
          className: 'devops-sentry-dark',
        },
        {
          techName: 'Elasticsearch',
          className: 'devops-elastic',
        },
        {
          techName: 'Logstash',
          className: 'devops-logstash',
        },
        {
          techName: 'Kibana',
          className: 'devops-kibana',
        },
        {
          techName: 'Prometheus',
          className: 'devops-prometheus',
        },
      ],

      team: [
        {
          name: 'Kirill Zinchenko',
          position: 'Project Manager',
          fileName: 'zinchenko',
          fileExtension: 'png',
          alt: 'Kirill Zinchenko',
        },
        {
          name: 'Vlad Andreev',
          position: 'DevOps Engineer',
          fileName: 'vlad-andreev',
          fileExtension: 'png',
          alt: 'Vlad Andreev',
        },
        {
          name: 'Aleksandr Zhitov',
          position: 'QA Manager',
          fileName: 'zhitov',
          fileExtension: 'png',
          alt: 'Aleksandr Zhitov',
        },
        {
          name: 'Sergey Boyko',
          position: 'QA Tester',
          fileName: 'boyko',
          fileExtension: 'png',
          alt: 'Sergey Boyko',
        },
        {
          name: 'Andrew Minkin',
          position: 'Back-end Developer',
          fileName: 'andrew-minkin',
          fileExtension: 'png',
          alt: 'Andrew Minkin',
        },
        {
          name: 'Dmitri Khalezin',
          position: 'DevOps Engineer',
          fileName: 'dmitrii-khalezin',
          fileExtension: 'png',
          alt: 'Dmitri Khalezin',
        },
        {
          name: 'Kirill Avdeev',
          position: 'Back-end Developer',
          fileName: 'avdeev',
          fileExtension: 'png',
          alt: 'Kirill Avdeev',
        },
        {
          name: 'Stanislav Shcherbinin',
          position: 'Back-end Developer',
          fileName: 'stanislav-shcherbinin',
          fileExtension: 'png',
          alt: 'Stanislav Shcherbinin',
        },
        {
          name: 'Aleksandr Astashov',
          position: 'Back-end Developer',
          fileName: 'astashov',
          fileExtension: 'png',
          alt: 'Aleksandr Astashov',
        },
        {
          name: 'Ruslan Kasymov',
          position: 'Logistics Manager',
          fileName: 'kasymov',
          fileExtension: 'png',
          alt: 'Ruslan Kasymov',
        },
        {
          name: 'Pavel Pushkarev',
          position: 'Mobile App Developer',
          fileName: 'pushkarev',
          fileExtension: 'png',
          alt: 'Pavel Pushkarev',
        },
        {
          name: 'Rustom Kulbatyrov',
          position: 'Mobile App Developer',
          fileName: 'kulbatyrov',
          fileExtension: 'png',
          alt: 'Rustom Kulbatyrov',
        },
      ],

      swiperMultimediaManagement: [
        {
          fileName: 'multimedia-management-first-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Hardware System Which Monitors Lighting, Audio, Video and Special Effects for the SJMC.',
        },
        {
          fileName: 'multimedia-management-second-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Hardware System Which Monitors Lighting, Audio, Video and Special Effects for the SJMC.',
        },
      ],

      swiperOfficeTeam: [
        {
          fileName: 'office-team-first-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
        },
        {
          fileName: 'office-team-second-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
        },
        {
          fileName: 'office-team-third-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
        },
        {
          fileName: 'office-team-fourth-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
        },
        {
          fileName: 'office-team-fifth-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
        },
        {
          fileName: 'office-team-sixth-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
        },
      ],

      swiperGrafanaPrometheus: [
        {
          fileName: 'grafana-prometheus-first-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'SJMC System Monitoring.',
        },
        {
          fileName: 'grafana-prometheus-second-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'SJMC System Monitoring.',
        },
      ],

      swiperMadDevsTrip: [
        {
          fileName: 'mad-devs-trip-first-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Mad Devs’ Team Trip to the SJMC.',
        },
        {
          fileName: 'mad-devs-trip-second-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Mad Devs’ Team Trip to the SJMC.',
        },
        {
          fileName: 'mad-devs-trip-third-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Mad Devs’ Team Trip to the SJMC.',
        },
        {
          fileName: 'mad-devs-trip-fourth-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Mad Devs’ Team Trip to the SJMC.',
        },
        {
          fileName: 'mad-devs-trip-fifth-slide',
          pictureFolder: 'sjmc',
          fileExtension: 'jpg',
          alt: 'Mad Devs’ Team Trip to the SJMC.',
        },
      ],

      headerLogo: {
        width: 242,
        height: 110,
        pictureFolder: 'sjmc',
        fileName: 'sjmc-logo',
        alt: '',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('sjmc'),
      image: 'https://maddevs.io/sir-john-monash-centre.png',
    })
  },

  mounted() {
    this.$refs.video.onended = () => {
      this.$refs.videoWrap.classList.add('case_sjmc-phone-video-wrapper--on-pause')
    }
  },

  methods: {
    openFullscreen() {
      this.$nuxt.$emit('open-fullscreen')
    },

    videoSetState() {
      if (this.$refs.video.paused) {
        this.$refs.video.play()
        this.$refs.videoWrap.classList.remove('case_sjmc-phone-video-wrapper--on-pause')
      } else {
        this.$refs.video.pause()
        this.$refs.videoWrap.classList.add('case_sjmc-phone-video-wrapper--on-pause')
      }
    },
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/mixins';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/sir-john-monash-centre/styles';
@import '../../assets/styles/cases/media';
</style>
