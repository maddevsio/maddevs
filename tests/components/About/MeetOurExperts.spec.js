import MeetOurExperts from '@/components/About/MeetOurExperts'
import { render, screen } from '@testing-library/vue'

describe('MeetOurExperts', () => {
  it('is a Vue instance', () => {
    const { container } = render(MeetOurExperts)
    expect(screen.getByText('Meet our experts')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('correctly length of elements in DOM', () => {
    const { container } = render(MeetOurExperts)
    expect(container.querySelectorAll('.meet-our-experts__expert-item')).toHaveLength(8)
  })
})
