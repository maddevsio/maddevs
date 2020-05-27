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
            <RadioButton
              v-for="(radio, i) in radioData"
              :key="i"
              :radio="radio"
              @change="changePositionValue"
            />
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
              <input
                class="careers__form-linkedin-input form-text"
                type="text"
                placeholder="LinkedIn profile"
              />
              OR
            </li>
            <li class="careers__form-list-item file-attach">
              <FileInput @input="onFileChanged" />
            </li>
          </ul>
          <Button @click="sendData">I want to work for Mad Devs!</Button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import FileInput from '@/components/Careers/FileInput';
import RadioButton from '@/components/Careers/RadioButton';
import Button from '@/components/Careers/Button';

export default {
  name: 'CareersForm',
  data() {
    return {
      selectedFile: null,
      positionValue: 'senior',
      radioData: [
        { id: 'senior', name: 'position', labelText: 'Senior,' },
        { id: 'middle', name: 'position', labelText: 'Middle,' },
        { id: 'junior', name: 'position', labelText: 'Junior,' },
        { id: 'intern', name: 'position', labelText: 'Intern' }
      ]
    };
  },
  components: {
    FileInput,
    RadioButton,
    Button
  },
  methods: {
    onFileChanged(params) {
      this.selectedFile = params;
    },
    changePositionValue(newPositionValue) {
      this.positionValue = newPositionValue;
    },
    sendData() {
      //TODO: add ajax request
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';

.careers {
  .container {
    position: relative;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__wrapper {
    border-radius: $form-border-radius;
    background: $bgcolor--grey-light;
    padding: 63px 102px 102px 92px;
  }

  &__background-logo {
    position: absolute;
    top: -260px;
    right: 60px;
    height: auto;
  }

  .email-title {
    margin: 80px 0;
  }

  &__form-name-input,
  &__form-email-input,
  &__form-position-input,
  &__form-linkedin-input {
    background-color: transparent;
    border: 0px solid;
    height: 65px;
    width: 310px;
    color: $text-color--grey;
  }

  &__form-list {
    margin-bottom: 79px;
  }

  &__form-linkedin-input {
    width: 6.69em;
  }

  &__position-list {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 15px;
    padding: 0;
  }

  &__form-description {
    font-family: 'Hoves-Regular';
    color: $text-color--black;
    font-weight: 500;
  }

  &__linkedin-link {
    color: $text-color--black;
    font-size: 20px;
    cursor: pointer;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.02em;
    text-decoration-line: underline;
    display: flex;
    text-decoration: none;
    align-items: center;

    &--selected {
      color: $text-color--grey;
      font-size: inherit;
    }

    &-icon {
      margin-right: 25px;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .careers {
    &__background-logo {
      height: 250px;
      top: -204px;
    }
  }
}

@media only screen and (max-width: 870px) {
  .careers {
    &__background-logo {
      height: 220px;
      top: -179px;
    }

    &__form-list {
      margin-bottom: 59px;
    }

    &__wrapper {
      padding: 53px 92px 92px 82px;
    }

    .email-title {
      margin: 70px 0;
    }
  }
}

@media only screen and (max-width: 820px) {
  .careers {
    &__form-name-input,
    &__form-email-input,
    &__form-position-input,
    &__form-linkedin-input {
      height: 35px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .careers {
    &__background-logo {
      right: 54px;
    }
  }
}

@media only screen and (max-width: 670px) {
  .careers {
    &__background-logo {
      height: 180px;
      top: -146px;
    }

    &__wrapper {
      padding: 53px 72px 92px 62px;
    }

    .email-title {
      margin: 65px 0;
    }
  }
}

@media only screen and (max-width: 576px) {
  .careers {
    .container {
      padding: 0;
    }

    &__wrapper {
      border-radius: 0;
    }

    &__background-logo {
      right: 30px;
    }
  }
}

@media only screen and (max-width: 520px) {
  .careers {
    &__wrapper {
      padding: 45px 16px 44px;
    }

    .email-title {
      margin: 20px 0 40px;
    }

    &__form-list {
      margin-bottom: 44px;
    }

    &__form-name-input,
    &__form-email-input,
    &__form-position-input,
    &__form-linkedin-input {
      height: 34px;
      width: 260px;
    }

    &__form-linkedin-input {
      width: 6.69em;
    }
  }
}

@media only screen and (max-width: 455px) {
  .careers {
    &__background-logo {
      height: 108px;
      top: -87px;
    }
  }
}
</style>
