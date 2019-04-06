<template>
  <section id="quick" class="quick">
    <div class="container">
      <h2 class="sec-title">{{$t('quick-title')}}</h2>
      <div class="quick-list">
        <div class="quick-list_item" data-text="1">
          <svg class="quick-line" width="272px" height="37px" viewBox="0 0 272 37" version="1.1">
            <g id="quick-line1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <path class="quick-line_dashed" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="$accent-color--red" fill-rule="nonzero"></path>
              <path class="quick-line_white quick-line_white1" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="#fff" stroke-width="5" fill="none"></path>
            </g>
          </svg>
          <img src="../../assets/img/Home/svg/Quick/phone.svg" alt="Phone">
          <h4>{{$t('quick-subtitle1')}}</h4>
          <p>{{$t('quick-desc1')}}</p>
        </div>
        <div class="quick-list_item" data-text="2">
          <svg class="quick-line" width="272px" height="37px" viewBox="0 0 272 37" version="1.1">
            <g id="quick-line2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <path class="quick-line_dashed" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="$accent-color--red" fill-rule="nonzero"></path>
              <path class="quick-line_white quick-line_white2" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="#fff" stroke-width="5" fill="none"></path>
            </g>
          </svg>
          <img src="../../assets/img/Home/svg/Quick/brain.svg" alt="Brain">
          <h4>{{$t('quick-subtitle2')}}</h4>
          <p>{{$t('quick-desc2')}}</p>
        </div>
        <div class="quick-list_item" data-text="3">
          <svg class="quick-line" width="272px" height="37px" viewBox="0 0 272 37" version="1.1">
            <g id="quick-line3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <path class="quick-line_dashed" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="$accent-color--red" fill-rule="nonzero"></path>
              <path class="quick-line_white quick-line_white3" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="#fff" stroke-width="5" fill="none"></path>
            </g>
          </svg>
          <img src="../../assets/img/Home/svg/Quick/doc.svg" alt="Proposal">
          <h4>{{$t('quick-subtitle3')}}</h4>
          <p>{{$t('quick-desc3')}}</p>
        </div>
        <div class="quick-list_item" data-text="4">
          <svg class="quick-line" width="272px" height="37px" viewBox="0 0 272 37" version="1.1">
            <g id="quick-line4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <path class="quick-line_dashed" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="$accent-color--red" fill-rule="nonzero"></path>
              <path class="quick-line_white quick-line_white4" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="#fff" stroke-width="5" fill="none"></path>
            </g>
          </svg>
          <img src="../../assets/img/Home/svg/Quick/team.svg" alt="Team">
          <h4>{{$t('quick-subtitle4')}}</h4>
          <p>{{$t('quick-desc4')}}</p>
        </div>
        <div class="quick-list_item" data-text="5">
          <img src="../../assets/img/Home/svg/Quick/flag.svg" alt="Getting started">
          <h4>{{$t('quick-subtitle5')}}</h4>
          <p>{{$t('quick-desc5')}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'quick-project-start',
  mounted() {
    const quick = document.getElementById('quick');
    const steps = document.getElementsByClassName('quick-line_white');
    window.addEventListener('scroll', function(event) {
      var top = this.scrollY;
      if (top + 700 >= quick.offsetTop) {
        for (let i = 0; i < steps.length; i++) {
          steps[i].classList.add('quick-line_white_run');
        }
      }
    }, false);
    if (window.scrollY + 700 >= quick.offsetTop) {
      for (let i = 0; i < steps.length; i++) {
        steps[i].classList.add('quick-line_white_run');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';

  .quick {
    padding: 60px 0;
    &-list {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 80px -20px 0;
      &_item {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin: 0 20px;
        &::before {
          content: attr(data-text);
          width: 24px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(100%);
          background-color: $accent-color--red;
          color: #fff;
          font-size: 15px;
          font-family: 'MADEEvolveSans-bold', sans-serif;
          font-weight: normal;
          border-radius: 100%;
          line-height: 0;
          z-index: 1;
        }
        .quick-line {
          width: calc(100% + 40px);
          position: absolute;
          left: calc(50% + 36px);
          top: -50px;
          stroke-dasharray: 5;
          z-index: 0;
        }
        .quick-line_dashed {
          opacity: .2;
        }
        .quick-line_white_run {
          stroke-dasharray: 300;
          animation: dash 1s ease forwards;
        }
        .quick-line_white2 {
          animation-delay: .8s;
        }
        .quick-line_white3 {
          animation-delay: 1.6s;
        }
        .quick-line_white4 {
          animation-delay: 2.5s;
        }

        img {
          width: 62px;
          height: 62px;
          max-width: 62px;
          max-height: 62px;
        }
        h4 {
          margin-top: 32px;
          font-size: 24px;
          font-family: 'MADEEvolveSans-bold',
          sans-serif;
          font-weight: normal;
          color: #2c1c1c;
          text-align: center;
          white-space: pre;
        }
        p {
          width: 100%;
          margin-top: 8px;
          font-size: 18px;
          line-height: 1.33;
          font-family: 'MADEEvolveSans-regular',
          sans-serif;
          font-weight: normal;
          text-align: center;
        }
      }
    }
  }
  @keyframes dash {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: 290;
    }
  }
  @media only screen and (max-width: 1024px) {
    .quick-list {
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 0;

      &_item {
        width: 32%;
        margin-top: 84px;
        margin-left: 0;
        margin-right: 0;

        &:nth-child(3) {
          .quick-line {
            visibility: hidden;
          }
        }

        .quick-line_white4 {
          animation-delay: 1.6s;
        }

        p {
          width: 200px;
        }

        .quick-line {
          left: calc(50% + 21px);
          transform: rotate(1deg) scaleX(1.03);
        }
      }
    }
  }
  @media only screen and (max-width: 850px) {
    .quick-list_item .quick-line {
      transform: rotate(1deg) scaleX(1.01);
      top: -45px;
    }
  }
  @media only screen and (max-width: 830px) {
    .quick-list_item {
      width: 48%;

      .quick-line {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 540px) {
    .quick-list_item {
      width: 46%;
    }
  }
  @media only screen and (max-width: 480px) {
    .quick {
      padding-bottom: 0;

      &-list_item {
        margin-left: 0;
        margin-right: 0;
        width: 100%;

        p {
          width: 250px;
        }
      }
    }
  }
</style>
