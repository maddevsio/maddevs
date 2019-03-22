<template>
  <section id="banner" class="banner">
    <div class="video-background">
      <video autoplay muted loop id="BgVideo" poster="../../assets/img/Home/jpg/posters/cover_video_1366x610.jpg">
        <source src="../../assets/media/MadDevsWorkingProcess.mp4" type="video/mp4">
        <source src="../../assets/media/MadDevsWorkingProcess.webm" type='video/webm; codecs="vp8, vorbis"' />
      </video>
    </div>
    <div class="container">
      <div class="banner-wrap">
        <div class="banner-title">`
          <h1>{{ $t('Remote Tech Teams For Your Business')}}</h1>
        </div>
        <div class="banner-slack">
          <div class="banner-slack_sidebar">
            <div class="banner-slack_sidebar-panel">
              <div class="panel-item"></div>
              <div class="panel-item"></div>
            </div>
            <div class="banner-slack_sidebar-content">
              <div class="sidebar-content-item1"></div>
              <div class="sidebar-content-item2"></div>
              <!-- Sidebar content -->
              <div class="sidebar-content-list">
                <div class="sidebar-content-list_items" @click="slackSelected = 0" v-bind:class="{ 'slack-selected': slackSelected == 0 }">
                  <div class="sidebar-content-list_item1 sidebar-content-list_item--active"></div>
                </div>
                <div class="sidebar-content-list_items" @click="slackSelected = 1" v-bind:class="{ 'slack-selected': slackSelected == 1 }">
                  <div class="sidebar-content-list_item2 sidebar-content-list_item--active"></div>
                </div>
                <div class="sidebar-content-list_items" @click="slackSelected = 2" v-bind:class="{ 'slack-selected': slackSelected == 2 }">
                  <div class="sidebar-content-list_item3 sidebar-content-list_item--active"></div>
                </div>
                <div class="sidebar-content-list_items" @click="slackSelected = 3" v-bind:class="{ 'slack-selected': slackSelected == 3 }">
                  <div class="sidebar-content-list_item4 sidebar-content-list_item--active"></div>
                </div>
              </div>
              <!-- End sidebar content -->
              <!-- Sidebar content -->
              <div class="sidebar-content-list">
                <div class="sidebar-content-list_items" @click="slackSelected = 4" v-bind:class="{ 'slack-selected': slackSelected == 4 }">
                  <div class="sidebar-content-list_item2 sidebar-content-list_item--active"></div>
                </div>
                <div class="sidebar-content-list_items" @click="slackSelected = 5" v-bind:class="{ 'slack-selected': slackSelected == 5 }">
                  <div class="sidebar-content-list_item1 sidebar-content-list_item--active"></div>
                </div>
                <div class="sidebar-content-list_items" @click="slackSelected = 6" v-bind:class="{ 'slack-selected': slackSelected == 6 }">
                  <div class="sidebar-content-list_item4 sidebar-content-list_item--active"></div>
                </div>
                <div class="sidebar-content-list_items" @click="slackSelected = 7" v-bind:class="{ 'slack-selected': slackSelected == 7 }">
                  <div class="sidebar-content-list_item3 sidebar-content-list_item--active"></div>
                </div>
              </div>
              <!-- End sidebar content -->
            </div>
          </div>
          <div class="banner-slack_content">
            <div class="banner-slack_content-title">
              <img src="../../assets/img/Home/svg/slack.svg" alt="Slack">
              <h5>#{{ $t('What problem does it solve?') }}</h5>
              <button class="open-slack-menu">
                <span></span>
              </button>
            </div>

            <!-- Item -->
            <div class="banner-slack_content-item">
              <div class="banner-slack_content-item_group">
                <img src="../../assets/img/Home/svg/openSource/avatar-md.svg" alt="Group icon">
                <h5>Mad Devs</h5>
                <div class="timestemp">
                  9:25 AM
                </div>
              </div>
              <p class="banner-slack_content-item-text">
                <span>@here</span> {{$t('Our goal is to allow technology startup')}} <span>{{ $t('founders') }}</span> {{$t('to focus on the product and customer development, strategy and team building, fundraising and revenue')}}
              </p>
              <div class="banner-slack_content-item-status">
                <div class="banner-slack_content-item-status-item" @click="slack++">
                  <img src="../../assets/img/Home/png/banner/briefcase_1f4bc.png" alt="">
                  {{ slack > 99 ? '99+' : slack}}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack1++">
                  <img src="../../assets/img/Home/png/banner/chart-with-upwards-trend_1f4c8.png" alt="">
                  {{ slack1 > 99 ? '99+' : slack1 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack2++">
                  <img src="../../assets/img/Home/png/banner/money-bag_1f4b0.png" alt="">
                  {{ slack2 > 99 ? '99+' : slack2 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack3++">
                  <img src="../../assets/img/Home/png/banner/banknote-with-dollar-sign_1f4b5.png" alt="">
                  {{ slack3 > 99 ? '99+' : slack3 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack4++">
                  <img src="../../assets/img/Home/png/banner/public-address-loudspeaker_1f4e2.png" alt="">
                  {{ slack4 > 99 ? '99+' : slack4 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack5++">
                  <img src="../../assets/img/Home/png/banner/rocket_1f680.png" alt="">
                  {{ slack5 > 99 ? '99+' : slack5}}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack6++">
                  <img src="../../assets/img/Home/png/banner/gem-stone_1f48e.png" alt="">
                  {{ slack6 > 99 ? '99+' : slack6 }}
                </div>
              </div>
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="banner-slack_content-item">
              <div class="banner-slack_content-item_group">
                <img src="../../assets/img/Home/svg/openSource/avatar-md.svg" alt="Group icon">
                <h5>Mad Devs</h5>
                <div class="timestemp">
                  9:25 AM
                </div>
              </div>
              <p class="banner-slack_content-item-text">
                <span>@here</span>
                {{ $t('We achieve it by doing what we are best at technical execution and consultations')}}, <span class="banner-slack_content-item-text-red-span">{{$t('qualified software development')}}</span>{{$t('software development')}}, {{$t('support and team monitoring') }}
              </p>
              <div class="banner-slack_content-item-status">
                <div class="banner-slack_content-item-status-item" @click="slack7++">
                  <img src="../../assets/img/Home/png/banner/i-love-you-hand-sign_1f91f.png" alt="">
                  {{slack7 > 99 ? '99+' : slack7}}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack8++">
                  <img src="../../assets/img/Home/png/banner/ok-hand-sign_1f44c.png" alt="">
                  {{ slack8 > 99 ? '99+' : slack8 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack9++">
                  <img src="../../assets/img/Home/png/banner/flexed-biceps_1f4aa.png" alt="">
                  {{ slack9 > 99 ? '99+' : slack9 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack10++">
                  <img src="../../assets/img/Home/png/banner/robot-face_1f916.png" alt="">
                  {{ slack10 > 99 ? '99+' : slack10 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack11++">
                  <img src="../../assets/img/Home/png/banner/nerd-face_1f913.png" alt="">
                  {{ slack11 > 99 ? '99+' : slack11 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack12++">
                  <img src="../../assets/img/Home/png/banner/first-place-medal_1f947.png" alt="">
                  {{ slack12 > 99 ? '99+' : slack12 }}
                </div>
              </div>
            </div>
            <!-- End Item -->
          </div>
        </div>
      </div>
    </div>
    <button id="go-down" v-scroll-to="'#how-it-work'">
      <img src="../../assets/img/Home/svg/down.svg" alt="Go down">
    </button>
  </section>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      slackSelected: 1,
      slack: 3,
      slack1: 8,
      slack2: 7,
      slack3: 2,
      slack4: 1,
      slack5: 11,
      slack6: 5,
      slack7: 13,
      slack8: 4,
      slack9: 6,
      slack10: 10,
      slack11: 12,
      slack12: 2
    };
  },
};
</script>

<style lang="scss" scoped>
  #banner {
  width: 100%;
  min-height: 610px;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 610px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: .5;
    z-index: 0;
  }
}

.video-background {
  width: 100%;
  height: 610px;
  overflow: hidden;
  position: absolute;
  z-index: -2;
  video {
    width: auto;
    min-width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: -2;
  }
  video[poster] {
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    top:0 !important;
    left:0 !important;
    position: absolute !important;
  }
}

#go-down {
  margin-left: 40px;
  background-color: transparent;
  border: 0;
  z-index: 10;
  padding: 0 20px;
  transform: translateY(-50px);
  cursor: pointer;
}

.banner {
  position: relative;
  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &-title {
    width: 50%;
    z-index: 2;
    margin-top: 145px;
    margin-right: 60px;
    h1 {
      color: #fff;
      font-size: 62px;
      line-height: 1.39;
      letter-spacing: -0.5px;
      font-weight: normal;
      font-family: 'MADEEvolveSans-regular', sans-serif;
    }
  }
  &-slack {
    width: 750px;
    display: flex;
    align-items: stretch;
    margin-top: 180px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    z-index: 2;
    &_sidebar {
      width: 155px;
      min-width: 155px;
      min-height: 100%;
      background-color: #573E4D;
      display: flex;
      &-panel {
        min-width: 46px;
        min-height: 100%;
        background-color: #281b26;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        .panel-item {
          width: 24px;
          height: 24px;
          opacity: 0.6;
          border-radius: 4px;
          background-color: #fff;
          margin-top: 15px;
          cursor: pointer;
        }
      }
      &-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 15px 0;
        .sidebar-content-item1 {
          width: 74px;
          height: 7px;
          opacity: 0.8;
          border-radius: 5px;
          background-color: #fff;
          margin-bottom: 6px;
          margin-left: 10px;
        }
        .sidebar-content-item2 {
          width: 39px;
          height: 5px;
          opacity: 0.45;
          border-radius: 5px;
          background-color: #fff;
          margin-left: 10px;
        }
        .sidebar-content-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          margin-top: 30px;
          .sidebar-content-list_items {
            padding: 5px 20px;
            cursor: pointer;
            position: relative;
            &:hover {
              background-color: rgba(#281b26, .4);
              .sidebar-content-list_item--active {
                opacity: 0.65;
              }
              &::before {
                content: '';
                opacity: 0.65;
              }
            }
            &::before {
              content: '';
              width: 5px;
              height: 5px;
              position: absolute;
              left: 10px;
              top: 5px;
              background-color: #fff;
              opacity: 0.45;
              border-radius: 5px;
            }
          }
          .slack-selected {
            background-color: #2a9889;
            &:hover {
              background-color: #2a9889;
            }
          }
          .sidebar-content-list_item1 {
            width: 68px;
            height: 5px;
            background-color: #fff;
            border-radius: 5px;
            opacity: 0.45;
          }
          .sidebar-content-list_item2 {
            width: 50px;
            height: 5px;
            background-color: #fff;
            border-radius: 5px;
            opacity: 0.45;
          }
          .sidebar-content-list_item3 {
            width: 63px;
            height: 5px;
            background-color: #fff;
            border-radius: 5px;
            opacity: 0.45;
          }
          .sidebar-content-list_item4 {
            width: 31px;
            height: 5px;
            background-color: #fff;
            border-radius: 5px;
            opacity: 0.45;
          }
        }
      }
    }
    &_content {
      width: 100%;
      height: 100%;
      background-color: #fff;
      padding-bottom: 50px;
      box-sizing: border-box;
      &-title {
        height: 70px;
        display: flex;
        align-items: center;
        padding: 0 18px;
        box-sizing: border-box;
        border-bottom: 1px solid #e8e8e8;
        img {
          display: none;
          width: 18px;
          height: 18px;
          margin-right: 15px;
        }
        h5 {
          font-size: 14px;
          font-family: 'OpenSans-Medium', sans-serif;
          line-height: 1.21;
          letter-spacing: .2px;
          color: #000;
        }
        .open-slack-menu {
          margin-left: auto;
          border: none;
          background-color: transparent;
          cursor: pointer;
          padding: 12px;
          margin-right: -12px;
          display: none;
          span {
            width: 3px;
            height: 3px;
            display: block;
            background-color: #ccc;
            border-radius: 100%;
            position: relative;
            &::before {
              content: '';
              width: 3px;
              height: 3px;
              display: block;
              background-color: #ccc;
              border-radius: 100%;
              position: absolute;
              left: 0;
              top: -5px;
            }
            &::after {
              content: '';
              width: 3px;
              height: 3px;
              display: block;
              background-color: #ccc;
              border-radius: 100%;
              position: absolute;
              left: 0;
              top: 5px;
            }
          }
        }
      }
      &-item {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        padding: 0 22px;
        box-sizing: border-box;
        &_group {
          display: flex;
          justify-content: flex-start;
          img {
            width: 24px;
            height: 24px;
          }
          h5 {
            font-size: 14px;
            font-family: 'OpenSans-Medium', sans-serif;
            color: #000;
            line-height: 1.21;
            margin: 0 10px;
          }
          .timestemp {
            font-size: 11px;
            font-family: 'OpenSans-Regular', sans-serif;
            line-height: 1.55;
            letter-spacing: 0.2px;
            color: #b2b2b2;
          }
        }
        &-text {
          font-size: 17px;
          font-family: 'OpenSans-Regular', sans-serif;
          line-height: 1.59;
          margin: 4px 0 15px;
          padding-left: 35px;
          &-red-span {
            color: #b30606;
            border-radius: 4px;
            background-color: #f9f9f9 !important;
            border: solid 1px #e8e8e8;
          }
          span {
            font-family: 'OpenSans-SemiBold', sans-serif;
            background-color: #fff6cd;
            padding: 0px 5px 2px;
            border-radius: 3px;
            white-space: nowrap;
          }
        }
        &-status {
          display: flex;
          padding-left: 35px;
          &-item {
            display: flex;
            align-items: center;
            margin-right: 8px;
            padding: 4px;
            border-radius: 5px;
            border: solid 1px #e8e8e8;
            color: #717274;
            font-size: 13px;
            cursor: pointer;
            font-family: 'OpenSans-Regular', sans-serif;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            touch-action: manipulation;
            &:hover {
              border: solid 1px #2d9ee0;
              background-color: #ecf2f6;
            }
            img {
              width: 20px;
              height: 20px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>

