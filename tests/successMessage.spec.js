import { mount } from '@vue/test-utils'

import SuccessModal from '@/components/core/modals/Success'

describe('success message', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SuccessModal)
  })

  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
