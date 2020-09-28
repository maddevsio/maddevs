<template>
  <section id="meet-our-experts" class="meet-our_experts">
    <div class="container">
      <div class="meet-our_experts__main-title_wrap">
        <h2 class="meet-our_experts__main-title title-md">Meet our experts</h2>
      </div>
      <div class="meet-our_experts__experts-list row">
        <div class="meet-our_experts__expert-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6" v-for="(expert, i) in experts" :key="i">
          <image-component :fileName="expert.image" :fileNameRetina="`${expert.image}@2x`"/>
          <div class="meet-our_experts__expert-bottom_content">
            <div class="meet-our_experts__expert-info">
              <div class="meet-our_experts__expert-name">{{ expert.name }}</div>
              <div class="meet-our_experts__expert-position">{{ expert.position }}</div>
            </div>
          </div>
          <a :href="expert.linkedin" class="meet-our_experts__expert-linkedin_link" target="blank">
            <img
              src="../../assets/img/Home/svg/experts/linkedin.svg"
              class="meet-our_experts__expert-linkedin_icon"
              loading="lazy"
              alt="Linkedin">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageComponent from '@/components/ui/image-component';

export default {
  name: 'MeetOurExperts',
  components: {
    ImageComponent
  },
  data() {
    return {
      experts: [
        {
          name: 'Marat Bediev',
          position: 'Senior DevOps Engineer',
          image: 'Marat',
          linkedin: 'https://www.linkedin.com/in/marat-bediev-a973171b/'
        },
        {
          name: 'Tamara Mun',
          position: 'Delivery Manager',
          image: 'Tamara',
          linkedin: 'https://www.linkedin.com/in/tamara-mun/'
        },
        {
          name: 'Andrew "Chuck" Minkin',
          position: 'CTO, Co-Founder',
          image: 'Chuck',
          linkedin: 'https://www.linkedin.com/in/andrew-minkin-700a2523/'
        },
        {
          name: 'Nakylai Taiirova',
          position: 'Senior Full-Stack Developer',
          image: 'Nakylai',
          linkedin: 'https://www.linkedin.com/in/nakylai-taiirova-28bab859/'
        },
        {
          name: 'Daria Utesheva',
          position: 'Head of HR Department',
          image: 'Daria',
          linkedin: 'https://www.linkedin.com/in/daria-utesheva-47804198/'
        },
        {
          name: 'Nuradil Alymkulov',
          position: 'Senior Full-Stack Developer',
          image: 'Nuradil',
          linkedin: 'https://www.linkedin.com/in/nuradil-alymkulov/'
        },
        {
          name: 'Alice Jang',
          position: 'Project Manager',
          image: 'Alice',
          linkedin: 'https://www.linkedin.com/in/alice-jang-b235b240/'
        },
        {
          name: 'Arthur Elizavetenkov',
          position: 'Project Manager',
          image: 'Arthur',
          linkedin: 'https://www.linkedin.com/in/earthurkg/'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/vars';

  .meet-our_experts {
    padding-bottom: 80px;
    background-color: $bgcolor--white-darken;

    &__main-title {
      margin-bottom: 10px;
      color: $text-color--black-lighter;
      text-align: center;
    }

    &__expert-item {
      position: relative;
    }

    &__expert-bottom_content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      position: absolute;
      bottom: 18px;
    }

    &__expert-info {
      margin-left: 18px;
    }

    &__expert-linkedin_link {
      position: absolute;
      right: 20px;
      bottom: 15px;
    }

    &__expert-name,
    &__expert-position {
      width: max-content;
      padding: 3px 8px;
      background-color: $bgcolor--white-darken;
      letter-spacing: -0.02em;
    }

    &__expert-name {
      font-size: 17px;
      font-family: 'Poppins-Bold';
    }

    &__expert-position {
      font-size: 14px;
      font-family: 'Poppins-Regular';
    }

    &__expert-linkedin_icon {
      width: 24px;
      height: 24px;
    }
  }

  @media only screen and (max-width: 1290px) {
    .meet-our_experts {
      &__expert-linkedin_link {
        top: 20px;
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .meet-our_experts {
      &__expert-name,
      &__expert-position {
        padding: 3px 4px;
      }

      &__expert-name {
        font-size: 13px;
        font-weight: 600;
        font-family: 'Poppins-Regular';
      }

      &__expert-position {
        font-size: 10px;
      }

      &__expert-info {
        margin-left: 12px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .meet-our_experts {
      padding-bottom: 56px;

      &__expert-bottom_content {
        bottom: 10px;
      }

      &__expert-name,
      &__expert-position {
        background-color: $bgcolor--white;
      }

      &__expert-linkedin_icon {
        width: 15px;
        height: 15px;
      }

      &__expert-linkedin_link {
        top: 11px;
      }
      
      &__expert-name,
      &__expert-position {
        font-size: 9px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .meet-our_experts {
      padding-bottom: 45px;
    }
  }

  @media only screen and (max-width: 360px) {
    .meet-our_experts {
      &__expert-name,
      &__expert-position {
        font-size: 8px;
      }
    }
  }

</style>
