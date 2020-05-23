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
            <input
              class="careers__form-position-input form-text"
              type="text"
              placeholder="desired position."
            />
          </h4>
          <h4 class="careers__form-description form-text">
            You can also consider me for your other
          </h4>
          <ul class="careers__position-list">
            <li class="careers__position-item">
              <input
                class="careers__position-input"
                name="position"
                id="senior"
                type="radio"
              />
              <label class="careers__position-label form-text" for="senior"
                >Senior,</label
              >
              <div class="careers__position-check">
                <div class="careers__position-check-inside"></div>
              </div>
            </li>
            <li class="careers__position-item">
              <input
                class="careers__position-input"
                name="position"
                id="middle"
                type="radio"
              />
              <label class="careers__position-label form-text" for="middle"
                >Middle,</label
              >
              <div class="careers__position-check">
                <div class="careers__position-check-inside"></div>
              </div>
            </li>
            <li class="careers__position-item">
              <input
                class="careers__position-input"
                name="position"
                id="junior"
                type="radio"
              />
              <label class="careers__position-label form-text" for="junior"
                >Junior,</label
              >
              <div class="careers__position-check">
                <div class="careers__position-check-inside"></div>
              </div>
            </li>
            <li class="careers__position-item">
              <input
                class="careers__position-input"
                name="position"
                id="intern"
                type="radio"
              />
              <label class="careers__position-label form-text" for="intern"
                >Intern</label
              >
              <div class="careers__position-check">
                <div class="careers__position-check-inside"></div>
              </div>
            </li>
          </ul>
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
  &__form-email-input,
  &__form-position-input {
    background-color: transparent;
    border: 0px solid;
    height: 65px;
    width: 310px;
    color: $text-color--grey;
  }

  &__position-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 15px;
    padding: 0;
  }

  &__position-item {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 18px;
  }

  &__position-check {
    box-sizing: border-box;
    position: absolute;
    border: 2px solid $text-color--grey;
    border-radius: 100%;
    height: 26px;
    width: 26px;
    z-index: 5;
    transition: border 0.15s linear;
    -webkit-transition: border 0.15s linear;
  }

  &__position-input:checked ~ &__position-check {
    border-color: $text-color--red;
    border: 0;
  }

  &__position-input:checked ~ &__position-label {
    color: $text-color--red;
  }

  &__position-input:hover &__position-check {
    border: 2px solid $text-color--red;
  }

  &__position-check::before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 26px;
    width: 26px;
    margin: auto;
    transition: background 0.15s linear;
    -webkit-transition: background 0.15s linear;
  }

  &__position-input {
    position: absolute;
    visibility: hidden;
  }

  &__position-label {
    position: relative;
    color: $text-color--grey;
    margin: 0 0 0 35px;
    z-index: 9;
    transition: all 0.15s linear;
  }

  &__position-input:checked ~ &__position-check::before {
    background: $text-color--red;
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
