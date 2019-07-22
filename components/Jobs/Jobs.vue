<template>
  <section id="jobs" class="jobs">
    <div class="container">
      <h2 class="sec-title">{{ $t('jobs-title') }}</h2>
      <div class="jobs_list">
        <a href="https://blog.maddevs.io/senior-ios-developer-2adfb6a057fd" class="jobs_list-item" target="_blank" rel="noreferrer">
          <h4>{{ $t('jobs1-subtitle') }}</h4>
          <p>{{ $t('jobs1-desc') }}</p>
          <h6>{{ $t('jobs1-date') }}</h6>
        </a>
        <a href="https://blog.maddevs.io/ios-internship-304e61968e8" class="jobs_list-item" target="_blank" rel="noreferrer">
          <h4>{{ $t('jobs2-subtitle') }}</h4>
          <p>{{ $t('jobs2-desc') }}</p>
          <h6>{{ $t('jobs2-date') }}</h6>
        </a>
        <a href="https://blog.maddevs.io/senior-android-developer-eafb19632a0e" class="jobs_list-item" target="_blank" rel="noreferrer">
          <h4>{{ $t('jobs3-subtitle') }}</h4>
          <p>{{ $t('jobs3-desc') }}</p>
          <h6>{{ $t('jobs3-date') }}</h6>
        </a>
        <a href="https://blog.maddevs.io/junior-ios-developer-ba6b9d2bf10c" class="jobs_list-item" target="_blank" rel="noreferrer">
          <h4>{{ $t('jobs4-subtitle') }}</h4>
          <p>{{ $t('jobs4-desc') }}</p>
          <h6>{{ $t('jobs4-date') }}</h6>
        </a>
        <a href="https://blog.maddevs.io/middle-ios-developer-c689a3bde141" class="jobs_list-item" target="_blank" rel="noreferrer">
          <h4>{{ $t('jobs5-subtitle') }}</h4>
          <p>{{ $t('jobs5-desc') }}</p>
          <h6>{{ $t('jobs5-date') }}</h6>
        </a>
        <a href="https://blog.maddevs.io/junior-android-developer-we-need-you-3068c1c58c03" class="jobs_list-item" target="_blank" rel="noreferrer">
          <h4>{{ $t('jobs6-subtitle') }}</h4>
          <p>{{ $t('jobs6-desc') }}</p>
          <h6>{{ $t('jobs6-date') }}</h6>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jobs'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .jobs {
    margin-top: 120px;
    padding: 60px 0;
    background-image: $gradient--red-orange;

    h2 {
      color: $text-color--white;
    }

    &_list {
      display: flex;
      justify-content: center;
      align-items: stretch;
      flex-wrap: wrap;
      margin-top: 10px;
      margin-left: -15px;
      margin-right: -15px;

      &-item {
        width: 25%;
        max-width: 410px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 15px;
        margin-top: 30px;
        border-radius: 5px;
        box-shadow: 0 4px 10px 0 rgba(38, 36, 32, 0.14);
        background-color: $text-color--white;
        padding: 20px;
        transition: all .2s ease;
        text-decoration: none;

        &:hover {
          box-shadow: 0 8px 16px 0 rgba(38, 36, 32, .2);
        }

        h4 {
          width: 100%;
          line-height: 1.42;
          font-size: 24px;
          font-family: 'MADEEvolveSans-bold',
            sans-serif;
          color: $text-color--black;
        }

        p {
          width: 100%;
          margin-top: 8px;
          line-height: 1.33;
          font-size: 18px;
          font-family: 'MADEEvolveSans-regular',
            sans-serif;
          letter-spacing: 0.2px;
          color: $text-color--black;
          margin-bottom: 15px;
        }

        h6 {
          font-family: 'MADEEvolveSans-regular',
            sans-serif;
          margin-top: auto;
          margin-bottom: 0;
          line-height: 1.5;
          letter-spacing: 0.1px;
          font-size: 14px;
          color: #8e8e8e;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .jobs {
      &_list {
        flex-wrap: wrap;

        &-item {
          width: calc(50% - 30px);
          max-width: calc(50% - 30px);
          box-sizing: border-box;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .jobs {
      &_list {
        &-item {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .jobs {
      margin-top: 80px;
      &_list {
        margin-top: 20px;
      }
    }
  }
</style>

