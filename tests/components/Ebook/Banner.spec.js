import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import Banner from '@/components/Ebook/Banner'

describe('Banner component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Banner)
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
