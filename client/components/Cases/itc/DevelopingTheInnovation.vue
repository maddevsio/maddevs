<template>
  <section class="case_container">
    <div class="container_regular">
      <h2 class="case_title_h2 m-24_bottom media-m-12_bottom">
        Developing the innovation
      </h2>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Mad Devs onboarded the development team and produced the minimum viable product (MVP) of the EMCI manual in record time.
      </TextParagraph>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        The MVP featured entity profiles, key elements of the workflow engagement history, and planning functionality. The application also enables users to manage SMEs’ profiles (fill out questionnaires and collect feedback), create coaching mission intervention reports, and plan and track coaching missions (by importing CSV files).
      </TextParagraph>
      <TextParagraph class="m-24_bottom">
        The MVP is scalable, meaning that further adjustments and enhancements can be made and the existing system will handle them. We planned for scalability when developing the app’s architecture and infrastructure. We wanted the application to be user-friendly and perform flawlessly, so we worked on more than the basic functionality.
      </TextParagraph>
      <ListNumberedBox class="m-24_bottom">
        <ListNumberedItemBox
          v-for="(innovation, i) in developingInnovation"
          :id="`innovation-item-${i}`"
          :key="innovation.text"
          :data-background="innovation.background"
        >
          {{ innovation.text }}
        </ListNumberedItemBox>
      </ListNumberedBox>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        The web application works on PC, Mac, iOS, and Android, so the coaches can use it on any device. We also added a multilingual user interface and made the app adaptable for various countries.
      </TextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Functionality
      </h3>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        We created three user categories for the application (Coaches, Institutional Partners [IPs], and ITC Admins). Users are also grouped by country, and access to features was customised by user group. Coaches can create new country-specific SMEs and search among existing ones. The coaches’ and IPs’ profiles are searchable, and the app tracks engagement history, reports mission progress, and calculates statistics.
      </TextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Infrastructure
      </h3>
      <TextParagraph class="m-24_bottom">
        We set up a CI/CD pipeline to update new features/bug fixes on the fly. We also added a staging environment to test updates before deployment. The monitoring system we put in place allows continuously checking the infrastructure’s performance and configuring relevant alerts.
      </TextParagraph>
    </div>
    <div class="container_middle case_img-wrap m-96_bottom media-m-48_bottom">
      <Picture
        :width="1026"
        :height="582"
        :lazy="true"
        folder="itc"
        file="infrastructure"
        extension="png"
        alt="Infrastructure"
      />
    </div>
    <div class="container_regular">
      <h3 class="case_title_h3 m-12_bottom">
        Our approaches
      </h3>
      <TextParagraph class="m-96_bottom media-m-48_bottom">
        In development, we relied on Domain-Driven Design (DDD) values and the Command Query Responsibility Segregation (CQRS) principle. CQRS is an approach that involves separating read and command operations, thus creating a better architecture and improving the observability of the entire system.
      </TextParagraph>
      <h3 class="case_title_h3 m-12_bottom">
        Benefits of CQRS
      </h3>
      <div class="case_cards-container m-48_bottom media-m-24_bottom">
        <Card class="background-color-silver">
          <TextParagraph>
            The backend structure allows for future modifications and augmentations, making the app scalable and adaptable
          </TextParagraph>
        </Card>
        <Card class="background-color-silver">
          <TextParagraph>
            Data processing can be flexibly optimised separately for the read side and the write side
          </TextParagraph>
        </Card>
        <Card class="background-color-silver">
          <TextParagraph>
            Overcomplicated logic is avoided so that the app’s performance does not have bottlenecks or vulnerabilities
          </TextParagraph>
        </Card>
        <Card class="background-color-silver">
          <TextParagraph>
            The system is more secure because access must be managed on one side only, so it is simpler to separate and distribute functions among user roles
          </TextParagraph>
        </Card>
      </div>
      <div class="m-96_bottom media-m-48_bottom">
        <Lottie
          id="benefits-of-cqrs"
          :options="options"
          class="case_lottie"
          @animCreated="handleAnimation"
        />
      </div>
      <h3 class="case_title_h3 m-12_bottom media-m-24_bottom">
        Benefits of Domain-driven design
      </h3>
      <TextParagraph class="m-24_bottom media-m-12_bottom">
        Domain-driven design helps the team create a common model. The teams from the customer’s side and from the developers’ side can then use this model to communicate the requirements. A domain model is modular and encapsulated, enabling the system to be changed and improved regularly and continuously.
      </TextParagraph>
      <TextParagraph>
        Requirements are always explained from the domain perspective. Conceptualising the software system in terms of the business domain reduces the risk of misunderstandings between the domain experts and the development team.
      </TextParagraph>
      <TextQuoteBox
        class="m-48_top m-48_bottom media-m-24_top media-m-24_bottom m-auto"
        author="Oleg Glazyrin, Tech Lead"
      >
        A system built with DDD and CQRS is robust and more transparent. If you are using DDD, it takes less time for developers and the customer to communicate, to understand how the system functions and what new requirements there are, and to start working with the system.
      </TextQuoteBox>
    </div>
    <div class="case_full-screen-image case_architecture-img m-72_bottom media-m-48_bottom m-auto">
      <Picture
        :width="1440"
        :height="644"
        :lazy="true"
        folder="itc"
        file="architecture"
        extension="jpg"
        alt="Architecture"
      />
    </div>
  </section>
</template>

<script>
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Card from '@/components/Cases/shared/Card'
import TextQuoteBox from '@/components/Cases/shared/TextQuoteBox'
import ListNumberedBox from '@/components/Cases/shared/ListNumberedBox'
import ListNumberedItemBox from '@/components/Cases/shared/ListNumberedItemBox'
import Picture from '@/components/Cases/shared/Picture'
import Lottie from 'vue-lottie/src/lottie.vue'
import animationData from '@/assets/lottie/itc/benefits-of-cqrs.json'
import playLottieMixin from '@/mixins/playLottieMixin'
import { developingInnovation, idList } from '@/data/caseITC'
import IntersectionObserverMixin from '@/mixins/IntersectionObserverMixin'
import setBackground from '@/helpers/setBackground'

export default {
  name: 'DevelopingTheInnovation',
  components: {
    TextParagraph,
    Card,
    TextQuoteBox,
    Lottie,
    ListNumberedBox,
    ListNumberedItemBox,
    Picture,
  },

  mixins: [
    playLottieMixin('benefits-of-cqrs', {
      animationData,
      autoplay: false,
      loop: false,
    }),
    IntersectionObserverMixin(
      idList,
      setBackground,
    ),
  ],

  data() {
    return {
      developingInnovation,
    }
  },
}
</script>

<style scoped lang="scss">
.case {
  &_cards-container {
    @include grid(repeat(2, 1fr), auto, 24px, 24px);

    @media screen and (max-width: 880px) {
      @include grid(repeat(1, 1fr), auto, 0, 10px);
    }
  }

  &_img-wrap {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));
  }

  &_architecture-img {
    @media screen and (max-width: 530px) {
      min-width: 530px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  /deep/ &_list-numbered_item {
    color: $text-color--white-primary !important;
    background-color: $bgcolor--grey-cases;
    transition: 0.4s;
  }
}
</style>
