import CareersBanner from '@/components/Banner/CareersBanner'
import { render, screen } from '@testing-library/vue'

describe('career banner', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('is a Vue instance', () => {
    const { container } = render(CareersBanner, {
      stubs: ['nuxt-link'],
    })

    expect(screen.getByText("Mad Devs'")).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
