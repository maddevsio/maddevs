import { mount } from '@vue/test-utils'

import SuccessModal from '@/components/Modals/success-message'

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

  it('should call close emit twice', () => {
    expect(wrapper.emitted().close).toBeFalsy()
    wrapper.vm.close()
    expect(wrapper.emitted().close).toHaveLength(1)
    wrapper.vm.$emit('close')
    expect(wrapper.emitted().close).toBeTruthy()
    expect(wrapper.emitted().close).toHaveLength(2)
  })
})
