<template>
  <footer id="footer" class="footer">
    <div class="container">
      <!-- <div class="footer-wrap">
        <div class="footer-wrap_list">
            <div class="footer-wrap_list-links">
              <h5>Услуги</h5>
              <div class="footer-links">
                <a href="#">Разработка и тестирование</a>
                <a href="#">DevOps</a>
                <a href="#">Мобильные приложения</a>
                <a href="#">UI/UX дизайн</a>
                <a href="#">Управление проектами</a>
              </div>
            </div>
            <div class="footer-wrap_list-links">
              <h5>Портфолио</h5>
              <div class="footer-links">
                <a href="#">Success stores</a>
                <a href="#">Партнеры</a>
                <a href="#">Open source проекты</a>
              </div>
            </div>
            <div class="footer-wrap_list-links">
              <h5>о нас</h5>
              <div class="footer-links">
                <a href="#">Кто мы</a>
                <a href="#">Пресса</a>
                <a href="#">Конференции</a>
                <a href="#">Ассоциации</a>
                <a href="#">Блог</a>
              </div>
            </div>
            <div class="footer-wrap_list-links">
              <h5>как работаем</h5>
              <div class="footer-links">
                <a href="#">Процессы работы</a>
                <a href="#">Менеджмент команд</a>
                <a href="#">Коммуникация</a>
                <a href="#">Практики разработки</a>
                <a href="#">Используемые технологии</a>
              </div>
            </div>
            <div class="footer-wrap_list-links">
              <h5>вакансии</h5>
              <div class="footer-links">

                <a href="#">Открытые вакансии</a>
                <a href="#">Стажировка</a>
              </div>
            </div>
          </div>
        </div> -->
      <div class="footer-copyright" @click="showSurprise()">
        <p>© Mad Devs <img src="../assets/img/common/i-love-you-hand-sign.png" alt=""> {{ this.year }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'main-footer',
  data() {
    return {
      year: 0,
      clickCount: 0,
      runnigSurprise: false,
    };
  },
  methods: {
    showSurprise(e) {
      const ua = window.navigator.userAgent;
      const isIE = /MSIE|Trident/.test(ua);
      if (isIE) {
        return false;
      } else {
        setTimeout(() => {
          this.clickCount = 0;
        }, 700);
        if (this.runnigSurprise === false) {
          if (this.clickCount === 1) {
            this.runnigSurprise = true;
            let block = document.getElementById('contacts-wrap');
            block.classList.toggle('rotate_contacts-wrap');
            setTimeout(() => {
              block.classList.toggle('rotate_contacts-wrap');
              this.repeatSurprise();
            }, 1000);
          } else {
            this.clickCount += 1;
          }
        }
      }
    },
    repeatSurprise() {
      setTimeout(() => {
        this.clickCount = 0;
        this.runnigSurprise = false;
      }, 1000);
    }
  },
  mounted() {
    this.year = new Date().getFullYear();
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #242424;
  margin-top: -1px;
  &-wrap {
    border-top: 1px solid #3b3b3b;
    &_list {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 60px 0 50px;
      &-links--fake {
        display: none;
      }
      &-links {
        width: 33%;
        padding: 0 10px;
        box-sizing: border-box;
        .footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        h5 {
          text-transform: uppercase;
          line-height: 1.6;
          letter-spacing: 0.2px;
          color: rgba(255, 255, 255, 0.6);
          font-family: 'MADEEvolveSans-bold', sans-serif;
          margin-bottom: 20px;
        }
        a {
          color: #fff;
          font-size: 16px;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          text-decoration: none;
          line-height: 2;
        }
      }
    }
  }
  &-copyright {
    touch-action: manipulation;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding: 0 0 30px;
    p {
      width: 100%;
      text-align: center;
      line-height: 2.14;
      letter-spacing: -0.3px;
      font-size: 14px;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      color: #ffffff;
      img {
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
  }
}

@media only screen and (max-width: 830px) {
  .footer {
    &-wrap {
      &_list {
        flex-wrap: wrap;
        padding: 60px 0 0;
        &-links--fake {
          display: block;
        }
        &-links {
          margin-bottom: 80px;
        }
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  .footer {
    &-wrap {
      &_list {
        /* flex-direction: column; */
        &-links {
          width: 50%;
        }
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .footer {
    &-wrap {
      &_list {
        flex-direction: column;
        &-row {
          width: 100%;
          flex-direction: column;
          &:first-child {
            margin-bottom: 50px;
          }
        }
        &-links {
          width: 100%;
          text-align: center;
          margin-bottom: 40px;
          .footer-links {
            display: block;
          }
          h5 {
            width: 100%;
            font-size: 14px;
          }
          a {
            padding: 0 12px;
            white-space: nowrap;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>

