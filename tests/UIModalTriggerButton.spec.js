import { mount } from '@vue/test-utils'
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'

describe('ui button modal trigger', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UIModalTriggerButton, {
      propsData: {
        color: 'red',
      },
      slots: {
        default: 'Some button name',
      },
      mocks: {
        $modal: {
          show: jest.fn(),
        },
        $nuxt: {
          $emit: jest.fn(),
        },
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

  it('sets the correctly button name and contains new class --red', () => {
    const button = wrapper.find('.ui-button-modal-trigger')
    expect(button.text()).toBe('Label')
    expect(button.classes()).toContain('ui-button-modal-trigger--red')
  })
})
