import HRContactCard from '@/components/Careers/shared/HRContactCard'
import { render } from '@testing-library/vue'

describe('HRContactCard', () => {
  it('is a Vue instance', () => {
    const { container } = render(HRContactCard)
    expect(container).toMatchSnapshot()
  })
})
