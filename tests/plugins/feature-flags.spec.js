import { shallowMount } from '@vue/test-utils'
import flag from '@/plugins/feature-flags'

describe('feature flag function', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(flag)
    expect(wrapper.element).toMatchSnapshot()
  })
})
