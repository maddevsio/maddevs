<template>
  <section>
    <div class="container">
      <h2 class="sec-title">{{ $t('management.transparency.title') }}</h2>
      <p>{{ $t('management.transparency.desc1') }} <span><slack /> Slack</span> {{ $t('management.transparency.desc2') }} <span><jira /> JIRA,</span> <span><asana /> Asana,</span> <span><basecamp /> BaseCamp,</span> <span><trello /> Trello.</span> </p>
    </div>
  </section>
</template>

<script>
import slack from '@/components/svg/slack';
import jira from '@/components/svg/jira';
import asana from '@/components/svg/asana';
import basecamp from '@/components/svg/basecamp';
import trello from '@/components/svg/trello';

export default {
  name: 'Transparency',
  components: {
    slack,
    jira,
    asana,
    basecamp,
    trello
  }
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
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        font-family: 'MADEEvolveSans-bold', sans-serif;
        
        svg {
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
