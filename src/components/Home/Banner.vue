<template>
  <section id="banner" class="banner">
    <div class="video-background">
      <!--<div class="video">-->
          <!--<div class="screen mute" id="video"></div>-->
      <!--</div>-->
      <video autoplay muted loop id="myVideo">
        <source src="../../assets/media/Mad Devs Working Process.mp4" type="video/mp4">
        <!--<source src="../../assets/media/videoplayback.webm" type='video/webm; codecs="vp8, vorbis"' />-->
      </video>
    </div>
    <div class="container">
      <div class="banner-wrap">
        <div class="banner-title">`
          <h1>{{ $t('We form remote technical teams of professionals for you startups')}}.</h1>
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
              <img src="../../assets/img/svg/slack.svg" alt="Slack">
              <h5>#{{ $t('What problem does it solve?') }}</h5>
              <button class="open-slack-menu">
                <span></span>
              </button>
            </div>

            <!-- Item -->
            <div class="banner-slack_content-item">
              <div class="banner-slack_content-item_group">
                <img src="../../assets/img/svg/openSource/avatar-md.svg" alt="Group icon">
                <h5>Mad Devs</h5>
                <div class="timestemp">
                  9:25 AM
                </div>
              </div>
              <p class="banner-slack_content-item-text">
                <span>@here</span> {{$t('Our goal is to allow ')}} <span>{{ $t('founders') }}</span> {{$t('of technical startups to focus on the main things product and customer development, strategy and team building, fundraising and revenue')}}
              </p>
              <div class="banner-slack_content-item-status">
                <div class="banner-slack_content-item-status-item" @click="slack++">
                  <img src="../../assets/img/png/banner/briefcase_1f4bc.png" alt="">
                  {{ slack > 99 ? '99+' : slack}}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack1++">
                  <img src="../../assets/img/png/banner/chart-with-upwards-trend_1f4c8.png" alt="">
                  {{ slack1 > 99 ? '99+' : slack1 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack2++">
                  <img src="../../assets/img/png/banner/money-bag_1f4b0.png" alt="">
                  {{ slack2 > 99 ? '99+' : slack2 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack3++">
                  <img src="../../assets/img/png/banner/banknote-with-dollar-sign_1f4b5.png" alt="">
                  {{ slack3 > 99 ? '99+' : slack3 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack4++">
                  <img src="../../assets/img/png/banner/public-address-loudspeaker_1f4e2.png" alt="">
                  {{ slack4 > 99 ? '99+' : slack4 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack5++">
                  <img src="../../assets/img/png/banner/rocket_1f680.png" alt="">
                  {{ slack5 > 99 ? '99+' : slack5}}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack6++">
                  <img src="../../assets/img/png/banner/gem-stone_1f48e.png" alt="">
                  {{ slack6 > 99 ? '99+' : slack6 }}
                </div>
              </div>
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="banner-slack_content-item">
              <div class="banner-slack_content-item_group">
                <img src="../../assets/img/svg/openSource/avatar-md.svg" alt="Group icon">
                <h5>Mad Devs</h5>
                <div class="timestemp">
                  9:25 AM
                </div>
              </div>
              <p class="banner-slack_content-item-text">
                <span>@here</span>
                {{ $t('We achieve it by doing what we are best at technical execution and consultations, qualified software development, support and team monitoring') }}
              </p>
              <div class="banner-slack_content-item-status">
                <div class="banner-slack_content-item-status-item" @click="slack7++">
                  <img src="../../assets/img/png/banner/i-love-you-hand-sign_1f91f.png" alt="">
                  {{slack7 > 99 ? '99+' : slack7}}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack8++">
                  <img src="../../assets/img/png/banner/ok-hand-sign_1f44c.png" alt="">
                  {{ slack8 > 99 ? '99+' : slack8 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack9++">
                  <img src="../../assets/img/png/banner/flexed-biceps_1f4aa.png" alt="">
                  {{ slack9 > 99 ? '99+' : slack9 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack10++">
                  <img src="../../assets/img/png/banner/robot-face_1f916.png" alt="">
                  {{ slack10 > 99 ? '99+' : slack10 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack11++">
                  <img src="../../assets/img/png/banner/nerd-face_1f913.png" alt="">
                  {{ slack11 > 99 ? '99+' : slack11 }}
                </div>
                <div class="banner-slack_content-item-status-item" @click="slack12++">
                  <img src="../../assets/img/png/banner/first-place-medal_1f947.png" alt="">
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
      <img src="../../assets/img/svg/down.svg" alt="Go down">
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
