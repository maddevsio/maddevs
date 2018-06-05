<template>
  <section id="banner" class="banner">
    <div class="video-background">
      <div class="tv">
          <div class="screen mute" id="tv"></div>
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
              <h5>#какую проблему это решает?</h5>
            </div>

            <!-- Item -->
            <div class="banner-slack_content-item">
              <div class="banner-slack_content-item_group">
                <img src="" alt="Group icon">
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
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
              </div>
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="banner-slack_content-item">
              <div class="banner-slack_content-item_group">
                <img src="" alt="Group icon">
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
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item">
                  <img src="" alt="">
                  0
                </div>
                <div class="banner-slack_content-item-status-item" @click="insert">
                  <img src="" alt="">
                  0
                </div>
              </div>
            </div>
            <!-- End Item -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const Datastore = require('nedb')
const db = new Datastore({filename: './slack.db'})

export default {
  name: 'banner',
  data () {
    return {
      slackSelected: 1,
    }
  },
  methods: {
    insert () {
      db.insert({name:"admin", password:"123"}, function(err, res) {
        console.log(res)
      })
      console.log(__dirname + '../../assets/slack.db');
    },
    find () {
      db.find({}, function(err, res) {
        console.log(res)
      })
    },
    setBgVideo() {
      function vidRescale(){
        var w = $(window).width()+200,
          h = $(window).height()+200;

        if (w/h > 16/9){
          tv.setSize(w, w/16*9);
          $('.tv .screen').css({'left': '0px'});
        } else {
          tv.setSize(h/9*16, h);
          $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
        }
      }

      $(window).on('load resize', function(){
        vidRescale();
      });

      function onPlayerReady(){
        tv.loadVideoById(vid[currVid]);
        tv.mute();
      }

      function onPlayerStateChange(e) {
        if (e.data === 1){
          $('#tv').addClass('active');
        } else if (e.data === 2){
          $('#tv').removeClass('active');
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

      var tv, playerDefaults = {autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
      // var tv, playerDefaults = {autoplay: 1, loop: 1};
      tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
    }
  },
  mounted () {
    db.loadDatabase();
    this.setBgVideo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
