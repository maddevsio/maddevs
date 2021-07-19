<template>
  <section
    id="read-online"
    class="ebook-read"
  >
    <div class="container">
      <h2>Read articles online</h2>

      <div class="ebook-read_content">
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

  h2 {
    @include font('Inter', 42px, 600);
    line-height: 46px;
    letter-spacing: -1.3px;
    color: #111;
    margin-bottom: 32px;
  }

  &_content {
    display: flex;
    justify-content: space-between;
  }

  &_cards {
    @include grid(repeat(2, 1fr), auto, 30px, 30px);
  }
}
</style>
