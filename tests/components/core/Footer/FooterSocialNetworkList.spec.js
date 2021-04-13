import FooterSocialNetworks from '@/components/core/Footer/FooterSocialNetworks'
import { render } from '@testing-library/vue'

describe('FooterSocialNetworks component', () => {
  it('should render correctly', () => {
    const { container } = render(FooterSocialNetworks)

    expect(container).toMatchSnapshot()
  })
})
