<template>
  <section id="implemented-technologies" class="implemented-technologies">
    <div class="container-godee">
      <h2 class="implemented-technologies__main-title">Implemented technologies </h2>
      <ul class="implemented-technologies__technologies-list">
        <li class="implemented-technologies__technologies-item">
          <img src="@/assets/img/GoDee/svg/backend-technologies.svg" alt="Backend" class="implemented-technologies__backend">
        </li>
        <li class="implemented-technologies__technologies-item">
          <img src="@/assets/img/GoDee/svg/frontend-technologies.svg" alt="Frontend" class="implemented-technologies__frontend">
        </li>
        <li class="implemented-technologies__technologies-item">
          <img src="@/assets/img/GoDee/svg/apps-technologies.svg" alt="Apps" class="implemented-technologies__apps">
        </li>
        <li class="implemented-technologies__technologies-item">
          <img src="@/assets/img/GoDee/svg/task-tracking-technologies.svg" alt="Task tracking" class="implemented-technologies__task-tracking">
        </li>
        <li class="implemented-technologies__technologies-item">
          <img src="@/assets/img/GoDee/svg/monitoring-technologies.svg" alt="Monitoring" class="implemented-technologies__monitoring">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImplementedTechnologies'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .implemented-technologies {
    margin-top: get-vw(400px);
    margin-bottom: get-vw(131px);
    text-align: center;

    &__main-title {
      margin-bottom: get-vw(66px);
      font-size: get-vw(90px);
      font-family: 'Hoves-Bold';
      letter-spacing: get-vw(-3px);
      color: $accent-orange-text-color;
    }

    &__technologies-list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__technologies-item {
      margin-bottom: get-vw(66px);

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__backend {
      width: get-vw(895px);
      height: get-vw(102px);
    }

    &__frontend {
      width: get-vw(829px);
      height: get-vw(114px);
    }

    &__apps {
      width: get-vw(726px);
      height: get-vw(86px);
    }

    &__task-tracking {
      width: get-vw(250px);
      height: get-vw(76px);
    }

    &__monitoring {
      width: get-vw(201px);
      height: get-vw(88px);
    }
  }
</style>
