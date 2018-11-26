<template>
  <section id="employer" class="employer">
      <div class="container">
          <h2 class="sec-title">We are not just employer</h2>
          <div class="employer_list">
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/managment.svg" alt="Managment">
                  <h4>Tech Top Management</h4>
                  <p>Top managers not only work on the company development, but as well perform as team leads and DevOps engineers</p>
              </div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/events.svg" alt="Events">
                  <h4>Social events and meetups</h4>
                  <p>We have regular team buildings and conduct weekly meetups called Mad Talks to share the knowledge to each other</p>
              </div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/office.svg" alt="Office">
                  <h4>Modern office in downtown</h4>
                  <p>Our office is located in “A” class business center that joined a lot of cool and forward-looking people</p>
              </div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/lunches.svg" alt="Lunches">
                  <h4>Free lunches</h4>
                  <p>We provide free lunches from the NambaFood cafes. Besides, we always have tea, coffee, cookies</p>
              </div>
              <!-- fake -->
              <div class="employer_list-item__fake"></div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/frendly.svg" alt="Frendly">
                  <h4>Friendly environment</h4>
                  <p>We adhere to the special culture of mutual respect and support. We care about each other and are ready to help</p>
              </div>
              <div class="employer_list-item">
                  <img src="../../assets/img/Jobs/svg/Employer/girl.svg" alt="Girl">
                  <h4>Developers female-to-male rate is 20%</h4>
                  <p>20% of our team are girls, and they are not only the beautiful part but they are top-nocht specialists as well.</p>
              </div>
              <!-- fake -->
              <div class="employer_list-item__fake"></div>
          </div>
          <ButtonLink :data="this.button" />
      </div>
  </section>
</template>

<script>
import ButtonLink from '../blocks/button-link';

export default {
  name: 'Employer',
  data() {
    return {
      button: {
        text: 'Send Your CV',
        link: '#'
      }
    };
  },
  components: {
    ButtonLink
  }
};
</script>
