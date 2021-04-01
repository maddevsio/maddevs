import { mount } from '@vue/test-utils'

import TextQuoteAuthor from '@/components/Cases/TextQuoteAuthor'

describe('text quote author', () => {
  let wrapper
  const props = {
    authorName: 'Author name',
    authorPosition: 'Author position',
    pictureFolder: 'nambafood',
    fileName: 'apple-iphone-xr-silver',
    fileExtension: 'png',
    alt: 'alt',
  }

  beforeEach(() => {
    wrapper = mount(TextQuoteAuthor, {
      propsData: props,
      mocks: {
        getMediaFromS3: () => 's3 image url',
      },
      slots: {
        default: 'Main Content',
      },
    })
  })

  // ------ IMPORTANT ----- //
  it('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props)
  })

  it('should have correct content in child elements', () => {
    const authorName = wrapper.find('.case_blockquote-author__name')
    const authorPosition = wrapper.find('.case_blockquote-author__position')
    expect(authorName.text()).toEqual('Author name')
    expect(authorPosition.text()).toEqual('Author position')
  })

  it('should have correct data in slot', () => {
    expect(wrapper.html()).toContain('Main Content')
  })
})
