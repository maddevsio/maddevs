import Mvp from '@/components/Cases/godee/Mvp.vue'
import { render, screen } from '@testing-library/vue'

describe('Mvp component', () => {
  it('should render correctly', () => {
    const { container } = render(Mvp, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
      stubs: ['nuxt-link', 'NuxtLink'],
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', () => {
    render(Mvp, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
      stubs: ['nuxt-link', 'NuxtLink'],
    })

    expect(screen.getByText(/Minimum viable product MVP/i).className).toContain('case_title_h3')
  })
})
