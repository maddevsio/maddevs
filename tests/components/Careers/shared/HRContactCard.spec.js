import HRContactCard from '@/components/Careers/shared/HRContactCard'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

describe('HRContactCard', () => {
  it('is a Vue instance', () => {
    const { container } = render(HRContactCard, {
      mocks,
    })
    expect(container).toMatchSnapshot()
  })
})
