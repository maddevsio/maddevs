import {
  mount
} from '@vue/test-utils';
import SirJohnMonashCentre from '../client/pages/case-studies/sir-john-monash-centre';

describe('SirJohnMonashCentre', () => {
  let wrapper;
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
      'Setting up system monitoring'
    ],
    theChallenges: [
      '100MB of Documentation and 1M+ lines of code required months of onboarding.',
      'The unique nature of the software in a one-of-a-kind technologically advanced centre.',
      'The 450 units of hardware connected to operate as a coherent solution that delivers content to SJMC visitors in a personalised manner.',
      'The 5000 km distance between the SJMC and Mad Devs’ office.',
      'The lockdown caused by the Covid19 pandemic, which made it difficult to check the deploy updates.',
      'Orchestrating a seamless experience for 110K visitors annually.',
      'Cooperating and communicating with numerous vendors working at SJMC.'
    ],
    technologiesList: [
      {
        techName: 'Go',
        className: 'backend-go'
      },
      {
        techName: 'Swift',
        className: 'mobile-swift'
      },
      {
        techName: 'Java for Android',
        className: 'mobile-java'
      },
      {
        techName: 'Unity',
        className: 'other-unity'
      },
      {
        techName: 'AWS',
        className: 'infrastructure-aws'
      },
      {
        techName: 'CodeCommit',
        className: 'infrastructure-codecommit'
      },
      {
        techName: 'Windows 10',
        className: 'other-windows'
      },
      {
        techName: 'iOS',
        className: 'mobile-apple-black'
      },
      {
        techName: 'Android',
        className: 'mobile-android-black-text'
      },
      {
        techName: 'Ubuntu',
        className: 'other-ubuntu'
      },
      {
        techName: 'Ansible',
        className: 'devops-ansible'
      },
      {
        techName: 'Sentry',
        className: 'devops-sentry-dark'
      },
      {
        techName: 'Elasticsearch',
        className: 'devops-elastic'
      },
      {
        techName: 'Logstash',
        className: 'devops-logstash'
      },
      {
        techName: 'Kibana',
        className: 'devops-kibana'
      },
      {
        techName: 'Prometheus',
        className: 'devops-prometheus'
      }
    ],
    team: [
      {
        name: 'Kirill Zinchenko',
        position: 'Project Manager',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Ruslan Kasymov',
        position: 'Logistics Manager',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Aleksandr Zhitov',
        position: 'QA Manager',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Sergey Boyko',
        position: 'QA Manager',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Vlad Andreev',
        position: 'DevOps Developer',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Dmitri Khalezin',
        position: 'DevOps Developer',
        fileName: 'dmitrii-khalezin',
        fileExtension: 'png'
      },
      {
        name: 'Kirill Avdeev',
        position: 'Back-end Developer',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Andrew Minkin',
        position: 'Back-end Developer',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Aleksandr Astashov',
        position: 'Back-end Developer',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Stanislav Shcherbinin',
        position: 'Back-end Developer',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Pavel Pushkarev',
        position: 'Mobile Developer',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Rustom Kulbatyrov',
        position: 'Mobile Developer',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      }
    ],
    swiperMultimediaManagement: [
      {
        fileName: 'multimedia-management-first-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'multimedia-management-second-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      }
    ],
    swiperOfficeTeam: [
      {
        fileName: 'office-team-first-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'office-team-second-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'office-team-third-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'office-team-fourth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'office-team-fifth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'office-team-sixth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      }
    ],
    swiperGrafanaPrometheus: [
      {
        fileName: 'grafana-prometheus-first-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'grafana-prometheus-second-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      }
    ],
    swiperMadDevsTrip: [
      {
        fileName: 'mad-devs-trip-first-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'mad-devs-trip-second-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'mad-devs-trip-third-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'mad-devs-trip-fourth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      },
      {
        fileName: 'mad-devs-trip-fifth-slide',
        pictureFolder: 'sjmc',
        fileExtension: 'jpg'
      }
    ]
  };

  beforeEach(() => {
    wrapper = mount(SirJohnMonashCentre, {
      mocks: {
        $nuxt: {
          $on: jest.fn()
        }
      }
    });
    wrapper.vm.$refs = { 
      video: {
        paused: true,
        play: jest.fn(),
        pause: jest.fn(),
        onended: jest.fn()
      },
      videoWrap: {
        classList: {
          remove: jest.fn(),
          add: jest.fn()
        }
      }
    };
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('Sets the correctly data', () => {
    expect(wrapper.vm.$data).toEqual(data);
  });

  test('videoSetState function should call play and remove functions', () => {
    const spyPlay = jest.spyOn(wrapper.vm.$refs.video, 'play');
    const spyRemove = jest.spyOn(wrapper.vm.$refs.videoWrap.classList, 'remove');
    wrapper.vm.videoSetState();
    expect(spyPlay && spyRemove).toHaveBeenCalled();
    spyPlay.mockReset();
    spyRemove.mockReset();
  });

  test('videoSetState function should call pause and add functions', () => {
    wrapper.vm.$refs.video.paused = false;

    const spyPause = jest.spyOn(wrapper.vm.$refs.video, 'pause');
    const spyAdd = jest.spyOn(wrapper.vm.$refs.videoWrap.classList, 'add');
    wrapper.vm.videoSetState();
    expect(spyPause && spyAdd).toHaveBeenCalled();
    spyPause.mockReset();
    spyAdd.mockReset();
  });
});
