<template>
  <li class="case_technologies-item">
    <img
      v-if="name"
      :data-src="require(`@/assets/img/Home/svg/technologies/${name}.svg`)"
      :alt="imgAlt || alt"
      width="40"
      height="40"
      class="img_lazy case_technologies-item__tech-icon"
      :class="`case_technologies-item__${name} ${name}`"
    >
    <p
      v-if="alt"
      class="case_technologies-item__tech-name"
    >
      {{ alt }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'ListTechnologiesItem',
  props: {
    name: {
      type: String,
      default: '',
    },

    alt: {
      type: String,
      default: '',
    },

    imgAlt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.case_technologies-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__tech-icon {
    margin-bottom: 5px;
    width: 40px;
    height: 40px;
    display: block;
  }

  &__tech-name {
    @include default-text($text-color--tech-label-black, 14px, 171%, -0.035em, normal);
  }

  &__docker,
  &__grpc,
  &__backend-django {
    width: 70px;
  }

  &__uptime-robot,
  &__jquery,
  &__nimble,
  &__video-js,
  &__nginx-txt {
    width: 92px;
  }

  &__plex {
    width: 59px;
  }

  &__asp-net {
    width: 60px;
  }

  @media screen and (max-width: 768px) {
    &__tech-icon {
      margin-bottom: 8px;
      width: 20px;
      height: 20px;
    }

    &__docker,
    &__grpc,
    &__django,
    &__nginx-txt,
    &__video-js {
      width: 40px;
    }

    &__jquery,
    &__nimble {
      width: 45px;
    }

    &__uptime-robot {
      width: 62px;
    }

    &__plex {
      width: 28px;
    }

    &__asp-net {
      width: 30px;
    }

    &__tech-name {
      @include default-text($text-color--tech-label-black, 8px, 163%, -0.02em, normal);
      width: 40px;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
    }
  }
}
</style>
