import AboutKaf from '@/components/Cases/kaf/AboutKaf'
import { render, screen } from '@testing-library/vue'

describe('AboutKaf component', () => {
  it('should render correctly', () => {
    const { container } = render(AboutKaf)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(AboutKaf)
    expect(screen.getByText(/OTT-like video streaming platform & online cinema/i).className).toContain('case_title_h2')
  })
})
