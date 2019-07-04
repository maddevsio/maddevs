<template>
  <section>
    <div class="container">
      <div class="process">
        <h3>Процесс работы</h3>
        <p>Вся работа ведется в рамках выбранного issue tracker-а, там создаются задачи, планируются, записываются результаты обсуждений, отслеживается прогресс по задачам, заполняется сток задач. </p>
      </div>
      <div class="time-tracking">
        <h3>Тайм трекинг</h3>
        <p>Разработчики тщательно отписывают на какую задачу сколько времени было потрачено, затем по этим логам делается выгрузка и клиент оплачивает только за эти часы.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProcessTimeTraking'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  section {
    width: 100%;
    padding: 60px 0;

    .container {
      display: flex;
    }

    .process {
      margin-right: 30px;
    }

    h3 {
      font-size: 22px;
      line-height: 1;
      font-family: 'MADEEvolveSans-bold', sans-serif;
      margin-bottom: 20px;
    }

    p {
      font-size: 20px;
      line-height: 1.7;
      font-family: 'MADEEvolveSans-regular', sans-serif;
    }
  }

  @media only screen and (max-width: 768px) {
    section {
      .container {
        flex-direction: column;

        .process {
          margin-right: 0;
          margin-bottom: 60px;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    section {
      .container {
        .process {
          margin-bottom: 40px;

          p {
            font-size: 18px;
          }
        }
      }
    }
  }
</style>
