import { mount } from '@vue/test-utils'
import phoneHandlerMixin from '@/mixins/phoneHandlerMixin'

const INPUT_VALUE = 'zzzzz1234567890aaaa'
const OUTPUT_VALUE = '+1 2345-678-90'

describe('phone Handler Mixin', () => {
  const wrapper = mount(phoneHandlerMixin)

  it('if we pass an incorrect parameter. The function will work, but it will not make changes in the store', () => {
    expect(wrapper.vm.$data.phoneNumber).toBeNull()
    wrapper.vm.phoneChangeHandler([])
    expect(wrapper.vm.$data.phoneNumber).toBeNull()
  })

  it('should return phone without letter symbols and with mask', () => {
    expect(wrapper.vm.$data.phoneNumber).toBeNull()
    wrapper.vm.phoneChangeHandler({ target: { value: INPUT_VALUE } })
    expect(wrapper.vm.$data.phoneNumber).toBe(OUTPUT_VALUE)
  })
})
