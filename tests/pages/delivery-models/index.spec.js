import { render } from '@testing-library/vue'
import Index from '@/pages/delivery-models/index'

const stubs = ['Main']

describe('Index page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(Index, {
      stubs,
      mocks: {
        $lazyLoad: {
          init: () => {},
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
