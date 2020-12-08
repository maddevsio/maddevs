<template>
  <div class='post-part single'>
    <prism-editor
      class="code-sample"
      v-model="code"
      :highlight="highlighter"
      readonly
    />
  </div>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';

import 'prismjs';
import {highlight} from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css.min';
import 'prismjs/themes/prism.css';

export default {
  name: 'CodeblockSlice',
  props: {
    slice: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      code: this.slice.primary.code.reduce((prev, element) => prev + element.text, '')
    };
  },
  components: {
    PrismEditor
  },
  methods: {
    highlighter(code){
      return highlight(code, Prism.languages[this.slice.primary.language[0].text], this.slice.primary.language[0].text);
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/_vars';
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

  .code-sample {
    background-color: whitesmoke;
    padding: 25px;
    line-height: 22px;
    font-size: 17px;
    font-family: 'IBM Plex Mono', monospace;
  }
</style>

