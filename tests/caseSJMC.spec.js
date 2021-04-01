import { mount } from '@vue/test-utils'
import SirJohnMonashCentre from '../client/pages/case-studies/sir-john-monash-centre'

global.document.exitFullscreen = () => {}

describe('sirJohnMonashCentre', () => {
  let wrapper
  const data = {
    keyGoalsList: [
      'Understanding the complexity of the MMIT Brain software',
      'Building a small-scale version of the SJMC experience in 1 month',
      'Finishing technical debt conducted by an independent auditor',
      'Covering the code with unit and integration tests',
      'Building a framework for automating E2E tests',
      'Deploying technical debt changes and improvements on site',
      'Developing a reporting system',
      'Testing the deployment of new content',
      'Setting up system monitoring',
    ],
    theChallenges: [
      'The 100MB of documentation and 1M+ lines of code, which required months of onboarding.',
      'The unique nature of the software in a one-of-a-kind technologically advanced centre.',
      'The 450 units of hardware connected to operate as a coherent solution that delivers content to SJMC visitors in a personalised manner.',
      'The 5000 km distance between the SJMC and Mad Devs’ office.',
      'The lockdown caused by the Covid19 pandemic, which made it difficult to check the deploy updates.',
      'Orchestrating a seamless experience for 110K visitors annually.',
      'Cooperating and communicating with numerous vendors working at SJMC.',
    ],
    technologiesList: [
      {
        techName: 'Go',
        className: 'backend-go',
      },
      {
        techName: 'Swift',
        className: 'mobile-swift',
      },
      {
        techName: 'Java for Android',
        className: 'mobile-java',
      },
      {
        techName: 'Unity',
        className: 'other-unity',
      },
      {
        techName: 'AWS',
        className: 'infrastructure-aws',
      },
      {
        techName: 'CodeCommit',
        className: 'infrastructure-codecommit',
      },
      {
        techName: 'Windows 10',
        className: 'other-windows',
      },
      {
        techName: 'iOS',
        className: 'mobile-apple-black',
      },
      {
        techName: 'Android',
        className: 'mobile-android-black-text',
      },
      {
        techName: 'Ubuntu',
        className: 'other-ubuntu',
      },
      {
        techName: 'Ansible',
        className: 'devops-ansible',
      },
      {
        techName: 'Sentry',
        className: 'devops-sentry-dark',
      },
      {
        techName: 'Elasticsearch',
        className: 'devops-elastic',
      },
      {
        techName: 'Logstash',
        className: 'devops-logstash',
      },
      {
        techName: 'Kibana',
        className: 'devops-kibana',
      },
      {
        techName: 'Prometheus',
        className: 'devops-prometheus',
      },
    ],
    team: [
      {
        name: 'Kirill Zinchenko',
        position: 'Project Manager',
        fileName: 'zinchenko',
        fileExtension: 'png',
        alt: 'Kirill Zinchenko',
      },
      {
        name: 'Vlad Andreev',
        position: 'DevOps Engineer',
        fileName: 'vlad-andreev',
        fileExtension: 'png',
        alt: 'Vlad Andreev',
      },
      {
        name: 'Aleksandr Zhitov',
        position: 'QA Manager',
        fileName: 'zhitov',
        fileExtension: 'png',
        alt: 'Aleksandr Zhitov',
      },
      {
        name: 'Sergey Boyko',
        position: 'QA Tester',
        fileName: 'boyko',
        fileExtension: 'png',
        alt: 'Sergey Boyko',
      },
      {
        name: 'Andrew Minkin',
        position: 'Back-end Developer',
        fileName: 'andrew-minkin',
        fileExtension: 'png',
        alt: 'Andrew Minkin',
      },
      {
        name: 'Dmitri Khalezin',
        position: 'DevOps Engineer',
        fileName: 'dmitrii-khalezin',
        fileExtension: 'png',
        alt: 'Dmitri Khalezin',
      },
      {
        name: 'Kirill Avdeev',
        position: 'Back-end Developer',
        fileName: 'avdeev',
        fileExtension: 'png',
        alt: 'Kirill Avdeev',
      },
      {
        name: 'Stanislav Shcherbinin',
        position: 'Back-end Developer',
        fileName: 'stanislav-shcherbinin',
        fileExtension: 'png',
        alt: 'Stanislav Shcherbinin',
      },
      {
        name: 'Aleksandr Astashov',
        position: 'Back-end Developer',
        fileName: 'astashov',
        fileExtension: 'png',
        alt: 'Aleksandr Astashov',
      },
      {
        name: 'Ruslan Kasymov',
        position: 'Logistics Manager',
        fileName: 'kasymov',
        fileExtension: 'png',
        alt: 'Ruslan Kasymov',
      },
      {
        name: 'Pavel Pushkarev',
        position: 'Mobile App Developer',
        fileName: 'pushkarev',
        fileExtension: 'png',
        alt: 'Pavel Pushkarev',
      },
      {
        name: 'Rustom Kulbatyrov',
        position: 'Mobile App Developer',
        fileName: 'kulbatyrov',
        fileExtension: 'png',
        alt: 'Rustom Kulbatyrov',
      },
    ],
    swiperMultimediaManagement: [
      {
        fileName: 'multimedia-management-first-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Hardware System Which Monitors Lighting, Audio, Video and Special Effects for the SJMC.',
      },
      {
        fileName: 'multimedia-management-second-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Hardware System Which Monitors Lighting, Audio, Video and Special Effects for the SJMC.',
      },
    ],
    swiperOfficeTeam: [
      {
        fileName: 'office-team-first-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
      },
      {
        fileName: 'office-team-second-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
      },
      {
        fileName: 'office-team-third-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
      },
      {
        fileName: 'office-team-fourth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
      },
      {
        fileName: 'office-team-fifth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
      },
      {
        fileName: 'office-team-sixth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment.',
      },
    ],
    swiperGrafanaPrometheus: [
      {
        fileName: 'grafana-prometheus-first-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'SJMC System Monitoring.',
      },
      {
        fileName: 'grafana-prometheus-second-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'SJMC System Monitoring.',
      },
    ],
    swiperMadDevsTrip: [
      {
        fileName: 'mad-devs-trip-first-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Mad Devs’ Team Trip to the SJMC.',
      },
      {
        fileName: 'mad-devs-trip-second-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Mad Devs’ Team Trip to the SJMC.',
      },
      {
        fileName: 'mad-devs-trip-third-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Mad Devs’ Team Trip to the SJMC.',
      },
      {
        fileName: 'mad-devs-trip-fourth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Mad Devs’ Team Trip to the SJMC.',
      },
      {
        fileName: 'mad-devs-trip-fifth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg',
        alt: 'Mad Devs’ Team Trip to the SJMC.',
      },
    ],
    headerLogo: {
      width: 242,
      height: 110,
      pictureFolder: 'sjmc',
      fileName: 'sjmc-logo',
      alt: '',
    },
  }

  beforeEach(() => {
    wrapper = mount(SirJohnMonashCentre, {
      mocks: {
        $nuxt: {
          $on: jest.fn(),
        },
        getMediaFromS3: () => 's3 image url',
      },
      stubs: ['nuxt-link', 'NuxtLink'],
    })
    wrapper.vm.$refs = {
      video: {
        paused: true,
        play: jest.fn(),
        pause: jest.fn(),
        onended: jest.fn(),
      },
      videoWrap: {
        classList: {
          remove: jest.fn(),
          add: jest.fn(),
        },
      },
    }
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('sets the correctly data', () => {
    expect(wrapper.vm.$data).toEqual(data)
  })

  it('videoSetState function should call play and remove functions', () => {
    const spyPlay = jest.spyOn(wrapper.vm.$refs.video, 'play')
    const spyRemove = jest.spyOn(wrapper.vm.$refs.videoWrap.classList, 'remove')
    wrapper.vm.videoSetState()
    expect(spyPlay && spyRemove).toHaveBeenCalledWith('case_sjmc-phone-video-wrapper--on-pause')
    spyPlay.mockReset()
    spyRemove.mockReset()
  })

  it('videoSetState function should call pause and add functions', () => {
    wrapper.vm.$refs.video.paused = false

    const spyPause = jest.spyOn(wrapper.vm.$refs.video, 'pause')
    const spyAdd = jest.spyOn(wrapper.vm.$refs.videoWrap.classList, 'add')
    wrapper.vm.videoSetState()
    expect(spyPause && spyAdd).toHaveBeenCalledWith('case_sjmc-phone-video-wrapper--on-pause')
    spyPause.mockReset()
    spyAdd.mockReset()
  })
})
