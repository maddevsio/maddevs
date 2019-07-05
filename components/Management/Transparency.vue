<template>
  <section>
    <div class="container">
      <h2 class="sec-title">{{ $t('management.transparency.title') }}</h2>
      <p>{{ $t('management.transparency.desc1') }} <span><img src="../../assets/img/common/slack.svg" alt="Slack"> Slack</span> {{ $t('management.transparency.desc2') }} <span><img src="../../assets/img/common/jira.svg" alt="Jira"> JIRA,</span> <span><img src="../../assets/img/common/asana.svg" alt="Asana"> Asana,</span> <span><img src="../../assets/img/common/basecamp.svg" alt="Basecamp"> BaseCamp,</span> <span><img src="../../assets/img/common/trello.svg" alt="Trello"> Trello.</span> </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Transparency'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  section {
    width: 100%;
    padding: 120px 0;

    p {
      max-width: 630px;
      margin: 0 auto;
      text-align: center;
      font-size: 24px;
      line-height: 1.46;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      margin-top: 30px;

      span {
        white-space: nowrap;
        font-family: 'MADEEvolveSans-bold', sans-serif;
        
        img {
          width: 22px;
          height: 22px;
          margin-bottom: -3px;
          margin-right: 4px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    section {
      padding: 60px 0;

      p {
        font-size: 22px;
        margin-top: 20px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    section {
      p {
        font-size: 18px;
      }
    }
  }
</style>
