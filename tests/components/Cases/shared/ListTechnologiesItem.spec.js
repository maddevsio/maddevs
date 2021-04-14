import ListTechnologiesItem from '@/components/Cases/shared/ListTechnologiesItem'
import { render } from '@testing-library/vue'

describe('ListTechnologiesItem components', () => {
  it('should render correctly', () => {
    const { container } = render(ListTechnologiesItem)

    expect(container).toMatchSnapshot()
  })
})
