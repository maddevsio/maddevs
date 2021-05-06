import PhaseElasticsearch from '@/components/Cases/veeqo/PhaseElasticsearch'
import { render, screen } from '@testing-library/vue'

describe('PhaseElasticsearch component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseElasticsearch)

    expect(screen.getByText('Phase 3: Elasticsearch')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
