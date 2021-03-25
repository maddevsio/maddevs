import { mount } from '@vue/test-utils'

import ContributionWidget from '@/components/About/ContributionWidget'

describe('contributionWidget component', () => {
  let wrapper
  const props = {
    projectName: 'nambafood',
    contribution: 'contribution text',
    maddevsLogo: 'md-logo-black',
  }

  beforeEach(() => {
    wrapper = mount(ContributionWidget, {
      propsData: props,
    })
  })

  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('span should contain props text', () => {
    const span = wrapper.findAll('.contribution-widget__content').at(0)
    expect(span.text()).toEqual(`contribution: ${props.contribution}`)
  })

  it('span should contain projectName in class', () => {
    const span = wrapper.findAll('.contribution-widget__content').at(0)
    expect(span.classes()).toContain('contribution-widget__content_nambafood')
  })
})
