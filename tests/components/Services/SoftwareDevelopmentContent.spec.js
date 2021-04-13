import SoftwareDevelopmentContent from '@/components/Services/SoftwareDevelopmentContent'
import { render, screen } from '@testing-library/vue'

const props = {
  type: 'some-type',
  title: 'some-title',
  subtitle: 'sub-title',
  paragraphs: ['first', 'second'],
  icons: [],
}

describe('SoftwareDevelopmentContent component', () => {
  it('should render correctly', () => {
    const { container } = render(SoftwareDevelopmentContent, {
      props,
      stubs: ['ClientOnly'],
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct render title', () => {
    render(SoftwareDevelopmentContent, {
      props,
      stubs: ['ClientOnly'],
    })

    expect(screen.getAllByText(props.title)).toBeTruthy()
    expect(screen.getAllByTestId('test-paragraph')).toHaveLength(props.paragraphs.length)
  })
})
