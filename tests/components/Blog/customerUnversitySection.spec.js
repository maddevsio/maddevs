import { render } from '@testing-library/vue'
import CustomerUniversitySection from '../../../client/components/Blog/CustomerUniversitySection'

describe('customer University section component', () => {
  it('is a Vue instance', () => {
    const { container } = render(CustomerUniversitySection, {
      stubs: ['prismic-image'],
      mocks: {
        $prismic: {
          asText: () => '',
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
