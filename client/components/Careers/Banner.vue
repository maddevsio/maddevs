<template>
  <div
    class="banner container"
  >
    <h1
      class="banner_title"
    >
      Career at <br> Mad Devs
    </h1>
    <div
      class="banner_img-wrap"
    >
      <picture>
        <source
          :srcset="[$getMediaFromS3('/images/Careers/webp/office.webp') + ' ', $getMediaFromS3('/images/Careers/webp/office@2x.webp 2x')]"
          type="image/webp"
          class="banner_img media_lazy"
        >
        <img
          :src="$getMediaFromS3('/images/Careers/png/office.png')"
          :srcset="$getMediaFromS3('/images/Careers/png/office@2x.png')"
          width="1239"
          height="606"
          class="banner_img media_lazy"
          alt="Office"
        >
      </picture>
    </div>
    <p
      class="banner_description"
    >
      Here at Mad Devs, we partner with projects where <span>our teams thrive</span>. Innovating solutions, carrying ownership, delivering sustainable value, and celebrating successes—these make a happy workplace where things get done.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_vars';

.banner {
  margin-bottom: 210px;

  &_title,
  &_description {
    text-align: center;
  }

  &_title {
    margin-top: 141px;
    margin-bottom: 66px;
    @include font('Poppins', 100px, 700);
    letter-spacing: -0.04em;
    line-height: 96px;
    color: $text-color--white;

    @media screen and (max-width: 991px) {
      margin-top: 70px;
    }
  }

  &_img-wrap {
    margin-bottom: 206px;
  }

  &_img {
    width: 100%;
    height: 100%;
  }

  &_description {
    max-width: 1028px;
    margin: 0 auto;
    @include font('Inter', 32px, 700);
    line-height: 47px;
    letter-spacing: -0.013em;
    color: $text-color--grey-opacity-20-percent;

    span {
      color: $text-color--red;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 98px;

    &_title {
      margin-bottom: 26px;
      font-size: 76px;
      line-height: 76px;
    }

    &_img-wrap {
      margin-bottom: 96px;
    }

    &_description {
      font-size: 24px;
      line-height: 31px;
    }
  }

  @media screen and (max-width: 620px) {
    margin-bottom: 108px;

    &_title {
      margin-top: 116px;
      margin-bottom: 38px;
      font-size: 44px;
      line-height: 109%;
    }

    &_img-wrap {
      margin-bottom: 70px;
    }
  }
}
</style>
