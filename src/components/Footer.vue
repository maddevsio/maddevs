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
      <div class="footer-copyright">
        <p>© Mad Devs <img src="../assets/img/png/banner/i-love-you-hand-sign_1f91f.png" alt=""> {{ this.year }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'main-footer',
  data() {
    return {
      year: 0
    };
  },
  mounted() {
    this.year = (new Date).getFullYear();
  }
};
</script>
