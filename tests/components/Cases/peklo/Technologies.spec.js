import TechnologyStack from '@/components/Cases/peklo/Technologies'
import { render, screen } from '@testing-library/vue'

describe('Technologies component', () => {
  it('should render correctly', () => {
    const { container } = render(TechnologyStack)
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(TechnologyStack)
    expect(screen.getByText(/Technology stack/i).className).toContain('case_title_h2')
  })
})
