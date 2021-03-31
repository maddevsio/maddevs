import CareersBanner from '@/components/core/banners/CareersBanner'
import { render, screen } from '@testing-library/vue'

describe('CareersBanner', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    render(CareersBanner, {
      stubs: ['nuxt-link', 'NuxtLink'],
    })

    expect(screen.getByText("Mad Devs'")).not.toBeNull()
    // expect(container).toMatchSnapshot()
  })
})
