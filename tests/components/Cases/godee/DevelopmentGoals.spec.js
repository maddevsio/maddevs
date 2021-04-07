import DevelopmentGoals from '@/components/Cases/godee/DevelopmentGoals.vue'
import { render, screen } from '@testing-library/vue'

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')

describe('DevelopmentGoals component', () => {
  it('should render correctly', () => {
    const { container } = render(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(DevelopmentGoals, {
      container: document.body.appendChild(containerToRender),
    })

    expect(screen.getByText(/Development goals/i).className).toBeTruthy()
  })
})
