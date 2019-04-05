<template>
    <section id="jobs" class="jobs">
        <div class="container">
            <h2 class="sec-title">{{ $t('jobs-title') }}</h2>
            <div class="jobs_list">
                <a href="https://blog.maddevs.io/junior-ios-developer-bce2961a89f8" class="jobs_list-item" target="_blank" rel="noreferrer">
                    <h4>{{ $t('jobs1-subtitle') }}</h4>
                    <p>{{ $t('jobs1-desc') }}</p>
                    <h6>{{ $t('jobs1-date') }}</h6>
                </a>
                <!-- <a href="https://blog.maddevs.io/middle-junior-python-developer-df1125e7c28b" class="jobs_list-item" target="_blank" rel="noreferrer">
                    <h4>{{ $t('jobs2-subtitle') }}</h4>
                    <p>{{ $t('jobs2-desc') }}</p>
                    <h6>{{ $t('jobs2-date') }}</h6>
                </a> -->
                <a href="https://blog.maddevs.io/middle-php-developer-91074783ac13" class="jobs_list-item" target="_blank" rel="noreferrer">
                    <h4>{{ $t('jobs3-subtitle') }}</h4>
                    <p>{{ $t('jobs3-desc') }}</p>
                    <h6>{{ $t('jobs3-date') }}</h6>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Jobs',
};
</script>

<style lang="scss" scoped>
.jobs {
  margin-top: 120px;
  padding: 60px 0;
  background-image: linear-gradient(112deg, #f34f53, #fc944e);

  h2 {
    color: #fff;
  }

  &_list {
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin-top: 40px;
    margin-left: -15px;
    margin-right: -15px;

    &-item {
      width: 100%;
      max-width: 410px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 15px;
      border-radius: 5px;
      box-shadow: 0 4px 10px 0 rgba(38, 36, 32, 0.14);
      background-color: #fff;
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
        color: #000;
      }

      p {
        width: 100%;
        margin-top: 8px;
        line-height: 1.33;
        font-size: 18px;
        font-family: 'MADEEvolveSans-regular',
          sans-serif;
        letter-spacing: 0.2px;
        color: #000;
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

        &:last-child {
          margin-bottom: 0;
        }
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
        margin-bottom: 40px;
      }
    }
  }
}
@media only screen and (max-width: 480px) {
  .jobs {
    margin-top: 80px;
  }
}
</style>

