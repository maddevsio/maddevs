<template>
  <div class="hr-contact">
    <div class="hr-contact__image">
      <img
        :data-src="require(`@/assets/img/Careers/jpeg/HRContactCard/diana-hr.jpeg`)"
        class="img_lazy"
        alt="Diana"
      >
    </div>
    <div class="hr-contact__info">
      <p class="hr-contact__title">
        Hi, I'm Diana,
      </p>
      <p class="hr-contact__description">
        Applying for jobs should be easy.
        I am here to simplify the hiring process and set you up for success.
        Feel free to telegram me
        <a
          href="https://t.me/DianaHRDigital"
          target="_blank"
        >
          <img
            :data-src="require(`@/assets/img/Careers/svg/careersAuthor/telegram.svg`)"
            width="20"
            height="17"
            class="img_lazy"
          >
          <span>@DianaHRDigital</span>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareersAuthorCard',

}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.hr-contact {
  display: flex;
  color: $text-color--black-oil;
  &__image {
    margin-right: 20px;
    width: 101px;
    min-width: 101px;
    height: 101px;
    border-radius: 20px;
    background-color: $bgcolor--silver;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    @include font('Poppins', 33px, 600);
    line-height: 43px;
    letter-spacing: -0.04em;
  }
  &__description {
    margin-top: 10px;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: -0.013em;
    a {
      display: inline-block;
      color: $text-color--blue;
      text-decoration: none;
      letter-spacing: normal;
      img {
        transform: translateY(2.5px);
      }
    }
  }

  @media screen and (max-width: 576px) {
    &__image {
      width: 68px;
      min-width: 68px;
      height: 68px;
    }
    &__title {
      font-size: 23px;
      line-height: 30px;
    }
  }
}
</style>
