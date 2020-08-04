<template>
  <section id="meet-our-experts" class="meet-our_experts">
    <div class="container">
      <div class="meet-our_experts__main-title_wrap">
        <h2 class="meet-our_experts__main-title main-title">Meet our experts</h2>
      </div>
      <div class="meet-our_experts__experts-list">
        <div class="meet-our_experts__expert-item" v-for="(expert, i) in experts" :key="i">
          <image-component :fileName="expert.image" :fileNameRetina="`${expert.image}@2x`"/>
          <div class="meet-our_experts__expert-bottom_content">
            <div class="meet-our_experts__expert-info">
              <div class="meet-our_experts__expert-name">{{ expert.name }}</div>
              <div class="meet-our_experts__expert-position">{{ expert.position }}</div>
            </div>
            <a :href="expert.linkedin" class="meet-our_experts__expert-linkedin_link" target="blank">
              <img src="@/assets/img/Home/svg/experts/linkedin.svg" class="meet-our_experts__expert-linkedin_icon" alt="Linkedin">
            </a>
          </div>
        </div>
      </div>
    </div>
    <MeetOurExpertsMobile :experts="experts" />
  </section>
</template>

<script>
import MeetOurExpertsMobile from '@/components/About/MeetOurExpertsMobile';
import ImageComponent from '@/components/ui/image-component';

export default {
  name: 'MeetOurExperts',
  components: {
    MeetOurExpertsMobile,
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
          name: 'Andrew "Сhuck" Minkin',
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
  @import '../../assets/styles/get-vw';

  .meet-our_experts {
    padding-bottom: get-vw(186px);
    background-color: $bgcolor--white;

    &__main-title {
      padding-bottom: get-vw(38px);
    }

    &__experts-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    &__expert-item {
      width: 100%;
      height: 100%;
      position: relative;

      &:hover {
        z-index: 2;
        box-shadow: 0 0 0 3px $border-color--red;

        .meet-our_experts__expert-name,
        .meet-our_experts__expert-position {
          color: $text-color--white;
          background-color: $bgcolor--red;
        }
      }
    }

    /deep/.mobile-expert-item {
      &:hover {
        box-shadow: none;
      }
    }

    &__expert-bottom_content,
    /deep/.mobile-expert-bottom_content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      position: absolute;
      bottom: get-vw(18px);
    }

    &__expert-info,
    /deep/.mobile-expert-info {
      padding-left: get-vw(18px);
    }

    &__expert-linkedin_link,
    /deep/.mobile-expert-linkedin_link {
      padding-right: get-vw(18px);
    }

    &__expert-linkedin_icon,
    /deep/.mobile-expert-linkedin_icon {
      margin-bottom: get-vw(-4px);
      width: get-vw(21px);
      height: get-vw(21px);
    }

    &__expert-name,
    &__expert-position,
    /deep/.mobile-expert-name,
    /deep/.mobile-expert-position {
      width: max-content;
      padding: get-vw(3px) get-vw(6px);
      background-color: $bgcolor--grey-light;
    }

    &__expert-name,
    /deep/.mobile-expert-name {
      font-size: get-vw(22px);
      font-family: 'Hoves-Bold';
      letter-spacing: get-vw(-1px);
    }

    &__expert-position,
    /deep/.mobile-expert-position {
      font-size: get-vw(18px);
      font-family: 'Hoves-Regular';
      letter-spacing: get-vw(-0.3px);
    }
  }

  @media only screen and (max-width: 1000px) {
    .meet-our_experts {
      &__experts-list {
        display: none;
      }

      &__expert-linkedin_icon,
      /deep/.mobile-expert-linkedin_icon {
        margin-bottom: get-vw(-4px);
        width: auto;
        height: auto;
      }

      &__expert-name,
      /deep/.mobile-expert-name {
        font-size: 22px;
        letter-spacing: -1px;
      }

      &__expert-position,
      /deep/.mobile-expert-position {
        font-size: 18px;
        letter-spacing: -0.3px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .meet-our_experts {
      padding-bottom: get-vw(120px, 768);
    }
  }

</style>
