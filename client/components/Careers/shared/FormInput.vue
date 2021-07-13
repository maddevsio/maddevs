<template>
  <div
    class="career-form-input"
    :title="value || placeholder"
  >
    <pre>{{ value || placeholder }}</pre>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },

    value: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.career-form-input {
  position: relative;
  display: inline-flex;
  pre,
  input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
  pre {
    width: 100%;
    display: block;
    opacity: 0;
    margin: 0;
    visibility: hidden;
    pointer-events: none;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0px solid;
    padding: 0;
    background: transparent;
    color: $text-color--red;
    caret-color: $text-color--red;
    overflow: hidden;
    text-overflow: ellipsis;
    &::placeholder {
      opacity: 1;
      color: $text-color--grey;
    }
  }
}
</style>
