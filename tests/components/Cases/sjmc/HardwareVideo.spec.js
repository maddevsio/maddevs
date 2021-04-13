import HardwareVideo from '@/components/Cases/sjmc/HardwareVideo.vue'
import { render } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'
import '../../../__mocks__/htmlMediaElement'

const mocks = {
  getMediaFromS3: image => image,
}

describe('HardwareVideo component', () => {
  it('should render correctly', () => {
    const { container } = render(HardwareVideo, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
