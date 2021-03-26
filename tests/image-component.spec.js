import { mount } from '@vue/test-utils'

import ImageComponent from '@/components/ui/image-component'

describe('webp image component', () => {
  let wrapper
  const props = {
    fileName: 'Marat',
    fileNameRetina: 'Marat@2x',
  }

  beforeEach(() => {
    wrapper = mount(ImageComponent, {
      propsData: props,
    })
  })

  // ------ IMPORTANT ----- //
  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('correctly props data', () => {
    expect(wrapper.props().fileName).toBe(props.fileName)
    expect(wrapper.props().fileNameRetina).toBe(props.fileNameRetina)
  })

  it('has class if sectionIsRequired equal true', () => {
    expect(wrapper.find('picture')).toBeTruthy()
  })
})
