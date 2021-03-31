import ServicesBanner from '@/components/core/banners/ServicesBanner'
import { render, screen } from '@testing-library/vue'

describe('ServicesBanner', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(ServicesBanner, {
      stubs: ['nuxt-link', 'NuxtLink'],
    })

    expect(screen.getByText('IT Partner')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
