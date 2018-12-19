<template>
  <section id="speakers" class="speakers">
    <div class="container">
      <div class="speakers_wrap">
        <h2 class="sec-title">{{$t('We constantly learn, gain experience and share it by speaking at the conferences')}}</h2>
        <div class="speakers_wrap-places">
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/hl.svg" alt="hl">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/tl.svg" alt="tl">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/stachka.svg" alt="stachka">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/rit.svg" alt="rit">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/dev-fest-siberia.svg" alt="dev-fest-siberia">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/iprof.svg" alt="iprof">
            </div>
            <div class="speakers_wrap-places-item golang-img">
                <img src="../../assets/img/Home/svg/speakers/go@2x.png" alt="golang" />
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/gdg-bishkek.svg" alt="gdg-bishkek">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/bit.svg" alt="bit">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/fosdem.svg" alt="fosdem">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/vi-kit.svg" alt="vi-kit">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/Home/svg/speakers/techwomen.svg" alt="techwomen">
            </div>
        </div>
        <div class="speakers_wrap-people">
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/1.jpg" srcset="../../assets/img/Home/jpg/speakers/1@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/1@3x.jpg 3x" alt="People">
                <a class="people-info-block" target="_blank" rel="noreferrer" href="https://www.slideshare.net/maddevs/grpc-91167163">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>GopherCon Russia 2018</p>
                        </div>
                    </div>
                    <p>{{$t('gRPC for mobile applications in production')}}</p>
                </a>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/2.jpg" srcset="../../assets/img/Home/jpg/speakers/2@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/2@3x.jpg 3x" alt="People">
                <a class="people-info-block" target="_blank" rel="noreferrer" href="https://www.slideshare.net/maddevs/ss-102761804">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Mad Talks</p>
                        </div>
                    </div>
                    <p>{{$t('The basics of IP-telephony')}}</p>
                </a>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/3.jpg" srcset="../../assets/img/Home/jpg/speakers/3@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/3@3x.jpg 3x" alt="People">
                <a class="people-info-block" target="_blank" rel="noreferrer" href="https://www.slideshare.net/maddevs/triggermesh-faas-kubernetes">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>South Dev Fest 2018</p>
                        </div>
                    </div>
                    <p>{{$t('Triggermesh - Faas platform on Kubernetes')}}</p>
                </a>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/4.jpg" srcset="../../assets/img/Home/jpg/speakers/4@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/4@3x.jpg 3x" alt="People">
                <a class="people-info-block" target="_blank" rel="noreferrer" href="https://www.slideshare.net/maddevs/ss-116840322">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Mad Talks</p>
                        </div>
                    </div>
                    <p>{{$t('Applied Hardware Programming The case of water ordering automatization')}}</p>
                </a>
            </div>
             <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/5.jpg" srcset="../../assets/img/Home/jpg/speakers/5@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/5@3x.jpg 3x" alt="People">
                <a class="people-info-block" href="https://www.slideshare.net/maddevs/telegram-google-creating-a-telegram-bot-with-google-services-free" target="_blank" rel="noreferrer">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>GDG Almaty 2016</p>
                        </div>
                    </div>
                    <p>{{$t('Creation of Telegram-bot with the help of Google services for free')}}</p>
                </a>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/7.jpg" srcset="../../assets/img/Home/jpg/speakers/7@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/7@3x.jpg 3x" alt="People">
                <a class="people-info-block" target="_blank" rel="noreferrer" href="https://www.slideshare.net/maddevs/grpc-75458612">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Kolesa/web</p>
                        </div>
                    </div>
                    <p>{{$t('Introduction to gRPC')}}</p>
                </a>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/6.jpg" srcset="../../assets/img/Home/jpg/speakers/6@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/6@3x.jpg 3x" alt="People">
                <a class="people-info-block" target="_blank" rel="noreferrer" href="https://www.slideshare.net/maddevs/kotlin-116845515">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>GDG Almaty 2017</p>
                        </div>
                    </div>
                    <p>{{$t('Kotlin Introduction')}}</p>
                </a>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/8.jpg" srcset="../../assets/img/Home/jpg/speakers/8@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/8@3x.jpg 3x" alt="People">
                <a class="people-info-block" href="https://www.slideshare.net/maddevs/the-project-adventure-from-developer-computer-to-serious-loads" target="_blank" rel="noreferrer">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>HighLoad Junior 2017</p>
                        </div>
                    </div>
                    <p>{{$t("The project adventures from developer's computer to high load")}}</p>
                </a>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/9.jpg" srcset="../../assets/img/Home/jpg/speakers/9@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/9@3x.jpg 3x" alt="People">
                <a class="people-info-block" href="https://www.slideshare.net/maddevs/project-management-central-asia-vs-united-states" target="_blank" rel="noreferrer">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>GDG Almaty 2017</p>
                        </div>
                    </div>
                    <p>{{$t('Project Management Central Asia vs the US')}}</p>
                </a>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/Home/jpg/speakers/10.jpg" srcset="../../assets/img/Home/jpg/speakers/10@2x.jpg 2x, ../../assets/img/Home/jpg/speakers/10@3x.jpg 3x" alt="People">
                <a class="people-info-block" target="_blank" rel="noreferrer" href="https://www.slideshare.net/maddevs/pm-digital-nomad-or-how-to-manage-a-totally-remote-team">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Outsource People 2017</p>
                        </div>
                    </div>
                    <p>{{$t('PM Digital Nomad (or How to Manage a Totally Remote Team)')}}</p>
                </a>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'speakers'
};
</script>
