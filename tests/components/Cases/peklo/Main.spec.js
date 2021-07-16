import Main from '@/components/Cases/peklo/Main'
import { render } from '@testing-library/vue'

const stubs = ['About',
  'BenefitsFromPekloTool',
  'HowPekloToolWorks',
  'KeywordGrouping',
  'ClusterisationAlgorithm',
  'PekloToolUnderTheHood',
  'Technologies',
  'Team',
]

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
