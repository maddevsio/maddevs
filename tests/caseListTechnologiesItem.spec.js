import { mount } from '@vue/test-utils'

import ListTechnologiesItem from '@/components/Cases/shared/ListTechnologiesItem'

describe('list technologies item', () => {
  let wrapper
  const props = {
    name: 'techName',
    className: 'iconClassName',
  }

  beforeEach(() => {
    wrapper = mount(ListTechnologiesItem, {
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

  it('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props)
  })

  it('should have correct content in child elements', () => {
    const itemTechName = wrapper.find('.case_technologies-item__tech-name')
    const itemTechIcon = wrapper.find('.case_technologies-item__tech-icon')
    expect(itemTechName.text()).toEqual(props.name)
    expect(itemTechIcon.classes()).toContain(props.className)
  })
})
