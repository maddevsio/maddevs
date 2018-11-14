<template>
  <section id="speakers" class="speakers">
    <div class="container">
      <div class="speakers_wrap">
        <h2 class="sec-title">{{$t('We constantly learn, gain experience and share it by speaking at the conferences')}}</h2>
        <div class="speakers_wrap-places">
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/hl.svg" alt="hl">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/tl.svg" alt="tl">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/stachka.svg" alt="stachka">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/rit.svg" alt="rit">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/dev-fest-siberia.svg" alt="dev-fest-siberia">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/iprof.svg" alt="iprof">
            </div>
            <div class="speakers_wrap-places-item golang-img">
                <img src="../../assets/img/svg/speakers/go@2x.png" alt="golang" />
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/gdg-bishkek.svg" alt="gdg-bishkek">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/bit.svg" alt="bit">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/fosdem.svg" alt="fosdem">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/vi-kit.svg" alt="vi-kit">
            </div>
            <div class="speakers_wrap-places-item">
                <img src="../../assets/img/svg/speakers/techwomen.svg" alt="techwomen">
            </div>
        </div>
        <div class="speakers_wrap-people">
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/1.jpg" srcset="../../assets/img/jpg/speakers/1@2x.jpg 2x, ../../assets/img/jpg/speakers/1@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>GopherCon Russia 2018</p>
                        </div>
                    </div>
                    <a target="_blank" href="https://www.slideshare.net/maddevs/grpc-91167163">
                        <p>{{$t('gRPC for mobile applications in production')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/2.jpg" srcset="../../assets/img/jpg/speakers/2@2x.jpg 2x, ../../assets/img/jpg/speakers/2@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Mad Talks</p>
                        </div>
                    </div>
                     <a target="_blank" href="https://www.slideshare.net/maddevs/ss-102761804">
                        <p>
                        {{$t('The basics of IP-telephony')}}
                        </p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/3.jpg" srcset="../../assets/img/jpg/speakers/3@2x.jpg 2x, ../../assets/img/jpg/speakers/3@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>South Dev Fest 2018</p>
                        </div>
                    </div>
                    <a target="_blank" href="https://www.slideshare.net/maddevs/triggermesh-faas-kubernetes">
                        <p>{{$t('Triggermesh - Faas platform on Kubernetes')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/4.jpg" srcset="../../assets/img/jpg/speakers/4@2x.jpg 2x, ../../assets/img/jpg/speakers/4@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Mad Talks</p>
                        </div>
                    </div>
                     <a target="_blank" href="https://www.slideshare.net/maddevs/ss-116840322">
                        <p>{{$t('Applied Hardware Programming The case of water ordering automatization')}}</p>
                    </a>
                </div>
            </div>
             <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/5.jpg" srcset="../../assets/img/jpg/speakers/5@2x.jpg 2x, ../../assets/img/jpg/speakers/5@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>GDG Almaty 2016</p>
                        </div>
                    </div>
                    <a href="https://www.slideshare.net/maddevs/telegram-google-creating-a-telegram-bot-with-google-services-free" target="_blank">
                        <p>{{$t('Creation of Telegram-bot with the help of Google services for free')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/7.jpg" srcset="../../assets/img/jpg/speakers/7@2x.jpg 2x, ../../assets/img/jpg/speakers/7@3x.jpg 3x" alt="People">
                <!-- Hover info block -->
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Kolesa/web</p>
                        </div>
                    </div>
                    <a target="_blank" href="https://www.slideshare.net/maddevs/grpc-75458612">
                        <p>{{$t('Introduction to gRPC')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/6.jpg" srcset="../../assets/img/jpg/speakers/6@2x.jpg 2x, ../../assets/img/jpg/speakers/6@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>GDG Almaty 2017</p>
                        </div>
                    </div>
                    <a target="_blank" href="https://www.slideshare.net/maddevs/kotlin-116845515">
                        <p>{{$t('Kotlin Introduction')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/8.jpg" srcset="../../assets/img/jpg/speakers/8@2x.jpg 2x, ../../assets/img/jpg/speakers/8@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>HighLoad Junior 2017</p>
                        </div>
                    </div>
                    <a href="https://www.slideshare.net/maddevs/the-project-adventure-from-developer-computer-to-serious-loads" target="_blank">
                        <p>{{$t("The project adventures from developer's computer to high load")}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/9.jpg" srcset="../../assets/img/jpg/speakers/9@2x.jpg 2x, ../../assets/img/jpg/speakers/9@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>GDG Almaty 2017</p>
                        </div>
                    </div>
                    <a href="https://www.slideshare.net/maddevs/project-management-central-asia-vs-united-states" target="_blank">
                        <p>{{$t('Project Management Central Asia vs the US')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/10.jpg" srcset="../../assets/img/jpg/speakers/10@2x.jpg 2x, ../../assets/img/jpg/speakers/10@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Outsource People 2017</p>
                        </div>
                    </div>
                    <a target="_blank" href="https://www.slideshare.net/maddevs/pm-digital-nomad-or-how-to-manage-a-totally-remote-team ">
                        <p>{{$t('PM Digital Nomad (or How to Manage a Totally Remote Team)')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/11.jpg" srcset="../../assets/img/jpg/speakers/11@2x.jpg 2x, ../../assets/img/jpg/speakers/11@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Team Lead Conf</p>
                        </div>
                    </div>
                    <a href="https://www.slideshare.net/maddevs/how-to-grow-programmers" target="_blank">
                        <p>{{$t('The ways to grow developers from the scratch')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/12.jpg" srcset="../../assets/img/jpg/speakers/12@2x.jpg 2x, ../../assets/img/jpg/speakers/12@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>{{$t('Stachka 2017')}}</p>
                        </div>
                    </div>
                    <a href="https://www.slideshare.net/maddevs/agile-116851299" target="_blank">
                        <p>{{$t('PM Digital Nomad (or How to Manage a Totally Remote Team)')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/13.jpg" srcset="../../assets/img/jpg/speakers/13@2x.jpg 2x, ../../assets/img/jpg/speakers/13@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Agile Meetup 2017</p>
                        </div>
                    </div>
                    <a href="https://www.slideshare.net/maddevs/project-management-tools-116852822" target="_blank">
                        <p>{{$t('Project Management Tools')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/14.jpg" srcset="../../assets/img/jpg/speakers/14@2x.jpg 2x, ../../assets/img/jpg/speakers/14@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>BIT 2017</p>
                        </div>
                    </div>
                     <a href="https://www.slideshare.net/maddevs/iotsploit-iotsploit-keeping-your-iot-perimeter-safe" target="_blank">
                        <p>{{$t('IOTSploit - the protection of your IoTs')}}</p>
                    </a>
                </div>
            </div>
            <div onclick="void(0)" class="speakers_wrap-people-item">
                <img src="../../assets/img/jpg/speakers/15.jpg" srcset="../../assets/img/jpg/speakers/15@2x.jpg 2x, ../../assets/img/jpg/speakers/15@3x.jpg 3x" alt="People">
                <div class="people-info-block">
                    <div class="people-info-block__header">
                        <div class="people-info-block__header-line">
                            <p>Mad Talks</p>
                        </div>
                    </div>
                     <a href="https://www.slideshare.net/maddevs/comedian-chat-bot-for-automatization-of-remote-standups" target="_blank">
                        <p>{{$t('Chat bot for automatization of remote standups')}}</p>
                    </a>
                </div>
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
