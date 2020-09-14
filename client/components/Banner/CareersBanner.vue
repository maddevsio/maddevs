<template>
  <div class="container banner-container">
  <div class="banner-content">
    <div class="text-content_wrapper">
      <div class="main-title-wrapper">
        <h1 class="banner-main_title--white-first">
          Look!
        </h1>
        <span class="banner-main_title--white">A new Mad Devs' ranger is here!</span>
      </div>
    </div>
    <navigationList />
  </div>
  </div>
</template>

<script>
import navigationList from '@/components/ui/navigation-list';

export default {
  name: 'CareersBanner',
  components: {
    navigationList
  }
};
</script>

<style lang="scss" scoped>
  .container {
    position: relative;

    .main-title-wrapper {
      max-width: 91%;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      position: relative;

      .main-title-wrapper {
        max-width: 95%;
      }
    }
  }

  @media only screen and (max-width: 670px) {
    .container {
      position: relative;

      .main-title-wrapper {
        max-width: 90%;
      }
    }
  }

  @media only screen and (max-width: 610px) {
    .text-content_wrapper {
      padding-bottom: 70px;
    }

    .container {
      position: relative;

      .main-title-wrapper {
        max-width: 95%;
      }
    }
  }
</style>
