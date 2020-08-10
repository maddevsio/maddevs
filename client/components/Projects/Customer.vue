<template>
  <div class="valued-customers__wrapper">
    <img
      class="valued-customers__logo"
      :src="require(`@/assets/img/Projects/svg/${customer.imgName}.svg`)"
      :alt="customer.imgName"
    />
    <span class="valued-customers__industry">{{ customer.industry }}</span>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  props: {
    customer: {
      imgName: {
        type: String,
        require: true
      },
      industry: {
        type: String,
        require: true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '../../assets/styles/get-vw';

.valued-customers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(get-vw(166px), 1fr));
  align-items: center;
  margin: get-vw(80px) 0 get-vw(40px);
  grid-row-gap: get-vw(100px);
  grid-column-gap: get-vw(80px);

  &__wrapper {
    justify-self: center;
    align-self: center;
    position: relative;
  }

  &__wrapper:hover .valued-customers__industry {
    opacity: 1;
    height: auto;
  }

  &__industry {
    font-family: 'Hoves-Regular';
    font-size: 12px;
    color: #ccc;
    align-items: center;
    justify-self: center;
    position: absolute;
    top: get-vw(62px);
    text-align: center;
    transition: opacity 0.3s linear;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }

  &__logo {
    height: get-vw(60px);
  }
}

@media only screen and (min-width: 1024px) {
  .valued-customers {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .valued-customers {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__logo {
      height: get-vw(40px, 1024);
    }
  }
}

@media only screen and (max-width: 745px) {
  .valued-customers {
    &__logo {
      height: get-vw(40px, 745);
    }
  }
}

@media only screen and (max-width: 680px) {
  .valued-customers {
    grid-template-columns: repeat(auto-fit, minmax(get-vw(105px, 680), 1fr));
    grid-row-gap: get-vw(50px, 680);
    grid-column-gap: get-vw(35px, 680);
    margin-top: get-vw(47px, 680);

    &__industry {
      top: get-vw(82px, 680);
    }

    &__logo {
      width: 80%;
      height: 17vw;
    }

    &__industry {
      font-size: 8px;
    }
  }
}
</style>
