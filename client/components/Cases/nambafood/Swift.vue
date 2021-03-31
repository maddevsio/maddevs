<template>
  <section>
    <section class="container_regular">
      <h2 class="case_title_h2 m-96_top m-48_bottom media-m-48_top media-m-12_bottom">
        Swift admin panel — intelligent delivery control
      </h2>
    </section>
    <section class="container_middle">
      <Swiper
        :components="adminPanel"
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
        synonyms and names of places, looking for crossroads and addresses in a certain radius, and knows how to reverse
        geocoding and automatically update with new data from drivers.
      </TextParagraph>
    </section>
    <section class="container_middle">
      <div :class="{ 'case_box-shadow': !isIphone }" class="case_map-video-wrapper">
        <img
          v-if="isIphone"
          src="../../../assets/img/Cases/nambafood/jpg/map-blank.jpg"
          class="case_ios-map-video-image case_box-shadow"
        />
        <video v-else id="map-video" class="case_map-video" width="100%" height="100%" loop="true" muted="true">
          <source :src="getPathToMapVideo" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </section>
</template>

<script>
import Swiper from '@/components/Cases/Swiper'
import TextParagraph from '@/components/Cases/TextParagraph'
import TextQuoteBox from '@/components/Cases/TextQuoteBox'
import List from '@/components/Cases/List'
import ListItemDot from '@/components/Cases/ListItemDot'
import { adminPanel } from '@/data/caseNambafood'

export default {
  name: 'Swift',

  components: {
    Swiper,
    TextParagraph,
    TextQuoteBox,
    List,
    ListItemDot,
  },

  props: {
    isIphone: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      adminPanel,
    }
  },

  computed: {
    getPathToMapVideo: () => `${process.env.awsUrl}/map.c41e893.mp4`,
  },
}
</script>

<style></style>