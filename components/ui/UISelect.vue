<template>
  <div class="ui-select">
    <span>{{ label }}</span>
    <button class="ui-select_wrap" ref="wrap">
      <div class="ui-select_wrap__lable" ref="label" @click="toggleSelectOptions">
        <span v-if="activeOption" class="selected">{{ activeOption }}</span>
        <span v-else>{{ placeholder }}</span>
        <SvgArrow :reverce="openedSelect"/>
      </div>
      <div class="ui-select_wrap__options" ref="list" :class="{ openedSelect }">
        <button v-for="(option, index) in options" :key="'option_' + index" :class="{ 'active': option.text === activeOption }" @click="getSelectedOption(option)">
          {{ option.text }}
        </button>
      </div>
    </button>
  </div>
</template>

<script>
import SvgArrow from '@/components/svg/SvgArrow';

export default {
  name: 'UISelect',
  components: { SvgArrow },
  props: {
    options: {
      type: Array,
      validator(values) {
        if (!Array.isArray(values)) return false;
        if (values.length) {
          const info = values.every(value => (
            (typeof value.active === 'boolean'
             || typeof value.active === 'undefined')
            && typeof value.text === 'string'));
          return info;
        }
        return true;
      },
      default() {
        return [{
          active: false,
          text: 'Option'
        }];
      }
    },
    label: {
      type: String,
      default: 'Select label'
    },
    placeholder: {
      type: String,
      default: 'Select placeholder'
    }
  },
  data() {
    return {
      openedSelect: false,
      activeOption: null
    };
  },
  created() {
    const opt = this.options.filter(o => o.active);
    if (opt && opt.length > 0) {
      this.activeOption = opt[0].text;
    }
    document.addEventListener('click', this.closeSelectOptions);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeSelectOptions);
  },
  methods: {
    toggleSelectOptions() {
      this.openedSelect = !this.openedSelect;
    },
    getSelectedOption(option) {
      this.openedSelect = false;
      this.activeOption = option.text;
      this.$emit('UISelect', option.type);
    },
    closeSelectOptions(e) {
      if (this.openedSelect && !e.target.parentNode.className.includes('ui-select_wrap')) {
        this.openedSelect = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .ui-select {
    > span {
      color: $text-color--black;
      font-size: 12px;
      line-height: 16px;
      font-family: 'MADEEvolveSans-regular', sans-serif;
    }

    &_wrap {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      position: relative;
      box-sizing: border-box;
      color: $text-color--grey;
      z-index: 1;
      background-color: transparent;
      border: 1px solid $border-color--grey;
      border-radius: $border-radius-5;
      padding: 0;
      margin-top: 8px;
      cursor: pointer;
  
      &__lable {
        width: 100%;
        min-height: 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $bgcolor--white;
        color: $text-color--dark;
        border-radius: $border-radius-5;
        padding: 10px 16px;

        span {
          position: relative;
          margin-right: 19px;
          white-space: nowrap;
          pointer-events: none;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          color: $text-color--grey;
          font-size: 16px;
          line-height: 28px;
        }

        .selected {
          color: $text-color--black;
        }
      }
  
      &__options {
        width: auto;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        visibility: hidden;
        overflow: hidden;
        border: 1px solid $border-color--grey;
        border-radius: $border-radius-5;
  
        button {
          padding: 10px 16px;
          text-align: left;
          color: $text-color--dark;
          white-space: nowrap;
          background-color: $bgcolor--white;
          border: 0;
          font-family: 'MADEEvolveSans-regular', sans-serif;
          color: $text-color--grey;
          cursor: pointer;
  
          &:hover {
            background-color: $bgcolor--yellow;
          }
        }  
      }

      .active {
        background-color: $bgcolor--yellow !important;
      }
  
      .openedSelect {
        visibility: visible;
      }
    }
  }
</style>
