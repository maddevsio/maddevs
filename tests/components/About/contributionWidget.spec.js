import { render, screen } from '@testing-library/vue'
import ContributionWidget from '@/components/About/ContributionWidget'

describe('contributionWidget component', () => {
  const props = {
    projectName: 'nambafood',
    contribution: 'contribution text',
    maddevsLogo: 'md-logo-black',
  }

  it("is Vue's instance and renders correctly", () => {
    const { container } = render(ContributionWidget, {
      props,
    })

    expect(screen.getByText(`contribution: ${props.contribution}`)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('span should contain projectName in class', () => {
    const { container } = render(ContributionWidget, {
      props,
    })

    expect(container.outerHTML).toContain('contribution-widget__content_nambafood')
  })
})
