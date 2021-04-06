import About from '@/components/Cases/nambafood/About.vue'
import { render, screen } from '@testing-library/vue'

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About)

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(About)

    expect(screen.getByText(/Mad Devs developed the Namba Food delivery/i).className).toBeTruthy()
  })
})
