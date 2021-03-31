import { mount } from '@vue/test-utils'
import CardProjectMilestone from '@/components/Cases/Kaf/CardProjectMilestone'

describe('card project milestone', () => {
  let wrapper
  const props = {
    projectMilestone: {
      title: '2016',
      description: 'description',
      backgroundColor: 'backgroundColor',
    },
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
