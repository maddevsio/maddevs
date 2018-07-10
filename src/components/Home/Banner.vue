<template>
  <section id="banner" class="banner">
    <div class="video-background">
      <div class="video">
          <div class="screen mute" id="video"></div>
      </div>
    </div>
    <div class="container">
      <div class="banner-wrap">
        <div class="banner-title">
          <h1>Формируем удаленные технические команды из профессионалов для ваших стартапов</h1>
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
              <h5>#какую проблему это решает?</h5>
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
                <span>@here</span> Наша цель позволить <span>@основателям</span> технических стартапов сосредоточиться на главном: на развитии продукта, привлечении клиентов, продажах, стратегии и сплочении команды, привлечении инвестиций и прибыли
              </p>
              <div class="banner-slack_content-item-status">
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/briefcase_1f4bc.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/chart-with-upwards-trend_1f4c8.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/money-bag_1f4b0.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/banknote-with-dollar-sign_1f4b5.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/public-address-loudspeaker_1f4e2.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/rocket_1f680.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/gem-stone_1f48e.png" alt="">
                  0
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
                <span>@here</span> Наша цель позволить <span>@основателям</span> технических стартапов сосредоточиться на главном: на развитии продукта, привлечении клиентов, продажах, стратегии и сплочении команды, привлечении инвестиций и прибыли
              </p>
              <div class="banner-slack_content-item-status">
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/i-love-you-hand-sign_1f91f.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/ok-hand-sign_1f44c.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/flexed-biceps_1f4aa.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/robot-face_1f916.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/nerd-face_1f913.png" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="../../assets/img/png/banner/first-place-medal_1f947.png" alt="">
                  0
                </div>
              </div>
            </div>
            <!-- End Item -->
          </div>
        </div>
      </div>
    </div>
    <button id="go-down">
      <img src="../../assets/img/svg/down.svg" alt="Go down">
    </button>
  </section>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      slackSelected: 1,
    }
  },
  methods: {
    setBgVideo() {
      let tv, playerDefaults = {autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
      // var tv, playerDefaults = {autoplay: 1, loop: 1};
      tv = new YT.Player('video', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
      
      function vidRescale(){
        var w = window.innerWidth + 200,
            h = window.innerHeight + 200;

        if (w/h > 16/9){
          tv.setSize(w, w/16*9);
          document.querySelector('.video').style.left = '0px';
          document.querySelector('.screen').style.left = '0px';
        } else {
          tv.setSize(h/9*16, h);
          document.querySelector('.video').style.left = document.querySelector('.video').style.left - (document.querySelector('.video').innerWidth - w)/2;
          document.querySelector('.screen').style.left = document.querySelector('.screen').style.left - (document.querySelector('.screen').innerWidth - w)/2;
        }
      }

      window.onload = function(){
        vidRescale();
      };

      vidRescale();

      function onPlayerReady(){
        tv.loadVideoById(vid[currVid]);
        tv.mute();
      }

      function onPlayerStateChange(e) {
        if (e.data === 1){
          document.getElementById('video').classList.add('active');
        } else if (e.data === 2){
          document.getElementById('video').classList.remove('active');
          if(currVid === vid.length - 1){
            currVid = 0;
          } else {
            currVid++;  
          }
          tv.loadVideoById(vid[currVid]);
          tv.seekTo(vid[currVid].startSeconds);
        }
      }
      var vid = [
        {'videoId': 'lmGJTVyOfYM', 'startSeconds': 0, 'suggestedQuality': 'hd720'},
       /*  {'videoId': 'lmGJTVyOfYM', 'startSeconds': 465, 'endSeconds': 657, 'suggestedQuality': 'hd720'},
        {'videoId': 'lmGJTVyOfYM', 'startSeconds': 0, 'endSeconds': 240, 'suggestedQuality': 'hd720'},
        {'videoId': 'lmGJTVyOfYM', 'startSeconds': 19, 'endSeconds': 241, 'suggestedQuality': 'hd720'} */
      ],
      randomVid = Math.floor(Math.random() * vid.length),
      currVid = randomVid;

    }
  },
  mounted () {
    this.setBgVideo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
