import PekloToolUnderTheHood from '@/components/Cases/peklo/PekloToolUnderTheHood'
import { render } from '@testing-library/vue'

describe('PekloToolUnderTheHood component', () => {
  it('should render correctly', () => {
    const { container } = render(PekloToolUnderTheHood, {
      mocks: {
        $getMediaFromS3: () => 's3 image url',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
