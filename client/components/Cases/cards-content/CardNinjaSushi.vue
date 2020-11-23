<template>
  <div class="case_card-content">
    <div class="case_card-content_left-column">
      <h4 class="title_h4 m-8_bottom" :style="{color: '#f5f7f9'}">Mini white label</h4>
      <TextParagraph class="case_card-content_paragraph" color="#f5f7f9">
        After business owners submit pictures and prices, the
        Namba Food team creates a customized and branded
        e-commerce website. Updates, support, and
        maintenance are done by Namba Food, too.
      </TextParagraph>
      <h4 class="title_h4 m-8_bottom" :style="{color: '#f5f7f9'}">Full white label</h4>
      <TextParagraph color="#f5f7f9">
        Business partners can use Namba Food’s software
        and business model, adjusting those to their needs,
        scale, and region. Namba Food is responsible for its
        maintenance and helps with management and marketing.
      </TextParagraph>
    </div>
    <div class="case_card-content_right-column">
      <Picture
        pictureFolder="nambafood"
        fileName="ninja-sushi"
        fileNameRetina="ninja-sushi@2x"
        fileExtension="png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import TextParagraph from '@/components/Cases/TextParagraph';
import Picture from '@/components/Cases/Picture';

export default {
  name: 'CardNinjaSushi',
  components: {
    TextParagraph,
    Picture
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/cases/_mixins';

  .case_card-content {
    @include grid(repeat(2, 1fr), auto, 0, 0);

    &_paragraph {
      margin-bottom: 41px;
    }
    
    &_right-column{
      max-width: 296px;
      margin-left: auto;
      position: relative;
      right: -32px;
      bottom: -39px;
    }
  }
</style>
