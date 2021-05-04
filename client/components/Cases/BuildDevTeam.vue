<template>
  <div class="build-dev-team_wrapper">
    <div class="container">
      <section class="build-dev-team">
        <h2>Let’s build or scale up your development team?</h2>
        <p>Book a call with us and we’ll guide you through a structured process to assess the right solution for your business. You'll be talking to technical experts, not account managers.</p>
        <button
          class="build-dev-team_btn"
          @click="$refs.modalContactMe.show()"
        >
          Book a free consultation
        </button>
        <img
          width="395"
          height="490"
          class="build-dev-team_img media_lazy"
          :data-src="require('@/assets/img/Cases/Chuk.png')"
          alt="Chuk"
        >
        <div class="build-dev-team_man">
          Andrew “Chuck” Minkin
          <span>CTO, Co-Founder</span>
        </div>
      </section>

      <Modal ref="modalContactMe">
        <ModalContactMe @success="$refs.modalContactMe.close()" />
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/core/Modal'

export default {
  name: 'BuildDevTeam',
  components: {
    Modal,
    ModalContactMe: () => import('@/components/core/modals/ModalContactMe'),
  },
}
</script>

<style lang="scss" scoped>
  .build-dev-team {
    position: relative;
    background-color: #F4F4F4;
    padding: 85px 105px;
    box-sizing: border-box;

    @media screen and (max-width: 1280px) {
      padding: 85px 40px;
    }

    @media screen and (max-width: 992px) {
      padding: 40px;
    }

    * {
      font-family: 'Inter', sans-serif;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 40px 32px 0;
    }

    &_wrapper {
      background-color: #fff;
      padding-bottom: 100px;
      margin-top: -1px;

      @media screen and (max-width: 768px) {
        padding-bottom: 44px;
      }
    }

    h2 {
      max-width: 590px;
      font-weight: 800;
      font-size: 60px;
      line-height: 65px;
      letter-spacing: -0.04em;
      margin-bottom: 21px;

      @media screen and (max-width: 1280px) {
        max-width: 500px;
        font-size: 48px;
      }

      @media screen and (max-width: 1280px) {
        max-width: 450px;
        font-size: 42px;
        line-height: 100%;
      }

      @media screen and (max-width: 900px) {
        max-width: 395px;
        font-size: 36px;
      }

      @media screen and (max-width: 768px) {
        max-width: 100%;
        text-align: center;
        font-size: 40px;
        letter-spacing: -0.05em;
        margin-bottom: 24px;
      }

      @media screen and (max-width: 370px) {
        font-size: 34px;
      }
    }

    p {
      font-weight: normal;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.013em;
      margin-bottom: 40px;
      max-width: 420px;

      @media screen and (max-width: 1280px) {
        font-size: 18px;
      }

      @media screen and (max-width: 992px) {
        max-width: 350px;
      }

      @media screen and (max-width: 900px) {
        max-width: 320px;
      }

      @media screen and (max-width: 768px) {
        max-width: 100%;
        font-size: 16px;
        line-height: 21px;
        margin-bottom: 24px;
        text-align: center;
      }
    }

    &_btn {
      padding: 17px 28px;
      color: #fff;
      background-color: #EC1C24;
      border-radius: 4px;
      border: 0;
      font-size: 18px;
      cursor: pointer;
      line-height: 100%;

      @media screen and (max-width: 900px) {
        font-size: 16px;
      }
    }

    &_img {
      width: auto;
      height: 100%;
      position: absolute;
      bottom: 0;
      right: 106px;

      @media screen and (max-width: 1280px) {
        right: 90px;
      }

      @media screen and (max-width: 1180px) {
        height: 85%;
      }

      @media screen and (max-width: 900px) {
        right: 0;
      }

      @media screen and (max-width: 768px) {
        width: 90%;
        height: auto;
        position: static;
      }

      @media screen and (max-width: 375px) {
        width: calc(100% + 50px);
        margin: auto -25px 0;
      }
    }

    &_man {
      min-width: 158px;
      position: absolute;
      top: 188px;
      right: 61px;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #101113;

      @media screen and (max-width: 1280px) {
        right: 20px;
      }

      @media screen and (max-width: 1180px) {
        right: 5px;
        top: 215px;
      }

      @media screen and (max-width: 992px) {
        top: 190px;
      }

      @media screen and (max-width: 900px) {
        top: auto;
        bottom: 20px;
      }

      @media screen and (max-width: 768px) {
        top: auto;
        bottom: 16px;
        right: 0;
        line-height: 16px;
      }

      span {
        display: block;
        font-weight: bold;
        margin-top: 4px;

        @media screen and (max-width: 768px) {
          margin-top: 0;
        }
      }
    }
  }
</style>
