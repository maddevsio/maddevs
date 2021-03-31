import { mount } from '@vue/test-utils'
import Kaf from '../client/pages/case-studies/kaf'

describe('kaf', () => {
  let wrapper
  const data = {
    headerLogo: {
      width: 387,
      height: 81.23,
      pictureFolder: 'kaf',
      fileName: 'kaf-logo',
      alt: '',
    },

    supportedGadgets: [
      {
        title: 'Laptops',
        width: 735,
        height: 449,
        fileName: 'macbook-pro',
        alt: 'Laptops',
        cardColor: 'purple-medium',
      },
      {
        title: 'Smartphones',
        width: 312,
        height: 627,
        fileName: 'iphonex',
        alt: 'Smartphones',
        cardColor: 'black-primary-bg',
      },
      {
        title: 'Tablets',
        width: 518,
        height: 374,
        fileName: 'ipad-pro',
        alt: 'Tablets',
        cardColor: 'purple-dark',
      },
    ],

    keyProjectMilestones: [
      {
        title: '2016',
        description:
          'A database of movies with descriptions transformed into online cinema with a basic content management functionality.',

        backgroundColor: 'purple-light',
      },
      {
        title: '2017',
        description: 'Live video streaming of popular TV channels became available.',
        backgroundColor: 'purple-primary',
      },
      {
        title: '2018',
        description: 'The project was redesigned to optimise resource consumption.',
        backgroundColor: 'purple-medium',
      },
      {
        lottieFileName: '',
        title: '2019',
        description: 'Added Video on Demand functionality.',
        backgroundColor: 'purple-dark',
      },
      {
        title: '2020',
        description:
          'User authorisation ensured a more personalised experience for each user. Custom filters, such as ‘favourites’, ‘already watched’ and ‘search’, made the service more viewer-friendly.',

        backgroundColor: 'black-primary-bg',
      },
    ],
  }

  beforeEach(() => {
    wrapper = mount(Kaf, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
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
})
