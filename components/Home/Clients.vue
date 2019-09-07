<template>
  <section id="clients" class="clients">
    <div class="container">
      <div class="clients_wrap" :class="{ open_wrap: OpenWrap }">
        <h2 class="sec-title">{{$t('Our-clients')}}</h2>
        <div class="clients_wrap-icons">
          <div class="clients_wrap-icons_row">
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/veeqo.svg" alt="veeqo">
            </a>
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/nappy.svg" alt="nappy">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/eatigo.svg" alt="eatigo">
            </a>
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/triggermesh.svg" alt="triggermesh">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/kickico.svg" alt="kickico">
            </a>
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/teacherly.svg" alt="teacherly">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/localize.svg" alt="localize">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/terbine.svg" alt="terbine">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/zentist.svg" alt="zentist">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/admitad.svg" alt="admitad">
            </a>
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/nuntiux.svg" alt="nuntiux">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/namba.svg" alt="namba">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/zofice.svg" alt="zofice">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/iotsploit.svg" alt="iotsploit">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/kaf.svg" alt="kaf">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/socialshopwave.svg" alt="socialshopwave">
            </a>
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/nambafood.svg" alt="nambafood">
            </a>
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/silkroadexplore.svg" alt="silkroadexplore">
            </a>
            <a class="lakediamond">
              <img src="../../assets/img/Home/png/clients/lakediamond@2x.png" alt="lakediamond" />
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/idmatch.svg" alt="IdMatch">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/besmart.svg" alt="besmart">
            </a>
            <a>
              <img src="../../assets/img/Home/svg/clients/inn-4-pet.svg" alt="inn-4-pet">
            </a>
            <a class="GuardRails">
              <img src="../../assets/img/Home/svg/clients/GuardRails.svg" alt="GuardRails">
            </a>
            <a class="tengri">
              <img src="../../assets/img/Home/svg/clients/tengri.svg" alt="tengri">
            </a>
            <a class="photobook">
              <img src="../../assets/img/Home/svg/clients/photobook.svg" alt="photobook">
            </a>
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/smk.svg" alt="smk">
            </a>
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/pickd.svg" alt="pickd">
            </a>
             <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/smb.svg" alt="smb">
            </a>
            <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/elcart.svg" alt="elcart">
            </a>
             <a class="small-image">
              <img src="../../assets/img/Home/svg/clients/diesel.svg" alt="diesel">
            </a>
            <a class="namba-taxi">
              <img src="../../assets/img/Home/svg/clients/namba-taxi.svg" alt="namba-taxi">
            </a>
            <a class="clutch">
              <img src="../../assets/img/Home/svg/clients/clutch.svg" alt="clutch">
            </a>
            <a class="scentomania">
              <img src="../../assets/img/Home/svg/clients/scento.svg" alt="scento">
            </a>
          </div>
        </div>
      </div>
    </div>
    <button class="clients_btn" @click="toggleLogoWrap()">
      <span v-if="!OpenWrap">
        {{ $t('All our customers') }}
        <img src="../../assets/img/Home/svg/clients/btn-icon.svg" alt="Open hide icons">
      </span>
      <span v-else>
        {{ $t('Hide') }}
        <img src="../../assets/img/Home/svg/clients/btn-icon.svg" alt="Open hide icons">
      </span>
    </button>
  </section>
</template>

<script>
export default {
  name: 'clients',
  data() {
    return {
      OpenWrap: false
    };
  },
  methods: {
    toggleLogoWrap() {
      this.OpenWrap = !this.OpenWrap;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .clients {
    position: relative;
    background-color: #1e1e1e;
    padding: 60px 0;
    .clients_btn {
      position: absolute;
      bottom: 60px;
      left: 0;
      width: 100%;
      color: $text-color--white;
      font-size: 13px;
      font-family: 'MADEEvolveSans-bold', sans-serif;
      background-color: #1e1e1e;
      padding: 10px 0 20px;
      margin-bottom: -10px;
      line-height: 1.85;
      cursor: pointer;
      text-transform: uppercase;
      border: none;
      user-select: none;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      img {
        height: 9px;
        margin-left: 5px;
      }
    }
    &_wrap {
      height: 460px;
      overflow: hidden;
      padding-bottom: 110px;
      box-sizing: border-box;
      transition: all .3s ease;
      h2 {
        color: $text-color--white;
      }
      &-icons {
        &_row {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          a {
            width: 20%;
            margin-top: 100px;
            text-align: center;
          }
          .lakediamond {
            img {
              max-width: 150px;
            }
          }
          .GuardRails img {
            height: 36px;
          }
        }
      }
    }
    .open_wrap {
      height: 1161px;
    }
  }
  @media only screen and (max-width: 992px) {
    .clients {
      &_wrap {
        &-icons {
          &_row {
            a {
              width: 33%;
              text-align: center !important;
            }

            .last-icon {
              width: 100%;
            }

            .partner-icon-fake {
              display: none;
            }
          }
        }
      }
    }

    .clients .open_wrap {
      height: 1720px;
    }
  }
  @media only screen and (max-width: 680px) {
    .clients {
      padding: 80px 0;

      &_wrap {
        height: 485px;

        &-icons {
          &_row {
            a {
              width: 50%;
              margin-top: 80px;
              text-align: center !important;

              img {
                height: 24px;
              }
            }

            .scentomania {
              img {
                height: 15px;
              }
            }

            .namba-taxi img {
              height: 20px;
            }

            .photobook {
              img {
                height: 18px;
              }
            }

            .tengri {
              img {
                height: 18px;
              }
            }

            .small-image {
              img {
                height: 36px;
              }
            }

            .clutch {
              img {
                height: 20px;
              }
            }
          }
        }
      }
    }

    .clients .open_wrap {
      height: 2060px;
    }
  }
  @media only screen and (max-width: 480px) {
    .clients {
      padding: 60px 0;
    }
  }
  @media only screen and (max-width: 420px) {
    .clients {
      .namba-taxi img {
        height: 15px;
      }
      .GuardRails img {
        height: 24px;
      }
    }
  }
</style>

