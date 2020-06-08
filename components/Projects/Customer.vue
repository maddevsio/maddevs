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

.valued-customers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(166px, 1fr));
  align-items: center;
  margin: 80px 0 40px;
  grid-row-gap: 100px;
  grid-column-gap: 80px;

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
    bottom: -19%;
    text-align: center;
    transition: opacity 0.3s linear;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
}

@media only screen and (max-width: 1240px) {
  .valued-customers {
    &__logo {
      height: 70px;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .valued-customers {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__logo {
      height: 60px;
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
      width: 90%;
    }
  }
}

@media only screen and (max-width: 860px) {
  .valued-customers {
    grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
    grid-column-gap: 55px;

    &__industry {
      font-size: 10px;
    }
  }
}

@media only screen and (max-width: 680px) {
  .valued-customers {
    grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));
    grid-row-gap: 50px;
    grid-column-gap: 35px;
    margin-top: 47px;

    &__logo {
      width: 80%;
    }

    &__industry {
      font-size: 8px;
    }
  }
}

@media only screen and (max-width: 350px) {
  .valued-customers {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));

    &__logo {
      width: 75%;
    }
  }
}
</style>
