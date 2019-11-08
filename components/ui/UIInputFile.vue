<template>
  <label class="ui-input-file">
    <span>{{ label }}</span>
    <label>
      <span v-if="fileName" class="selected">{{ fileName.name }}</span>
      <span v-else>{{ placeholder }}</span>
      <input type="file" @change="processFile($event)"/>
      <div>{{ btnText }}</div>
    </label>
  </label>
</template>

<script>
export default {
  name: 'UIInputFile',
  props: {
    btnText: {
      type: String,
      default: 'Button'
    },
    label: {
      type: String,
      default: 'Input label'
    },
    placeholder: {
      type: String,
      default: 'Input placeholder'
    }
  },
  data() {
    return {
      fileName: null
    };
  },
  methods: {
    processFile(event) {
      this.fileName = event.target.files[0];
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .ui-input-file {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > span {
      color: $text-color--black;
      font-size: 12px;
      line-height: 16px;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      margin-bottom: 8px;
    }

    > label {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;
      box-sizing: border-box;
      border: 1px solid $border-color--grey;
      border-radius: $border-radius-5;

      span {
        font-family: 'MADEEvolveSans-regular', sans-serif;
        color: $text-color--grey;
        font-size: 16px;
        line-height: 28px;
      }

      .selected {
        color: $text-color--black;
      }
  
      input {
        display: none;
      }
  
      div {
        padding: 2px 16px;
        border: 1px solid $border-color--black;
        border-radius: $border-radius-5;
        font-size: 14px;
        line-height: 28px;
        color: $text-color--black;
        font-family: 'MADEEvolveSans-regular', sans-serif;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
</style>
