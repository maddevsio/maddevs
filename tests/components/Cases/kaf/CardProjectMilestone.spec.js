import CardProjectMilestone from '@/components/Cases/kaf/CardProjectMilestone'
import { render } from '@testing-library/vue'

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
})
