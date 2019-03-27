<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <div class="contacts-wrap" id="contacts-wrap">
        <div class="contacts-wrap_back"></div>
        <h2 class="sec-title">{{$t('Contacts')}}</h2>
        <div class="contacts-wrap_list">
          <div class="contacts-wrap_list-item">
            <h6>{{$t('address-footer-uk-title')}}</h6>
            <p>{{$t('address-footer-uk')}}</p>
            <a href="tel:+44 20 3984 8555">+44 20 3984 8555</a>
          </div>
          <div class="contacts-wrap_list-item">
            <h6>{{$t('address-footer-kg-title')}}</h6>
            <p>{{$t('address-footer-kg')}}</p>
            <a href="tel:+996 704 77 14 81">+996 551 75 27 97</a>
          </div>
          <div class="contacts-wrap_list-item">
            <h6>{{$t('address-footer-email-title')}}</h6>
            <a href="mailto:team@maddevs.io">team@maddevs.io</a>
          </div>
          <div class="contacts-wrap_list-item social-icons">
            <div class="social-icons_list">
              <div class="social-icons_list-row">
                <a href="https://github.com/maddevsio" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/git.svg" alt="Github">
                </a>
                <a href="https://www.facebook.com/maddevsio" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/fb.svg" alt="Facebook">
                </a>
                <a href="https://www.instagram.com/maddevsio/" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/insta.svg" alt="Instagram">
                </a>
                <a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/medium.svg" alt="Medium">
                </a>
              </div>
              <div class="social-icons_list-row">
                <a href="https://twitter.com/MadDevsIO" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/tw.svg" alt="Twitter">
                </a>
                <a href="https://www.slideshare.net/maddevs/presentations" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/slide.svg" alt="Slideshare">
                </a>
                <a href="https://www.youtube.com/playlist?list=PLsmdb5W8ytypyXt1ut3lfBOnOZnDNqYIN" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/yt.svg" alt="Youtube">
                </a>
                <a href="https://www.behance.net/maddevs" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/beh.svg" alt="Behance">
                </a>
                <a href="https://t.me/maddevsio" target="_blank" rel="noreferrer">
                  <img src="../assets/img/common/tel.svg" alt="Telegram">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contacts'
};
</script>

<style lang="scss">
.contacts {
  background-color: #242424;
  padding: 40px 0 20px;
  overflow: hidden;
  perspective: 600px;

  &-wrap {
    width: 550px;
    margin: 0 auto;
    transform-style: preserve-3d;
    transition: all .4s ease-in-out;
    position: relative;

    h2 {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      line-height: 1.33;
    }

    .contacts-wrap_back {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
      transform: rotateY(180deg);
      background-image: url('../assets/img/Home/jpg/contacts/eeeeerock.jpg');
      background-size: 99%;
      background-position: center;
      background-repeat: no-repeat;
    }

    h2 {
      color: #fff;
    }

    &_list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
      -webkit-backface-visibility: hidden;

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;

        > * {
          margin-bottom: 8px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        h6 {
          font-size: 12px;
          font-family: 'MADEEvolveSans-medium', sans-serif;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.33;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }

        p {
          font-size: 18px;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          line-height: 1.5;
          letter-spacing: normal;
          color: #fff;
          text-align: center;
        }

        a {
          font-size: 18px;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          line-height: 1.5;
          letter-spacing: -0.4px;
          text-align: left;
          color: #fff;
          text-decoration: none;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }

      .address {
        width: auto;
        text-align: center;
        margin-bottom: 8px;
      }

      .phone-mail {
        padding: 0 15px;
        box-sizing: border-box;
        margin-bottom: 20px;

        &_wrap {
          display: flex;
          flex-direction: column;
          align-items: center;

          a:first-child {
            margin-bottom: 8px;
          }
        }
      }

      .social-icons {
        white-space: nowrap;

        &_list {
          display: flex;
        }

        a {
          display: inline-block;
          margin: 0 6px;

          img {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .contacts-wrap {
    width: 100%;
  }
}
</style>
