<template>
  <main class="main case">
    <CaseHeader
      :header-logo="headerLogo"
      video-name="/videos/main.ef19480.mp4"
      video-fallback-path="/images/Cases/nambafood/jpg/blank.jpg"
    >
      <h1 slot="title" class="case_header-title">Namba Food</h1>
      <p slot="description" class="case_header-description">
        Mad Devs created the Namba Food delivery service from scratch. The solution <br />
        orchestrates feature-rich apps for couriers, end-users, and business owners.
      </p>
    </CaseHeader>
    <section ref="caseBody" class="case_body">
      <div id="case-body" class="case_animation_block"></div>
      <section class="container_regular m-48_top m-96_bottom media-m-16_top media-m-48_bottom">
        <TextParagraph>
          Mad Devs developed the Namba Food delivery service from scratch. The apps for couriers, end-users placing
          orders and business owners work as a seamless system, ensuring a smooth delivery process for all types of
          goods.
        </TextParagraph>
        <TextQuoteBox class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto">
          Namba Food is a unique delivery service that combines speed, convenience and simplicity.
        </TextQuoteBox>
        <TextParagraph>
          Being first is hard. Namba Food’s success story focuses on how they took a global idea and successfully
          localised and integrated it into the daily lives of Kyrgyzstan's people. Since 2013, the company has been on a
          mission to bring value to both vendors and customers by conveniently delivering goods at the right time.
        </TextParagraph>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 case_text-align-center m-24_bottom media-m-12_bottom">
          Multi-directional business model
        </h2>
        <TextParagraph class="m-24_bottom case_text-align-center">
          Namba Food achieves complete synergy by diversifying to multi-directional business models.
        </TextParagraph>
        <Card class="background-color-black">
          <CardNinjaSushi />
        </Card>
        <CardsBusinessModelsGrid />
        <Card class="background-color-silver">
          <h3 class="case_title_h4 m-8_bottom">Namba Food API</h3>
          <TextParagraph>
            Namba Food API allows businesses to integrate the API into any mobile payment application. As a result,
            end-users can quickly order goods and services without leaving the app using the app’s own payment system.
            Such API benefits businesses because end users use the payment method defined by the mobile app. At the
            moment, Mbank by Commercial Bank Kyrgyzstan and Balance by Beeline, a telecommunication service provider,
            have successfully integrated Namba Food API into their mobile apps.
          </TextParagraph>
        </Card>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-96_top m-12_bottom media-m-48_top case_text-align-center">
          High-level system overview
        </h2>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          Namba Food is more than a delivery service website. With a partial vertical integration, it covers the entire
          cycle of ordering goods online. This means that an advanced set of software and hardware was required to
          maintain flawless work for all stakeholders, including end-users, couriers, team operators, and cafe and store
          managers.
        </TextParagraph>
      </section>
      <section class="container_full background-color-silver">
        <img
          :src="getMediaFromS3('/images/Cases/nambafood/gif/high-level-system-overview.gif')"
          class="case_gif case_high-level-system-overview-gif"
          alt="Namba Food: Website and Mobile App Infrastructure Scheme."
        />
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 case_text-align-center m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
          Typical usage scenarios and user roles
        </h2>
        <TextParagraph class="case_text-align-center m-48_bottom media-m-24_bottom">
          Namba Food involves several user journeys for different roles. Each user journey required different sets of
          functionalities and user interfaces.
        </TextParagraph>
        <div class="case_usage-scenarios">
          <Card
            v-for="(useСase, i) in usageScenarios"
            :key="i"
            :class="useСase.classList.cardColor"
            class="case_usage-scenarios-card"
          >
            <CardUseCase
              :title="useСase.title"
              :description="useСase.description"
              :file-name="useСase.fileName"
              :file-extension="useСase.fileExtension"
              :alt="useСase.alt"
              :class-list="useСase.classList"
              picture-folder="nambafood"
            />
          </Card>
        </div>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
          Web version and mobile applications for end-users
        </h2>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          Namba Food is not a simple catalogue of goods and services, as it aims to seamlessly blend into the modern,
          busy lifestyle of its customers. Developing a convenient process for ordering products and making it
          stress-free was key.
        </TextParagraph>
      </section>
      <section class="container_full background-color-silver p-75_top p-75_bottom media-p-16_top media-p-16_bottom">
        <div class="case_full-screen-phone-video-wrapper">
          <img
            v-if="isIphone"
            :src="getMediaFromS3('/images/Cases/nambafood/png/iphone-video-preview.png')"
            class="case_phone-ios-image"
          />
          <video
            v-else
            id="iphone-silver-video"
            class="case_full-screen-video"
            width="100%"
            height="100%"
            loop="true"
            muted="true"
          >
            <source :src="getMediaFromS3('/videos/mobile-applications-for-end-users.faaab2d.mp4')" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
          Simple ordering process for end-users
        </h2>
        <TextParagraph class="m-24_bottom">
          Namba Food meticulously studied users' behaviours and collected feedback to find the perfect market fit.
        </TextParagraph>
        <ListNumberedBox class="m-72_bottom media-m-48_bottom">
          <ListNumberedItemBox
            >Users go to the website and choose cafes and shops (+ orders can be placed via phone).
          </ListNumberedItemBox>
          <ListNumberedItemBox>Users save products to cart and check out.</ListNumberedItemBox>
          <ListNumberedItemBox
            >Users receive a call from an operator to confirm the order or can tick the "no calls" checkbox.
          </ListNumberedItemBox>
          <ListNumberedItemBox>Courier delivers the order at a pre-estimated time.</ListNumberedItemBox>
        </ListNumberedBox>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">Customers track order statuses</h2>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          As Namba Food’s delivery service grew more popular, the load on customer support and its operators increased
          exponentially.
        </TextParagraph>
        <TextParagraph class="m-24_bottom media-m-12_bottom">
          Customer support challenge: The lack of transparent status updates led to the majority of users calling to
          check the delivery status. Business challenge: A continuously growing number of customer support teams
          occurred in high operational expenses.
        </TextParagraph>
        <TextParagraph class="m-96_bottom media-m-48_bottom">
          Solution: The Mad Devs team has developed a user-friendly status feature that allows customers to easily track
          progress on both the mobile app and website.
        </TextParagraph>
      </section>
      <div class="container_full background-color-black m-48_bottom case_black-section">
        <div class="case_black-section-content">
          <section class="container_regular">
            <h2
              :style="{ color: '#ffffff' }"
              class="case_title_h2 case_text-align-center m-48_bottom p-78_top media-m-8_bottom media-p-38_top"
            >
              Android application for couriers
            </h2>
            <TextParagraph color="#ffffff" class="case_text-align-center m-56_bottom media-m-16_bottom">
              The Android app for couriers enables them to receive new orders assigned to them by operators via the
              control panel. After a courier is assigned to the order, their app receives a push notification and
              displays the order pick-up location. After getting the notification, the courier picks up the order from a
              cafe or a shop and heads to the client.
            </TextParagraph>
          </section>
          <section class="container_middle case_couriers-android-app-wrapper">
            <Picture
              :lazy-loading="false"
              picture-folder="nambafood"
              file-name="couriers-android-app"
              file-extension="png"
              alt="Namba Food: Courier App for Android."
            />
          </section>
          <div class="case_black-gradient"></div>
        </div>
      </div>
      <section class="container_regular">
        <h2 class="case_title_h2">Admin panel automates Namba Food’s scalability</h2>
        <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
          The built-in reporting functionality enables managers to have full control over the entire list of business
          partners.
        </TextQuoteBox>
        <TextParagraph class="m-48_bottom">
          In the admin panel, managers can configure discounts, set working days and hours for cafes, add new meal
          offerings and do many other things enabling them to deliver users the best possible experience.
        </TextParagraph>
      </section>
      <section class="container_middle m-72_bottom media-m-48_bottom">
        <Picture
          :box-shadow="true"
          :lazy-loading="true"
          picture-folder="nambafood"
          file-name="sjms-analytics"
          file-name-retina="sjms-analytics@2x"
          file-extension="jpg"
          alt="Namba Food: Admin Panel Which Help to Manage Food and Grocery Delivery."
        />
      </section>
      <section class="container_regular">
        <TextParagraph>
          Integrating new business with 1000+ products takes less than a few hours. The scalability of Namba Food
          enables its managers to integrate new business partners into a system quickly. Managers prepare an Excel file
          with structured menu or product data.
        </TextParagraph>
        <TextQuote class="m-auto m-96_top m-96_bottom media-m-48_top media-m-72_bottom">
          Namba Food automatically categorises data inside the managers' dashboard panel. More than 4000 products can be
          catalogued in a few clicks.
        </TextQuote>
        <h3 class="case_title_h3 m-12_bottom">Flexible catalogue management</h3>
        <TextParagraph class="m-96_bottom media-m-48_bottom">
          Managing partners' content is straightforward, as managers can quickly turn on or off a position inside the
          catalogue and change pictures and descriptions. Such flexibility enables business owners to meet daily
          business needs. For example, if a cafe offers a seasonal menu, the items from the summer menu can be
          temporarily turned off during the rest of the year.
        </TextParagraph>
        <h3 class="case_title_h3 m-24_bottom">Control panel functionality</h3>
        <div class="case_columns_container">
          <Card class="background-color-silver">
            <h4 class="case_title_h4 m-12_bottom media-m-6_bottom case_control-panel-card-title">
              Namba Food <br />
              managers
            </h4>
            <TextParagraph class="m-24_bottom media-m-12_bottom">
              The control panel gives managers a high-level overview of Namba Food’s daily, weekly, monthly and yearly
              performance. Business owners receive automatically generated monthly reports to their email.
            </TextParagraph>
            <TextParagraph class="m-8_bottom media-m-12_bottom">
              Detailed reports include information <br />
              such as:
            </TextParagraph>
            <List>
              <ListItemDot>Accrued revenue</ListItemDot>
              <ListItemDot>Total number of orders</ListItemDot>
              <ListItemDot>Total accrued commission</ListItemDot>
            </List>
          </Card>
          <Card class="background-color-silver">
            <h4 class="case_title_h4 m-12_bottom media-m-6_bottom case_control-panel-card-title">
              Namba Food <br />
              operators
            </h4>
            <TextParagraph class="m-24_bottom media-m-12_bottom">
              The control panel enables operators to manage promo codes and items ordered from a shop or restaurant. The
              panel makes it easy to get an order status overview, make required corrections and cancel orders if
              necessary.
            </TextParagraph>
            <TextParagraph>
              Within the panel, operators interact with clients by confirming orders and ensuring that customers’ notes
              are communicated during the process.
            </TextParagraph>
          </Card>
        </div>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-96_top m-48_bottom media-m-48_top media-m-12_bottom">
          Swift admin panel — intelligent delivery control
        </h2>
      </section>
      <section class="container_middle">
        <Swiper
          :components="swiperAdminPanel"
          :safari-top-bar="true"
          :box-shadow="true"
          slider-description=""
          safari-top-bar-image="swiper-frame"
          safari-top-bar-alt="Namba Food: Food and Grocery Delivery Service Website Header."
        />
      </section>
      <section class="container_regular">
        <TextParagraph class="m-56_top media-m-24_top">
          The Swift microservice-based admin panel receives order information from the control panel and helps the
          operators to overview and manage the delivery processes. It displays orders by statuses as diagrams.
        </TextParagraph>
        <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
          The Swift admin panel helps operators to stay in touch with a courier if there is an issue on the way.
        </TextQuoteBox>
        <div class="case_delivery-control-cards m-72_bottom media-m-48_bottom">
          <div class="background-color-silver case_delivery-control-card">
            <TextParagraph>
              Track the couriers' locations on a map and provide statuses of all orders and couriers.
            </TextParagraph>
          </div>
          <div class="background-color-silver case_delivery-control-card">
            <TextParagraph> Extract customers’ notes and communicate them to couriers. </TextParagraph>
          </div>
          <div class="background-color-silver case_delivery-control-card">
            <TextParagraph> Assign orders and prepare reports. </TextParagraph>
          </div>
          <div class="background-color-silver case_delivery-control-card">
            <TextParagraph> Call curriers using Free SWITCH microservice. </TextParagraph>
          </div>
        </div>
        <h3 class="case_title_h3 m-12_bottom">Intelligent auto-assignment system for courier management</h3>
        <TextParagraph class="m-8_bottom">
          The intelligent auto-assignment of orders allows operators to assign couriers to orders, taking into
          consideration the following factors:
        </TextParagraph>
        <List class="m-78_bottom media-m-48_bottom">
          <ListItemDot>Location of a courier, a cafe/restaurant and the end-user address.</ListItemDot>
          <ListItemDot
            >Courier's number of orders delivered during the current shift and in the last three hours.
          </ListItemDot>
          <ListItemDot
            >End-user location in relation to couriers, who are already carrying the order, and in relation to the next
            order’s pick-up point with the current order.
          </ListItemDot>
        </List>
        <h3 class="case_title_h3 m-12_bottom">Auto-assignment system under the hood</h3>
        <TextParagraph class="m-8_bottom">
          Three open-source solutions work together as a cohesive and smart system to perform auto-assignment of orders.
          This allows you to select the most suitable courier for each order, which reduces delivery time.
        </TextParagraph>
        <List class="m-78_bottom media-m-48_bottom">
          <ListItemDot>Ariadna parses open-source map data and inserts them into ElasticSearch.</ListItemDot>
          <ListItemDot>ElasticSearch stores couriers’ current locations.</ListItemDot>
          <ListItemDot>OSMR is a routing engine for the shortest paths and road networks.</ListItemDot>
        </List>
        <h3 class="case_title_h3 m-12_bottom">Geocoder Ariadna on ElasticSearch with OpenStreetMap</h3>
        <TextParagraph class="m-48_bottom">
          <a href="https://github.com/maddevsio/ariadna" class="case_link" target="_blank">Ariadna</a> is an open-source
          geocoder based on ElasticSearch with OpenStreetMap, in-house developed. The tool searches for coordinates by
          synonyms and names of places, looking for crossroads and addresses in a certain radius, and knows how to
          reverse geocoding and automatically update with new data from drivers.
        </TextParagraph>
      </section>
      <section class="container_middle">
        <div :class="{ 'case_box-shadow': !isIphone }" class="case_map-video-wrapper">
          <img
            v-if="isIphone"
            :src="getMediaFromS3('/images/Cases/nambafood/jpg/map-blank.jpg')"
            class="case_ios-map-video-image case_box-shadow"
          />
          <video v-else id="map-video" class="case_map-video" width="100%" height="100%" loop="true" muted="true">
            <source :src="getMediaFromS3('/videos/map.c41e893.mp4')" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3 m-96_top m-12_bottom media-m-48_top">
          Grafana — Docker containers’ monitoring service
        </h3>
        <TextParagraph class="m-48_bottom">
          To monitor the stability of Namba Food software, Mad Devs has integrated Grafana. It allows our developers to
          keep track of services in Docker containers. Grafana shows how the load in the project is balanced, including
          disk space consumed, memory allocated, swap, load, container uptime and other parameters.
        </TextParagraph>
      </section>
      <section class="container_middle">
        <Picture
          :box-shadow="true"
          :lazy-loading="true"
          picture-folder="nambafood"
          file-name="grafana"
          file-name-retina="grafana@2x"
          file-extension="jpg"
          alt="Namba Food: Software Stability Monitoring with Grafana."
        />
      </section>
      <section class="container_regular">
        <TextParagraph class="m-24_top media-m-48_top">
          Monitoring also helps Mad Devs to prevent service timeouts. When the load grows, we can track spikes, estimate
          the severity of an issue and quickly resolve it.
        </TextParagraph>
        <h3 class="case_title_h3 m-96_top m-48_bottom media-m-72_top media-m-24_bottom">
          Technologies used for the Namba Food project
        </h3>
        <ListTechnologies>
          <ListTechnologiesItem
            v-for="(technologiesItem, i) in technologiesList"
            :key="i"
            :tech-name="technologiesItem.techName"
            :class-name="technologiesItem.className"
          />
        </ListTechnologies>
        <h3 class="case_title_h3 m-107_top m-24_bottom media-m-48_top">Website and mobile app infrastructure scheme</h3>
      </section>
      <section class="container_full background-color-silver">
        <img
          :src="getMediaFromS3('/images/Cases/nambafood/gif/website-and-mobile-apps-infrastructure-scheme.gif')"
          class="case_gif case_website-and-mobile-apps-infrastructure-scheme-gif"
          alt="Namba Food: Website and Mobile App Infrastructure Scheme."
        />
      </section>
      <section class="container_regular">
        <TextParagraph class="m-24_top">
          A local hosting provider is used to host the infrastructure. When a system receives a request from the client,
          it is handled by the Nginx proxy. When the Mad Devs team deploys a new version, we use the Nginx Gen server.
          The Nginx proxy sends requests to the website, which is in turn connected to the MySQL database, and Redis
          serves as an in-memory key-value storage.
        </TextParagraph>
        <TextParagraph class="m-24_top media-m-12_top">
          All our services run in Docker containers, which simplifies the process of infrastructure maintenance and
          monitoring.
        </TextParagraph>
        <h3 class="case_title_h3 m-96_top m-12_bottom media-m-48_top">Pipelines</h3>
        <TextParagraph class="m-24_bottom">
          At Mad Devs, we widely use pipelines. The deployment stage has been automated for the staging server, and
          deployment on the production server is done manually. The pipeline for the Namba Food system is displayed
          below.
        </TextParagraph>
      </section>
      <section class="container_full background-color-silver case_pipelines-image-desktop">
        <section class="container_full case_full-screen-image">
          <Picture
            :lazy-loading="true"
            picture-folder="nambafood"
            file-name="pipelines"
            file-name-retina="pipelines@2x"
            file-extension="jpg"
            alt="Namba Food: Automated Deployment Stage Scheme."
          />
        </section>
      </section>
      <section class="container_full case_pipelines-image-mobile">
        <section class="container_full case_full-screen-image">
          <Picture
            :lazy-loading="true"
            picture-folder="nambafood"
            file-name="pipelines-mobile"
            file-name-retina="pipelines-mobile@2x"
            file-extension="jpg"
            alt="Namba Food: Automated Deployment Stage Scheme."
          />
        </section>
      </section>
      <section class="container_regular">
        <h3 class="case_title_h3 m-96_top m-24_bottom media-m-48_top media-m-12_bottom">Meet the team</h3>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          There are now three members on the core development team; during the pre-launch phase, a larger team worked on
          the Namba Food project. Over the course of the project, five full-time employees and two part-timers have
          worked closely with the customer:
        </TextParagraph>
        <ListTeam>
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
        </ListTeam>
        <h4 class="case_title_h4 m-72_top m-12_bottom media-m-41_top">Transparent communication</h4>
        <TextParagraph>
          Weekly calls with the customer's business representatives and monthly meetings to see what could be improved
          from a development/IT viewpoint. Our staff members also work on the Namba Food premises several days a week to
          keep in touch with the customer's employees. This keeps everyone on the same page. We can collect the most
          recent business requirements and quickly respond to changes that a highly competitive delivery market may
          throw at us.
        </TextParagraph>
      </section>
      <section class="container_regular">
        <h2 class="case_title_h2 m-96_top m-24_bottom media-m-48_top media-m-12_bottom">
          Nationwide success and day-to-day improvements
        </h2>
        <TextParagraph>
          Launched in 2013, Namba Food became a fully self-supported service in just two years. Due to Namba Food’s
          vision and understanding of its target audience, we were able to
          <nuxt-link :to="`/services#software-development`" class="case_link">build a product</nuxt-link> that truly
          solves this customer’s problems. The year-over-year growth rate is hugely impressive.
        </TextParagraph>
        <TextQuoteBox class="m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom">
          As the number of businesses using Namba Food continues to increase,
          <span class="case_blockquote-box_text-modificator"
            >the service's yearly growth rate is about 50% for both revenue and deliveries made.</span
          >
        </TextQuoteBox>
        <TextParagraph class="m-48_bottom media-m-24_bottom">
          In 2017, Namba Food won a prestigious all-country award for the Best Online Service in Kyrgyzstan at a KIT
          forum.
        </TextParagraph>
        <div class="case_nationwide-cards m-72_bottom media-m-48_bottom">
          <Card class="background-color-silver">
            <CardDeliveryServiceNambafood />
          </Card>
          <Card class="background-color-silver case_restaurant-talisman-card">
            <CardRestaurantTalisman />
          </Card>
          <Card class="background-color-silver">
            <CardNationwideNumbers />
          </Card>
        </div>
        <TextQuoteAuthor
          class="case_text-align-center m-72_bottom p-48_top media-m-48_bottom"
          author-name="Aziza Anarbekova"
          author-position="Co-Founder, Namba Food"
          file-name="aziza-anarbekova"
          file-extension="png"
          alt="Aziza Anarbekova Namba Food Delivery Service Co-Founder."
          picture-folder="nambafood"
        >
          “Thanks to our close collaboration, we saw a notable increase in the return on investment, as the number of
          orders grew by 53% YoY. The Mad Devs Team always surpasses expectations and stays open to suggestions. The
          team's competency and dedication enabled the prolonged partnership between our companies.”
        </TextQuoteAuthor>
      </section>
    </section>
    <Footer link="/case-studies/sir-john-monash-centre/" class-name="namba-food-case">
      <div slot="icon" class="case_logotype"></div>
      The maintenance <br class="case_mobile-break" />
      of memory: <br />
      Sir John Monash <br class="case_mobile-break" />
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
import Picture from '@/components/Cases/Picture'
import List from '@/components/Cases/List'
import ListNumberedBox from '@/components/Cases/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/ListNumberedItemBox'
import ListTeam from '@/components/Cases/ListTeam'
import ListTeamItem from '@/components/Cases/ListTeamItem'
import ListItemDot from '@/components/Cases/ListItemDot'
import ListTechnologies from '@/components/Cases/ListTechnologies'
import ListTechnologiesItem from '@/components/Cases/ListTechnologiesItem'
import Card from '@/components/Cases/Card'
import CardUseCase from '@/components/Cases/cards/namba-food/CardUseCase'
import CardsBusinessModelsGrid from '@/components/Cases/cards/namba-food/CardsBusinessModelsGrid'
import TextQuoteAuthor from '@/components/Cases/TextQuoteAuthor'
import CardDeliveryServiceNambafood from '@/components/Cases/cards/namba-food/CardDeliveryServiceNambafood'
import CardRestaurantTalisman from '@/components/Cases/cards/namba-food/CardRestaurantTalisman'
import CardNationwideNumbers from '@/components/Cases/cards/namba-food/CardNationwideNumbers'
import CardNinjaSushi from '@/components/Cases/cards/namba-food/CardNinjaSushi'
import Swiper from '@/components/Cases/Swiper'
import { getMetadata, buildHead } from '@/data/seo'
import initLazyLoadMixin from '@/mixins/initLazyLoadMixin'

export default {
  name: 'NambaFood',
  components: {
    CaseHeader,
    TextParagraph,
    TextQuote,
    TextQuoteBox,
    Picture,
    List,
    ListNumberedBox,
    ListNumberedItemBox,
    ListTeam,
    ListTeamItem,
    ListItemDot,
    ListTechnologies,
    ListTechnologiesItem,
    Card,
    CardUseCase,
    CardsBusinessModelsGrid,
    TextQuoteAuthor,
    Footer,
    CardDeliveryServiceNambafood,
    CardRestaurantTalisman,
    CardNationwideNumbers,
    Swiper,
    CardNinjaSushi,
  },

  mixins: [initLazyLoadMixin],

  data() {
    return {
      team: [
        {
          name: 'Vlad Andreev',
          position: 'Team Lead',
          fileName: 'vlad-andreev',
          fileExtension: 'png',
          alt: 'Vlad Andreev',
        },
        {
          name: 'Gulbustan Baudunova',
          position: 'Back-end Developer',
          fileName: 'gulbustan-baudunova',
          fileExtension: 'png',
          alt: 'Gulbustan Baudunova',
        },
        {
          name: 'Tamara Mun',
          position: 'Delivery Manager',
          fileName: 'tamara-mun',
          fileExtension: 'png',
          alt: 'Tamara Mun',
        },
        {
          name: 'Aidai Atakulova',
          position: 'Project Manager',
          fileName: 'aidai-atakulova',
          fileExtension: 'png',
          alt: 'Aidai Atakulova',
        },
        {
          name: 'Baurzhan Omuraliev',
          position: 'Back-end Developer',
          fileName: 'baurzhan-omuraliev',
          fileExtension: 'png',
          alt: 'Baurzhan Omuraliev',
        },
        {
          name: 'Nakylai Taiirova',
          position: 'Back-end Developer',
          fileName: 'nakylai-taiirova',
          fileExtension: 'png',
          alt: 'Nakylai Taiirova',
        },
        {
          name: 'Akylbek Djumaliev',
          position: 'Back-end Developer',
          fileName: 'akylbek-djumaliev',
          fileExtension: 'png',
          alt: 'Akylbek Djumaliev',
        },
        {
          name: 'Stanislav Shcherbinin',
          position: 'Back-end Developer',
          fileName: 'stanislav-shcherbinin',
          fileExtension: 'png',
          alt: 'Stanislav Shcherbinin',
        },
        {
          name: 'Eldar Akkozov',
          position: 'Mobile App Developer',
          fileName: 'eldar-akkozov',
          fileExtension: 'png',
          alt: 'Eldar Akkozov',
        },
        {
          name: 'Altynai Toktomuratova',
          position: 'Mobile App Developer',
          fileName: 'altynai-toktomuratova',
          fileExtension: 'png',
          alt: 'Altynai Toktomuratova',
        },
        {
          name: 'Dmitrii Khalezin',
          position: 'DevOps Engineer',
          fileName: 'dmitrii-khalezin',
          fileExtension: 'png',
          alt: 'Dmitrii Khalezin',
        },
        {
          name: 'Belek Abylov',
          position: 'Back-end Developer',
          fileName: 'belek-abylov',
          fileExtension: 'png',
          alt: 'Belek Abylov',
        },
      ],

      technologiesList: [
        {
          techName: 'MySQL',
          className: 'backend-mysql',
        },
        {
          techName: 'PHP Symfony2',
          className: 'backend-symfony',
        },
        {
          techName: 'Laravel',
          className: 'backend-laravel',
        },
        {
          techName: 'Docker',
          className: 'devops-docker case_technologies-item__docker',
        },
        {
          techName: 'Nginx',
          className: 'devops-nginx',
        },
        {
          techName: 'Redis',
          className: 'backend-redis',
        },
        {
          techName: 'Python (Django)',
          className: 'backend-python',
        },
        {
          techName: 'Golang',
          className: 'backend-go',
        },
        {
          techName: 'Kotlin',
          className: 'mobile-kotlin',
        },
        {
          techName: 'Java',
          className: 'mobile-java',
        },
        {
          techName: 'Swift',
          className: 'mobile-swift',
        },
        {
          techName: 'Firebase',
          className: 'mobile-firebase',
        },
        {
          techName: 'TestFlight',
          className: 'mobile-test-flight',
        },
        {
          techName: 'OpenStreetMap',
          className: 'other-open-street-map',
        },
        {
          techName: 'PHP',
          className: 'backend-php',
        },
        {
          techName: 'Jira Assistant',
          className: 'pm-jira-assistant-blue',
        },
        {
          techName: 'Grafana',
          className: 'devops-grafana',
        },
        {
          techName: 'Sentry',
          className: 'devops-sentry-dark',
        },
      ],

      usageScenarios: [
        {
          title: 'Website, mobile <br> application',
          description: 'Offers easy-to-use interface and fast navigation for Namba Food users.',
          classList: {
            cardColor: 'background-color-red',
            uniqueСlass: 'red-card',
          },

          fileName: 'apple-iphone-xr-silver',
          fileExtension: 'png',
          alt: 'Namba Food: Food and Grocery Delivery App for Iphone.',
        },
        {
          title: 'Application for <br> deliverymen',
          description: 'Allows planning a route and quickly getting information about orders.',
          classList: {
            cardColor: 'background-color-black',
            uniqueСlass: 'black-card',
          },

          fileName: 'samsung-galaxy-s20-cosmic-gray',
          fileExtension: 'png',
          alt: 'Namba Food: Courier App for Android.',
        },
        {
          title: 'Unified control system for operators',
          description: 'Includes full control of the ordering process from order acceptance to status tracking.',
          classList: {
            cardColor: 'background-color-turquoise',
            uniqueСlass: 'turquoise-card',
          },

          fileName: 'system-for-call-center',
          fileExtension: 'png',
          alt: 'Namba Food: Admin Panel Which Help to Control and Track Food and Grocery Delivery.',
        },
        {
          title: 'Control panel for <br> managers',
          description: 'Facilitates uploading the menu and updating information about services.',
          classList: {
            cardColor: 'background-color-silver',
            uniqueСlass: 'white-card',
          },

          fileName: 'sjms-analytics-mini',
          fileExtension: 'png',
          alt: 'Namba Food: Admin Panel Which Help to Manage Food and Grocery Delivery.',
        },
      ],

      swiperAdminPanel: [
        {
          fileName: 'admin',
          pictureFolder: 'nambafood',
          fileExtension: 'jpg',
          alt: 'Namba Food: Swift microservice-based admin panel which help to control food and grocery delivery.',
        },
        {
          fileName: 'dashboard',
          pictureFolder: 'nambafood',
          fileExtension: 'jpg',
          alt: 'Namba Food Delivery Control Dashboard.',
        },
      ],

      videoIdList: ['map-video', 'iphone-silver-video'],
      isIphone: false,
      headerLogo: {
        width: 259,
        height: 82,
        pictureFolder: 'nambafood',
        fileName: 'nambafood-logo',
        alt: '',
      },
    }
  },

  head() {
    return buildHead({
      ...getMetadata('nambafood'),
      image: 'https://maddevs.io/namba-food.png',
    })
  },

  mounted() {
    // Play/Pause HTML Video Based on Visibility
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }
    this.videoIdList.forEach(video => {
      const callback = entries => {
        entries.forEach(entry => {
          if (entry.target.id === video) {
            if (entry.isIntersecting) {
              entry.target.play()
            }
          }
        })
      }
      const observer = new IntersectionObserver(callback, options)
      observer.observe(document.getElementById(video))
    })

    if (navigator.userAgent.match(/(iPhone)/i)) {
      this.isIphone = true
    } else {
      this.isIphone = false
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/styles/cases/base';
@import '../../assets/styles/cases/mixins';
@import '../../assets/styles/cases/components';
@import '../../assets/styles/cases/nambafood/styles';
@import '../../assets/styles/cases/media';
</style>
