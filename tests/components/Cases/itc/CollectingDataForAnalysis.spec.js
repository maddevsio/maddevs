import CollectingDataForAnalysis from '@/components/Cases/itc/CollectingDataForAnalysis'
import { render } from '@testing-library/vue'

describe('CollectingDataForAnalysis component', () => {
  it('should render correctly', () => {
    const { container } = render(CollectingDataForAnalysis)

    expect(container).toMatchSnapshot()
  })
})
