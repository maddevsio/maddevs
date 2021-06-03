import DevelopingTheInnovation from '@/components/Cases/itc/DevelopingTheInnovation'
import { render } from '@testing-library/vue'

const stubs = ['Lottie']

describe('DevelopingTheInnovation component', () => {
  it('should render correctly', () => {
    const { container } = render(DevelopingTheInnovation, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
