<template>
  <div class="case_business-models-grid">
    <Card class="background-color-silver case_business-models-grid__personal-card">
      <div class="case_business-models-grid__personal-image">
        <Picture
          folder="nambafood"
          file="personal"
          extension="png"
          alt="Namba Food: Food and Grocery Delivery Service Couriers."
          :width="399"
          :height="256"
        />
      </div>
      <div class="case_business-models-grid__text-wrapper">
        <h3 class="m-8_bottom case_title_h4">
          Personal courier
        </h3>
        <TextParagraph>
          The personal courier service works 24/7, enabling quick delivery for both organizations and individuals.
          Regardless of the product’s nature, personal couriers deliver it on time and, if needed, anonymously.
        </TextParagraph>
      </div>
    </Card>
    <div class="case_business-models-grid__right-column">
      <Card class="background-color-turquoise">
        <h3
          :style="{ color: '#ffffff' }"
          class="m-8_bottom case_title_h4"
        >
          Outsource partners
        </h3>
        <TextParagraph color="#ffffff">
          Businesses running e-commerce websites, but wanting to outsource delivery services, can benefit from Namba
          Food’s checkout page, which allows businesses to quickly integrate delivery without incurring <br>
          operational costs.
        </TextParagraph>
      </Card>
      <Card class="background-color-berry">
        <h3
          :style="{ color: '#ffffff' }"
          class="m-8_bottom case_title_h4"
        >
          Delivery of food and goods
        </h3>
        <TextParagraph color="#ffffff">
          Namba Food's delivery service positions itself as an intermediary body between goods and food service
          providers and customers.
        </TextParagraph>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Cases/shared/Card'
import TextParagraph from '@/components/Cases/shared/TextParagraph'
import Picture from '@/components/Cases/shared/Picture'

export default {
  name: 'CardsBusinessModelsGrid',
  components: {
    Card,
    TextParagraph,
    Picture,
  },
}
</script>

<style scoped lang="scss">
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
    min-width: 399px;
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
      margin: -20px 0 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
