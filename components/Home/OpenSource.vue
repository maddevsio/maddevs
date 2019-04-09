<template>
  <section id="open-source" class="open-source">
    <div class="open-source_wrap">
      <div class="container">
        <h2 class="sec-title">{{$t('Besides the main work, our teams contribute to open source')}}</h2>
        <ButtonLinkBlack :data="{text: $t('btn-link--black'), icon: 'github-light.svg', link: 'https://github.com/maddevsio'}" />
      </div>
    </div>
    <div class="open-source_wrap-projects">
      <h2 class="sec-title">{{$t('Projects')}}<span class="our-pets">🐶 🐱</span></h2>
      <div class="open-source_wrap-projects_list">
        <a href="https://gps.maddevs.io/ru/" target="_blank" rel="noreferrer" class="open-source_wrap-projects_list-item op-proj-1">
          <div class="projects-img_wrap">
            <img src="../../assets/img/Home/svg/openSource/mlm.svg" alt="Mad Location Manager">
          </div>
          <div class="projects-desc_wrap">
            <h4>Mad Location Manager</h4>
            <p>{{$t("Accurate and ”pure” data from GPS-recivers proceeded with Kalman's filter")}}</p>
          </div>
        </a>
        <a href="https://heimdall.maddevs.io" target="_blank" rel="noreferrer" class="open-source_wrap-projects_list-item op-proj-2">
          <div class="projects-img_wrap">
            <img src="../../assets/img/Home/svg/openSource/Heimdall.svg" class="op-img-sf" alt="Heimdall">
          </div>
          <div class="projects-desc_wrap">
            <h4>Heimdall</h4>
            <p>{{$t('Tool for monitoring the security of Ethereum smart contracts as a badge in the repository')}}</p>
          </div>
        </a>
        <a href="https://comedian.maddevs.io" target="_blank" rel="noreferrer" class="open-source_wrap-projects_list-item op-proj-3">
          <div class="projects-img_wrap">
            <img src="../../assets/img/Home/svg/openSource/comedian.svg" class="op-img-sf" alt="Comedian">
          </div>
          <div class="projects-desc_wrap">
            <h4>Comedian</h4>
            <p>{{$t('pet-projects_item-desc-3')}}</p>
          </div>
        </a>
        <a href="https://idmatch.co" target="_blank" rel="noreferrer" class="open-source_wrap-projects_list-item op-proj-4">
          <div class="projects-img_wrap">
            <img src="../../assets/img/Home/svg/openSource/id.svg" class="op-img-opensourse" alt="IDmatch">
          </div>
          <div class="projects-desc_wrap">
            <h4>IDmatch</h4>
            <p>{{$t('Artifical Intelligence and machine learning for personal identification')}}</p>
          </div>
        </a>
        <div class="open-source_wrap-projects_list-hidden_blocks" :class="{ show_proj: showProj }">
          <a href="https://github.com/maddevsio/madpwa" target="_blank" rel="noreferrer" class="open-source_wrap-projects_list-item op-proj-5">
            <div class="projects-img_wrap">
              <img src="../../assets/img/Home/svg/openSource/madpwa.svg" class="op-img-madpwa" alt="MadPwa">
            </div>
            <div class="projects-desc_wrap">
              <h4>MADPWA</h4>
              <p>{{$t('Set of libraries for the quick, convinient and easy way creation of PWA')}}</p>
            </div>
          </a>
          <a href="https://github.com/maddevsio/ariadna" target="_blank" rel="noreferrer" class="open-source_wrap-projects_list-item op-proj-6">
            <div class="projects-img_wrap">
              <img src="../../assets/img/Home/svg/openSource/ariadna.svg" alt="Mad Location Manager">
            </div>
            <div class="projects-desc_wrap">
              <h4>Ariadna</h4>
              <p>{{$t('The open-source geocoder built on top of ElasticSearch for fast geocoding')}}</p>
            </div>
          </a>
          <a href="https://blog.maddevs.io/https-blog-maddevs-io-yourcast-tv-32915159be1c" target="_blank" rel="noreferrer" class="open-source_wrap-projects_list-item op-proj-7">
            <div class="projects-img_wrap">
              <img src="../../assets/img/Home/svg/openSource/yourcast.svg" alt="MadPwa">
            </div>
            <div class="projects-desc_wrap">
              <h4>Yourcast</h4>
              <p>{{$t('Bot that forms the video playlist and transfers the data to HLS stream in browser')}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="open-source_btn" @click="toggleAllProj()">
      <span v-if="!showProj">
        {{ $t('I want more open source projects') }}
        <img src="../../assets/img/Home/svg/openSource/right.svg" alt="Show more">
      </span>
      <a href="https://github.com/maddevsio" target="_blank" rel="noreferrer" v-else>
        {{ $t('View all projects on GitHub') }}
        <img src="../../assets/img/Home/svg/openSource/right.svg" alt="Show more">
      </a>
    </div>
  </section>
</template>

<script>
import ButtonLinkBlack from '@/components/ui/button-link--black';

export default {
  name: 'open-source',
  data() {
    return {
      showProj: false,
      githubData: {
        repos: 0,
        commits: 0,
        stars: 0,
        forks: 0,
        updated_at: 0,
        tasks: 0
      },
    };
  },
  components: {
    ButtonLinkBlack
  },
  methods: {
    toggleAllProj() {
      this.showProj = true;
    }
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .open-source {
    padding-bottom: 120px;
    .open-source_btn {
      width: 100%;
      text-align: center;
      padding-top: 40px;
      cursor: pointer;
      font-family: 'MADEEvolveSans-bold', sans-serif;
      font-size: 13px;
      line-height: 1.85;
      text-transform: uppercase;
      color: $accent-color--red;
      user-select: none;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      img {
        width: 12px;
        height: 10px;
        margin-left: 4px;
      }
      a {
        text-decoration: none;
        color: $accent-color--red;
      }
    }
    &_wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 60px 0;
      background-color: $bgcolor--grey;
      h2 {
        max-width: 830px;
        margin-left: auto;
        margin-right: auto;
      }
      &_btn {
        max-width: 340px;
        max-height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 40px;
        border-radius: 5px;
        background-color: #1e1e1e;
        font-size: 24px;
        font-family: 'MADEEvolveSans-medium', sans-serif;
        color: $text-color--white;
        text-decoration: none;
        box-sizing: border-box;
        margin: 0 auto;
        margin-top: 40px;
        transition: all .2s ease;
        white-space: nowrap;
        &:hover {
          background-color: $text-color--black;
        }
        img {
          margin-right: 15px;
        }
      }
      &-projects {
        margin-top: 120px;
        h2 {
          padding: 0 15px;
        }
        .our-pets {
          font-size: 26px;
          white-space: nowrap;
          margin-left: 10px;
        }
        &_list {
          height: auto;
          overflow: hidden;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 40px;
          border-top: 1px solid $border-color--grey;
          border-bottom: 1px solid $border-color--grey;
          &-hidden_blocks {
            width: 100%;
            height: 0;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            transform: scaleY(0);
            transform-origin: left top;
            transition: all .2s ease;
          }
          &-item {
            width: 20%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            border-right: 0.5px solid $border-color--grey;
            padding: 40px 50px;
            text-decoration: none;
            box-sizing: border-box;
            &:hover {
              .projects-desc_wrap h4 {
                color: $accent-color--red;
              }
            }
            .projects-img_wrap {
              height: 110px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin: 40px 0 60px;
            }
            .projects-desc_wrap {
              width: 100%;
              min-height: 130px;
              h4 {
                font-size: 24px;
                color: #2c1c1c;
                font-family: 'MADEEvolveSans-bold', sans-serif;
                line-height: 1.17;
                line-height: 30px;
                margin-bottom: 10px;
                transition: all .2s ease;
              }
              p {
                font-size: 18px;
                line-height: 24px;
                letter-spacing: 0.2px;
                color: $text-color--black;
                line-height: 1.33;
                font-family: 'MADEEvolveSans-regular', sans-serif;
              }
            }
          }
          .op-proj-1 {
            width: 25%;
            img {
              height: 61px;
            }
          } 
          .op-proj-2 {
            width: 25%;
            img {
              height: 90px;
            }
          } 
          .op-proj-3 {
            width: 25%;
            img {
              width: 100%;
              max-width: 200px;
              height: 73px;
            }
          } 
          .op-proj-4 {
            width: 25%;
            img {
              height: 58px;
            }
          } 
          .op-proj-5 {
            width: 33%;
            border-top: 1px solid $border-color--grey;
            img {
              height: 25px;
            }
          } 
          .op-proj-6 {
            width: 34%;
            border-top: 1px solid $border-color--grey;
            img {
              height: 35px;
            }
          } 
          .op-proj-7 {
            width: 33%;
            border-top: 1px solid $border-color--grey;
            img {
              height: 37px;
            }
          } 
        }
        .show_proj {
          height: auto;
          transform: scaleY(1);
        }
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .open-source {
      &_wrap {
        &-projects {
          &_list {
            &-item {
              padding-left: 60px;
              padding-right: 60px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .open-source {
      &_wrap {
        &-github {
          .github-link {
            width: 100%;
            margin-bottom: 60px;

            &_desc {
              a {
                font-size: 18px;
                margin: 0;
              }
            }
          }

          .github-info {
            p {
              font-size: 16px;
            }
          }
        }

        &-projects {
          &_list {
            &-item {
              .projects-img_wrap {
                height: 80px;
                margin-bottom: 50px;
              }

              .projects-desc_wrap {
                h4 {
                  font-size: 20px;
                }

                p {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 992px) {
    .open-source_wrap-projects_list-item .projects-img_wrap {
      height: 60px;
      align-items: flex-end;
    }
  }
  @media only screen and (max-width: 992px) {
    .open-source {
      &_wrap {
        &-projects {
          &_list {
            flex-wrap: wrap;
            margin-left: 0;
            margin-right: 0;

            &-item {
              width: 50% !important;
              height: 450px;
              box-sizing: border-box;

              .projects-img_wrap {
                height: 100px;
                margin-bottom: 30px;
              }

              .projects-desc_wrap {
                h4 {
                  font-size: 22px;
                }

                p {
                  font-size: 20px;
                }
              }
            }

            .op-proj-1 {
              border-bottom: 1px solid $border-color--grey;
            }

            .op-proj-2 {
              border-bottom: 1px solid $border-color--grey;
            }

            .op-proj-6 {
              display: none;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 680px) {
    .open-source {
      &_wrap {
        &-github {
          flex-direction: column;
          align-items: flex-start;
        }

        &-projects {
          &_list {
            &-item {
              padding-left: 30px;
              padding-right: 30px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .open-source_wrap-projects_list-item {
      border-right-width: 0;
      border-left-width: 0;
    }

    .open-source {
      padding-bottom: 80px;

      &_wrap {
        padding: 60px 0;

        &_btn {
          font-size: 18px;
          max-width: 280px;
        }

        &-projects {
          margin-top: 80px;

          &_list {
            &-hidden_blocks {
              flex-direction: column;
            }

            &-item {
              width: 100% !important;
              height: auto;
              box-sizing: border-box;
              padding: 60px 16px;
            }

            .projects-img_wrap {
              height: auto;
              margin-top: 0;
            }

            .projects-desc_wrap {
              min-height: auto;

              h4 {
                font-size: 22px;
              }

              p {
                font-size: 16px;
              }
            }

            .op-proj-3 {
              border-bottom: 1px solid $border-color--grey;
            }

            .op-proj-4 {
              border-top: 0;
            }
          }
        }
      }
    }
  }
</style>
