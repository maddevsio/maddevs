import Technologies from '@/components/Cases/nambafood/Technologies.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Technologies component', () => {
  it('should render correctly', () => {
    const { container } = render(Technologies, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Technologies, {
      mocks,
    })

    expect(screen.getByText(/Technologies used for the Namba Food project/i).className).toContain('case_title_h3')
  })
})
