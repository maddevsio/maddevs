import { mount } from '@vue/test-utils'
import NambaFood from '../client/pages/case-studies/namba-food'
import './__mocks__/intersectionObserverMock'

describe('namba food', () => {
  let wrapper
  const data = {
    team: [
      {
        name: 'Vlad Andreev',
        position: 'Team Lead',
        fileName: 'vlad-andreev',
        fileExtension: 'png',
        alt: 'Vlad Andreev',
      },
      {
        name: 'Gulbustan Baudunova',
        position: 'Back-end Developer',
        fileName: 'gulbustan-baudunova',
        fileExtension: 'png',
        alt: 'Gulbustan Baudunova',
      },
      {
        name: 'Tamara Mun',
        position: 'Delivery Manager',
        fileName: 'tamara-mun',
        fileExtension: 'png',
        alt: 'Tamara Mun',
      },
      {
        name: 'Aidai Atakulova',
        position: 'Project Manager',
        fileName: 'aidai-atakulova',
        fileExtension: 'png',
        alt: 'Aidai Atakulova',
      },
      {
        name: 'Baurzhan Omuraliev',
        position: 'Back-end Developer',
        fileName: 'baurzhan-omuraliev',
        fileExtension: 'png',
        alt: 'Baurzhan Omuraliev',
      },
      {
        name: 'Nakylai Taiirova',
        position: 'Back-end Developer',
        fileName: 'nakylai-taiirova',
        fileExtension: 'png',
        alt: 'Nakylai Taiirova',
      },
      {
        name: 'Akylbek Djumaliev',
        position: 'Back-end Developer',
        fileName: 'akylbek-djumaliev',
        fileExtension: 'png',
        alt: 'Akylbek Djumaliev',
      },
      {
        name: 'Stanislav Shcherbinin',
        position: 'Back-end Developer',
        fileName: 'stanislav-shcherbinin',
        fileExtension: 'png',
        alt: 'Stanislav Shcherbinin',
      },
      {
        name: 'Eldar Akkozov',
        position: 'Mobile App Developer',
        fileName: 'eldar-akkozov',
        fileExtension: 'png',
        alt: 'Eldar Akkozov',
      },
      {
        name: 'Altynai Toktomuratova',
        position: 'Mobile App Developer',
        fileName: 'altynai-toktomuratova',
        fileExtension: 'png',
        alt: 'Altynai Toktomuratova',
      },
      {
        name: 'Dmitrii Khalezin',
        position: 'DevOps Engineer',
        fileName: 'dmitrii-khalezin',
        fileExtension: 'png',
        alt: 'Dmitrii Khalezin',
      },
      {
        name: 'Belek Abylov',
        position: 'Back-end Developer',
        fileName: 'belek-abylov',
        fileExtension: 'png',
        alt: 'Belek Abylov',
      },
    ],
    technologiesList: [
      {
        techName: 'MySQL',
        className: 'backend-mysql',
      },
      {
        techName: 'PHP Symfony2',
        className: 'backend-symfony',
      },
      {
        techName: 'Laravel',
        className: 'backend-laravel',
      },
      {
        techName: 'Docker',
        className: 'devops-docker case_technologies-item__docker',
      },
      {
        techName: 'Nginx',
        className: 'devops-nginx',
      },
      {
        techName: 'Redis',
        className: 'backend-redis',
      },
      {
        techName: 'Python (Django)',
        className: 'backend-python',
      },
      {
        techName: 'Golang',
        className: 'backend-go',
      },
      {
        techName: 'Kotlin',
        className: 'mobile-kotlin',
      },
      {
        techName: 'Java',
        className: 'mobile-java',
      },
      {
        techName: 'Swift',
        className: 'mobile-swift',
      },
      {
        techName: 'Firebase',
        className: 'mobile-firebase',
      },
      {
        techName: 'TestFlight',
        className: 'mobile-test-flight',
      },
      {
        techName: 'OpenStreetMap',
        className: 'other-open-street-map',
      },
      {
        techName: 'PHP',
        className: 'backend-php',
      },
      {
        techName: 'Jira Assistant',
        className: 'pm-jira-assistant-blue',
      },
      {
        techName: 'Grafana',
        className: 'devops-grafana',
      },
      {
        techName: 'Sentry',
        className: 'devops-sentry-dark',
      },
    ],
    usageScenarios: [
      {
        title: 'Website, mobile <br> application',
        description: 'Offers easy-to-use interface and fast navigation for Namba Food users.',
        classList: {
          cardColor: 'background-color-red',
          uniqueСlass: 'red-card',
        },
        fileName: 'apple-iphone-xr-silver',
        fileExtension: 'png',
        alt: 'Namba Food: Food and Grocery Delivery App for Iphone.',
      },
      {
        title: 'Application for <br> deliverymen',
        description: 'Allows planning a route and quickly getting information about orders.',
        classList: {
          cardColor: 'background-color-black',
          uniqueСlass: 'black-card',
        },
        fileName: 'samsung-galaxy-s20-cosmic-gray',
        fileExtension: 'png',
        alt: 'Namba Food: Courier App for Android.',
      },
      {
        title: 'Unified control system for operators',
        description: 'Includes full control of the ordering process from order acceptance to status tracking.',
        classList: {
          cardColor: 'background-color-turquoise',
          uniqueСlass: 'turquoise-card',
        },
        fileName: 'system-for-call-center',
        fileExtension: 'png',
        alt: 'Namba Food: Admin Panel Which Help to Control and Track Food and Grocery Delivery.',
      },
      {
        title: 'Control panel for <br> managers',
        description: 'Facilitates uploading the menu and updating information about services.',
        classList: {
          cardColor: 'background-color-silver',
          uniqueСlass: 'white-card',
        },
        fileName: 'sjms-analytics-mini',
        fileExtension: 'png',
        alt: 'Namba Food: Admin Panel Which Help to Manage Food and Grocery Delivery.',
      },
    ],
    swiperAdminPanel: [
      {
        fileName: 'admin',
        pictureFolder: 'nambafood',
        fileExtension: 'jpg',
        alt: 'Namba Food: Swift microservice-based admin panel which help to control food and grocery delivery.',
      },
      {
        fileName: 'dashboard',
        pictureFolder: 'nambafood',
        fileExtension: 'jpg',
        alt: 'Namba Food Delivery Control Dashboard.',
      },
    ],
    videoIdList: ['map-video', 'iphone-silver-video'],
    isIphone: false,
    headerLogo: {
      width: 259,
      height: 82,
      pictureFolder: 'nambafood',
      fileName: 'nambafood-logo',
      alt: '',
    },
  }

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null,
      },
    }
    wrapper = mount(NambaFood, {
      stubs: ['client-only', 'nuxt-link', 'NuxtLink'],
      mocks: {
        getMediaFromS3: () => 's3 image url',
      },
    })
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

  it('v-for should render elements in DOM', () => {
    const swiperSlideElems = wrapper.findAll('.swiper-slide')
    const usageScenariosCards = wrapper.findAll('.case_usage-scenarios-card')
    const technologiesItems = wrapper.findAll('.case_technologies-item')
    const teamItems = wrapper.findAll('.case_team-item')
    expect(swiperSlideElems).toHaveLength(data.swiperAdminPanel.length * data.swiperAdminPanel.length) // У слайдера есть блок с превью изображениями, поэтому нужно удваивать цифру
    expect(usageScenariosCards).toHaveLength(data.usageScenarios.length)
    expect(technologiesItems).toHaveLength(data.technologiesList.length)
    expect(teamItems).toHaveLength(data.team.length)
  })
})
