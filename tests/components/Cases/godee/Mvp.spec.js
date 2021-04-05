import Mvp from '@/components/Cases/godee/Mvp.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

describe('Mvp component', () => {
  it('should render correctly', () => {
    const { container } = render(Mvp, {
      mocks,
      stubs: ['NuxtLink'],
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display title', () => {
    render(Mvp, {
      mocks,
      stubs: ['NuxtLink'],
    })

    expect(screen.getByText(/Minimum viable product MVP/i).className).toContain('case_title_h3')
  })
})
