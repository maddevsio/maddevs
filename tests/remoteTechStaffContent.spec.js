import { mount } from '@vue/test-utils'
import RemoteTechStaffContent from '@/components/Services/RemoteTechStaffContent'

describe('remote tech staff content', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(RemoteTechStaffContent, {
      propsData: {
        title: 'Title',
        subtitle: 'Sub title',
        paragraph: 'Paragraph',
        buttonLabel: 'Button inner text',
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

  it('correctly props data', () => {
    expect(wrapper.props().title).toBe('Title')
    expect(wrapper.props().subtitle).toBe('Sub title')
    expect(wrapper.props().paragraph).toBe('Paragraph')
    expect(wrapper.props().buttonLabel).toBe('Button inner text')
  })
})
