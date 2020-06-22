<template>
  <section id="meet-our-experts" class="meet-our_experts">
    <div class="container">
      <div class="meet-our_experts__main-title_wrap">
        <h2 class="meet-our_experts__main-title main-title">Meet our experts</h2>
      </div>
      <div class="meet-our_experts__experts-list">
        <div class="meet-our_experts__expert-item" v-for="(expert, i) in experts" :key="i">
          <img :src="require(`@/assets/img/Home/png/experts/${expert.image}.png`)" class="meet-our_experts__expert-img" :alt="expert.name">
          <div class="meet-our_experts__expert-bottom_content">
            <div class="meet-our_experts__expert-info">
              <div class="meet-our_experts__expert-name">{{ expert.name }}</div>
              <div class="meet-our_experts__expert-position">{{ expert.position }}</div>
            </div>
            <a :href="expert.linkedin" class="meet-our_experts__expert-linkedin_link" target="blank">
              <img src="../../assets/img/Home/svg/experts/linkedin.svg" class="meet-our_experts__expert-linkedin_icon" alt="Linkedin">
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

export default {
  name: 'MeetOurExperts',
  components: {
    MeetOurExpertsMobile
  },
  data() {
    return {
      experts: [
        {
          name: 'Marat Bediev',
          position: 'Senior DevOps Engineer',
          image: 'marat',
          linkedin: 'https://www.linkedin.com/in/marat-bediev-a973171b/'
        },
        {
          name: 'Tamara Mun',
          position: 'Delivery Manager',
          image: 'tamara',
          linkedin: 'https://www.linkedin.com/in/tamara-mun/'
        },
        {
          name: 'Andrew "Сhuck" Minkin',
          position: 'CTO, Co-Founder',
          image: 'chuck',
          linkedin: 'https://www.linkedin.com/in/andrew-minkin-700a2523/'
        },
        {
          name: 'Nakylai Taiirova',
          position: 'Senior Full-Stack Developer',
          image: 'nakylai',
          linkedin: 'https://www.linkedin.com/in/nakylai-taiirova-28bab859/'
        },
        {
          name: 'Daria Utesheva',
          position: 'Head of HR Department',
          image: 'daria',
          linkedin: 'https://www.linkedin.com/in/%D0%B4%D0%B0%D1%80%D1%8C%D1%8F-%D1%83%D1%82%D0%B5%D1%88%D0%B5%D0%B2%D0%B0-47804198/'
        },
        {
          name: 'Nuradil Alymkulov',
          position: 'Senior Full-Stack Developer',
          image: 'nuradil',
          linkedin: 'https://www.linkedin.com/in/nuradil-alymkulov/'
        },
        {
          name: 'Alice Jang',
          position: 'Project Manager',
          image: 'alice',
          linkedin: 'https://www.linkedin.com/in/alice-jang-b235b240/'
        },
        {
          name: 'Arthur Elizavetenkov',
          position: 'Project Manager',
          image: 'arthur',
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
    padding-bottom: 186px;
    background-color: $bgcolor--white;

    &__main-title {
      padding-bottom: 38px;
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
        box-shadow: 0px 0px 0px 3px $border-color--red;

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
      bottom: 18px;
    }

    &__expert-info,
    /deep/.mobile-expert-info {
      padding-left: 18px;
    }

    &__expert-linkedin_link,
    /deep/.mobile-expert-linkedin_link {
      padding-right: 18px;
    }

    &__expert-linkedin_icon,
    /deep/.mobile-expert-linkedin_icon {
      margin-bottom: -4px;
    }

    &__expert-name,
    &__expert-position,
    /deep/.mobile-expert-name,
    /deep/.mobile-expert-position {
      width: max-content;
      padding: 3px 6px;
      background-color: $bgcolor--grey-light;
    }

    &__expert-name,
    /deep/.mobile-expert-name {
      font-size: 22px;
      font-family: 'Hoves-Bold';
      letter-spacing: -1px;
    }

    &__expert-position,
    /deep/.mobile-expert-position {
      font-size: 18px;
      font-family: 'Hoves-Regular';
      letter-spacing: -0.3px;
    }

    &__expert-img {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 1340px) {
    .meet-our_experts {
      &__expert-name {
        font-size: 18px;
        letter-spacing: -0.03em;
      }

      &__expert-position {
        font-size: 14px;
      }
    }
  }

  @media only screen and (max-width: 1220px) {
    .meet-our_experts {
      &__expert-name {
        font-size: 16px;
      }

      &__expert-position {
        font-size: 12px;
      }
    }
  }

  @media only screen and (max-width: 1180px) {
    .meet-our_experts {
      &__expert-name {
        font-size: 13px;
      }

      &__expert-position {
        font-size: 11px;
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .meet-our_experts {
      &__expert-name {
        font-size: 12px;
      }

      &__expert-position {
        font-size: 10px;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    .meet-our_experts {
      &__experts-list {
        display: none;
      }
    }
  }
</style>
