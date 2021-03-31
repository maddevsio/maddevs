import AboutBanner from '@/components/Banner/AboutBanner'
import { render, screen } from '@testing-library/vue'

describe('about banner', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('is a Vue instance', () => {
    const { container } = render(AboutBanner, {
      stubs: ['nuxt-link'],
    })

    expect(screen.getByText('Mad Devs')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
