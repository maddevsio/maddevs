import PhaseElasticsearchResult from '@/components/Cases/veeqo/PhaseElasticsearchResult'
import { render, screen } from '@testing-library/vue'

describe('PhaseElasticsearchResult component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseElasticsearchResult)

    expect(screen.getByText('Result')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
