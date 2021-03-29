import { render, screen } from '@testing-library/vue'
import UIParagraph from '@/components/ui/Services/UIParagraph'

const props = {
  paragraph: 'some title',
}

describe('uIParagraph component', () => {
  it('should render correctly', () => {
    const { container } = render(UIParagraph, {
      props,
    })

    expect(screen.getByText(props.paragraph)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
