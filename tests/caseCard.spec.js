import { mount } from '@vue/test-utils'

import Card from '@/components/Cases/Card.vue'

describe('card component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Card, {
      propsData: {
        padding: '16px',
      },
      slots: {
        default: 'Main Content',
      },
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
    expect(wrapper.props('padding')).toEqual('16px')
  })

  it('should have correct style', () => {
    const card = wrapper.find('.case_card')
    expect(card.element.style.getPropertyValue('padding')).toEqual('16px')
  })

  it('should have correct data in slot', () => {
    expect(wrapper.html()).toContain('Main Content')
  })
})
