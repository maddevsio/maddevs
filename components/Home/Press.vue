<template>
  <section id="press" class="press">
    <div class="container">
      <h2 class="sec-title">{{$t('Press-about-us')}}</h2>
      <div class="press-wrap">
        <a href="https://www.google.com/amp/s/www.cnbc.com/amp/2018/01/29/belt-and-road-tech-entrepreneurship-in-kyrgyzstan.html" target="_blank" rel="noreferrer" class="press-wrap_item">
          <div class="press-wrap_item_img">
            <img class="press-cnbc" src="../../assets/img/Home/svg/press/cnbc.svg" alt="">
          </div>
          <p>…globally successful companies were born in the capital city of Bishkek: <span>Mad Devs</span>, a <span>developer</span>  outsourcer that boasts clients from <span>Silicon Valley</span> to <span>Singapore</span>…</p>
          <a>https://www.cnbc.com/2018/01/29/belt…</a>
        </a>
        <a href="https://www.ozy.com/rising-stars/this-unlikely-tech-queen-wants-to-build-a-new-global-hub-in-kyrgyzstan/88948" target="_blank" rel="noreferrer" class="press-wrap_item">
          <div class="press-wrap_item_img">
            <img class="press-ozy" src="../../assets/img/Home/svg/press/ozy.svg" alt="">
          </div>
          <p>This unlikely <span>tech queen</span> wants to build a <span>new global hub in Kyrgyzstan</span>. Because behind every great app there’s a great <span>team of back-end developers…</span></p>
          <a>https://www.ozy.com/rising-stars/this-unlikely-tech-queen…</a>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'press'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .press {
    background-color: $text-color--white;
    padding: 60px 0;
    &-wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      margin-top: 60px;
      &_item {
        width: 49%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: $text-color--white;
        padding: 0 30px;
        box-sizing: border-box;
        text-decoration: none;
        &_img {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
          .press-cnbc {
            height: 88px;
          }
          .press-ozy {
            height: 54px;
          }
        }
        a {
          font-size: 14px;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          line-height: 1;
          color: $accent-color--red;
          text-align: center;
        }
        p {
          max-width: 430px;
          text-align: center;
          font-size: 18px;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          color: $text-color--black;
          color: $text-color--black;
          line-height: 1.5;
          margin: 40px 0 18px;
          span {
            font-family: 'MADEEvolveSans-medium', sans-serif;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .press {
      &-wrap {
        flex-direction: column;
        align-items: center;

        &_item {
          width: 100%;
          max-width: 100%;

          &_img {
            height: auto;
          }

          p {
            margin-top: 50px;
          }

          &:first-child {
            margin-bottom: 60px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .press {
      padding-top: 80px;
      padding-bottom: 0;

      &-wrap {
        &_item {
          width: 100%;
        }
      }
    }
  }
</style>
