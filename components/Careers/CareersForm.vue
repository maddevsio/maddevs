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
              <div class="careers__position-check"></div>
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
              <div class="careers__position-check"></div>
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
              <div class="careers__position-check"></div>
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
              <div class="careers__position-check"></div>
              <span
                class="careers__form-description last-additional-description form-text"
              >
                roles.
              </span>
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
              <input
                class="careers__form-linkedin-input form-text"
                type="text"
                placeholder="LinkedIn profile"
              />
              OR
            </li>
            <li class="careers__form-list-item file-attach">
              <input
                class="careers__file-input"
                type="file"
                @change="onFileChanged"
                name="myFile"
                id="myFile"
              />
              <span class="none-decorated-dash" v-if="selectedFile">–</span>
              <label
                class="careers__cv"
                :class="{
                  'careers__cv--selected': selectedFile,
                  'careers__cv--attachable': !selectedFile
                }"
                for="myFile"
              >
                <img
                  class="careers__cv-icon"
                  src="@/assets/img/Careers/svg/attach_file.svg"
                  alt="attach file icon"
                  v-if="!selectedFile"
                />
                {{ selectedFile ? selectedFileName : 'Attach your CV' }}</label
              >
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
    return { selectedFile: null };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0] && event.target.files[0].name;
    }
  },
  computed: {
    selectedFileName() {
      let ending = '...';
      let fileName = this.selectedFile;
      if (fileName) {
        if (fileName.length > 25) {
          return fileName.substring(0, 25) + ending;
        }
        return fileName;
      }
      return '';
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

  .none-decorated-dash {
    margin-right: 5px;
  }

  .file-attach {
    display: flex;
  }

  &__file-input {
    display: none;
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
    cursor: pointer;
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
    padding: 0 0 0 29px;
    z-index: 9;
    transition: all 0.15s linear;
    cursor: pointer;
  }

  &__position-input:checked ~ &__position-check::before {
    background: $text-color--red;
  }

  &__form-description {
    font-family: 'Hoves-Regular';
    color: $text-color--black;
    font-weight: 500;
  }

  .last-additional-description {
    margin-left: 11px;
  }

  &__linkedin-link,
  &__cv {
    color: $text-color--black;
    font-size: 20px;
    cursor: pointer;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.02em;
    text-decoration-line: underline;
    display: flex;
    align-items: center;

    &--selected {
      color: $text-color--grey;
      font-size: inherit;
    }

    &-icon {
      margin-right: 25px;
    }
  }

  &__linkedin-link {
    text-decoration: none;
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

@media only screen and (max-width: 936px) {
  .careers {
    &__position-item {
      width: 100%;
      margin-bottom: 15px;
    }
  }
}

@media only screen and (max-width: 870px) {
  .careers {
    &__background-logo {
      height: 220px;
      top: -179px;
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

    &__position-check {
      height: 24px;
      width: 24px;
    }

    &__position-check::before {
      height: 24px;
      width: 24px;
    }

    &__position-item {
      margin-bottom: 10px;
    }

    &__cv {
      &-icon {
        height: 38px;
        margin-right: 20px;
      }
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

    &__cv {
      &--attachable {
        font-size: 17px;
      }

      &-icon {
        height: 28px;
        margin-right: 10px;
      }
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
      padding: 45px 11px 44px 17px;
    }

    .email-title {
      margin: 20px 0 40px;
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

    &__position-check {
      height: 20px;
      width: 20px;
    }

    &__position-check::before {
      height: 20px;
      width: 20px;
    }

    &__position-label {
      padding: 0 0 0 26px;
    }

    &__position-item {
      margin-bottom: 5px;
    }
  }
}

@media only screen and (max-width: 455px) {
  .careers {
    &__background-logo {
      height: 108px;
      top: -87px;
    }

    &__position-label {
      padding: 0 0 0 25px;
    }
  }
}
</style>
