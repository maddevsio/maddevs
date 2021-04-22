import SupportedGadgets from '@/components/Cases/yourcast/SupportedGadgets'
import { render, screen } from '@testing-library/vue'

describe('SupportedGadgets component', () => {
  it('should render correctly', () => {
    const { container } = render(SupportedGadgets, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(SupportedGadgets, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(screen.getByText(/Supported gadgets/i).className).toContain('case_title_h2')
  })
})
