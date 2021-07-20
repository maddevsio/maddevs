<template>
  <section class="ebook-read">
    <div class="container">
      <h2 id="read-online-anchor">
        Read articles online
      </h2>

      <div class="ebook-read_cards">
        <ReadCard
          v-for="(post, i) of posts"
          :key="`post-card_${i}`"
          :post="post"
        />
      </div>

      <div class="ebook-read_form">
        <ReadForm />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ReadCard from '@/components/Ebook/ReadCard'
import ReadForm from '@/components/Ebook/ReadForm'

export default {
  name: 'EbookRead',
  components: { ReadCard, ReadForm },
  computed: {
    ...mapGetters(['CUPosts']),
    posts() {
      if (this.CUPosts.length) {
        const posts = [...this.CUPosts]
        return posts.sort(this.sortedPosts)
      }
      return []
    },
  },

  created() {
    this.getCustomerUniversityPosts()
  },

  methods: {
    ...mapActions(['getCustomerUniversityPosts']),
    sortedPosts(a, b) {
      return (Number(a.data.title[0].text.match(/(\d+)/g)[0])
        - Number((b.data.title[0].text.match(/(\d+)/g)[0])))
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/vars';
@import '@/assets/styles/cases/_mixins';

.ebook-read {
  padding: 96px 0 64px;
  background-color: #fff;

  > .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (max-width: 1024px) {
    padding: 64px 0 56px;
  }

  @media screen and (max-width: 540px) {
    padding: 72px 0;
  }

  h2 {
    width: 100%;
    @include font('Inter', 42px, 600);
    line-height: 46px;
    letter-spacing: -1.3px;
    color: #111;
    margin-bottom: 32px;

    @media screen and (max-width: 992px) {
      order: 2;
    }

    @media screen and (max-width: 540px) {
      @include font('Inter', 28px, 600);
      line-height: 32px;
    }
  }

  &_cards {
    @include grid(repeat(2, 1fr), auto, 30px, 30px);

    @media screen and (max-width: 992px) {
      order: 3;
      @include grid(repeat(3, 1fr), auto, 30px, 30px);
    }

    @media screen and (max-width: 768px) {
      @include grid(repeat(2, 1fr), auto, 30px, 30px);
    }

    @media screen and (max-width: 540px) {
      @include grid(repeat(1, 1fr), auto, 0, 30px);
    }

    > a {
      @media only screen and (min-width: 1184px) and (max-width: 1260px) {
        width: 220px;
      }

      @media only screen and (min-width: 1024px) and (max-width: 1184px) {
        width: 210px;
      }

      @media only screen and (min-width: 992px) and (max-width: 1024px) {
        width: 220px;
      }

      @media screen and (max-width: 992px) {
        width: 100%;
      }
    }
  }

  /deep/ .read-form {
    width: 440px;

    @media only screen and (min-width: 1024px) and (max-width: 1094px) {
      width: 364px;
    }

    @media screen and (max-width: 992px) {
      width: 100%;
      max-width: 100%;
      margin-bottom: 96px;
      order: 1;
    }

    @media screen and (max-width: 540px) {
      margin-bottom: 48px;
    }

    img {
      @media screen and (max-width: 992px) {
        margin: 0 auto 20px;
      }
    }

    h4,
    p {
      width: 100%;

      @media screen and (max-width: 992px) {
        text-align: center;
      }
    }

    &_fields {
      button {
        @media screen and (max-width: 992px) {
          width: 100%;
        }
      }
    }
  }
}
</style>
