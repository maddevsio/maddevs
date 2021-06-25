import { render } from '@testing-library/vue'
import UID from '@/pages/delivery-models/_uid'

const stubs = ['Model']

describe('UID page', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(UID, {
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
