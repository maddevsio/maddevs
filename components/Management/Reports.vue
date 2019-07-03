<template>
  <section>
    <div class="container">
      <h2 class="sec-title">Отчеты</h2>
      <p>Отчеты по часам  могут быть использованы как для анализа, так и для решения спорных моментов. Помимо отчетов по часам, вы также получаете регулярные отчеты о проделанной работе. Частота отчетов может быть любой в зависимости от необходимости.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Reports'
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  section {
    width: 100%;
    padding: 60px 0;
    background-color: $bgcolor--yellow;

    p {
      max-width: 870px;
      margin: 0 auto;
      text-align: center;
      font-size: 24px;
      line-height: 1.46;
      font-family: 'MADEEvolveSans-regular', sans-serif;
    }
  }
</style>
