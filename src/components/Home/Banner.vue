<template>
  <section id="banner" class="banner">
    <div class="bgVideo-wrap">
      <video id="bgVideo" poster="" muted loop autoplay>
        <source src="../../assets/video/bgvideo.mp4" type="video/mp4">
      </video>
    </div>
    <div class="container">
      <div class="banner-wrap">
        <div class="banner-title">
          <h1>Формируем удаленные технические команды из профессионалов для ваших стартапов</h1>
        </div>
        <div class="banner-slack">
          <img src="../../assets/img/slack.png" alt="Slack">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
