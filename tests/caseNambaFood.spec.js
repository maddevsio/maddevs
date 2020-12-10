import {
  mount
} from '@vue/test-utils';
import NambaFood from '../client/pages/case-studies/namba-food';
import './__mocks__/intersectionObserverMock';

describe('Namba food', () => {
  let wrapper;
  const data = {
    title: 'Mad Devs Namba Food',
    description: '',
    ogUrl: '',
    team: [
      {
        name: 'Vlad Andreev',
        position: 'Team Lead',
        fileName: 'vlad-andreev',
        fileExtension: 'png'
      },
      {
        name: 'Gulbustan Baudunova',
        position: 'Back-end Developer',
        fileName: 'gulbustan-baudunova',
        fileExtension: 'png'
      },
      {
        name: 'Tamara Mun',
        position: 'Delivery Manager',
        fileName: 'tamara-mun',
        fileExtension: 'png'
      },
      {
        name: 'Aidai Atakulova',
        position: 'Project Manager',
        fileName: 'aidai-atakulova',
        fileExtension: 'png'
      },
      {
        name: 'Baurzhan Omuraliev',
        position: 'Back-end Developer',
        fileName: 'baurzhan-omuraliev',
        fileExtension: 'png'
      },
      {
        name: 'Nakylai Taiirova',
        position: 'Back-end Developer',
        fileName: 'nakylai-taiirova',
        fileExtension: 'png'
      },
      {
        name: 'Akylbek Djumaliev',
        position: 'Back-end Developer',
        fileName: 'akylbek-djumaliev',
        fileExtension: 'png'
      },
      {
        name: 'Stanislav Shcherbinin',
        position: 'Back-end Developer',
        fileName: 'stanislav-shcherbinin',
        fileExtension: 'png'
      },
      {
        name: 'Eldar Akkozov',
        position: 'Mobile Developer',
        fileName: 'eldar-akkozov',
        fileExtension: 'png'
      },
      {
        name: 'Altynai Toktomuratova',
        position: 'Mobile Developer',
        fileName: 'altynai-toktomuratova',
        fileExtension: 'png'
      },
      {
        name: 'Dmitrii Khalezin',
        position: 'DevOps Engineer',
        fileName: 'dmitrii-khalezin',
        fileExtension: 'png'
      },
      {
        name: 'Belek Abylov',
        position: 'Back-end Developer',
        fileName: 'belek-abylov',
        fileExtension: 'png'
      }
    ],
    technologiesList: [
      {
        techName: 'MySQL',
        className: 'backend-mysql'
      },
      {
        techName: 'PHP Symfony2',
        className: 'backend-symfony'
      },
      {
        techName: 'Laravel',
        className: 'backend-laravel'
      },
      {
        techName: 'Docker',
        className: 'devops-docker case_technologies-item__docker'
      },
      {
        techName: 'Nginx',
        className: 'devops-nginx'
      },
      {
        techName: 'Redis',
        className: 'backend-redis'
      },
      {
        techName: 'Python (Django)',
        className: 'backend-python'
      },
      {
        techName: 'Golang',
        className: 'backend-go'
      },
      {
        techName: 'Kotlin',
        className: 'mobile-kotlin'
      },
      {
        techName: 'Java',
        className: 'mobile-java'
      },
      {
        techName: 'Swift',
        className: 'mobile-swift'
      },
      {
        techName: 'Firebase',
        className: 'mobile-firebase'
      },
      {
        techName: 'TestFlight',
        className: 'mobile-test-flight'
      },
      {
        techName: 'OpenStreetMap',
        className: 'other-open-street-map'
      },
      {
        techName: 'PHP',
        className: 'backend-php'
      },
      {
        techName: 'Jira Assistant',
        className: 'pm-jira-assistant-blue'
      },
      {
        techName: 'Grafana',
        className: 'devops-grafana'
      },
      {
        techName: 'Sentry',
        className: 'devops-sentry-dark'
      }
    ],
    usageScenarios: [
      {
        title: 'Web-site, mobile application',
        description: 'Easy-to-use interface and fast navigation for Namba Food users.',
        classList: {
          cardColor: 'background-color-red',
          uniqueСlass: 'red-card'
        },
        fileName: 'apple-iphone-xr-silver',
        fileExtension: 'png',
        alt: ''
      },
      {
        title: 'Application for deliverymen',
        description: 'Allows to plan a route, get information about  orders in the instance.',
        classList: {
          cardColor: 'background-color-black',
          uniqueСlass: 'black-card'
        },
        fileName: 'samsung-galaxy-s20-cosmic-gray',
        fileExtension: 'png',
        alt: ''
      },
      {
        title: 'Unified control system for operators',
        description: 'Full control of the ordering process from order acceptance to status tracking.',
        classList: {
          cardColor: 'background-color-turquoise',
          uniqueСlass: 'turquoise-card'
        },
        fileName: 'system-for-call-center',
        fileExtension: 'png',
        alt: ''
      },
      {
        title: 'Control panel for managers',
        description: 'Facilitates uploading the menu and updating information about services.',
        classList: {
          cardColor: 'background-color-silver',
          uniqueСlass: 'white-card'
        },
        fileName: 'sjms-analytics-mini',
        fileExtension: 'png',
        alt: ''
      }
    ],
    swiperAdminPanel: [
      {
        fileName: 'admin',
        pictureFolder: 'nambafood',
        fileExtension: 'jpg'
      },
      {
        fileName: 'dashboard',
        pictureFolder: 'nambafood',
        fileExtension: 'jpg'
      }
    ],
    videoIdList: ['map-video', 'iphone-silver-video'],
    header: undefined,
    mobileHeader: undefined
  };

  const mockedElementDOM = {
    classList: {
      add: jest.fn(),
      remove: jest.fn() 
    }
  };

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null
      }
    };
    wrapper = mount(NambaFood);
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

  test('V-for should render elements in DOM', () => {
    const swiperSlideElems = wrapper.findAll('.swiper-slide');
    const usageScenariosCards = wrapper.findAll('.case_usage-scenarios-card');
    const technologiesItems = wrapper.findAll('.case_technologies-item');
    const teamItems = wrapper.findAll('.case_team-item');
    expect(swiperSlideElems.length).toEqual(data.swiperAdminPanel.length * data.swiperAdminPanel.length); // У слайдера есть блок с превью изображениями, поэтому нужно удваивать цифру
    expect(usageScenariosCards.length).toEqual(data.usageScenarios.length);
    expect(technologiesItems.length).toEqual(data.technologiesList.length);
    expect(teamItems.length).toEqual(data.team.length);
  });
});
