import CardTechSolution from '@/components/Cases/veeqo/CardTechSolution'
import { render, screen } from '@testing-library/vue'

describe('CardTechSolution component', () => {
  const props = {
    icon: 'gear',
    description: 'Adding PgBouncers to reduce the load on the database.',
  }

  it('should render correctly', () => {
    const { container } = render(CardTechSolution, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText(props.description)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
