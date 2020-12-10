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
import { highlight } from 'prismjs/components/prism-core.min';
import 'prismjs/components/prism-clike.min';
import 'prismjs/components/prism-javascript.min';
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
      code: ''
    };
  },
  mounted() {
    this.code = this.slice.primary.code.reduce((prev, element) => prev + element.text, '');
  },
  components: {
    PrismEditor
  },
  methods: {
    highlighter(code){
      return highlight(code, Prism.languages[this.slice.primary.language], this.slice.primary.language);
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/_vars';
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');

  .code-sample {
    line-height: 22px;
    font-size: 17px;
    font-family: 'IBM Plex Mono', monospace;

    /deep/ .prism-editor__container {
      background-color: whitesmoke;
    }

    /deep/ .prism-editor__container,
    /deep/ .prism-editor__textarea {
      padding: 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .code-sample {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>

