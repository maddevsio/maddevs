<template>
  <div class="terminal">
    <div class="terminal__head">
      <button></button>
      <button></button>
      <button></button>
    </div>
    <div class="terminal__content">
      <vue-terminal :command-list="commandList" :task-list="this.defaultTask" style="width:50%;margin:0 auto"></vue-terminal>
    </div>
  </div>
</template>

<script>
import VueTerminal from 'vue-terminal';

export default {
  name: 'Terminal',
  components: { VueTerminal }
};
</script>

<style lang="scss" scoped>

</style>
