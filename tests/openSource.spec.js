import { mount } from '@vue/test-utils'
import OpenSource from '@/components/Projects/OpenSource'

describe('caseStudies component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(OpenSource)
  })

  it('is Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render 6 .open-source__project', () => {
    const project = wrapper.findAll('.open-source__project')
    expect(project).toHaveLength(6)
  })
})
