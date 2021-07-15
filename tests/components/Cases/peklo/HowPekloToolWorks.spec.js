import HowPekloToolWorks from '@/components/Cases/peklo/HowPekloToolWorks'
import { render } from '@testing-library/vue'

describe('HowPekloToolWorks component', () => {
  it('should render correctly', () => {
    const { container } = render(HowPekloToolWorks, {
      mocks: {
        $getMediaFromS3: () => 's3 image url',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
