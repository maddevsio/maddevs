<template>
  <div class="case_business-models-grid">
    <Card class="background-color-silver case_business-models-grid__personal-card">
      <div class="case_business-models-grid__personal-image">
        <Picture
          pictureFolder="nambafood"
          fileName="personal"
          fileNameRetina="personal@2x"
          fileExtension="png"
          alt=""
        />
      </div>
      <div class="case_business-models-grid__text-wrapper">
        <h4 class="m-8_bottom case_title_h4">Personal courier</h4>
        <TextParagraph>
          The personal courier service works 24/7,
          enabling quick delivery for both organizations and individuals. Regardless of
          products’ nature , personal couriers will
          deliver it on time and, if needed, anonymously.
        </TextParagraph>
      </div>
    </Card>
    <div class="case_business-models-grid__right-column">
      <Card class="background-color-turquoise">
        <h4 class="m-8_bottom case_title_h4" :style="{color: '#ffffff'}">Outsource partners</h4>
        <TextParagraph color="#ffffff">
          Business running e-commerce websites,
          but wanting to outsource delivery service
          can benefit from Namba Food’s checkout
          page. It allows businesses to quickly
          integrate delivery without occurring <br>
          operational costs.
        </TextParagraph>
      </Card>
      <Card class="background-color-berry">
        <h4 class="m-8_bottom case_title_h4" :style="{color: '#ffffff'}">Delivery of food and goods</h4>
        <TextParagraph color="#ffffff">
          Namba Food's delivery service positions
          itself as an intermediary body between
          good & food service providers and customers.
        </TextParagraph>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Cases/Card';
import TextParagraph from '@/components/Cases/TextParagraph';
import Picture from '@/components/Cases/Picture';
export default {
  name: 'CardsBusinessModelsGrid',
  components: {
    Card,
    TextParagraph,
    Picture
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .case_business-models-grid {
    margin: 25px 0;
    @include grid(repeat(2, 1fr), auto, 25px, 0);

    &__right-column {
      @include grid(repeat(1, 1fr), auto, 0, 25px);
    }

    &__personal-card {
      display: flex;
      flex-direction: column;
    }

    &__personal-image {
      min-width: 397px;
      height: 269px;
      margin: -32px 0 0;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    &__text-wrapper {
      margin-top: 40px;
    }

    @media screen and (max-width: 840px) {
      margin: 20px 0;
      @include grid(repeat(1, 1fr), auto, 0, 20px);

      &__right-column {
        grid-row-start: 1;
        grid-row-gap: 20px;
      }

      &__personal-image {
        height: auto;
        margin: -32px -35px 0;
        left: 0;
        transform: none;
      }

      &__text-wrapper {
        margin-top: 18px;
      }
    }

    @media screen and (max-width: 768px) {
      &__personal-image {
        margin: -20px -23px 0;
      }
    }

    @media screen and (max-width: 480px) {
      &__personal-image {
        height: 282px;
        margin: -20px 0 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
