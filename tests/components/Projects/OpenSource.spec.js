import OpenSource from '@/components/Projects/OpenSource'
import { render, screen } from '@testing-library/vue'

describe('CaseStudies component', () => {
  it('should render correctly', () => {
    const { container } = render(OpenSource)

    expect(screen.queryByText('Our code - available in open source - is used by many other companies.')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
