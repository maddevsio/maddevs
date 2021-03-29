import ServicesBanner from '@/components/Banner/ServicesBanner'
import { render, screen } from '@testing-library/vue'

describe('services banner', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('is a Vue instance', () => {
    const { container } = render(ServicesBanner, {
      stubs: ['nuxt-link'],
    })

    expect(screen.getByText('IT Partner')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
