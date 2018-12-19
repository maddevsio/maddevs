<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <div class="contacts-wrap" id="contacts-wrap">
        <div class="contacts-wrap_back"></div>
        <h2 class="sec-title">{{$t('Contacts')}}</h2>
        <div class="contacts-wrap_list">
            <div class="contacts-wrap_list-item address">
                <p>{{$t('address-footer')}}</p>
            </div>
            <div class="contacts-wrap_list-item phone-mail">
                <div class="phone-mail_wrap">
                    <a href="tel:+996 555 429 055">+996 555 761 939</a>
                    <a href="mailto:rock@maddevs.io">rock@maddevs.io</a>
                </div>
            </div>
            <div class="contacts-wrap_list-item social-icons">
                <div class="social-icons_list">
                    <div class="social-icons_list-row">
                        <a href="https://github.com/maddevsio" target="_blank" rel="noreferrer">
                            <img src="../assets/img/common/git.svg" alt="Github">
                        </a>
                        <a href="https://www.facebook.com/maddevsio" target="_blank" rel="noreferrer">
                            <img src="../assets/img/common/fb.svg" alt="Facebook">
                        </a>
                        <a href="https://www.instagram.com/maddevsio/" target="_blank" rel="noreferrer">
                            <img src="../assets/img/common/insta.svg" alt="Instagram">
                        </a>
                        <a href="https://blog.maddevs.io/" target="_blank" rel="noreferrer">
                            <img src="../assets/img/common/medium.svg" alt="Medium">
                        </a>
                    </div>
                    <div class="social-icons_list-row">
                        <a href="https://twitter.com/MadDevsIO" target="_blank" rel="noreferrer">
                            <img src="../assets/img/common/tw.svg" alt="Twitter">
                        </a>
                        <a href="https://www.slideshare.net/maddevs/presentations" target="_blank" rel="noreferrer">
                            <img src="../assets/img/common/slide.svg" alt="Slideshare">
                        </a>
                        <a href="https://www.youtube.com/playlist?list=PLsmdb5W8ytypyXt1ut3lfBOnOZnDNqYIN" target="_blank" rel="noreferrer">
                            <img src="../assets/img/common/yt.svg" alt="Youtube">
                        </a>
                        <a href="https://www.behance.net/maddevs" target="_blank" rel="noreferrer">
                            <img src="../assets/img/common/beh.svg" alt="Behance">
                        </a>
                        <a href="https://t.me/maddevsio" target="_blank" rel="noreferrer">
                            <img src="../assets/img/common/tel.svg" alt="Telegram">
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contacts'
};
</script>
