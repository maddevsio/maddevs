<template>
  <div class="case_root">
    <HeaderMain />
    <main class="main case case_parallax" ref="main">
      <CaseHeader logo="godee" videoName="godee-case-main-video.mp4">
        <h1 class="case_header-title" slot="title">Convenient shuttle <br> bus service</h1>
        <p class="case_header-description" slot="description">
          Mad Devs helped GoDee with developing feature-rich software to re-invent <br> public mobility by building new smart ways of a daily commute.
        </p>
      </CaseHeader>
      <section class="container_regular case_first-section">
        <TextParagraph class="m-72_top media-m-24_top">
          GoDee is a reliable way to commute in Ho Chi Minh City, Vietnam. Its shuttle buses take express routes that link the city’s major districts and popular destinations. GoDee helps riders save time, money and the planet due to its lower ecological impact.
        </TextParagraph>
        <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-48_bottom">
          The app-based system allows users to find a route, select the time, book a seat and pay for the ride online.
        </TextQuote>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-12_bottom">Issues and solution</h2>
        <TextParagraph>
          Transportation has become a major issue in Vietnam cities due to the rapid increase (36%) in urbanization. With its slow, unairconditioned, overcrowded public transport, commuters living in the suburbs were left with only 3 other alternatives: personal cars, motorbikes and taxis.
        </TextParagraph>
      </section>
      <div class="case_parallax-container m-48_top media-m-24_top m-48_bottom media-m-24_bottom" v-if="!isSafari">
        <div class="case_parallax-image-wrapper">
          <div class="case_parallax-image"></div>
        </div>
      </div>
      <section class="container_full case_safari-parallax-image m-48_top media-m-24_top m-48_bottom media-m-24_bottom" v-else></section>
      <section class="container_regular">
        <Card class="case_issues-godee-card background-color-silver">
          <CardIssuesGoDee />
        </Card>
        <Card class="background-color-orange">
          <CardSolutionGoDee />
        </Card>
      </section>
      <section class="container_full case_video-wrapper m-60_top media-m-24_top m-96_bottom media-m-48_bottom">
        <iframe width="1440" height="809" src="https://www.youtube.com/embed/_XCRbXmTUwI" frameborder="0" allowfullscreen></iframe>
      </section>
      <section class="container_regular m-48_bottom">
        <h2 class="case_title_h2 m-12_bottom">Mad Devs & GoDee collaboration </h2>
        <TextParagraph>
          Mad Devs consulted with GoDee in the project’s early stages to assist with the technology stack choice and step-by-step planning. Then, several of our positively mad developers worked on GoDee’s smart urban bus management system as an extended part of the team.
        </TextParagraph>
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3 m-12_bottom">Minimum viable product MVP</h3>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          Before investing a considerable amount of money in building software, hiring personnel and acquiring minibuses, GoDee wanted to develop an MVP to understand the market fit potential.
        </TextParagraph>
        <TextParagraph class="m-24_bottom">
          Although services such as GoDee exist in other parts of the world, simulating these programs in Ho Chi Minh City was pointless because the city’s commuting culture is quite different. That’s why user feedback was crucial to its improvement and key to its current rapid growth.
        </TextParagraph>
        <div class="case_minimum-viable-product-cards">
          <Card class="background-color-silver">
            <CardGoDeeFeature title="Live chat feature" iconName="live-chat">
              <TextParagraph>
                Over the time period of three months, our integrated live chat feature collected extensive feedback from users to make white-collar workers’ commutes easier.
              </TextParagraph>
            </CardGoDeeFeature>
          </Card>
          <Card class="background-color-silver">
            <CardGoDeeFeature title="Trip request" iconName="trip-request">
              <TextParagraph>
                This feature enabled GoDee to analyse the actual demand for travel to various Ho Chi Minh City districts.
              </TextParagraph>
            </CardGoDeeFeature>
          </Card>
        </div>
      </section>
      <section class="container_full case_before-after-gif-wrapper background-color-silver m-48_top media-m-20_top">
        <img src="../../assets/img/Cases/godee/gif/before-after.gif" class="case_gif case_before-after-gif" alt="">
      </section>
      <p class="case_image-description m-12_top m-104_bottom media-m-48_bottom">GoDee 2018 and GoDee now</p>
      <section class="container_regular" ref="cardsContainer">
        <h2 class="case_title_h2 m-24_bottom case_text-align-center" ref="developmentGoalsTitle">Development goals</h2> <!-- Выставить оступы на мобиле -->
        <div class="case_development-goals p-96_bottom media-p-48_bottom" ref="cardsGridContainer">
          <div class="case_development-goals-left-column" ref="cardsLeftColumn">
            <Card class="background-color-silver">
              <CardGoDeeFeature title="GPS" iconName="gps">
                <TextParagraph>
                  We use GPS data to track buses, and we have developed an algorithm that predicts bus travel/arrival time using a geocoding service that also calculates delays related to traffic jams and their severity. This predictor functionality calculates the estimated arrival time on specific routes. It allows our passengers to check whether their requested bus will arrive on time, considering traffic jams.
                </TextParagraph>
              </CardGoDeeFeature>
            </Card>
            <Card class="background-color-silver">
              <CardGoDeeFeature title="Payment method" iconName="payment-method">
                <TextParagraph class="m-24_bottom media-m-12_bottom">
                  Cashless payments are becoming more popular in Vietnam, so we have integrated Stripe service into GoDee, enabling passengers to pay with credit cards easily and quickly.
                </TextParagraph>
                <TextParagraph>
                  We have also developed an API for flawless third-party service integration. Visa/Mastercard, AmEx, MoMo and JCB are integrated into the GoDee user app to facilitate cashless payments.
                </TextParagraph>
              </CardGoDeeFeature>
            </Card>
          </div>
          <div class="case_development-goals-right-column" ref="cardsRightColumn">
            <Card class="background-color-silver">
              <CardGoDeeFeature title="Online time-tables & live location tracking" iconName="live-location-tacking">
                <TextParagraph>
                  To help make the GoDee app easier to use, we created a system that tracks bus locations in real time. This means that every user can book a seat as their bus approaches their location.
                </TextParagraph>
              </CardGoDeeFeature>
            </Card>
            <Card class="background-color-silver">
              <CardGoDeeFeature title="Referrals" iconName="referrals">
                <TextParagraph>
                  To add to the commuter experience, inside the GoDee application, users can share referrals and get free rides as bonuses. After receiving a referral code from a referrer, the user can input the code from the booking confirmation as a promo code and enjoy one free ride. Meanwhile, referrers also receive a reward with "an “X" number of free rides.
                </TextParagraph>
              </CardGoDeeFeature>
            </Card>
            <Card class="background-color-silver">
              <CardGoDeeFeature title="The best possible routes" iconName="possible-routes">
                <TextParagraph>
                  Depending on passengers’ requests, the system allows drivers to construct the best possible routes automatically. If there are no orders from passengers, drivers will skip stops along the route.
                </TextParagraph>
              </CardGoDeeFeature>
            </Card>
          </div>
        </div>
      </section>
      <section class="container_full background-color-black-godee p-100_top p-100_bottom media-p-48_top media-p-48_bottom">
        <div class="container_regular">
          <div class="case_preview-cards">
            <div class="case_preview-cards-top-cards-wrapper">
              <Card class="background-color-godee-black-card">
                <CardGoDeePreview
                  className="application-for-passengers"
                  title="Mobile application for passengers"
                  description="Ticket booking process is intuitive — the passenger needs to select the pick up and drop off points, choose the departure time in the schedule, and book the ticket. The most suitable route will be found automatically."
                  pictureFolder="godee"
                  fileName="application-for-passengers-card"
                  fileExtension="png"
                  :mobileImage="false"
                  mobileImageName=""
                  alt=""
                />
              </Card>
              <Card class="background-color-godee-black-card">
                <CardGoDeePreview 
                  className="application-for-drivers"
                  title="Mobile applications for drivers"
                  description="An app for drivers enables them to pick up passengers from bus stops, according to their previously booked tickets."
                  pictureFolder="godee"
                  fileName="application-for-drivers-card"
                  fileExtension="png"
                  :mobileImage="false"
                  mobileImageName=""
                  alt=""
                />
              </Card>
            </div>
            <Card class="background-color-godee-black-card">
              <CardGoDeePreview 
                className="godee-admin-panel"
                title="Intelligent management panel"
                description="Used to create routes, get reports and map current active routes."
                pictureFolder="godee"
                fileName="godee-admin-panel-card"
                fileExtension="png"
                :mobileImage="true"
                mobileImageName="godee-admin-panel-card-mobile"
                alt=""
              />
            </Card>
          </div>
        </div>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-96_top media-m-48_top m-12_bottom">Intelligent management panel</h2>
        <TextParagraph>
          GoDee's rapid growth since its early stages required easy-to-scale business processes and automated route management. Although, in theory, everything can be done with an army of sales representatives and route operators, GoDee wanted to automate routine operations so it could expand to other cities and countries.
        </TextParagraph>
        <TextQuoteBox class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto">
          One manager and one customer support representative can manage more than ~2500 trip requests per month and ~25,000  passengers per month.
        </TextQuoteBox>
        <h3 class="case_title_h3 m-12_bottom">Smart route planning</h3>
        <TextParagraph class="case_paragraph--bold">
          How can we create profitable yet convenient user routes?
        </TextParagraph>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          Let users send <span class="case_red-text">trip requests</span> and tell you what works for them. This feature was available initially through the MVP phase, and it enables GoDee route managers to build effective routes by understanding real commuter demand.
        </TextParagraph>
        <TextParagraph>
          Inside the application, users can submit a trip request with pick-up and drop-off locations at the desired time. The request is added to the list on the managers' dashboard.
        </TextParagraph>
      </section>
      <section class="container_middle">
        <div class="case_image-wrapper m-48_top media-m-24_top m-60_bottom media-m-24_bottom case_box-shadow">
          <Picture 
            pictureFolder="common"
            fileName="safari-top-bar-white"
            fileExtension="jpg"
            alt=""
            :boxShadow="false"
            :lazyLoading="true"
            :borderRadius="false"
          />
          <Picture 
            pictureFolder="godee"
            fileName="godee-admin-panel"
            fileExtension="jpg"
            alt=""
            :boxShadow="false"
            :lazyLoading="true"
            :borderRadius="false"
          />
        </div>
        <CardGoDeePrimsAlgorithm class="m-48_bottom media-m-24_bottom"/>
        <div class="case_html-video-wrapper m-48_top media-m-24_top m-60_bottom media-m-24_bottom case_box-shadow">
          <Picture 
            pictureFolder="godee"
            fileName="trip-request-map"
            fileExtension="jpg"
            alt=""
            :boxShadow="false"
            :lazyLoading="true"
            :borderRadius="false"
            v-if="isIphone"
          />
          <div class="case_video-flex-wrapper" v-else>
            <Picture 
              pictureFolder="common"
              fileName="safari-top-bar-white"
              fileExtension="jpg"
              alt=""
              :boxShadow="false"
              :lazyLoading="true"
              :borderRadius="false"
            />
            <video
              id="trip-request-map" 
              class="case_html-video case_trip-request-video" 
              width="100%" 
              height="100%" 
              loop="true"
              muted="true"
            >
              <source :src="getPathTripRequestMapVideo" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3 m-12_bottom">Trips Monitor</h3>
        <TextParagraph>
          The Trips Monitor feature enables operators to track every bus in real time and collect data on late or early arrivals. More importantly, the operator can contact drivers or passengers quickly if necessary.
        </TextParagraph>
      </section>
      <section class="container_middle m-48_top media-m-24_top m-48_bottom media-m-24_bottom">
        <div class="case_html-video-wrapper case_box-shadow">
          <Picture
            pictureFolder="godee"
            fileName="trip-monitor"
            fileExtension="jpg"
            alt=""
            :boxShadow="true"
            :lazyLoading="true"
            :borderRadius="false"
            v-if="isIphone"
          />
          <div class="case_video-flex-wrapper" v-else>
            <Picture 
              pictureFolder="common"
              fileName="safari-top-bar-white"
              fileExtension="jpg"
              alt=""
              :boxShadow="false"
              :lazyLoading="true"
              :borderRadius="false"
            />
            <video 
              id="trip-monitor"
              class="case_html-video"
              width="100%"
              height="100%"
              loop="true"
              muted="true"
            >
              <source :src="getPathTripMonitorVideo" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section class="container_regular">
        <TextParagraph class="m-12_bottom">
          The Trips Monitor dashboard displays the following information:
        </TextParagraph>
        <ListNumberedBox class="m-96_bottom media-m-48_bottom">
          <ListNumberedItemBox>
            Drivers' locations on mini map in real-time
          </ListNumberedItemBox>
          <ListNumberedItemBox>
            Late and early departures of buses
          </ListNumberedItemBox>
          <ListNumberedItemBox>
            Complete bus schedule weeks in advance
          </ListNumberedItemBox>
          <ListNumberedItemBox>
            Notice to driver that a GoDee client has not been picked up at a bus stop
          </ListNumberedItemBox>
          <ListNumberedItemBox>
            Number of passengers assigned to each stop and driver
          </ListNumberedItemBox>
          <ListNumberedItemBox>
            Historical information through filters
          </ListNumberedItemBox>
        </ListNumberedBox>
        <h3 class="case_title_h3">Route optimization</h3>
      </section>
      <section class="container_middle m-24_top media-m-12_top m-48_bottom media-m-24_bottom">
        <div class="case_html-video-wrapper case_box-shadow">
          <Picture 
            pictureFolder="godee"
            fileName="route-optimization"
            fileExtension="jpg"
            alt=""
            :boxShadow="false"
            :lazyLoading="true"
            :borderRadius="false"
            v-if="isIphone"
          />
          <div class="case_video-flex-wrapper" v-else>
            <Picture 
              pictureFolder="common"
              fileName="safari-top-bar-white"
              fileExtension="jpg"
              alt=""
              :boxShadow="false"
              :lazyLoading="true"
              :borderRadius="false"
            />
            <video 
              id="route-optimization" 
              class="case_html-video" 
              width="100%" 
              height="100%" 
              loop="true" 
              muted="true"
            >
              <source :src="getPathRouteOptimizationVideo" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section class="container_regular">
        <TextParagraph>
          With the help of detailed drivers' performance data, Mad Devs’ Pifia microservice enables route managers to optimize ETA (estimated time of arrival). Pifia shows more accurate arrival and departure times with just one click.
        </TextParagraph>
        <TextQuoteBox class="m-48_top m-96_bottom media-m-24_top media-m-72_bottom m-auto">
          <span class="case_text-quote-break m-24_bottom media-m-12_bottom">Examples of early and late departure times:</span>
          <span>If Pifia determines that a minibus is usually late due to increased traffic at 5:35 pm and not 5:30 pm, it alerts the route manager to shift the arrival time to 5:35 pm. Five minutes might sound minor, but these small optimizations add up.</span>
        </TextQuoteBox>
      </section>
      <section class="container_full p-104_top p-100_bottom media-p-41_top media-p-24_bottom background-color-black-godee">
        <section class="container_regular case_real-time-eta">
          <div class="case_real-time-eta-text-content">
            <h2 class="case_title_h2 m-24_bottom media-m-8_bottom case_real-time-eta-title">Real-time ETA</h2>
            <TextParagraph class="m-24_bottom media-m-12_bottom" color="#a0a0a1">
              In addition, Pifia shows in real time the approximate late/early departures.
            </TextParagraph>
            <TextParagraph class="m-24_bottom media-m-12_bottom" color="#a0a0a1">
              Thus passengers who are waiting for the ride always know whether the bus is coming late and how long it will take.
            </TextParagraph>
            <TextParagraph color="#a0a0a1">
              The information is displayed on their mobile application.
            </TextParagraph>
          </div>
          <div class="case_phone-wrapper-eta-section">
            <Picture 
              pictureFolder="godee"
              fileName="real-time-eta-phone"
              fileExtension="png"
              alt=""
              :boxShadow="false"
              :lazyLoading="true"
            />
          </div>
        </section>
      </section>
      <section class="container_full case_infrastructure-scheme-wrapper background-color-silver m-48_bottom media-m-24_bottom">
        <section class="container_middle">
          <h2 class="case_title_h2 m-24_bottom case_text-align-center">Infrastructure scheme</h2>
          <img src="../../assets/img/Cases/godee/gif/infrastructure-scheme.gif" class="case_gif case_infrastructure-scheme-gif" alt="">
        </section>
      </section>
      <section class="container_regular">
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          The infrastructure is hosted on the Digital Ocean developer cloud. 
        </TextParagraph>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          Our applications send requests to the Nginx server, and then they are processed via the gRPC framework and each application is addressed to separate APIs. These APIs refer to Redis quick-caching Streams and the Georeferencing service, which allows bus drivers to be on track along their routes.
        </TextParagraph>
        <TextParagraph class="m-72_bottom media-m-48_bottom">
          Then all information, collected and processed by these services, is controlled via the Web Admin panel, which is connected to the PostgreSQL database, OSRM, Firebase and push notification services. We use Docker containers throughout the development process.
        </TextParagraph>
        <h3 class="case_title_h3 m-24_bottom media-m-12_bottom">Technology stack</h3>
        <ListTechnologies class="m-96_bottom media-m-48_bottom">
          <ListTechnologiesItem
            v-for="(technologiesItem, i) in technologiesList"
            :key="i"
            :techName="technologiesItem.techName"
            :className="technologiesItem.className"
          />
        </ListTechnologies>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-12_bottom">Monitoring</h2>
        <TextParagraph class="m-48_bottom media-m-12_bottom" > <!-- Выставить оступы на мобиле -->
          We believe that every production system requires proper monitoring. For this purpose, we use the Datadog service, which allows us to discover possible issues before they affect our users.
        </TextParagraph>
        <p class="m-12_bottom case_monitoring-section-bold">
          Here is an example of our monitoring configuration for the GoDee project:
        </p>
      </section>
      <section class="container_middle m-96_bottom media-m-48_bottom">
        <Picture 
          pictureFolder="godee"
          fileName="datadog"
          fileExtension="jpg"
          alt=""
          :boxShadow="true"
          :lazyLoading="true"
        />
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-12_bottom">Stable & Scalable solution</h2>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          Transportation and logistics software has zero tolerance to downtime. Imagine hundreds of passengers not being able to book their tickets, drivers not knowing where to pick up/drop off passengers or operators seeing empty screens. 
        </TextParagraph>
        <TextParagraph class="m-72_bottom media-m-48_bottom">
          GoDee’s microservice architecture and the quality of the solution make it easy for each Mad Devs developer to deploy new features without causing spikes in downtime. On top of this, 75% of code is covered by various tests and has detailed documentation and pull requests. GoDee's business model greatly benefits from economies of scale. Thus, increased demand from Ho Chi Minh citizens is backed up by GoDee's unchanging low cost for infrastructure.
        </TextParagraph>
        <h2 class="case_title_h2 m-12_bottom">Impact</h2>
        <TextParagraph class="m-24_bottom">
          GoDee faced the challenge of changing people’s habits. To grow the user base, we needed to create an extremely helpful and hassle-free solution that offers an alternative to expensive taxis and inconvenient motorbikes. It was also key that it be predictable, affordable and ‘green’ by design.
        </TextParagraph>
        <Card class="background-color-orange m-118_bottom media-m-48_bottom">
          <CardGoDeeImpact />
        </Card>
      </section>
      <section class="container_regular m-72_bottom media-m-48_bottom">
        <h2 class="case_title_h2 m-48_bottom media-m-24_bottom">Meet the team</h2>
        <ListTeam class="m-72_bottom media-m-48_bottom">
          <ListTeamItem
            v-for="(teamMember, i) in team"
            :key="i"
            :name="teamMember.name"
            :position="teamMember.position"
            :fileName="teamMember.fileName"
            :fileNameRetina="`${teamMember.fileName}@2x`"
            :fileExtension="teamMember.fileExtension"
            :alt="teamMember.name"
            pictureFolder="common"
          />
        </ListTeam>
        <TextQuoteAuthor
          class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
          authorName="Ruslan Karabukaev"
          authorPosition="Co-founder of GoDee"
          fileName="ruslan-karabukaev"
          fileExtension="png"
          alt=""
          pictureFolder="godee"
        >
          We built the platforms from scratch with the Mad Devs team, who dedicatedly supported and guided us to take proper action on several ideas and requirements. We have attracted 27,000 users so far, thanks to their continuous support for improvement and development.
        </TextQuoteAuthor>
      </section>
      <Footer link="/case-studies/namba-food" className="godee-case">
        <div class="case_logotype" slot="icon"></div>
        Namba Food <br> Top Delivery Service in <br class="case_mobile-screen-break"> Central Asia
      </Footer>
      <!-- Добавил главный футер сайта, так как из-за того что скролл на странице находиться у элемента .main, нельзя доскроллить фо футера -->
      <FooterMain class="background-color-black"/> 
    </main>
  </div>
</template>

<script>
import CaseHeader from '@/components/Cases/CaseHeader';
import Footer from '@/components/Cases/Footer';
import TextParagraph from '@/components/Cases/TextParagraph';
import TextQuote from '@/components/Cases/TextQuote';
import TextQuoteBox from '@/components/Cases/TextQuoteBox';
import Picture from '@/components/Cases/Picture';
import List from '@/components/Cases/List';
import ListNumberedBox from '@/components/Cases/ListNumberedBox';
import ListNumberedItemBox from '@/components/Cases/ListNumberedItemBox';
import ListTeam from '@/components/Cases/ListTeam';
import ListTeamItem from '@/components/Cases/ListTeamItem';
import ListItemBoxCheckMark from '@/components/Cases/ListItemBoxCheckMark';
import ListItemDot from '@/components/Cases/ListItemDot';
import ListTechnologies from '@/components/Cases/ListTechnologies';
import ListTechnologiesItem from '@/components/Cases/ListTechnologiesItem';
import Card from '@/components/Cases/Card';
import TextQuoteAuthor from '@/components/Cases/TextQuoteAuthor';
import Swiper from '@/components/Cases/Swiper';
import CardIssuesGoDee from '@/components/Cases/cards-content/CardIssuesGoDee';
import CardSolutionGoDee from '@/components/Cases/cards-content/CardSolutionGoDee';
import CardGoDeeFeature from '@/components/Cases/cards-content/CardGoDeeFeature';
import CardGoDeePreview from '@/components/Cases/cards-content/CardGoDeePreview';
import CardGoDeeImpact from '@/components/Cases/cards-content/CardGoDeeImpact';
import CardGoDeePrimsAlgorithm from '@/components/Cases/cards-content/CardGoDeePrimsAlgorithm';
import FooterMain from '@/components/Footer';
import HeaderMain from '@/components/Header';

export default {
  components: {
    TextParagraph,
    TextQuote,
    TextQuoteBox,
    Picture,
    List,
    ListNumberedBox,
    ListNumberedItemBox,
    ListTeam,
    ListTeamItem,
    ListItemBoxCheckMark,
    ListItemDot,
    ListTechnologies,
    ListTechnologiesItem,
    Card,
    TextQuoteAuthor,
    Footer,
    Swiper,
    CaseHeader,
    CardIssuesGoDee,
    CardSolutionGoDee,
    CardGoDeeFeature,
    CardGoDeePreview,
    CardGoDeeImpact,
    CardGoDeePrimsAlgorithm,
    FooterMain,
    HeaderMain
  },
  name: 'GoDeeCase',
  layout: 'godee-case-layout',
  head() {
    return {
      title: this.title,
      meta: [
        {name: 'description', content: this.description},
        {property: 'og:url', content: this.ogUrl},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: this.title},
        {property: 'og:description', content: this.description},
        {
          property: 'og:image',
          content: 'https://maddevs.io/Open-Graph.png'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://maddevs.io/case-studies/godee/'
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: ''
        }
      ]
    };
  },
  data() {
    return {
      title: '',
      description: '',
      ogUrl: 'https://maddevs.io/case-studies/godee/',
      team: [
        {
          name: 'Oleg Puzanov',
          position: 'CTO',
          fileName: 'oleg-puzanov',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Ruslan Kasymov',
          position: 'QA Engineer and PM',
          fileName: 'kasymov',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Rustom Kulbatyrov',
          position: 'Android Developer',
          fileName: 'kulbatyrov',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Vladimir Pan',
          position: 'QA Engineer',
          fileName: 'vladimir-pan',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Belek Abylov',
          position: 'Backend Developer',
          fileName: 'belek-abylov',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Bakhtiyar Ganyev',
          position: 'iOS Developer',
          fileName: 'bakhtiyar-ganyev',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Gennady Karev',
          position: 'Backend Developer',
          fileName: 'gennady-karev',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Aleksandr Krivov',
          position: 'Senior UX/UI Specialist',
          fileName: 'aleksandr-krivov',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Vlada Arevkova',
          position: 'UX/UI Specialist',
          fileName: 'vlada-arevkova',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Erik Sultanaliev',
          position: 'Backend Developer',
          fileName: 'erik-sultanaliev',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Myrzabek Kylychev',
          position: 'Android Developer',
          fileName: 'myrzabek-kylychev',
          fileExtension: 'png',
          alt: ''
        },
        {
          name: 'Pavel Pushkarev',
          position: 'iOS Developer',
          fileName: 'pushkarev',
          fileExtension: 'png',
          alt: ''
        }
      ],
      technologiesList: [
        {
          techName: 'Open Street Map',
          className: 'other-open-street-map'
        },
        {
          techName: 'Google Maps',
          className: 'other-google-maps'
        },
        {
          techName: 'PostgreSQL',
          className: 'backend-postgresql'
        },
        {
          techName: 'Docker',
          className: 'devops-docker case_technologies-item__docker'
        },
        {
          techName: 'Nginx',
          className: 'devops-nginx'
        },
        {
          techName: 'Redis',
          className: 'backend-redis'
        },
        {
          techName: 'Python (Django)',
          className: 'backend-python'
        },
        {
          techName: 'Golang',
          className: 'backend-go'
        },
        {
          techName: 'Kotlin',
          className: 'mobile-kotlin'
        },
        {
          techName: 'Atlassian',
          className: 'pm-atlassian'
        },
        {
          techName: 'Swift',
          className: 'mobile-swift'
        },
        {
          techName: 'Firebase',
          className: 'mobile-firebase'
        },
        {
          techName: 'TestFlight',
          className: 'mobile-test-flight'
        },
        {
          techName: 'Datadog',
          className: 'infrastructure-datadog'
        }
      ],
      videoIdList: [
        'trip-request-map',
        'trip-monitor',
        'route-optimization'
      ],
      translateY: null,
      isSafari: false,
      isIphone: false,
      smoothness: 4,
      cardsGridHeight: null,
      newHeight: null
    };
  },
  computed: {
    getPathTripRequestMapVideo: () => {
      return `${process.env.awsUrl}/map-stops.mp4`;
    },
    getPathTripMonitorVideo: () => {
      return `${process.env.awsUrl}/trip-monitor.mp4`;
    },
    getPathRouteOptimizationVideo: () => {
      return `${process.env.awsUrl}/route-optimization.mp4`;
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px 0px -2px 0px',
      threshold: 0.8
    };
    let previousScroll = 0;
    let currentScroll = 0;
    this.cardsGridHeight = this.$refs.cardsGridContainer.getBoundingClientRect().height;

    this.$refs.main.addEventListener('scroll', () => {
      if (window.innerWidth > 880) { // На разрешении экрана 880 происходит перестройка секции и анимация не должна больше отрабатывать
        currentScroll = this.$refs.main.scrollTop; // Сохраняем позицию скролла и затем сравниваем её предедущей, чтобы понимать в какую сторону идет скроллинг 
        if (currentScroll > previousScroll) {
          this.handleScrollDown();
        } else {
          this.handleScrollUp();
        }
        previousScroll = currentScroll;
      }
    });

    if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) { // Проверяем какой сейчас браузер чтобы на основе этих данных отрисовать блок
      this.isSafari = true;
    } else {
      this.isSafari = false;
    }

    if(navigator.userAgent.match(/(iPhone)/i)) {
      this.isIphone = true;
    } else {
      this.isIphone = false;
    }

    // Play/Pause HTML Video Based on Visibility
    this.videoIdList.forEach(video => {
      let callback = (entries, observer) => {
        entries.forEach(entry => {
          if(entry.target.id == video) {
            if(entry.isIntersecting) {
              entry.target.play();
            }
          }
        });
      };
      let observer = new IntersectionObserver(callback, options);
      observer.observe(document.getElementById(video));
    });
  },
  methods: {
    handleScrollDown() {
      const leftColumnOffsetBottom = Math.abs(this.$refs.cardsLeftColumn.getBoundingClientRect().bottom - this.$refs.cardsContainer.getBoundingClientRect().bottom); // Получаем расстояние снизу отностильно родителя и переводим число в положительное 
      const rightColumnOffsetBottom = Math.abs(this.$refs.cardsRightColumn.getBoundingClientRect().bottom - this.$refs.cardsContainer.getBoundingClientRect().bottom); 
      if (
        (this.$refs.cardsContainer.getBoundingClientRect().top - 62) < 0 &&
        leftColumnOffsetBottom > rightColumnOffsetBottom // Стратуем скрипт когда секция в зоне видимости и останавливаем когда левая и правая колонка выравниваються с друг другом по оси z
      ) {
        this.$refs.cardsRightColumn.style.transform = `translateY(${((this.$refs.cardsContainer.getBoundingClientRect().top - 62) / this.smoothness)}px)`; // число 62 - это высота хедера, высчитываем её чтобы скрипт стартовал когда секция ещё не заехала за хедер 
        this.$refs.developmentGoalsTitle.style.transform = `translateY(${((this.$refs.cardsContainer.getBoundingClientRect().top - 62) / this.smoothness)}px)`;
        this.translateY = ((this.$refs.cardsContainer.getBoundingClientRect().top - 62) / this.smoothness); // Сохраняем текщее свойство transform для дальнейшего расчета в функции handleScrollUp()
        this.newHeight = this.cardsGridHeight - Math.abs(((this.$refs.cardsContainer.getBoundingClientRect().top - 62) / this.smoothness - 96));
        this.$refs.cardsGridContainer.style.height = `${this.newHeight}px`;
      }
    },
    handleScrollUp() {
      if (
        (this.$refs.cardsContainer.getBoundingClientRect().top - 62) <= 0 && // Останавливаем скрипт когда контейнер достигает верха страницы чтобы правая колонка больше не смещалась и заняла свое изначальное положение
        (this.$refs.cardsContainer.getBoundingClientRect().top - 62) / this.smoothness > this.translateY // Данное сравнение нужно для того чтобы избежать рывков карточек при скролле вверх, скрипт запускается в случае если текущий отступ контейнера карточек равен числу в переменной translateY
      ) {
        this.$refs.cardsRightColumn.style.transform = `translateY(${((this.$refs.cardsContainer.getBoundingClientRect().top - 62) / this.smoothness)}px)`;
        this.$refs.developmentGoalsTitle.style.transform = `translateY(${((this.$refs.cardsContainer.getBoundingClientRect().top - 62) / this.smoothness)}px)`;
        this.$refs.cardsGridContainer.style.height = `${this.newHeight += 4.5}px`;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/cases/base";
@import "../../assets/styles/cases/mixins";
@import "../../assets/styles/cases/components";
@import "../../assets/styles/cases/godee/styles";
@import "../../assets/styles/cases/media";
</style>
