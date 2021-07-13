<template>
  <div class="table-of-contents">
    <div class="table-of-contents__title">
      Contents:
    </div>
    <Simplebar
      v-if="anchors && anchors.length"
      ref="anchors"
      class="table-of-contents__links"
    >
      <NuxtLink
        v-for="(anchor, i) in anchors"
        :key="anchor.lable"
        :to="anchor.link"
        class="table-of-contents__links-link"
        :class="{ 'table-of-contents__links-link--active': getActiveAnchor(anchor.link, i) }"
      >
        <span>{{ i + 1 }}.</span> {{ anchor.lable }}
      </NuxtLink>
    </Simplebar>
  </div>
</template>

<script>
import Simplebar from 'simplebar-vue'
import mainMixins from '@/mixins/mainMixins'

export default {
  name: 'TableOfContents',

  components: { Simplebar },

  mixins: [mainMixins],

  props: {
    slice: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      activeAnchor: null,
      scrollBar: null,
    }
  },

  computed: {
    anchors() {
      if (this.slice && this.slice.items && !this.slice.items.length) return []
      return this.slice.items
        .filter(item => item.lable.length)
        .map(item => ({
          lable: item.lable[0].text,
          link: `#${this.createAnchorID(item.lable[0].text)}`,
        }))
    },
  },

  mounted() {
    const sections = document.querySelectorAll('.anchor_title')
    const config = {
      rootMargin: '-100px 0px -55%',
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.intersectionHandler(entry)
        }
      })
    }, config)

    sections.forEach(section => {
      observer.observe(section)
    })

    if (this.$refs && this.$refs.anchors && this.$refs.anchors.SimpleBar) {
      this.scrollBar = this.$refs.anchors.SimpleBar.getScrollElement()
    }
  },

  methods: {
    intersectionHandler(entry) {
      if (this.anchors.some(a => a.link.includes(entry.target.id))) {
        this.activeAnchor = `#${entry.target.id}`
      }
    },

    getActiveAnchor(link, index) {
      if (link === this.activeAnchor) {
        if (index === 4) {
          this.scrollBar.scrollTo({ top: 0, behavior: 'smooth' })
          return true
        }
        if (index === 5) {
          this.scrollBar.scrollTo({ top: 400, behavior: 'smooth' })
          return true
        }
        return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.table-of-contents {
  width: 200px;
  max-width: 200px;

  &__title {
    color: #101113;
    line-height: 130%;
    margin-bottom: 18px;
    font-weight: bold;
  }

  &__links {
    width: 100%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    padding-right: 12px;

    &-link {
      width: 100%;
      display: flex;
      text-decoration: none;
      font-size: 14px;
      line-height: 130%;
      letter-spacing: -0.1px;
      color: #101113;
      margin-bottom: 6px;
      padding: 10px 8px;
      box-sizing: border-box;
      border-radius: 8px;

      span {
        margin-right: 6px;
      }

      &:hover {
        background-color: rgba(247, 199, 68, 0.1);
      }

      &--active {
        background-color: rgba(204, 160, 40, 0.2);
      }
    }
  }
}
</style>
