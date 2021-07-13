<template>
  <div class="post-part single">
    <PrismEditor
      v-model="code"
      :highlight="highlighter"
      class="code-sample"
      readonly
    />
  </div>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

import 'prismjs'
import Prism from 'prismjs/components/prism-core.min'
import '@/components/slices/CodeBlockSlice/highlights'

export default {
  name: 'CodeblockSlice',
  components: {
    PrismEditor,
  },

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      code: '',
    }
  },

  mounted() {
    this.code = this.slice.primary.code.reduce((prev, element) => prev + element.text, '')
  },

  methods: {
    highlighter(code) {
      return Prism.highlight(code, Prism.languages[this.slice.primary.language], this.slice.primary.language)
    },
  },
}
</script>

<style scoped lang="scss">
.code-sample {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 24px 0;

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
