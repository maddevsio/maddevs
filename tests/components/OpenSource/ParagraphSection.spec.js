import ParagraphSection from '@/components/OpenSource/ParagraphSection'
import { render } from '@testing-library/vue'

describe('ParagraphSection component', () => {
  it('should render correctly', () => {
    const { container } = render(ParagraphSection)

    expect(container).toMatchSnapshot()
  })
})
