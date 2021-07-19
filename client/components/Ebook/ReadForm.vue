<template>
  <div class="read-form">
    <img
      src="@/assets/img/Ebook/book-rotated.svg"
      alt="Pricing strategies"
    >
    <h4>Get your copy of  “Custom Software Development: Pricing Strategies”</h4>
    <div class="read-form_fields">
      <input
        v-model="name"
        placeholder="Your name"
      >
      <input
        v-model="email"
        placeholder="Email"
      >
      <button
        @click="submit"
      >
        Send me the ebook
      </button>
    </div>
    <p>By providing your email address, you agree to our Privacy Policy. We will not send you any spam – only link for downloading the ebook and some more useful resources in the future.</p>
  </div>
</template>

<script>
export default {
  name: 'ReadForm',
  data() {
    return {
      name: '',
      email: '',
    }
  },

  methods: {
    submit() {
      this.$emit('submit', { name: this.name, email: this.email })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.read-form {
  width: 100%;
  max-width: 498px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 42px 48px;
  background-color: #F4F4F4;
  border-radius: 4px;
  box-sizing: border-box;

  > img {
    width: 100%;
    max-width: 145px;
    height: auto;
    margin-left: -15px;
  }

  > h4 {
    @include font('Inter', 22px, 400);
    line-height: 30px;
    letter-spacing: -1px;
    color: #111;
    margin-bottom: 24px;
  }

  &_fields {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    input {
      width: 100%;
      padding: 12px 15px;
      @include font('Inter', 16px, 400);
      line-height: 24px;
      letter-spacing: -0.4px;
      color: #707072;
      border-radius: 4px;
      border: 1px solid #707072;
      background-color: transparent;
      margin-bottom: 16px;
      box-sizing: border-box;
    }

    button {
      width: auto;
      padding: 12px 15px;
      @include font('Inter', 16px, 400);
      line-height: 20px;
      letter-spacing: -0.4px;
      color: #707072;
      border-radius: 4px;
      border: 1px solid #707072;
      background-color: transparent;
      cursor: pointer;
      margin-bottom: 16px;
      box-sizing: border-box;
    }
  }

  > p {
    @include font('Inter', 14px, 400);
    letter-spacing: -0.4px;
    color: #A0A0A1;
    line-height: 18px;
  }
}
</style>
