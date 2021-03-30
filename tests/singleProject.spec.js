import { mount } from '@vue/test-utils'

import SingleProject from '@/components/core/SingleProject'

describe('caseStudies component', () => {
  let wrapper
  let props = {
    name: 'godee',
    logo: 'godee-icon',
    logoWidth: 121,
    mdLogo: 'md-logo-black',
    link: '/case-studies/godee/',
    isBlank: false,
    background: 'godeeBackground',
    extension: 'png',
    color: '#ff6A01',
    title: 'Convenient shuttle bus service',
    description:
      'Mad Devs helped GoDee with developing feature-rich software to re-invent public mobility by building new smart ways of a daily commute.',
    contribution: 'Backend, Infrastructure, Mobile Apps',
    alt: 'GoDee Bus Transportation Services Logo.',
  }

  beforeEach(() => {
    wrapper = mount(SingleProject, {
      propsData: props,
    })
  })

  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('.single-project__container should contain single-project_white-letters-theme class if colorTheme computed value will be true', () => {
    props = {
      ...props,
      name: 'sjmc',
    }

    wrapper = mount(SingleProject, {
      propsData: props,
    })

    const container = wrapper.findAll('.single-project__container').at(0)
    expect(container.classes()).toContain('single-project_white-letters-theme')
  })

  it('.single-project__container should not contain single-project_white-letters-theme class if colorTheme computed value will be false', () => {
    props = {
      ...props,
      name: 'nambafood',
    }

    wrapper = mount(SingleProject, {
      propsData: props,
    })

    const container = wrapper.findAll('.single-project__container').at(0)
    expect(container.classes()).not.toContain('single-project_white-letters-theme')
  })

  it('shoud pass correct props', () => {
    expect(wrapper.props()).toStrictEqual(props)
  })

  it('shoud add single-project__background_guardrails class to .single-project__background if projectName will be guardrails', () => {
    props = {
      ...props,
      name: 'guardrails',
    }

    wrapper = mount(SingleProject, {
      propsData: props,
    })
    const background = wrapper.findAll('.single-project__background').at(0)
    expect(background.classes()).toContain('single-project__background_guardrails')
  })

  it('should not add class for card if projectName not equal guardrails', () => {
    props = {
      ...props,
      name: 'godee',
    }

    wrapper = mount(SingleProject, {
      propsData: props,
    })

    const background = wrapper.findAll('.single-project__background').at(0)
    expect(background.classes()).not.toContain('single-project__background_guardrails')
  })
})
