import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import LearnCard from '@/components/Ebook/LearnCard'

describe('LearnCard component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(LearnCard)
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
