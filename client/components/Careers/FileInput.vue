<template>
  <div class="file-input">
    <input
      id="file"
      ref="fileInput"
      class="file-input__uploader"
      type="file"
      name="file"
      :accept="acceptedExtensions"
      @change="handleFileSelect"
    />
    <span class="none-decorated-dash">–</span>
    <label :class="`file-input__cv--${selectedFile ? 'selected' : 'attachable'}`" class="file-input__cv" for="file">
      {{ selectedFilename }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'FileInput',
  data() {
    return {
      acceptedExtensions: '.pdf,.cv,.doc,.odt,.docx,.txt',
      selectedFile: null,
    }
  },

  computed: {
    selectedFilename() {
      if (!this.selectedFile) return 'find attached my CV'
      const { name } = this.selectedFile
      if (!name) return ''
      if (name.length > 25) return `${name.substring(0, 25)}...`
      return name
    },
  },

  methods: {
    handleFileSelect(event) {
      const [file] = event.target.files
      this.selectedFile = file
      this.$emit('input', file)
    },

    reset() {
      this.selectedFile = null
      this.$refs.fileInput.value = null
    },
  },
}
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
