<template>
  <div class="file-input">
    <input
      id="file"
      ref="fileInput"
      class="file-input__uploader"
      type="file"
      name="file"
      accept=".pdf,.cv,.doc,.odt,.docx,.txt"
      @change="onFileChanged"
    />
    <span class="none-decorated-dash">–</span>
    <label
      :class="{
        'file-input__cv--selected': selectedFile,
        'file-input__cv--attachable': !selectedFile,
      }"
      class="file-input__cv"
      for="file"
    >
      {{ selectedFile ? selectedFileName : 'find attached my CV' }}</label
    >
  </div>
</template>

<script>
export default {
  name: 'FileInput',
  data() {
    return {
      selectedFile: null,
    };
  },

  computed: {
    selectedFileName() {
      const ending = '...';
      const fileName = this.selectedFile.name;
      if (fileName) {
        if (fileName.length > 25) {
          return fileName.substring(0, 25) + ending;
        }
        return fileName;
      }
      return '';
    },
  },

  methods: {
    onFileChanged(event) {
      const [file] = event.target.files;
      this.selectedFile = file;
      this.$emit('input', file);
    },

    reset() {
      this.selectedFile = null;
      this.$refs.fileInput.value = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.file-input {
  display: flex;

  .none-decorated-dash {
    margin-right: 5px;
  }

  &__uploader {
    display: none;
  }

  &__cv {
    min-width: max-content;
    color: $text-color--grey;
    font-family: 'Poppins-Regular', sans-serif;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-decoration-line: none;
    cursor: pointer;

    @media only screen and (max-width: 550px) {
      font-size: 18px;
    }
  }
}
</style>
