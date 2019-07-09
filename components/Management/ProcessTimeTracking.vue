<template>
  <section id="processTimeTraking">
    <div class="container">
      <div class="process">
        <h3>{{ $t('management.process.title') }}</h3>
        <p>{{ $t('management.process.desc') }}</p>
      </div>
      <div class="time-tracking">
        <h3>{{ $t('management.traking.title') }}</h3>
        <p>{{ $t('management.traking.desc') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProcessTimeTraking'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  section {
    width: 100%;
    padding: 60px 0;

    .container {
      display: flex;
    }

    .process {
      margin-right: 50px;
    }

    h3 {
      font-size: 22px;
      line-height: 1;
      font-family: 'MADEEvolveSans-bold', sans-serif;
      margin-bottom: 20px;
    }

    p {
      font-size: 20px;
      line-height: 1.5;
      font-family: 'MADEEvolveSans-regular', sans-serif;
    }
  }

  @media only screen and (max-width: 768px) {
    section {
      .container {
        flex-direction: column;

        .process {
          margin-right: 0;
          margin-bottom: 60px;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    section {
      .container {
        .process {
          margin-bottom: 40px;
        }
      }

      p {
        font-size: 18px;
      }
    }
  }
</style>
