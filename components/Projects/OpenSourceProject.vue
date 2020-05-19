<template>
  <div class="open-source__project">
    <div class="open-source__content-wrap">
      <img
        class="open-source__logo"
        :src="require(`@/assets/img/Projects/svg/OpenSource/${openSource.imgName}.svg`)"
        :alt="openSource.imgName"
      />
      <span class="open-source__industry">{{ openSource.industry }}</span>
    </div>
    <p class="open-source__paragraph paragraph">
      {{ openSource.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'OpenSourceProject',
  props: {
    openSource: {
      imgName: {
        type: String,
        require: true
      },
      industry: {
        type: String,
        require: true
      },
      description: {
        type: String,
        require: true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.open-source {
  &__project {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: $bgcolor--white;
    height: 270px;
    width: 33%;
    box-sizing: border-box;
    padding: 43px 30px 64px 43px;
    border-right: 2px solid $border-color--grey-light;
    border-bottom: 2px solid $border-color--grey-light;
  }

  &__content-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
  }

  &__logo {
  }

  &__industry {
  }

  &__paragraph {
    padding-right: 61px;
  }
}
