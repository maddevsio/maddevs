<template>
  <label>
    <span>{{ label }}</span>
    <input type="text" :placeholder="placeholder">
  </label>
</template>

<script>
export default {
  name: 'UIInput',
  props: {
    placeholder: {
      type: String,
      default: 'Input placeholder'
    },
    label: {
      type: String,
      default: 'Input label'
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      color: $text-color--black;
      font-size: 12px;
      line-height: 16px;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      min-height: 48px;
      padding: 10px 16px;
      box-sizing: border-box;
      font-family: 'MADEEvolveSans-regular', sans-serif;
      border: 1px solid $border-color--grey;
      border-radius: $border-radius-5;
      font-size: 16px;
      line-height: 28px;

      &::placeholder {
        color: $text-color--grey;
        font-size: 16px;
        line-height: 28px;
      }
    }
  }
</style>
