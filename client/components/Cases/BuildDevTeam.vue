<template>
  <div class="build-dev-team_wrapper">
    <div class="container">
      <UIBanner
        title="Let’s build or scale up your development team?"
        text="Book a call with us and we’ll guide you through a structured process to assess the right solution for your business. You'll be talking to technical experts, not account managers."
        :image="require('@/assets/img/Cases/Chuk.png')"
        image-alt-text="Chuk"
        man-name="Andrew “Chuck” Minkin"
        man-position="CTO, Co-Founder"
      >
        <UIButton
          class="build-dev-team__button"
          @click="$refs.modalContactMe.show()"
        >
          Book a free consultation
        </UIButton>
      </UIBanner>
      <!-- 'contact-me-cs' id is needed for google analytics, don't remove it -->
      <ModalContactMe
        id="contact-me-cs"
        ref="modalContactMe"
      />
    </div>
  </div>
</template>

<script>
import UIBanner from '@/components/shared/UIBanner'
import UIButton from '@/components/shared/UIButton'

export default {
  name: 'BuildDevTeam',
  components: {
    UIBanner,
    UIButton,
    ModalContactMe: () => import('@/components/core/modals/ModalContactMe'),
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.build-dev-team {
  &_wrapper {
    background-color: #fff;
    padding-bottom: 100px;
    margin-top: -1px;

    @media screen and (max-width: 768px) {
      padding-bottom: 44px;
    }
  }
  &__button {
    font-weight: normal;
    padding: 17px 28px;
    font-size: 18px;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
}
</style>
