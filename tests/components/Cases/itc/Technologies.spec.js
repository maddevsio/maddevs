import Technologies from '@/components/Cases/itc/Technologies'
import { render, screen } from '@testing-library/vue'

const stubs = ['ListTechnologies', 'ListTechnologiesItem']

describe('Technologies component', () => {
  it('should render correctly', () => {
    const { container } = render(Technologies, {
      stubs,
    })

    expect(screen.getByText('Technology stack')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
