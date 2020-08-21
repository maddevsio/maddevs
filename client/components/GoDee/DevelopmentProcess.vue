<template>
  <section id="development-process" class="development-process">
    <div class="container-godee">
      <div class="development-process__head-text-content">
        <h2 class="development-process__main-title">Development Process</h2>
        <h3 class="development-process__sub-title">How big is the team?</h3>
        <p class="development-process__description">There are currently 14 members of the development team, working closely with <br> business on the project:</p>
      </div>
      <ul class="development-process__list">
        <li class="development-process__list-item">
          <div class="development-process__list-team-size-number">3</div>
          <p class="development-process__department">Managers</p>
        </li>
        <li class="development-process__list-item">
          <div class="development-process__list-team-size-number">4</div>
          <p class="development-process__department">Mobile <br> Developers</p>
        </li>
        <li class="development-process__list-item">
          <div class="development-process__list-team-size-number">4</div>
          <p class="development-process__department">Backend</p>
        </li>
        <li class="development-process__list-item">
          <div class="development-process__list-team-size-number">2</div>
          <p class="development-process__department">Testing</p>
        </li>
        <li class="development-process__list-item">
          <div class="development-process__list-team-size-number">1</div>
          <p class="development-process__department">Designer</p>
        </li>
      </ul>
      <img src="@/assets/img/GoDee/png/development-process.png" alt="" class="development-process__development-process-banner">
      <div class="development-process__agile-methodology-content">
        <p class="development-process__description development-process__description-agile"> We follow Kanban agile methodology and work closely with the business-focused <br> roles on the customer’s side.</p>
        <img src="@/assets/img/GoDee/svg/development-process-route-line.svg" alt="Route line" class="development-process__route-line">
        <div class="development-process__work-flow">
          <h3 class="development-process__work-flow-title">The task lifecycle looks as follows:</h3>
          <img src="@/assets/img/GoDee/svg/agile-process.svg" alt="Agile process" class="development-process__agile-process-image">
          <div class="development-process__work-flow-steps-description">
            <p class="development-process__description development-process__work-flow-step">After being created, the <br> task receives <span>To Do</span> <br> status on the Kanban <br> board.</p>
            <p class="development-process__description development-process__work-flow-step">The status of the task <br> becomes <span>Solved</span>, <br> when work on the task <br> is Done.</p>
            <p class="development-process__description development-process__work-flow-step">When the task is ready <br> to be tested, the status <br> changes into <span>To Test.</span></p>
            <p class="development-process__description development-process__work-flow-step">When the testing <br> process is completed, <br> the status <span>Tested</span> is <br> assigned to the task.</p>
            <p class="development-process__description development-process__work-flow-step">After being thoroughly <br> tested, the new <br> functionality gets the <br> status <span>Deployed</span>.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DevelopmentProcess'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';
  @import '../../assets/styles/get-vw';

  .development-process {
    margin-top: get-vw(240px);

    &__head-text-content,
    &__list-item {
      text-align: center;
    }

    &__head-text-content {
      margin-bottom: get-vw(50px);
    }

    &__main-title,
    &__sub-title {
      letter-spacing: get-vw(-2px);
    }

    &__main-title,
    &__sub-title,
    &__department,
    &__list-team-size-number,
    &__work-flow-title {
      font-family: 'Hoves-Bold', sans-serif;
    }

    &__main-title {
      margin-bottom: get-vw(50px);
      font-size: get-vw(70px);
      color: $accent-orange-text-color;
    }

    &__sub-title {
      margin-bottom: get-vw(25px);
      font-size: get-vw(50px);
    }

    &__description,
    &__department,
    &__work-flow-title {
      letter-spacing: get-vw(-1px);
    }

    &__department {
      font-size: get-vw(32px);
    }

    &__description {
      font-size: get-vw(24px);
      font-family: 'Hoves-Regular', sans-serif;
      color: $text-color--grey-dark;
    }

    &__description-agile {
      margin-bottom: get-vw(150px);
      text-align: center;
    }

    &__list,
    &__list-item {
      display: flex;
    }

    &__list {
      justify-content: space-between;
    }

    &__list-item {
      flex-direction: column;
    }

    &__list-team-size-number {
      font-size: get-vw(128px);
      letter-spacing: get-vw(-5px);
      color: $text-color--grey;
    }

    &__development-process-banner {
      width: get-vw(1680px);
      height: get-vw(483px);
      margin: get-vw(46px) -8.5vw get-vw(330px);
    }

    &__agile-methodology-content {
      position: relative;
    }

    &__work-flow-steps-description {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: 10px;
    }

    &__work-flow-title {
      font-size: get-vw(32px);
      margin-bottom: get-vw(27px);
    }

    &__work-flow-step {
      span {
        font-family: 'Hoves-Bold', sans-serif;
      }

      &:nth-child(1) {
        span {
          color: $text-color--grey;
        }
      }

      &:nth-child(2) {
        span {
          color: $text-color--blue;
        }
      }

      &:nth-child(3) {
        span {
          color: $text-color--yellow;
        }
      }

      &:nth-child(4) {
        span {
          color: $accent-orange-text-color;
        }
      }

      &:nth-child(5) {
        span {
          color: $text-color--green;
        }
      }
    }

    &__agile-process-image {
      width: get-vw(1413px);
      height: get-vw(399px);
      margin-left: get-vw(-21px);
    }

    &__route-line {
      width: get-vw(660px);
      height: get-vw(504px);
      position: absolute;
      top: get-vw(-311px);
      left: get-vw(60px);
    }
  }
</style>
