import PhaseElasticsearchResult from '@/components/Cases/veeqo/PhaseElasticsearchResult'
import { render } from '@testing-library/vue'

describe('PhaseElasticsearchResult component', () => {
  it('should render correctly', () => {
    const { container } = render(PhaseElasticsearchResult)

    expect(container).toMatchSnapshot()
  })
})
