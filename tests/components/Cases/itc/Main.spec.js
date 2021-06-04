import Main from '@/components/Cases/itc/Main'
import { render } from '@testing-library/vue'

const stubs = ['About', 'ProjectMission', 'Challenges', 'SavingTime', 'CollectingDataForAnalysis', 'DevelopingTheInnovation', 'Technologies', 'Team', 'FuturePlans', 'Partnership']

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
