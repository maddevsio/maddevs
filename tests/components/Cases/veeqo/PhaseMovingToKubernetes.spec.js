import PhaseMovingToKubernetes from '@/components/Cases/veeqo/PhaseMovingToKubernetes'
import { render } from '@testing-library/vue'

describe('PhaseMovingToKubernetes component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseMovingToKubernetes)

    expect(container).toMatchSnapshot()
  })
})
