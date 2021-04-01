import { mount } from '@vue/test-utils'
import CardProjectMilestone from '@/components/Cases/kaf/CardProjectMilestone'

describe('card project milestone', () => {
  let wrapper
  const props = {
    title: '2016',
    description: 'description',
    background: 'background',
  }

  beforeEach(() => {
    wrapper = mount(CardProjectMilestone, {
      propsData: props,
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // ---------
})
