<template>
  <div class="file-input">
    <input
      ref="fileInput"
      class="file-input__uploader"
      type="file"
      @change="onFileChanged"
      name="file"
      accept=".pdf,.cv,.doc,.odt,.docx,.txt"
      id="file"
    />
    <span class="none-decorated-dash">–</span>
    <label
      class="file-input__cv"
      :class="{
        'file-input__cv--selected': selectedFile,
        'file-input__cv--attachable': !selectedFile
      }"
      for="file"
    >
     {{ selectedFile ? selectedFileName : 'find attached my CV' }}</label>
  </div>
</template>

<script>
export default {
  name: 'FileInput',
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      this.$emit('input', this.selectedFile);
    },
    reset() {
      this.selectedFile = null;
      this.$refs.fileInput.value = null;
    }
  },
  computed: {
    selectedFileName() {
      const ending = '...';
      let fileName = this.selectedFile.name;
      if (fileName) {
        if (fileName.length > 25) {
          return fileName.substring(0, 25) + ending;
        }
        return fileName;
      }
      return '';
    }
  }
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
    font-family: 'Poppins', sans-serif;
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
