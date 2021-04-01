import AboutBanner from '@/components/core/banners/AboutBanner'
import { render, screen } from '@testing-library/vue'

describe('AboutBanner', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(AboutBanner, {
      stubs: ['nuxt-link', 'NuxtLink'],
    })

    expect(screen.getByText('Mad Devs')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
