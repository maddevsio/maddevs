<template>
  <section id="team" class="team">
      <div class="container">
          <h2 class="sec-title">{{ $t('team-title') }}</h2>
          <p>
            {{ $t('team-desc') }}
            <a href="mailto:hr@maddevs.io">hr@maddevs.io</a>
          </p>
          <ButtonLink :data="{text: $t('btn-link--red'), link: 'mailto:hr@maddevs.io'}" />
      </div>
  </section>
</template>

<script>
import ButtonLink from '@/components/ui/button-link';

export default {
  name: 'Team',
  components: {
    ButtonLink
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';

  .team {
    padding: 120px 0;

    p {
      max-width: 700px;
      margin: 30px auto 40px;
      font-size: 28px;
      color: #000000;
      line-height: 1.5;
      font-family: 'MADEEvolveSans-regular',
        sans-serif;
      font-weight: normal;
      text-align: center;

      a {
        color: $accent-color--red;
        text-decoration: none;
      }
    }

    .mnd-button-link {
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 768px) {  
    .team {
      padding: 80px 0;

      p {
        font-size: 24px;
        margin: 30px 0;
      }
    }
  }
</style>
