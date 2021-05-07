import { render, screen } from '@testing-library/vue'
import Veeqo from '@/pages/case-studies/veeqo'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
  $lazyLoad: {
    init: jest.fn(),
  },
}

const stubs = ['NuxtLink', 'Main']

describe('Veeqo root component', () => {
  it('should render correctly', () => {
    const { container } = render(Veeqo, {
      mocks,
      stubs,
    })

    expect(screen.getByText('Optimization for Veeqo')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
