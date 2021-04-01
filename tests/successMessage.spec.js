import { mount } from '@vue/test-utils'

import ModalSuccess from '@/components/core/modals/ModalSuccess'

describe('success message', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ModalSuccess)
  })

  it('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
