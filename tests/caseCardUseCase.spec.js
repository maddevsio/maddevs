import { mount } from '@vue/test-utils'
import CardUseCase from '@/components/Cases/nambafood/cards/CardUseCase'

describe('cardUseCase', () => {
  let wrapper
  const props = {
    title: 'Web-site, mobile application',
    description: 'Easy-to-use interface and fast navigation for Namba Food users.',
    classList: {
      uniqueСlass: 'red-card',
    },
    fileName: 'apple-iphone-xr-silver',
    fileExtension: 'png',
    pictureFolder: '',
    alt: '',
  }

  beforeEach(() => {
    wrapper = mount(CardUseCase, {
      propsData: props,
      stubs: ['client-only'],
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

  it('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props)
  })

  it('child elements have props data', () => {
    const title = wrapper.find('.card-use-case__title')
    const descriptionWrapper = wrapper.find('.card-use-case__description-wrapper')
    const paragraph = wrapper.find('.card-use-case__paragraph')
    const desktopPicture = wrapper.find('.card-use-case__desktop-picture')
    const mobilePicture = wrapper.find('.card-use-case__mobile-picture')
    expect(title.text()).toEqual('Web-site, mobile application')
    expect(title.classes()).toContain('card-use-case__red-card-title')
    expect(paragraph.text()).toEqual('Easy-to-use interface and fast navigation for Namba Food users.')
    expect(paragraph.classes()).toContain('card-use-case__red-card-paragraph')
    expect(descriptionWrapper.classes()).toContain('card-use-case__red-card-description-wrapper')
    expect(desktopPicture.classes()).toContain('card-use-case__red-card-picture')
    expect(mobilePicture.classes()).toContain('card-use-case__red-card-mobile-picture')
  })
})
