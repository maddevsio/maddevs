import HighLevelOverview from '@/components/Cases/veeqo/HighLevelOverview'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('HighLevelOverview component', () => {
  it('should render correctly', () => {
    const { container } = render(HighLevelOverview, {
      mocks,
    })

    expect(screen.getByText('Veeqo high-level overview')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
