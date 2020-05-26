<template>
  <li class="radio">
    <input
      class="radio__position-input"
      :name="radio.name"
      :id="radio.id"
      v-model="radioButtonValue"
      type="radio"
    />
    <label class="radio__position-label form-text" :for="radio.id">{{
      radio.labelText
    }}</label>
    <div class="radio__position-check"></div>
    <span
      v-if="radio.id === 'intern'"
      class="radio__form-description last-additional-description form-text"
    >
      roles.
    </span>
  </li>
</template>

<script>
export default {
  name: 'RadioButton',
  data() {
    return { selectedFile: null };
  },
  props: {
    radio: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      labelText: {
        type: String,
        required: true
      }
    }
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0] && event.target.files[0].name;
      this.$emit('input', this.selectedFile);
    }
  },
  computed: {
    radioButtonValue: {
      get() {
        return this.radio.id;
      },
      set() {
        this.$emit('change', this.radio.id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.radio {
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 18px;

  &__position-check {
    box-sizing: border-box;
    position: absolute;
    border: 2px solid $text-color--grey;
    border-radius: 100%;
    height: 26px;
    width: 26px;
    z-index: 5;
    transition: border 0.15s linear;
    -webkit-transition: border 0.15s linear;
    cursor: pointer;
  }

  &__position-input:checked ~ &__position-check {
    border-color: $text-color--red;
    border: 0;
  }

  &__position-input:checked ~ &__position-label {
    color: $text-color--red;
  }

  &__position-input:hover &__position-check {
    border: 2px solid $text-color--red;
  }

  &__position-check::before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 26px;
    width: 26px;
    margin: auto;
    transition: background 0.15s linear;
    -webkit-transition: background 0.15s linear;
  }

  &__position-input {
    position: absolute;
    visibility: hidden;
  }

  &__position-label {
    position: relative;
    color: $text-color--grey;
    padding: 0 0 0 29px;
    z-index: 9;
    transition: all 0.15s linear;
    cursor: pointer;
  }

  &__position-input:checked ~ &__position-check::before {
    background: $text-color--red;
  }

  &__form-description {
    font-family: 'Hoves-Regular';
    color: $text-color--black;
    font-weight: 500;
  }

  .last-additional-description {
    margin-left: 11px;
  }
}

@media only screen and (max-width: 936px) {
  .radio {
    width: 100%;
    margin-bottom: 15px;
  }
}

@media only screen and (max-width: 820px) {
  .radio {
    margin-bottom: 10px;

    &__position-check {
      height: 24px;
      width: 24px;
    }

    &__position-check::before {
      height: 24px;
      width: 24px;
    }
  }
}

@media only screen and (max-width: 520px) {
  .radio {
    margin-bottom: 5px;

    &__position-check {
      height: 20px;
      width: 20px;
    }

    &__position-check::before {
      height: 20px;
      width: 20px;
    }

    &__position-label {
      padding: 0 0 0 26px;
    }
  }
}

@media only screen and (max-width: 455px) {
  .radio {
    &__position-label {
      padding: 0 0 0 25px;
    }
  }
}
</style>
