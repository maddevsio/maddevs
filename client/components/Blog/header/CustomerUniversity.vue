<template>
  <common-header
    :title="$prismic.asText(document.title)"
    :subtitle="$prismic.asText(document.subtitle)"
    :coverImageUrl="document.featured_image.url"
  >
    <template v-slot:beforeTitle>
      <div class="row cluster-navigation">
        <div class="cluster-navigation__name">{{clusterName}}</div>
        <div class="col-6 mt-0">
          <v-select
            class="cluster-navigation__select"
            :options="postOptions"
            @option:selected="handleChange"
            :clearable="false"
            :filterable="false"
            :components="{OpenIndicator}"
            :value="currentPost ? {label: $prismic.asText(currentPost.chapter_name), value: currentPost.cu_post.uid} : {label: '', value: ''}"
          />
        </div>
        <div class="col-6 mt-0">
          <div class="cluster-navigation__buttons">
            <a href="#">
              <span class="arrow prev"/>
              Previous
            </a>
            <span class="cluster-navigation__divider"/>
            <a href="#">
              Next
              <span class="arrow next"/>
            </a>
          </div>
        </div>
      </div>
    </template>
  </common-header>
</template>

<script>
import CommonHeader from '@/components/Blog/header/Common';
import VSelect from 'vue-select';
import linkResolver from '@/plugins/link-resolver';
import 'vue-select/dist/vue-select.css';

export default {
  name: 'CustomerUniversity',
  components: {
    CommonHeader,
    VSelect
  },
  data () {
    return {
      currentPostUid: '',
      OpenIndicator: {
        render: createElement => {
          return createElement('svg', {
            domProps: {
              innerHTML: '<path d="M0.447443 0.454545L4.53835 7.40909L8.62926 0.454545H0.447443Z" fill="#A0A0A1"/>'
            },
            attrs: {
              width: 9,
              height: 8,
              viewBox: '0 0 9 8'
            }
          });
        }
      }
    };
  },
  props: {
    document: {
      type: Object,
      required: true
    },
    postList: {
      type: Array,
      default: () => []
    },
    clusterName: {
      type: String,
      default: () => ''
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    postOptions: function () {
      return this.postList.map(post => {
        return {
          label: this.$prismic.asText(post.chapter_name),
          value: post.cu_post.uid
        };
      });
    },
    currentPost: function () {
      return this.postList.find(post => post.cu_post.id === this.id);
    }
  },
  methods: {
    handleChange(selectedPost) {
      if(this.currentPost && this.currentPost.cu_post.uid !== selectedPost.value) {
        this.$router.push({path: `/blog/${selectedPost.value}`});
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../../assets/styles/vars';
  @import '../../../assets/styles/commonIcons';

  .cluster-navigation {
    color: white;
    align-items: center;

    &__name {
      font-family: Inter, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 166%;
      letter-spacing: -0.035em;
      color: $text-color--grey-team-list;
      margin-bottom: 24px;
    }

    &__select {

      /deep/ .vs {
        &__dropdown-toggle {
          padding: 13px 15px 13px 20px;
          border: none;
          background: rgba(51,51,51,0.44);
          border-radius: 4px;
        }

        &__dropdown-menu {
          padding: 0;
          top: calc(100% + 6px);
          border-radius: 4px;
        }

        &__dropdown-option {
          line-height: 27px;
          font-size: 16px;
          padding: 12px 16px 12px 20px;
          color: $text-color--black-cases;

          &--selected {
            opacity: .4;
          }

          &--highlight {
            background-color: #F4F4F4;
            color: $text-color--black-cases;
          }
        }

        &__selected {
          color: $bgcolor--silver;
        }
      }

      &.vs--open {
        /deep/ .vs {
          &__dropdown-toggle {
            background: $bgcolor--silver;
          }

          &__selected {
            color: $text-color--black-cases
          }
        }
      }
    }

    &__buttons {
      text-align: right;

      a {
        color: $bgcolor--silver;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        line-height: 166%;
        font-family: Inter, sans-serif;
        font-weight: 400;

        &:hover {
          color: $text-color--red;

          .arrow {
            @include arrow-icon-red;
          }
        }

        .arrow {
          @include arrow-icon;
          display: inline-block;
          width: 12px;
          height: 11px;

          &.prev {
            margin-right: 10px;
          }

          &.next {
            margin-left: 10px;
            transform: rotate(180deg);
          }
        }
      }
    }

    &__divider {
      display: inline-block;
      height: 27px;
      width: 1px;
      background-color: $bgcolor--grey-pale;
      vertical-align: middle;
      margin: 0 40px;
    }
  }

  .mt-0 {
    margin-top: 0 !important;
  }
</style>
