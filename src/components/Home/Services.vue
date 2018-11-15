<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="sec-title">{{$t('We solve the full range of IT services with different levels of customer involvement - from direct FTE hiring and outstuff to full IT outsourced software development')}}</h2>
      <div class="services-wrap">
        <div class="services-wrap_left-block">
            <p>Level of Trust and Increasing Customer Involvement</p>
        </div>
        <div class="services-wrap_right-block">
            <div class="right-block_images">
                <div id="service-arrow-anim" class="right-block_images-arrow">
                    <img src="../../assets/img/svg/services/arrow_graph.svg" alt="Arrow graph">
                </div>
                <div id="service-block-anim" class="right-block_images-list">
                    <img src="../../assets/img/svg/services/block-1.svg" alt="Block 1">
                    <img src="../../assets/img/svg/services/block-2.svg" alt="Block 2">
                    <img src="../../assets/img/svg/services/block-3.svg" alt="Block 3">
                    <img src="../../assets/img/svg/services/block-4.svg" alt="Block 4">
                    <img src="../../assets/img/svg/services/block-5.svg" alt="Block 5">
                </div>
            </div>
            <ul class="right-block_desc">
                <li>Direct daily or weekly hiring of specialists</li>
                <li>Advice from our experts</li>
                <li>Independent audit and optimization</li>
                <li>Software and Infrastructure Development</li>
                <li>Full outsourced IT team, with a resource management system</li>
            </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'services',
  mounted() {
    const blocks = document.getElementById('service-block-anim');
    const arrow = document.getElementById('service-arrow-anim');
    window.addEventListener('scroll', function(event) {
      var top = this.scrollY;
      if (top + 350 >= blocks.offsetTop) {
        arrow.classList.add('anim-arrow');
        blocks.classList.add('anim-open');
      }
    }, false);
  }
};
</script>
