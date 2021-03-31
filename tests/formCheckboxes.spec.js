import { mount } from '@vue/test-utils'
import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'

describe('form checkboxes', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UIFormCheckboxes, {
      propsData: {
        id: 'input id',
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

  it('emits called with arguments', () => {
    const firstCheckbox = {
      target: {
        checked: true,
      },
    }

    const secondCheckbox = {
      target: {
        checked: false,
      },
    }

    wrapper.vm.handleChange(firstCheckbox)
    wrapper.vm.handleChange(secondCheckbox)
    expect(wrapper.emitted()).toBeTruthy()
  })

  it('correctly props data', () => {
    expect(wrapper.props().id).toBe('input id')
  })
})
