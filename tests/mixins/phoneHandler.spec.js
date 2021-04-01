import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuelidate from 'vuelidate'
import ModalContactMe from '@/components/core/modals/ModalContactMe'
import phoneHandlerMixin from '@/mixins/phoneHandlerMixin'

const localVue = createLocalVue()

localVue.use(Vuelidate)

const INPUT_VALUE = 'zzzzz1234567890aaaa'
const OUTPUT_VALUE = '+1 2345-678-90'

describe('Phone Handler Mixin', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ModalContactMe, {
      localVue,
      mixins: [phoneHandlerMixin],
      mocks: {
        $nuxt: {
          $emit: jest.fn(),
          $on: jest.fn(),
        },
      },
    })
  })

  it('if we pass an incorrect parameter. The function will work, but it will not make changes in the store', () => {
    expect(wrapper.vm.$data.phoneNumber).toBeNull()
    wrapper.vm.phoneChangeHandler([])
    expect(wrapper.vm.$data.phoneNumber).toBeNull()
  })

  it('Should return phone without letter symbols and with mask', () => {
    expect(wrapper.vm.$data.phoneNumber).toBeNull()
    wrapper.vm.phoneChangeHandler({ target: { value: INPUT_VALUE } })
    expect(wrapper.vm.$data.phoneNumber).toBe(OUTPUT_VALUE)
  })

  it('If the value is less than two, then there will be no plus symbol', () => {
    wrapper.vm.phoneChangeHandler({ target: { value: '1' } })
    expect(wrapper.vm.$data.phoneNumber).toBe('1')
  })

  it('If the value is less than six, then there will be no hyphen symbol', () => {
    wrapper.vm.phoneChangeHandler({ target: { value: '1111' } })
    expect(wrapper.vm.$data.phoneNumber).toBe('+1 111')
  })

  it('If the value is less than nine, then there will be only one hyphen symbol', () => {
    wrapper.vm.phoneChangeHandler({ target: { value: '1111111' } })
    expect(wrapper.vm.$data.phoneNumber).toBe('+1 1111-11')
  })

  it('If we input very long value, then will stop updating at 27 characters', () => {
    wrapper.vm.phoneChangeHandler({ target: { value: '12345678901234567890123456789012345678901234567890' } })
    expect(wrapper.vm.$data.phoneNumber).toBe('+1 2345-678-9012-345678901234567')
  })
})
