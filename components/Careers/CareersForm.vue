<template>
  <section id="careers" class="careers">
    <div class="container">
      <div class="careers__wrapper">
        <img
          class="careers__background-logo"
          src="@/assets/img/Careers/svg/careers_logo.svg"
          alt="Careers Background Image"
        />
        <form class="careers__form">
          <label class="careers__form-name-label form-text"
            >Hello, my name is</label
          >
          <input
            class="careers__form-name-input form-text"
            type="text"
            placeholder="|John Smith"
          />
          <h4 class="careers__form-description form-text">
            I want to work for you as a
            <span class="careers__form-description--grey"
              >desired position.</span
            >
          </h4>
          <h4 class="careers__form-description form-text">
            You can also consider me for your other
          </h4>
          <h4 class="careers__form-description form-text email-title">
            Please reply to
            <input
              class="careers__form-email-input form-text"
              type="text"
              placeholder="your@mail.com"
            />
          </h4>
          <h4 class="careers__form-description form-text">
            To get more information on my skills, please
          </h4>
          <ul class="careers__form-list form-text">
            <li class="careers__form-list-item">
              – check out my
              <a href="#" class="careers__linkedin-link">LinkedIn profile</a> OR
            </li>
            <li class="careers__form-list-item">
              – <a href="#" class="careers__cv">find attached my CV.</a>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CareersForm',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.careers {
  .container {
    position: relative;
  }

  &__wrapper {
    border-radius: $form-border-radius;
    background: $bgcolor--grey-light;
    padding: 63px 102px 102px 92px;
  }

  &__background-logo {
    position: absolute;
    bottom: 0;
    right: 0;
    height: auto;
  }

  &__form-name-label {
  }

  .email-title {
    margin: 80px 0;
  }

  &__form-name-input,
  &__form-email-input {
    background-color: transparent;
    border: 0px solid;
    height: 65px;
    width: 310px;
    color: $text-color--grey;
  }

  &__form-description {
    font-family: 'Hoves-Regular';
    color: $text-color--black;
    font-weight: 500;
  }

  &__linkedin-link,
  &__cv {
    color: $text-color--grey;
  }

  &__linkedin-link {
    text-decoration: none;
  }

  &__cv {
  }
}

@media only screen and (max-width: 1024px) {
  .careers {
    &__background-logo {
      height: 250px;
      bottom: 10px;
    }
  }
}

@media only screen and (max-width: 870px) {
  .careers {
    &__background-logo {
      height: 220px;
      bottom: 20px;
      right: -70px;
    }
  }
}

@media only screen and (max-width: 670px) {
  .careers {
    &__background-logo {
      height: 180px;
      bottom: 28px;
    }
  }
}

@media only screen and (max-width: 455px) {
  .careers {
    &__background-logo {
      height: 108px;
      bottom: 42px;
    }
  }
}
</style>
