<template>
  <section>
    <div class="container">
      <h2 class="sec-title">Мы гарантируем прозрачность процессов</h2>
      <p>Для этого мы создаем и настраиваем команде окружение для коммуникации, включая рабочие комнаты в <span>Slack</span> и системы для планирования задач, такие как <span>JIRA</span>, <span>Asana</span>, <span>BaseCamp</span>, <span>Trello</span>. </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Transparency'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  section {
    width: 100%;
    padding: 120px 0;

    p {
      max-width: 630px;
      margin: 0 auto;
      text-align: center;
      font-size: 24px;
      line-height: 1.46;
      font-family: 'MADEEvolveSans-regular', sans-serif;

      span {
        font-family: 'MADEEvolveSans-bold', sans-serif;
      }
    }
  }
</style>
