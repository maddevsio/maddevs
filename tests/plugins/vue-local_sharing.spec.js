import { shallowMount } from '@vue/test-utils'
import flag from '@/plugins/vue-social-sharing'

describe('vue-social-sharing function', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(flag)
    expect(wrapper.element).toMatchSnapshot()
  })
})
