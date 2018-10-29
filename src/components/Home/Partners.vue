<template>
  <section id="partners" class="partners">
    <div class="container">
      <h2 class="sec-title">{{$t('Partners')}}</h2>
      <div class="partners-wrap">
        <a href="https://neureal.net" target="_blank" class="partners-wrap_item">
          <div class="partners-wrap_item_img">
            <img src="../../assets/img/svg/partners/neureal.svg" alt="">
          </div>
          <p>{{ $t('Partners-block1') }}</p>
          <a>https://neureal.net/</a>
        </a>
        <a href=" https://mythril.ai" target="_blank" class="partners-wrap_item">
          <div class="partners-wrap_item_img">
            <img src="../../assets/img/svg/partners/mythril.svg" alt="">
          </div>
          <p>{{ $t('Partners-block2') }}</p>
          <a>https://mythril.ai</a>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'partners'
};
</script>
