import CardProjectMilestone from '@/components/Cases/yourcast/CardProjectMilestone'
import { render, screen } from '@testing-library/vue'

describe('CardProjectMilestone component', () => {
  const props = {
    title: '2016',
    description: 'description',
    background: 'background',
  }

  it('should render correctly', () => {
    const { container } = render(CardProjectMilestone, {
      props,
    })
    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(CardProjectMilestone, {
      props,
    })
    expect(screen.getByText(props.title).tagName).toBe('H3')
  })
})
