import DevelopmentGoals from '@/components/Cases/godee/DevelopmentGoals.vue'
import { render, screen } from '@testing-library/vue'

const cont = document.createElement('div')
cont.setAttribute('id', 'case-scroll-container')
cont.setAttribute('data-testid', 'test-container')

describe('DevelopmentGoals component', () => {
  it('should render correctly', () => {
    const { container } = render(DevelopmentGoals, {
      container: document.body.appendChild(cont),
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(DevelopmentGoals, {
      container: document.body.appendChild(cont),
    })

    expect(screen.getByText(/Development goals/i).className).toBeTruthy()
  })
})
