<template>
  <div class="customers__customers-list">
    <div
      v-for="customer in customers"
      :key="customer"
      :style="backgroundColor"
      class="icon-wrapper"
      data-testid="icon-wrapper"
    >
      <img
        width="143"
        height="64"
        class="icon-wrapper__icon media_lazy"
        :data-src="fileName(customer)"
        :alt="customer"
        data-testid="customer-icon"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'UICustomersList',

  props: {
    customers: {
      type: Array,
      default: () => [],
    },

    light: {
      type: Boolean,
      default: false,
    },

    iconBackground: {
      type: String,
      default: 'transparent',
    },
  },

  computed: {
    backgroundColor() {
      if (this.iconBackground) return `background-color: ${this.iconBackground}`
      return null
    },
  },

  methods: {
    fileName(name) {
      if (this.light) return require(`@/assets/img/Projects/svg/${name}-black.svg`)
      return require(`@/assets/img/Projects/svg/${name}.svg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.customers {
  &__customers-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;

    @media only screen and (max-width: 1300px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media only screen and (max-width: 1160px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 14px;
    }

    @media only screen and (max-width: 834px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media only screen and (max-width: 640px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (max-width: 520px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 360px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.icon-wrapper {
  min-height: 111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__icon {
    width: 143px;
    height: 64px;
    display: block;
  }

  @media only screen and (max-width: 1024px) {
    min-height: 81px;

    &__icon {
      width: 75px;
      height: 33px;
    }
  }
}
</style>
