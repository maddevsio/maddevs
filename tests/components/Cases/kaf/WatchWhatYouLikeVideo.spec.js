import { render } from '@testing-library/vue'
import WatchWhatYouLikeVideo from '../../../../client/components/Cases/kaf/WatchWhatYouLikeVideo'

describe('WatchWhatYouLikeVideo component', () => {
  it('should render correctly', () => {
    const { container } = render(WatchWhatYouLikeVideo)
    expect(container).toMatchSnapshot()
  })
})
