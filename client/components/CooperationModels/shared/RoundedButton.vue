<template>
  <button class="rounded-button">
    →
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.rounded-button {
  display: inline-block;
  cursor: pointer;
  background: transparent;
  padding: 0;
  @include font('Inter', 16, 400);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid $border-color--white;
  color: $border-color--white;
  transition: all .2s;
  &:hover {
    background-color: $border-color--white;
    color: $text-color--black;
  }
}
</style>
