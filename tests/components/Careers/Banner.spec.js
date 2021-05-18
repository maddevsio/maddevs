import Banner from '@/components/Careers/Banner'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('Banner component', () => {
  it('should render correctly', () => {
    const { container } = render(Banner, {
      mocks,
    })

    expect(screen.getByText('Career at Mad Devs')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
