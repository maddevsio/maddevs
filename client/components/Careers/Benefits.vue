<template>
  <div class="benefits container">
    <div class="benefits_benefit">
      <div class="benefits_description">
        <h2 class="benefits_title">
          Sustainable <br> engineering culture
        </h2>
        <p class="benefits_paragraph">
          At Mad Devs, we built an environment where teams can move sustainably fast by implementing modern technologies and best practices.
        </p>
      </div>
      <ul class="benefits_list">
        <li class="benefits_list-item">
          Code reviews and testing
        </li>
        <li class="benefits_list-item">
          Automated CI/CD
        </li>
        <li class="benefits_list-item">
          Healthy oncall
        </li>
        <li class="benefits_list-item">
          Internal boilerplates and open-source
        </li>
        <li class="benefits_list-item">
          Regularly updated and reliable documentation
        </li>
      </ul>
    </div>
    <div class="benefits_benefit">
      <div class="benefits_description">
        <h2 class="benefits_title">
          Agile <br> development
        </h2>
        <p class="benefits_paragraph">
          High talent density in our 20+ teams creates a culture where collaboratively innovative and autonomous people thrive.
        </p>
      </div>
      <ul class="benefits_list">
        <li class="benefits_list-item">
          Clearly explained development goals
        </li>
        <li class="benefits_list-item">
          Engineers contribute to backlog and roadmap
        </li>
        <li class="benefits_list-item">
          Direct, cult-the bullshit, communication in problem-solving
        </li>
        <li class="benefits_list-item">
          Celebrating initiatives culture
        </li>
        <li class="benefits_list-item">
          Cross-functional collaboration
        </li>
      </ul>
    </div>
    <div class="benefits_benefit">
      <div class="benefits_description">
        <h2 class="benefits_title">
          Competitive and <br> reliable compensation
        </h2>
        <p class="benefits_paragraph">
          Everybody at Mad Devs, from C-suite to interns, gets paid competitive compensation in USD. Please note that due to legal regulations, the majority of employees receive salaries in the local currency with respect to the exchange rate.
        </p>
      </div>
      <ul class="benefits_list">
        <li class="benefits_list-item">
          Stable salary and pay days
        </li>
        <li class="benefits_list-item">
          Competitive compensation
        </li>
        <li class="benefits_list-item">
          Formal employment
        </li>
        <li class="benefits_list-item">
          Flexible payment terms
        </li>
        <li class="benefits_list-item">
          Salary, benefits and bonuses paid in USD
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsCountries',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.benefits {
  &_benefit {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: end;
    padding: 85px 0;
    border-bottom: 1px solid $border-color--grey-careers-page;
    opacity: 0.2;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      opacity: 1;
    }

    &:first-child {
      padding-top: 0;
    }
  }

  &_description {
    max-width: 686px;
  }

  &_title,
  &_paragraph,
  &_list-item {
    color: $text-color--white;
  }

  &_paragraph,
  &_list-item {
    letter-spacing: -0.013em;
  }

  &_title {
    margin-bottom: 21px;
    @include font('Inter', 60px, 800);
    letter-spacing: -0.04em;
    line-height: 65px;
  }

  &_paragraph {
    @include font('Inter', 20px, 400);
    line-height: 29px;
  }

  &_list {
    display: flex;
    flex-direction: column;
  }

  &_list-item  {
    position: relative;
    margin-bottom: 15px;
    padding-left: 32px;
    @include font('Inter', 17px, 400);
    line-height: 140%;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      content: '―';
      position: absolute;
      left: 0;
      color: $text-color--red;
    }
  }
}
</style>
