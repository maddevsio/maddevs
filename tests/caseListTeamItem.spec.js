import { mount } from '@vue/test-utils'

import ListTeamItem from '@/components/Cases/shared/ListTeamItem'

describe('list team item', () => {
  let wrapper
  const props = {
    name: 'Name',
    position: 'Position',
    image: {
      folder: 'nambafood',
      file: 'apple-iphone-xr-silver',
      extension: 'png',
    },
  }

  beforeEach(() => {
    wrapper = mount(ListTeamItem, {
      propsData: props,
    })
  })

  // ------ IMPORTANT ----- //
  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props)
  })

  it('should have correct content in child elements', () => {
    const teamItemName = wrapper.find('.case_team-item__name')
    const teamItemPosition = wrapper.find('.case_team-item__position')
    expect(teamItemName.text()).toEqual('Name')
    expect(teamItemPosition.text()).toEqual('Position')
  })
})
