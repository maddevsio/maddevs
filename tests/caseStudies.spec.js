import { mount } from '@vue/test-utils'
import CaseStudies from '@/components/core/CaseStudies'

describe('caseStudies component', () => {
  let wrapper

  beforeEach(() => {
    const $route = {
      path: '/',
    }

    global.$nuxt = {
      $route: {
        name: '/',
      },
    }

    wrapper = mount(CaseStudies, {
      mocks: {
        $route,
      },
      props: {
        type: 'index',
      },
    })
  })

  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render 4 single-projects in the project section', () => {
    const singleProjects = wrapper.findAll('.projects .single-project')
    expect(singleProjects).toHaveLength(4)
  })

  it('should have 16 projects including projects in the slider', () => {
    const sliderSingleProjects = wrapper.findAll('.single-project')
    expect(sliderSingleProjects).toHaveLength(4)
  })

  it('check that the specific images exists', () => {
    const img = wrapper.findAll('.single-project__logo')
    expect(img).toHaveLength(4)
  })
})
