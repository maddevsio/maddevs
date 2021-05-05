import PhaseElasticsearch from '@/components/Cases/veeqo/PhaseElasticsearch'
import { render } from '@testing-library/vue'

describe('PhaseElasticsearch component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseElasticsearch)

    expect(container).toMatchSnapshot()
  })
})
