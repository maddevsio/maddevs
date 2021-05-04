import { shallowMount } from '@vue/test-utils'
import vuelidate from '@/plugins/vuelidate'

describe('vue-social-sharing function', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(vuelidate)
    expect(wrapper.element).toMatchSnapshot()
  })
})
