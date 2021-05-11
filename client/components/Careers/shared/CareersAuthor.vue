<template>
  <div class="careers-author">
    <div class="careers-author__image">
      <img
        src=""
        alt="alt text author"
      >
    </div>
    <div class="careers-author__info">
      <p class="careers-author__title">
        Hi, I'm Diana,
      </p>
      <p class="careers-author__description">
        Applying for jobs should be easy.
        I am here to simplify the hiring process and set you up for success.
        Feel free to telegram me
        <a
          href="https://web.telegram.org/#/im"
          target="_blank"
        >
          <img
            :src="require(`@/assets/img/Careers/svg/careersAuthor/telegram.svg`)"
          >
          <span>@DianaHRDigital</span>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareersAuthor',

}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/vars';

.careers-author {
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
    font-weight: 600;
    font-size: 33px;
    line-height: 130%;
    letter-spacing: -0.04em;
  }
  &__description {
    margin-top: 10px;
    font-size: 17px;
    line-height: 159%;
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
}
</style>
