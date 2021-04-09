import ProjectsBanner from '@/components/core/banners/ProjectsBanner'
import { render, screen } from '@testing-library/vue'

describe('ProjectsBanner', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  it('should render correctly', () => {
    const { container } = render(ProjectsBanner, {
      stubs: ['NuxtLink'],
    })

    expect(screen.getByText('Check out our')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
