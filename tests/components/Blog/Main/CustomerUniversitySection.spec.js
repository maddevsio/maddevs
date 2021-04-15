import { render } from '@testing-library/vue'
import CustomerUniversitySection from '@/components/Blog/Main/CustomerUniversitySection'
import mockedStore from '../../../__mocks__/store'

describe('customer University section component', () => {
  const store = mockedStore

  it('is a Vue instance', () => {
    const { container } = render(CustomerUniversitySection, {
      stubs: ['PrismicImage'],
      mocks: {
        $prismic: {
          asText: () => '',
        },
      },
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
