<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="sec-title">{{$t('We solve the full range of IT services with different levels of customer involvement')}}</h2>
      <div class="services-wrap">
        <div class="services-wrap_left-block">
            <p>{{ $t('Level of Trust and Increasing Customer Involvement') }}</p>
        </div>
        <div class="services-wrap_right-block">
            <div class="right-block_images">
                <div :class="{ 'anim-arrow': animated }" class="right-block_images-arrow">
                    <img src="../../assets/img/Home/svg/services/arrow_graph.svg" alt="Arrow graph">
                </div>
                <div ref="serviceBlockAnim" :class="{ 'anim-open': animated }" class="right-block_images-list">
                    <div class="right-block_images-list-item">
                      <img src="../../assets/img/Home/svg/services/block-1.svg" alt="Block 1">
                      <div class="block-line"></div>
                    </div>
                    <div class="right-block_images-list-item">
                      <img src="../../assets/img/Home/svg/services/block-2.svg" alt="Block 2">
                      <div class="block-line"></div>
                    </div>
                    <div class="right-block_images-list-item">
                      <img src="../../assets/img/Home/svg/services/block-3.svg" alt="Block 3">
                      <div class="block-line"></div>
                    </div>
                    <div class="right-block_images-list-item">
                      <img src="../../assets/img/Home/svg/services/block-4.svg" alt="Block 4">
                      <div class="block-line"></div>
                    </div>
                    <div class="right-block_images-list-item">
                      <img src="../../assets/img/Home/svg/services/block-5.svg" alt="Block 5">
                      <div class="block-line"></div>
                    </div>
                </div>
            </div>
            <ul class="right-block_desc">
                <li>{{ $t('Direct daily or weekly hiring of specialists') }}</li>
                <li>{{ $t('Advice-from-our-experts') }}</li>
                <li>{{ $t('Independent audit and optimization') }}</li>
                <li>{{ $t('Software and Infrastructure Development') }}</li>
                <li>{{ $t('Full outsourced IT team, with a resource management system') }}</li>
            </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'services',
  data() {
    return {
      animated: false
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.getAminBlockPorition);
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener('scroll', this.getAminBlockPorition);
    }
  },
  mounted() {
    const ua = window.navigator.userAgent;
    const isIE = /MSIE|Trident/.test(ua);
    if (isIE) {
      this.animated = true;
    } else {
      if (process.browser) {
        this.getAminBlockPorition();
      }
    }
  },
  methods: {
    getAminBlockPorition() {
      if (window.scrollY + 700 >= this.$refs.serviceBlockAnim.offsetTop) {
        this.animated = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .services {
    padding: 120px 0 60px;
    h2 {
      max-width: 900px;
      margin: 0 auto;
    }
    &-wrap {
      display: flex;
      align-items: center;
      margin-top: 60px;
      &_left-block {
        min-width: 255px;
        max-width: 255px;
        p {
          padding-right: 40px;
          font-size: 18px;
          line-height: 1.39;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          color: $text-color--black;
          text-align: right;
        }
      }
      &_right-block {
        width: 100%;
        display: flex;
        .right-block_images {
          display: flex;
          &-arrow {
            max-height: 262px;
            margin-right: 40px;
            img {
              transform: scaleY(0);
              transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
          }
          &-list {
            max-height: 262px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            transform: translateY(-10px);
            &-item {
              position: relative;
              img {
                width: auto;
                height: 54px;
                display: block;
                transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
              }
              .block-line {
                width: 50px;
                height: 2px;
                position: absolute;
                top: 40%;
                right: 30px;
                transform: translateY(-50%);
                transition: all .5s ease; 
              }
              &:nth-child(1) {
                z-index: 5;
                img {
                  margin-bottom: -54px;
                }
                .block-line {
                  background-color: #fef4f4;
                  transition-delay: .9s;
                }
              }
              &:nth-child(2) {
                z-index: 4;
                img {
                  margin-bottom: -54px;
                }
                .block-line {
                  background-color: #fde8e9;
                  transition-delay: .8s;
                }
              }
              &:nth-child(3) {
                z-index: 3;
                img {
                  margin-bottom: -54px;
                }
                .block-line {
                  background-color: #fbd3d4;
                  transition-delay: .7s;
                }
              }
              &:nth-child(4) {
                z-index: 2;
                img {
                  margin-bottom: -54px;
                }
                .block-line {
                  background-color: #f7a7a9;
                  transition-delay: .6s;
                }
              }
              &:nth-child(5) {
                z-index: 1;
                .block-line {
                  background-color: #f47a7d;
                  transition-delay: .5s;
                }
              }
            }
          }
          .anim-arrow {
            img {
              transform: scaleY(1);
            }
          }
          .anim-open {
            img {
              margin-bottom: 0;
              &:nth-child(1) {
                margin-top: -5px;
              }

              &:nth-child(2) {
                margin-top: -5px;
              }

              &:nth-child(3) {
                margin-top: -5px;
              }

              &:nth-child(4) {
                margin-top: -5px;
              }
              
              &:nth-child(5) {
                margin-top: -5px;
              }
            }
            .block-line {
              right: -15px;
            }
          }
        }
        .right-block_desc {
          margin: 0;
          padding-left: 40px;
          li {
            font-size: 20px;
            line-height: 1.2;
            font-family: 'MADEEvolveSans-regular', sans-serif;
            color: $text-color--black;
            list-style: none;
            padding: 12.5px 0;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    .services {
      &-wrap {
        &_left-block {
          width: 100%;
          max-width: 200px;
          min-width: auto;

          p {
            padding-right: 20px;
          }
        }

        &_right-block {
          .right-block_desc {
            margin-top: 22px;

            li {
              font-size: 19px;
              padding: 11px 0;
            }
          }

          .right-block_images .anim-arrow img {
            transform: scaleY(.9);
            margin-top: 12px;
          }

          .right-block_images-list {
            img {
              height: 50px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .services {
      &-wrap {
        flex-direction: column;

        &_left-block {
          width: 100%;
          max-width: 100%;
          min-width: auto;

          p {
            text-align: center;
            padding-right: 0;
            margin-bottom: 40px;
          }
        }

        &_right-block {
          position: relative;

          .right-block_images-arrow {
            display: none;
          }

          .right-block_desc {
            margin-top: -12px;
            padding-left: 300px;
          }

          .right-block_images-list {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .services {
      padding-bottom: 0;

      &-wrap {
        .services-wrap_left-block p {
          font-family: 'MADEEvolveSans-regular', sans-serif;
          font-size: 22px;
          color: #2c1c1c;
          font-weight: bold;
        }

        .right-block_images {
          display: none;
        }

        .right-block_desc {
          padding-left: 50px;

          li {
            position: relative;

            &::before {
              content: '';
              width: 32px;
              height: 1px;
              position: absolute;
              left: -50px;
              top: 21px;
              background-color: $accent-color--red !important;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .services {
      padding-top: 80px;

      h2 {
        font-size: 28px;
      }

      &-wrap {
        .right-block_desc li {
          font-size: 18px;
        }
      }
    }
  }
</style>

