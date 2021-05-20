import KeyMetrics from '@/components/Careers/KeyMetrics'
import { render, screen } from '@testing-library/vue'

const props = {
  title: '70+',
  description: 'open-source projects on GitHub',
}

describe('KeyMetrics component', () => {
  it('should render correctly', () => {
    const { container } = render(KeyMetrics, {
      props,
    })

    expect(screen.getByText(props.title)).not.toBeNull()
    expect(screen.getByText(props.description)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
