<template>
  <section id="quick" class="quick">
    <div class="container">
      <h2 class="sec-title">{{$t('quick-title')}}</h2>
      <div class="quick-list">
        <div class="quick-list_item" data-text="1">
          <svg class="quick-line" width="272px" height="37px" viewBox="0 0 272 37" version="1.1">
            <g id="quick-line1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <path class="quick-line_dashed" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="#EC2227" fill-rule="nonzero"></path>
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
              <path class="quick-line_dashed" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="#EC2227" fill-rule="nonzero"></path>
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
              <path class="quick-line_dashed" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="#EC2227" fill-rule="nonzero"></path>
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
              <path class="quick-line_dashed" d="M272,35.547612 C269.37434,34.0202917 267.914591,33.176634 267.620751,33.0166391 C230.621067,12.8703779 185.18463,1 136.074439,1 C84.9416922,1 37.7915311,13.8682518 0,35.547612" stroke="#EC2227" fill-rule="nonzero"></path>
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
  }
};
</script>
