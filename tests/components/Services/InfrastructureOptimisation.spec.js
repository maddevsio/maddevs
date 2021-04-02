import InfrastructureOptimisation from '@/components/Services/InfrastructureOptimisation'
import { render, screen } from '@testing-library/vue'

describe('InfrastructureOptimisation', () => {
  it('should render correctly', () => {
    const { container } = render(InfrastructureOptimisation)

    expect(screen.getByTestId('test-container').className).toBe('container')
    expect(container).toMatchSnapshot()
  })
})
