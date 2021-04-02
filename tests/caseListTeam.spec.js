import { mount } from '@vue/test-utils'
import ListTeam from '@/components/Cases/shared/ListTeam'

describe('list team', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ListTeam, {
      slots: {
        default: '<li>List item</li>',
      },
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('should have correct data in slot', () => {
    expect(wrapper.html()).toContain('<li>List item</li>')
  })
})
