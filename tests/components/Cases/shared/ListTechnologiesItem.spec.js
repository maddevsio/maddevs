import ListTechnologiesItem from '@/components/Cases/shared/ListTechnologiesItem'
import { render, screen } from '@testing-library/vue'

describe('ListTechnologiesItem components', () => {
  const props = {
    name: 'techName',
    className: 'iconClassName',
  }

  it('should render correctly', () => {
    const { container } = render(ListTechnologiesItem, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render name property', () => {
    render(ListTechnologiesItem, {
      props,
    })

    expect(screen.getByText(props.name).tagName).toBe('P')
  })
})
