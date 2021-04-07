import CardProjectMilestone from '@/components/Cases/yourcast/CardProjectMilestone'
import { fireEvent, render, screen } from '@testing-library/vue'

describe('CardProjectMilestone component', () => {
  const props = {
    title: '2016',
    description: 'description',
    background: 'background',
  }

  it('should render correctly', async () => {
    const { container } = render(CardProjectMilestone, {
      props,
    })

    const element = await screen.getByTestId('test-card-project-milestone')
    await fireEvent.mouseOver(element)
    await fireEvent.mouseOut(element)

    expect(container).toMatchSnapshot()
  })

  it('title should include classname', () => {
    render(CardProjectMilestone, {
      props,
    })
    expect(screen.getByText(props.title).tagName).toBe('H4')
  })
})
