import About from '@/components/Cases/godee/About.vue'
import { render, screen } from '@testing-library/vue'

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(About)

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(About)

    expect(screen.getByText(/The app-based system allows/i).className).toBeTruthy()
  })
})
