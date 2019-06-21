<template>
  <section id="partners" class="partners">
    <div class="container">
      <h2 class="sec-title">{{$t('Partners')}}</h2>
      <div class="partners-wrap">
        <a href="https://neureal.net" target="_blank" rel="noreferrer" class="partners-wrap_item">
          <div class="partners-wrap_item_img">
            <img src="../../assets/img/Home/svg/partners/neureal.svg" alt="Neureal">
          </div>
          <p>{{ $t('Partners-block1') }}</p>
          <a>https://neureal.net</a>
        </a>
        <a href="https://teacherly.io/" target="_blank" rel="noreferrer" class="partners-wrap_item">
          <div class="partners-wrap_item_img">
            <img src="../../assets/img/Home/svg/partners/teacherly.svg" alt="Teacherly">
          </div>
          <p>{{ $t('Partners-block2') }}</p>
          <a>https://teacherly.io</a>
        </a>
        <a href="https://mythx.io" target="_blank" rel="noreferrer" class="partners-wrap_item">
          <div class="partners-wrap_item_img">
            <img src="../../assets/img/Home/svg/partners/MythX.svg" alt="MythX">
          </div>
          <p>{{ $t('Partners-block3') }}</p>
          <a>https://mythx.io</a>
        </a>
        <a :href="$t('Partners-block4_link')" target="_blank" rel="noreferrer" class="partners-wrap_item">
          <div class="partners-wrap_item_img">
            <img :src="require('../../assets/img/Home/svg/partners/yandex_cloud_'+ lang +'.svg')" alt="Yandex">
          </div>
          <p>{{ $t('Partners-block4') }}</p>
          <a>{{ $t('Partners-block4_link') }}</a>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'partners',
  data() {
    return {
      lang: 'en'
    };
  },
  created() {
    this.lang = this.$store.state.locale;
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .partners {
    background-color: $text-color--white;
    padding: 120px 0 60px;
    &-wrap {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
      &_item {
        width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border-radius: 5px;
        background-color: $text-color--white;
        padding: 60px 30px;
        box-sizing: border-box;
        text-decoration: none;
        &_img {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
          img {
            width: 150px;
          }
        }
        
        &:nth-child(3) {
          img {
            width: 80px;
          }
        }
        a {
          font-size: 14px;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          line-height: 1;
          color: $accent-color--red;
          text-align: center;
          margin-top: auto;
        }

        p {
          max-width: 430px;
          text-align: center;
          font-size: 18px;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          color: $text-color--black;
          color: $text-color--black;
          line-height: 1.5;
          margin: 18px 0;
          span {
            font-family: 'MADEEvolveSans-medium', sans-serif;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1200px) and (min-width: 992px) {
    .partners-wrap {
      flex-wrap: wrap;

      a {
        width: 40%;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .partners {
      &-wrap {
        flex-direction: column;
        align-items: center;

        &_item {
          width: 100%;
          max-width: 100%;
          padding-top: 30px;
          padding-bottom: 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .partners {
      padding-top: 80px;
      padding-bottom: 80px;

      &-wrap {
        &_item {
          width: 100%;
        }
      }
    }
  }
</style>
