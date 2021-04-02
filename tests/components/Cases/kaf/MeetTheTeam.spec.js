import MeetTheTeam from '@/components/Cases/kaf/MeetTheTeam'
import { render } from '@testing-library/vue'

describe('MeetTheTeam component', () => {
  it('should render correctly', () => {
    const { container } = render(MeetTheTeam)
    expect(container).toMatchSnapshot()
  })
})
