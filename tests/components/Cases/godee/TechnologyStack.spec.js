import TechnologyStack from '@/components/Cases/godee/TechnologyStack.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

describe('TechnologyStack component', () => {
  it('should render correctly', () => {
    const { container } = render(TechnologyStack, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(TechnologyStack, {
      mocks,
    })

    expect(screen.getByText(/Technology stack/i).className).toContain('case_title_h3')
  })
})
