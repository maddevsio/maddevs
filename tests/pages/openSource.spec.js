import { render } from '@testing-library/vue'
import OpenSource from '@/pages/open-source'

const stubs = ['Main']

describe('OpenSource page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(OpenSource, {
      stubs,
      mocks: {
        $lazyLoad: {
          init: () => {},
        },
        featureFlag: jest.fn(),
      },
    })

    expect(container).toMatchSnapshot()
  })
})
