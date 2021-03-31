import { mount } from '@vue/test-utils'
import PlansForSimilarProjects from '../client/components/Cases/Kaf/PlansForSimilarProjects'

describe('plans for similar projects', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PlansForSimilarProjects)
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //
})
