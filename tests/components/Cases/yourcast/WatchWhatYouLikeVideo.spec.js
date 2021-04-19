import { render } from '@testing-library/vue'
import WatchWhatYouLikeVideo from '../../../../client/components/Cases/yourcast/WatchWhatYouLikeVideo'

describe('WatchWhatYouLikeVideo component', () => {
  it('should render correctly', () => {
    const { container } = render(WatchWhatYouLikeVideo, {
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })
})
