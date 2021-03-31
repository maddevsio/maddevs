import { mount } from '@vue/test-utils'

import ListTeamItem from '@/components/Cases/ListTeamItem'

describe('list team item', () => {
  let wrapper
  const props = {
    name: 'Name',
    position: 'Position',
    pictureFolder: 'nambafood',
    fileName: 'apple-iphone-xr-silver',
    fileExtension: 'png',
    alt: 'alt',
  }

  beforeEach(() => {
    wrapper = mount(ListTeamItem, {
      propsData: props,
    })
  })

  // ------ IMPORTANT ----- //
  it('is Vue\'s instance', () => {
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
