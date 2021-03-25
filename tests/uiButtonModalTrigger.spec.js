import { mount } from '@vue/test-utils'
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger'

describe('ui button modal trigger', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(UIButtonModalTrigger, {
      propsData: {
        buttonInnerText: 'Some button name',
        modalWindowName: 'Some modal window name',
        isRed: true,
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
    expect(button.text()).toBe('Some button name')
    expect(button.classes()).toContain('ui-button-modal-trigger--red')
  })
})
