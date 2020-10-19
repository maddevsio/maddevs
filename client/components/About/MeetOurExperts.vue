<template>
  <section id="meet-our-experts" class="meet-our_experts">
    <div class="container">
      <h2 class="meet-our_experts__main-title">Meet our experts</h2>
      <div class="meet-our_experts__experts-list row">
        <div class="meet-our_experts__expert-item col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6" v-for="(expert, i) in experts" :key="i">
          <image-component :fileName="expert.image" :fileNameRetina="`${expert.image}@2x`"/>
          <div class="meet-our_experts__expert-bottom_content">
            <div class="meet-our_experts__expert-info">
              <div class="meet-our_experts__expert-name">{{ expert.name }}</div>
              <div class="meet-our_experts__expert-position">{{ expert.position }}</div>
            </div>
          </div>
          <a :href="expert.linkedin" class="meet-our_experts__expert-linkedin-link" target="blank"></a>
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
    padding-bottom: 100px;
    background-color: $bgcolor--white-darken;

    &__main-title {
      margin-bottom: 42px;
      font-size: 40px;
      font-family: 'Poppins-Bold';
      line-height: 48px;
      letter-spacing: -1px;
      text-align: center;
      color: $text-color--black-lighter;
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
      margin-left: 16px;
    }

    &__expert-linkedin-link {
      width: 24px;
      height: 24px;
      display: block;
      position: absolute;
      top: 16px;
      right: 28px;
      background-image: url('data:image/svg+xml;charset=UTF-8,\ <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.262 0H1.809C.832 0 0 .774 0 1.727v20.545C0 23.226.546 24 1.523 24h20.453c.98 0 2.024-.774 2.024-1.728V1.727A1.72 1.72 0 0022.262 0z" fill="rgb(255, 255, 255)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.262 0H1.809C.832 0 0 .774 0 1.727v20.545C0 23.226.546 24 1.523 24h20.453c.98 0 2.024-.774 2.024-1.728V1.727A1.72 1.72 0 0022.262 0zM9.142 9.143h3.232v1.647h.035C12.902 9.902 14.357 9 16.155 9c3.453 0 4.416 1.833 4.416 5.229v6.342h-3.428v-5.717c0-1.52-.607-2.854-2.026-2.854-1.724 0-2.546 1.167-2.546 3.082v5.49H9.143V9.141zM3.43 20.57h3.428V9.143H3.43V20.57zM7.286 5.143A2.142 2.142 0 113 5.144a2.142 2.142 0 014.285-.001z" fill="rgb(0, 119, 181)"/><path d="M21.5.5h-19a2 2 0 00-2 2v19a2 2 0 002 2h19a2 2 0 002-2v-19a2 2 0 00-2-2z" fill="rgb(255, 255, 255)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.005C0 .898.897 0 2.005 0h19.99C23.102 0 24 .897 24 2.005v19.99A2.004 2.004 0 0121.995 24H2.005A2.005 2.005 0 010 21.995V2.005zM9.5 9.15h3.25v1.633C13.219 9.844 14.419 9 16.223 9c3.457 0 4.277 1.869 4.277 5.299v6.351H17v-5.57c0-1.954-.468-3.055-1.66-3.055-1.652 0-2.34 1.188-2.34 3.054v5.571H9.5V9.15zm-6 11.35H7V9H3.5v11.5zm4-15.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" fill="rgb(0, 119, 181)"/></svg>');
      background-repeat: no-repeat;
      background-position: center;
    }

    &__expert-name,
    &__expert-position {
      width: max-content;
      padding: 4px 8px;
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

    @media only screen and (max-width: 1180px) {
      &__expert-name,
      &__expert-position {
        padding: 3px 4px;
      }

      &__expert-name {
        font-size: 13px;
      }

      &__expert-position {
        font-size: 10px;
      }

      &__expert-info {
        margin-left: 12px;
      }

      &__expert-linkedin-link {
        width: 16px;
        height: 16px;
      }
    }

    @media only screen and (max-width: 1024px) {
      &__expert-name,
      &__expert-position {
        padding: 2px 3px;
      }

      &__expert-name {
        font-size: 10px;
      }

      &__expert-position {
        font-size: 9px;
      }

      &__expert-info {
        margin-left: 8px;
      }

      &__expert-linkedin-link {
        top: 8px;
        right: 20px;
      }
    }

    @media screen and (max-width: 460px) {
      &__expert-name {
        font-size: 9px;
      }

      &__expert-position {
        font-size: 8px;
      }
    }
  }
</style>
