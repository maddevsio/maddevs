<template>
  <section id="weUse" class="weUse">
    <div class="container">
      <div class="weUse_wrap">
        <h2>В работе чаще всего мы применяем</h2>
        <div class="weUse_wrap-list">
            <div class="weUse_wrap-list-item">
                <h3>Фронтенд</h3>
                <p>Фронтенд - это монополия <span>Javascript</span>, пока ничего не изменилось. Мы любим делать фронтенд на <span>React</span> и <span>Vue</span>. Без <span>ES6</span> и <span>Babel</span> никуда а собираем фронтенд с помощью <span>Webpack</span>.</p>
            </div>
            <div class="weUse_wrap-list-item">
                <h3>Мобильная разработка</h3>
                <p>Мобильные приложения делаем нативными для каждой платформы <span>iOS</span> и <span>Android</span>. <span>iOS</span> - это <span>Swift</span>, но не боимся <span>Objective-C</span> и пишем на обоих языках. <span>Android</span> — это <span>Java</span> и <span>Kotlin</span></p>
            </div>
            <div class="weUse_wrap-list-item">
                <h3>Бэкэнд</h3>
                <p>Для большинства проектов на бекенде мы используем <span>Python</span> с фреймворками <span>Django</span> и <span>Flask</span>. Иногда пишем на <span>PHP</span> с <span>Symfony</span> и <span>Yii</span>. Там, где есть высокая нагрузка, мы используем <span>Go</span>. Есть задачи, которые не решить без помощи <span>Javascript</span> и <span>Node.js</span>.</p>
            </div>
            <div class="weUse_wrap-list-item">
                <h3>Инфраструктура</h3>
                <p>Без хорошей инфраструктуры на продакшне поддерживать проект будет сложно. Мы делаем <span>CI/CD</span> для всех проектов. Используем для этого: <span>Jenkins</span>, <span>Bamboo</span>, <span>TeamCity</span>, <span>Travis CI</span>, <span>Circle CI</span> и <span>AWS CodePipeline</span>. Раскатываем весь софт на <span>AWS</span>, <span>Digital Ocean</span>, <span>Heroky</span>, <span>Azure</span>. Для сбора  ошибок - <span>Sentry</span> а <span>Sensu</span> и <span>CloudWatch</span> - мониторинг и сбор метрик.</p>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'we-use',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
