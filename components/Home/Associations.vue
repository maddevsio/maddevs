<template>
  <section id="associations" class="associations">
    <div class="container">
      <div class="associations-wrap">
        <h2 class="sec-title">{{$t('Membership in associations')}}</h2>
        <div class="associations-wrap_list">
          <div class="associations-wrap_list-item htp">
            <img src="../../assets/img/Home/svg/associations/pht.svg" alt="">
          </div>
          <div class="associations-wrap_list-item kssda">
            <img src="../../assets/img/Home/svg/associations/kssda.svg" alt="">
          </div>
          <div class="associations-wrap_list-item amcham">
            <img src="../../assets/img/Home/svg/associations/amcham.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'associations'
};
</script>

<style lang="scss" scoped>
.associations {
  padding: 60px 0 120px;
  &-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    &_list {
      width: 100%;
      max-width: 870px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 65px;
    }
  }
}
@media only screen and (max-width: 540px) {
  .associations-wrap_list .htp {
    img {
      height: 45px;
    }
  }

  .associations-wrap_list .kssda {
    img {
      height: 35px;
    }
  }

  .associations-wrap_list .amcham {
    img {
      height: 40px;
    }
  }
}
@media only screen and (max-width: 480px) {
  .associations {
    padding: 80px 0;

    &-wrap {
      h3 {
        width: 200px;
        font-size: 20px;
        text-align: center;
      }

      &_list {
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 50px;

        &-item {
          width: 50%;
          text-align: center;

          &:first-child {
            text-align: left;
          }

          &:nth-child(2) {
            text-align: right;
          }

          &:last-child {
            margin-top: 40px;
          }
        }

        .kssda {
          img {
            height: 35px;
          }
        }

        .amcham {
          img {
            height: 50px;
          }
        }
      }
    }
  }
}
</style>

