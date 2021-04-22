import NationwideSuccess from '@/components/Cases/nambafood/NationwideSuccess.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('NationwideSuccess component', () => {
  it('should render correctly', () => {
    const { container } = render(NationwideSuccess, {
      mocks,
      stubs: ['NuxtLink'],
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(NationwideSuccess, {
      mocks,
      stubs: ['NuxtLink'],
    })

    expect(screen.getByText(/Nationwide success and day-to-day improvements/i).className).toContain('case_title_h2')
  })
})
