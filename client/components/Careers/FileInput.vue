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
    <span class="none-decorated-dash" v-if="selectedFile">–</span>
    <label
      class="file-input__cv"
      :class="{
        'file-input__cv--selected': selectedFile,
        'file-input__cv--attachable': !selectedFile
      }"
      for="file"
    >
      <img
        class="file-input__cv-icon"
        src="@/assets/img/Careers/svg/attach_file.svg"
        alt="attach file icon"
        v-if="!selectedFile"
      />
      {{ selectedFile ? selectedFileName : 'Attach your CV' }}</label
    >
  </div>
</template>

<script>
export default {
  name: 'FileInput',
  data() {
    return { selectedFile: null };
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
@import '../../assets/styles/get-vw';

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
    color: $text-color--black;
    font-size: get-vw(20px);
    cursor: pointer;
    text-align: center;
    letter-spacing: -0.02em;
    text-decoration-line: underline;
    display: flex;
    align-items: center;

    &--selected {
      color: $text-color--grey;
      font-size: inherit;
    }

    &-icon {
      margin-right: get-vw(25px);
      width: get-vw(39px);
      height: get-vw(48px);
    }
  }
}

@media only screen and (max-width: 1600px) {
  .file-input {
    &__cv {
      font-size: 20px;

      &-icon {
        margin-right: 25px;
        width: 39px;
        height: 48px;
      }
    }
  }
}

@media only screen and (max-width: 820px) {
  .file-input {
    &__cv {
      &-icon {
        height: 38px;
        margin-right: 20px;
      }
    }
  }
}

@media only screen and (max-width: 576px) {
  .file-input {
    &__cv {
      &--attachable {
        font-size: 17px;
      }

      &-icon {
        height: 28px;
        margin-right: 10px;
      }
    }
  }
}
</style>
