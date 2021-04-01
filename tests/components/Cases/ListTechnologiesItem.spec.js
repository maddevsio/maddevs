import ListTechnologiesItem from '@/components/Cases/ListTechnologiesItem'
import { render } from '@testing-library/vue'

describe('ListTechnologiesItem components', () => {
  const props = {
    techName: 'techName',
    className: 'iconClassName',
  }

  it('should render correctly', () => {
    const { container } = render(ListTechnologiesItem, {
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
