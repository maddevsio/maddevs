<template>
  <div
    class="projects-countries container"
  >
    <h2
      class="projects-countries_title"
    >
      Global projects in 20+ countries
    </h2>
    <p
      class="projects-countries_description"
    >
      We build solutions for 35M+ users worldwide
    </p>
    <div class="projects-countries_img-wrap">
      <img
        :data-src="$getMediaFromS3('/images/Careers/svg/map.svg')"
        alt="lobal projects in 20+ countries"
        class="projects-countries_img media_lazy"
        width="1240"
        height="558"
      >
    </div>
    <UICustomersList
      class="projects-countries_customers-list"
      :customers="careersCustomers"
    />
    <UILinkButton
      class="projects-countries_link-btn"
      link="/case-studies/"
      title="See all case studies "
    />
  </div>
</template>

<script>
import UICustomersList from '@/components/shared/UICustomersList'
import UILinkButton from '@/components/shared/UILinkButton'
import { careersCustomers } from '@/data/customers'

export default {
  name: 'ProjectsCountries',
  components: {
    UICustomersList,
    UILinkButton,
  },

  data() {
    return {
      careersCustomers,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.projects-countries {
  margin-bottom: 233px;

  &_title,
  &_description {
    letter-spacing: -0.04em;
    line-height: 72px;
    text-align: center;
    color: $text-color--white;
  }

  &_title {
    @include font('Poppins', 60px, 700);
  }

  &_description {
    margin-bottom: 9px;
    @include font('Inter', 20px, 400);
  }

  &_img-wrap {
    min-width: 481px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  &_img {
    width: 100%;
    height: 100%;
  }

  &_customers-list {
    margin-bottom: 40px;
  }

  &_link-btn {
    margin: 0 auto;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 98px;

    &_title {
      margin-bottom: 7px;
      font-size: 44px;
      line-height: 50px;
    }

    &_description {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 27px;
    }
  }

  @media screen and (max-width: 620px) {
    &_title {
      font-size: 34px;
      line-height: 118%;
    }

    &_description {
      margin-bottom: 35px;
    }

    &_link-btn {
      width: 100%;
    }
  }
}
</style>
